import React from "react";
import { useState } from "react";
import * as tailwind from "../css/styles";
import "../css/modal.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pic from "../assets/cb4e4632-37f7-448c-9edd-a0c72fa1f2f9.jpeg"

export default function Kylie() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <div className="flex flex-col p-4 m-4">
      <div className="flex">
        <img src={pic} alt="pic" className="w-20 h-20 rounded-full"></img>
        <div className="px-2">
          <h3 className="text-4xl">Kylie Lang</h3>
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
              My name is Kylie. I am a Pursuit fellow working on gaining full-stack development skills with goals of advancing my career in the tech industry.
            </p>
            <h4 className="p-4 text-center">
              Contact me <span>&#9786;</span>
            </h4>
            <div className="flex p-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/kylie-lang-8ba021207/"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-blue-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/Kylie-Lang1"
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-slate-800"
              >
                <FaGithubSquare />
              </a>
              <a
                href="mailto: kylielang@pursuit.org"
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
