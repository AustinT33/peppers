import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../Config'
import Back from '../Pictures/back-arrow.png'

class Hybrid extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null,
            peppers:[],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch(`${Config.API_ENDPOINT}/hybrid_peppers`)
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        peppers: data
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, peppers } = this.state;
        if (error) {
            return <div className="error">{error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loading">Loading...</div>;
        } else {
            return (
                <div className="container">
                <div className="title-container">
                    <Link className="back" to="/"><img className="back-arrow" src={Back} alt="back"/></Link>
                    <h2 className="pepper-title">Hybrid Peppers (Not Yet Available)</h2>
                </div>
                    <div className="pepper-container">
                        {/* <ul className="peppers-ul">
                            {peppers.map(pepper => (
                                <li className="peppers-li" key={pepper.name}>
                                    <img className="strain-img" alt={pepper.name} src={pepper.image}/><br/><div className="pepper-title">{pepper.name}</div>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            );
        }
    }
}

export default Hybrid