import React from 'react';
import ReactDOM from 'react-dom';
import { X } from './ui-components.js';
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  toggleModal = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    const {
      buttonText,
      modalId,
    } = this.props;
    let app_root;
    if (
      typeof document !== 'undefined'
    ) {
      app_root = document.getElementById(
        'root'
      );
    }
    return (
      <div className="modal">
        {!this.state.open ? (
          <button
            onClick={() => {
              this.toggleModal();
              document.getElementById(
                modalId
              ).style.height = '80vh';
            }}
          >
            {buttonText}
          </button>
        ) : null}{' '}
        {app_root
          ? ReactDOM.createPortal(
              <div
                style={{
                  position: 'absolute',
                  top: '8vh',
                  left: 0,
                  justifyContent:
                    'center',
                  width: '100%',
                }}
              >
                <div
                  id={modalId}
                  style={{
                    zIndex: 3,
                    width: '70vw',
                    minWidth: '280px',
                    margin: '0 auto',
                    background: 'white',
                    boxShadow:
                      '10px 5px 30px lightslategray',
                    maxHeight: '80vh',
                    overflow: 'auto',
                    display: 'block',
                    borderRadius:
                      '.2em',
                    fontFamily: `'Montserrat', sans-serif`,
                  }}
                >
                  {this.state.open ? (
                    // <button
                    //   onClick={() => {
                    //     this.toggleModal();
                    //     document.getElementById(
                    //       modalId
                    //     ).style.height =
                    //       '0';
                    //   }}
                    // >
                    <X
                      onClick={() => {
                        this.toggleModal();
                        document.getElementById(
                          modalId
                        ).style.height =
                          '0';
                      }}
                    />
                  ) : // </button>
                  null}
                  {this.state.open
                    ? this.props.render(
                        this.toggleModal
                      )
                    : null}{' '}
                </div>
              </div>,
              app_root
            )
          : null}
      </div>
    );
  }
}

export default Modal;