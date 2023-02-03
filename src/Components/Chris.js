import React from "react";
import { useState } from "react";
import * as tailwind from "../css/styles";
import "../css/modal.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pic from "../assets/22e044ad-3db5-4e0d-936b-e3daf368cc02.jpeg"

export default function Chris() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <div className="flex flex-col p-4 m-4">
      <div className="flex">
        <img src={pic} alt="pic" className="w-20 h-20 rounded-full"></img>
        <div className="px-2">
          <h3 className="text-4xl">Chris King</h3>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <h4 className="p-4 text-center">
              Contact me <span>&#9786;</span>
            </h4>
            <div className="flex p-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/chris-king-643684240/"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-blue-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/chrisking718"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-slate-800"
              >
                <FaGithubSquare />
              </a>
              <a
                href="mailto: "
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
