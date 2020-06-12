import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrder } from "../actions/orderActions";

class OrdersAdmin extends Component {
    componentDidMount() {
        this.props.fetchOrder();
    }
    render() {
        const { orders } = this.props;
        return !orders ? (
            <React.Fragment>
                <div>Loading</div>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <div className="orders">
                    <h2>Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                                <th>ITEMS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt}</td>
                                    <td>{order.total}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>
                                        {order.cartItems.map((item, index) => (
                                            <div key={index}>
                                                {item.count} {" x "}{" "}
                                                {item.title}
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state) => ({
        orders: state.order.orders,
    }),
    { fetchOrder }
)(OrdersAdmin);
