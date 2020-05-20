import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Product from "./Product";
import ModalProduct from "./ModalProduct";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

class Products extends Component {
    state = {
        product: null,
    };
    componentDidMount() {
        this.props.fetchProducts();
    }

    openModal = (product) => {
        this.setState({ product });
    };
    closeModal = (product) => {
        this.setState({ product: null });
    };
    render() {
        const { product } = this.state;
        return (
            <div>
                <Fade bottom cascade>
                    {!this.props.products ? (
                        <div>Loading...</div>
                    ) : (
                        <ul className="products">
                            {this.props.products.map((product) => (
                                <li key={product._id}>
                                    <Product
                                        id={product._id}
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        fxModal={() => this.openModal(product)}
                                        fxAddCart={() =>
                                            this.props.addToCart(product)
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </Fade>
                {product && (
                    <ModalProduct
                        onRequestClose={this.closeModal}
                        closeClick={this.closeModal}
                        id={product._id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        availableSizes={product.availableSizes}
                        addToCartClick={() => {
                            this.props.addToCart(product);
                            this.closeModal();
                        }}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
