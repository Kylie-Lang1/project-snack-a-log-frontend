import React from "react";
import { Link } from "react-router-dom";
import regular from "../assets/heart-regular.png";
import solid from "../assets/heart-solid.png";

export default function Snack({ snack, isFavorite }) {
  return (
    <section className="m-4 bg-white shadow-2xl rounded-lg md:w-3/12">
        <div>
          <input
          type="checkbox"
          onChange={(e) => {
            let value = e.target.value
            snack.selected = value
            return snack
          }}
          />
        </div>
      <div>
        <Link to={`/snacks/${snack.id}`}>
          <img
            src={snack.image}
            alt={snack.name}
            className="object-cover h-80 w-full rounded-t-lg"
          ></img>
        </Link>
        <h5 className="inline w-96 break-all ml-1">
          <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
        </h5>
        {snack.is_healthy ? (
          <span>
            <img src={solid} alt="solid" className="w-10 inline ml-4"></img>
          </span>
        ) : (
          <span>
            <img src={regular} alt="regular" className="w-10 inline ml-4"></img>
          </span>
        )}
        <div>
          <input
          type="checkbox"
          onChange={(e) => {
            let value = e.target.value
            snack.selected = value
            return snack
          }}
          />
        </div>
      </div>
    </section>
  );
}
