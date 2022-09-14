import React from "react"
import { faCode, faCoffee, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Hero () {
    const [hello, setHello] = useState(0);
    const myName = <span className="text-secondary">Abraham Sánchez</span>;
    const helloArray = [
        "Click me",
        "Hi there", 
        "Hello", 
        "Hola", 
        "Did I already said hi?", 
        "I'm running out of ideas here", 
        "You know you can keep scrolling", 
        "I'm just going to start counting your clicks. Ok?", 
        "You clicked 8 times", "You clicked 9 times", 
        "You clicked 10 times", 
        "Really you are still clicking?", 
        "You must really be a fan of my work", 
        "12", 
        "Ok now I'm just counting"
    ]
    const TitleCount = () => {
        if (hello <= 14){
            return (
                <h1 className="mb-5 text-5xl font-bold cursor-pointer" onClick={() => setHello(hello +1)}>{helloArray[hello]}</h1>
            );
        } else {
            return <h1 className="mb-5 text-5xl font-bold cursor-pointer" onClick={() => setHello(hello +1)}> You clicked {hello} times</h1>
        }
    }
    return(
        <div className="hero min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <TitleCount />
                    <p className="mb-5"> I am {myName} Software Developer <FontAwesomeIcon className="text-accent" icon={faCode} />, Coffe Brewer <FontAwesomeIcon className="text-accent" icon={faCoffee} />, and Music Enthusiast <FontAwesomeIcon className="text-accent" icon={faMusic} /></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
