import React from 'react'
import styles from "./Modal.module.css";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Modal = (props) => {
    const [toggleModal, setToggleModal] = props.value;

    return (

        <div className={`${styles.overlay} ${!toggleModal ? styles.closeModal : ''}`}>
            <div className={styles.close} onClick={() => setToggleModal(false)}>
                <FontAwesomeIcon className={styles.icon} icon={faXmark}/>
            </div>
            <div className={styles.overlayContainer}>
                {props.children}
            </div>

        </div>

    )
}
export default Modal
