import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../Config'

class Crazy extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null,
            peppers:[],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch(`${Config.API_ENDPOINT}/crazy_peppers`)
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
                <h2 className="pepper-title">Crazy Hot Peppers</h2>
                    <div className="pepper-container">
                        <ul className="peppers-ul">
                            {peppers.map(pepper => (
                                <li className="peppers-li" key={pepper.name}>
                                    <img className="strain-img" alt={pepper.name} src={pepper.image}/><br/>{pepper.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                <Link className="back" to="/">Back</Link>
                </div>
            );
        }
    }
}

export default Crazy