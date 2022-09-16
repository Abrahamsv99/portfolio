import React from "react";
import CardPortfolio from "./portfoliocomponents/CardPortfolio";
import Prg from "../images/PRG.png"

function Portfolio () {
    return (
        <div className="container mx-auto my-40 px-12">
            <h1 className="text-4xl py-14">My Portfolio</h1>
            <div className="grid grid-cols-1 gap-4">
                <CardPortfolio 
                    title="Pokemon Random Generator" 
                    image={Prg}
                    gitButton="https://github.com/Abrahamsv99/pokegenerator"
                    linkButton="https://abrahamsv99.github.io/pokegenerator/"
                >
                    <h2 className="text-accent text-2xl font-semibold mb-3">Using Apis!</h2>
                    <p>This is a simple and fun project I did that uses the Pokemon api and vanilla Javascript to generate a randomn Pokemon  </p>
                </CardPortfolio>
                <CardPortfolio 
                    title="Coming soon!" 
                    image="https://placeimg.com/400/225/arch"
                    gitButton="https://github.com/Abrahamsv99/"
                    linkButton="https://github.com/Abrahamsv99/" 
                />
                <CardPortfolio 
                    title="Coming soon!" 
                    image="https://placeimg.com/400/225/arch"
                    gitButton="https://github.com/Abrahamsv99/"
                    linkButton="https://github.com/Abrahamsv99/" 
                />
            </div>
        </div>
    );
}
export default Portfolio;