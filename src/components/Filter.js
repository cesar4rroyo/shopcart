import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";
import "./styles/filter.css";

class Filter extends Component {
    render() {
        return !this.props.filteredProducts ? (
            <div>Loading ...</div>
        ) : (
            <div className="filter">
                <div className="filter-result">
                    <h3>
                        Se econtraron {this.props.filteredProducts.length}{" "}
                        productos
                    </h3>
                </div>
                <div className="filter_sort_size">
                    <div className="filter-sort">
                        <select
                            value={this.props.sort}
                            onChange={(e) =>
                                this.props.sortProducts(
                                    this.props.filteredProducts,
                                    e.target.value
                                )
                            }
                        >
                            <option value="">Order</option>
                            <option value="latest">Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                    <div className="filter-size">
                        <select
                            value={this.props.size}
                            onChange={(e) =>
                                this.props.filterProducts(
                                    this.props.products,
                                    e.target.value
                                )
                            }
                        >
                            <option value="">All</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
    Filter
);
