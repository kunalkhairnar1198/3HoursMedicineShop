import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom';

const BackDrop = (props)=>{
    return <div onClick={props.onClose}/>
};

const ModalOverlay=(props)=>{
    return(
        <div>
            <div>
                {props.children}
            </div>
        </div>
    )
}
const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onClose={props.onCloseHandler}>
                                {props.children}
                            </ModalOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modal
