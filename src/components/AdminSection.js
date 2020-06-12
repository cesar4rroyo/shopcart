import React from "react";
import OrdersAdmin from "./OrdersAdmin";
import "./styles/orders.css";
import Auth from "../auth/Auth";
import HeaderAdmin from "./HeaderAdmin";

const AdminSection = (props) => {
    return (
        <div>
            <HeaderAdmin props={props}></HeaderAdmin>
            <OrdersAdmin></OrdersAdmin>
        </div>
    );
};

export default AdminSection;
