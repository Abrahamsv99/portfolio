import React from "react";
import Pdf from "../attached/AbrahamSanchezCV.pdf";

function Contact() {
    return (
        <div className="container mx-auto my-40 px-12">
            <h1 className="text-4xl py-14">Contact and Information</h1>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <ul className="list-disc list-inside marker:text-secondary-focus hover:marker:text-secondary-focus">
                        <li className="mb-4 hover:underline hover:decoration-secondary underline-offset-8"><a href="https://www.linkedin.com/in/absanchez09/">LinkedIn</a></li>
                        <li className="mb-4 hover:underline hover:decoration-secondary underline-offset-8"><a href="https://github.com/Abrahamsv99">Github</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="list-disc list-inside marker:text-secondary">
                        <li className="mb-4 hover:underline hover:decoration-secondary underline-offset-8"><a href="mailto:abrahamsv99@gmail.com">Email: abrahamsv99@gmail.com</a></li>
                        <li className="mb-4 hover:underline hover:decoration-secondary underline-offset-8"><a href={Pdf}>Curriculum vitae</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Contact;