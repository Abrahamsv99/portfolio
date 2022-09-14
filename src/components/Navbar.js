import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
    return (
        <nav className="navbar bg-base-100 sticky top-0 z-40">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">Abraham Sánchez</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost md:mx-2 mx-1.5" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://www.linkedin.com/in/absanchez09/';
                }}>
                    <FontAwesomeIcon className="md:w-10 md:h-10 w-8 h-8" icon={faLinkedin} />
                </button>
                <button className="btn btn-square btn-ghost md:mx-2" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://github.com/Abrahamsv99';
                }}>
                    <FontAwesomeIcon className="md:w-10 md:h-10 w-8 h-8" icon={faGithub} />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;