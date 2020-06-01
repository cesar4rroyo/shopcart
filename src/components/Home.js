import React from "react";
import Products from "./Products";
import Filter from "./Filter";
import Header from "./Header";

const Home = () => {
    const createOrder = (order) => {
        console.log(order);
    };
    return (
        <div className="grid-container">
            <Header createOrder={createOrder} />
            <div className="container_img_hero">
                <img className="img_hero" src="images/hero.jpg" alt="hero" />
            </div>
            <Filter />
            <main>
                <div className="container">
                    <Products />
                </div>
            </main>
            <footer>All rigth is reserved.</footer>
        </div>
    );
};

export default Home;
