import React from "react";
import "./styles/modalOrder.css";
import Modal from "react-modal";

const ModalOrder = (props) => {
    return (
        <Modal isOpen={true} onRequestClose={props.onClose}>
            <div className="container" id="modal_check">
                <div className="info_container">
                    <h2>Order Id: {props.order._id}</h2>
                    <h2>Nombre: {props.order.name}</h2>
                    <h2>Direccion: {props.order.address}</h2>
                    <h2>Fecha: {props.order.createdAt}</h2>
                    <h2>Productos: </h2>
                    <ul className="products_checkList">
                        {props.cartItems.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))}
                    </ul>
                    <h3>Total: {props.order.total}</h3>
                </div>
                <button onClick={props.onClose}>Confirmar</button>
            </div>
        </Modal>
    );
};

export default ModalOrder;
