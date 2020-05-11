import React from 'react';
import Config from '../Config'
//having issues getting pictures to fetch properly with the data

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
                                    {pepper.name} <img className="strain-img" alt="(fix meee)" src={pepper.image}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

export default Crazy