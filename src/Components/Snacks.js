import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  // Set state for filter and search functions
  const [snacks, setSnacks] = useState([]);
  const [allSnacks, setAllSnacks] = useState([]);
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [searchSnack, setSearchSnack] = useState("");

  // useEffect creates an inital state of all snack objects within an array
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setSnacks(res.data);
        setAllSnacks(res.data)
        setSelectedSnacks(res.data)
      })
      .catch((c) => console.warn("catch, c"));
  }, []);

  // Function filters snacks based on healthy/unhealthy and resets search bar onChange
  const handleSelect = (e) => {
    if (e.target.value === "true" || e.target.value === "false") {
      const filter = allSnacks.filter((snack) => {
        return snack.is_healthy.toString() === e.target.value;
      });
      setSnacks(filter);
      setSelectedSnacks(filter);
    } else {
      setSnacks(allSnacks);
      setSelectedSnacks(allSnacks);
    }
    setSearchSnack("");
  };

  // Filter function for handleTextChange function below
  function filterSnacks(search) {
    return selectedSnacks.filter((snack) =>
      snack.name.toLowerCase().match(search.toLowerCase())
    );
  }

  // Function that searchs through the snacks array for a match to the search
  const handleTextChange = (e) => {
    const search = e.target.value;
    const result = search ? filterSnacks(search) : selectedSnacks;
    setSnacks(result);
    setSearchSnack(search);
  };

  // For loop to determine if snack is healthy or unhealthy
  for (let object of snacks) {
    if (
      (Number(object.fiber) < 5 && Number(object.protein) < 5) ||
      object.added_sugar > 5
    ) {
      object.is_healthy = false;
    } else {
      object.is_healthy = true;
    }
  }

  return (
    <article className="flex flex-col justify-center items-center">
      <div className="flex justify-around">
        <div className="is_healthy inline-block relative w-64">
          <label
            htmlFor="searchSnack"
            className="block text-gray-700 font-bold mb-2"
          >
            Select Category:
          </label>
          <select
            onChange={handleSelect}
            className="block appearance-none bg-white hover:border-blue-500 px-4 py-2 pr-8 rounded shadow-2xl leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select All</option>
            <option value="true">Healthy</option>
            <option value="false">Unhealthy</option>
          </select>
        </div>
        <div className="inline-block relative mx-4">
          <label htmlFor="searchSnack" className="block font-bold mb-2">
            Search Snack:
          </label>
          <input
            type="text"
            value={searchSnack}
            id="searchSnack"
            onChange={handleTextChange}
            placeholder="Name"
            className="shadow-2xl appearance-none rounded w-96 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-start m-2">
        {snacks.map((snack) => {
          return <Snack key={snack.id} snack={snack} />;
        })}
      </div>
    </article>
  );
}
