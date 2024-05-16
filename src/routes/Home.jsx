import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductsSection";

export const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroImg />
            <ProductsSection />
            <Footer />
        </div>
    )
}