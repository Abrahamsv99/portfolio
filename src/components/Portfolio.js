import React from "react";
import CardPortfolio from "./portfoliocomponents/CardPortfolio";

function Portfolio () {
    return (
        <div className="container mx-auto my-40 px-12">
            <h1 className="text-4xl py-14">My Portfolio</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <CardPortfolio />
                <CardPortfolio />
                <CardPortfolio />
            </div>
        </div>
    );
}
export default Portfolio;