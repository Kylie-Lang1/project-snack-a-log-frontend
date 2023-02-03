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
            Currently a fellow at Pursuit, an intensive 12- month software engineering fellowship with a 9%, I am learning and and enhancing my developer skills to create programs and applications that helps teach students how to Dj. Surrounded by technology all my life, my love and appreciation started in middle school when I picked up a trumpet for the first time. A few years later, in high school, I came across the art of DJing, combining music and technology to create different kind of art. I have continued doing that to this day, but along my journey, i have took on roles working with children, including being a Playworks Coach at schools in Brooklyn for two years, which got me more interested in teaching other the craft I love.
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
