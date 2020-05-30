import React from 'react';
import Config from '../Config';
import Back from '../Pictures/back-arrow.png';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';

class Sweet extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      peppers: [],
      specificPepper:[],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      `${Config.API_ENDPOINT}/sweet_peppers`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            peppers: data,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

//     fetchId() {
//         fetch(
//         `${Config.API_ENDPOINT}/peppers/${id}`
//         )
//         .then((res) => res.json())
//         .then(
//             (pepId) => {
//             this.setState({
//                 specificPepper: pepId,
//             });
//             },
//             (error) => {
//             this.setState({
//                 error,
//             });
//             }
//         )
//   }

  render() {
    const {
      error,
      isLoaded,
      peppers,
    } = this.state;
    if (error) {
      return (
        <div className="error">
          {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="loading">
          Loading...
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="title-container">
            <Link
              className="back"
              to="/"
            >
              <img
                className="back-arrow"
                src={Back}
                alt="back"
              />
            </Link>
            <h2 className="pepper-header">
              Sweet Peppers
            </h2>
          </div>
          <div className="pepper-container">
            <ul className="peppers-ul">
              {peppers.map((pepper) => (
                <li
                  className="peppers-li"
                  key={pepper.name}
                >
                  <img
                    className="strain-img"
                    alt={pepper.name}
                    src={pepper.image}
                  />
                  <br />
                  <div className="pepper-title">
                    {pepper.name}
                    <br />
                    <div className="view-opts">
                      <Modal
                        buttonText={
                          'Quick View'
                        }
                        modalId={
                          pepper.id
                        }
                        render={() => (
                          <>
                            <img
                                className="quick-view-img"
                                alt={pepper.name}
                                src={pepper.image}
                            />
                            <div className="quick-view-name">{pepper.name}</div>
                            <div className="quick-view-description">{pepper.description}</div>
                            <button className="future-link">View More Button(takes you to main view)</button>
                          </>
                        )}
                      ></Modal>
                      <Link
                        onClick={
                            ()=>console.log(pepper.id)
                        }
                        className="view"
                        to="test"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Sweet;
