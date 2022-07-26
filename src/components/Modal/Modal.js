import "./Modal.scss";
import { createPortal } from "react-dom";
import React, { Fragment } from "react";
import { IoClose } from "react-icons/io5";
import { modalActions } from "../../store/modalSlice";
import { useDispatch } from "react-redux";

/**
 * Component to display a modal
 *
 * @component
 *
 * @returns (
 *  <Menu  />
 *)
 */

const Menu = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalActions.logout());
  };
  return (
    <div className="overlay">
      <div className="success-message">
        <button onClick={closeModal}>
          <IoClose size={15} color="white" />
        </button>
        <h2>New employee created</h2>
      </div>
    </div>
  );
};

/**
 * Component to display a modal at a certain place
 *
 * @component
 *
 * @returns (
 *  <Modal />
 *)
 */

const Modal = () => {
  return (
    <Fragment>
      {createPortal(<Menu />, document.getElementById("modal"))}
    </Fragment>
  );
};
export default Modal;
