import "./Modal.scss";
import { createPortal } from "react-dom";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";
import { modalActions } from "../../../store/modalSlice";
import { useDispatch } from "react-redux";

const Menu = (props) => {
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

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Menu />, document.getElementById("modal"))}
    </Fragment>
  );
};
export default Modal;
