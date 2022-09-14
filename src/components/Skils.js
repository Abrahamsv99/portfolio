import React from "react";
import Badge from "./skillcomponents/Badge";

function Skills() {
    return(
        <div className="container mx-auto my-40 px-12">
            <h1 className="text-4xl py-14">My Skills</h1>
            <div className="container lg:px-60">
            <Badge text="HTML" />
            <Badge text="CSS" />
            <Badge text="JavaScript" />
            <Badge text="React" />
            <Badge text="Tailwind" />
            <p className="py-12"> I am a Mechatronics Engenier who found a love for code in college. I've always had a knack for tinkering with computers and that is what led me to become a software developer. I strive to become better every day withn my work and outside of it.</p>
            </div>
        </div>
    );
}

export default Skills;