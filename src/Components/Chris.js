import React from "react";
import { useState } from "react";
import * as tailwind from "../css/styles";
import "../css/modal.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Chris() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <div className="flex flex-col p-4 m-4">
      <h3 className="text-4xl">Chris King</h3>
      <h5>Developer</h5>
      <div>
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
            <h4 className="p-4 text-center">
              Contact me <span>&#9786;</span>
            </h4>
            <div className="flex p-4 justify-center items-center">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="px-4 text-5xl text-blue-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href=""
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