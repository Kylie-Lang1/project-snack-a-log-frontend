import React from "react";
import { Link } from "react-router-dom";
import regular from "../assets/heart-regular.png";
import solid from "../assets/heart-solid.png";

export default function Snack({ snack }) {
  return (
    <section className="m-4 bg-white shadow-2xl rounded-lg">
      <div>
        <Link to={`/snacks/${snack.id}`}>
          <img
            src={snack.image}
            alt={snack.name}
            className="object-cover h-72 w-96 rounded-t-lg"
          ></img>
        </Link>
        <h5 className="inline w-96 break-all ml-1">
          <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
        </h5>
        {snack.is_healthy ? (
          <span>
            <img src={solid} className="w-16 inline ml-4"></img>
          </span>
        ) : (
          <span>
            <img src={regular} className="w-16 h-16 inline ml-4"></img>
          </span>
        )}
      </div>
    </section>
  );
}
