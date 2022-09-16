import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function CardPortfolio(props) {
    return (

        <div className="flex flex-col w-full">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="card lg:w-96 w-auto h-60 bg-base-100 shadow-xl image-full">
                <figure><img src={props.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:mb-24 mb-16">{props.title}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-square btn-primary" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = props.gitButton;
                        }}><FontAwesomeIcon className="w-8 h-8" icon={faGithub} /></button>
                        <button className="btn btn-square btn-secondary" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = props.linkButton;
                        }}><FontAwesomeIcon className="w-8 h-8" icon={faLink} /></button>
                    </div>
                </div>
            </div>
            <div className="text-center lg:text-left">
                {props.children}
            </div>
            </div>
            <div className="divider"></div>
        </div>

    );
}

export default CardPortfolio;