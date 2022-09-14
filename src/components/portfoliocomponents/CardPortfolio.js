import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function CardPortfolio() {
    return (
        <div className="card w-42 bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title mb-9">Coming soon!</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-square btn-primary"><FontAwesomeIcon className="w-8 h-8" icon={faGithub}/></button>
                    <button className="btn btn-square btn-secondary"><FontAwesomeIcon className="w-8 h-8" icon={faLink}/></button>
                </div>
            </div>
        </div>
    );
}

export default CardPortfolio;