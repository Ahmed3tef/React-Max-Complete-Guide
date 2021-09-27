import './Modal.css';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const portalElement = document.getElementById('overlays');

const ModalOverlay = props => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
};

const Backdrop = props => {
  return <div className='backdrop' onClick={props.onClose}></div>;
};

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
export default Modal;
