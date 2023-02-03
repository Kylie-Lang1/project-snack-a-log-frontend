import React from "react";
import { useState } from "react";
import * as tailwind from "../css/styles";
import "../css/modal.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pic from "../assets/908fb03c-69be-4abd-86e5-c49c402c69b6.jpeg"

export default function Fadila() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <div className="flex flex-col p-4 m-4">
      <div className="flex">
        <img src={pic} alt="pic" className="w-20 h-20 rounded-full"></img>
        <div className="px-2">
          <h3 className="text-4xl">Fadila Ali</h3>
          <h5>Developer</h5>
        </div>
      </div>
      <div className="pt-2">
        <button
          className={tailwind.button}
          onClick={() => setViewModal(!viewModal)}
        >
          {viewModal ? "Close" : "Show More"}
        </button>
        {viewModal ? (
          <div className="dev">
            <p>
              Hi, my name is Fadila Ali. I am currently a Pursuit fellow,
              learning full-stack web development. My goal is to learn and build
              the necessary skills that will allow me to create my imagination
              in the form of software.
            </p>
            <h4 className="p-4 text-center">
              Contact me <span>&#9786;</span>
            </h4>
            <div className="flex p-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/fadila-ali-574b13183/"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-blue-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/Fadila-Ali"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-slate-800"
              >
                <FaGithubSquare />
              </a>
              <a
                href="mailto: fadilaali@pursuit.org"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-red-500"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
