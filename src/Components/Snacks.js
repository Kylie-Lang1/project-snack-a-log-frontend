import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snack from "./Snack";
import * as tailwind from "../css/styles"

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  // Set state for filter and search functions
  const [snacks, setSnacks] = useState([]);
  const [allSnacks, setAllSnacks] = useState([]);
  const [filteredSnacks, setFilteredSnacks] = useState([]);
  const [searchSnack, setSearchSnack] = useState("");
  const [shownSnacks, setShownSnacks] = useState([])
  const [deleteMany, setDeleteMany] = useState(false)
  
  let navigate = useNavigate()

  // useEffect creates an inital state of all snack objects within an array for multiple state hooks
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setSnacks(res.data);
        setAllSnacks(res.data)
        setFilteredSnacks(res.data)
      })
      .catch((c) => console.warn("catch, c"));
  }, [snacks, filteredSnacks]);

  // Function filters snacks based on healthy/unhealthy and resets search bar onChange
  const handleSelect = (e) => {
    if (e.target.value === "true" || e.target.value === "false") {
      const filter = allSnacks.filter((snack) => {
        return snack.is_healthy.toString() === e.target.value;
      });
      setShownSnacks(filter);
      setFilteredSnacks(filter);
    } else {
      setShownSnacks(allSnacks);
      setFilteredSnacks(allSnacks);
    }
    setSearchSnack("");
  };

  // Filter function for handleTextChange function below
  function filterSnacks(search) {
    return filteredSnacks.filter((snack) =>
      snack.name.toLowerCase().match(search.toLowerCase())
    );
  }

  // Function that searchs through the snacks array for a match to the search
  const handleTextChange = (e) => {
    const search = e.target.value;
    const result = search ? filterSnacks(search) : filteredSnacks;
    setShownSnacks(result);
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

  // Fucntion to delete multiple selected snacks for handleDelete function below
  function deleteMultiple(){
    const arr = []

    snacks.forEach((snack) => {
      console.log(snack.name)
      console.log(snack)
      if(snack.selected){
        arr.push(snack.id)
        console.log("added to arr")
      }
      console.log(arr)
    })

    for(let i = 0 ; i < arr.length; i++){
      axios
      .delete(`${API}/snacks/${arr[i]}`)
      .then(
        (response) => {
          const indexDeletedSnacks = snacks.findIndex((snack) => {
              return snack.id === arr[i] 
          });
          snacks.splice(indexDeletedSnacks, 1);
          setSnacks([...snacks]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
    }
  }


  return (
    <article className="flex flex-col justify-center items-center">
      <div className="sm:flex justify-center items-center">
        <div className="is_healthy inline-block relative w-64 mx-4">
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
        <div className="inline-block relative mx-4">
          <label htmlFor="deleteSnacks" className="block font-bold mb-2">
            Delete multiple snacks:
          </label>
          {
            deleteMany ? (
              <button
                onClick={handleDeletes}
                className="bg-orange-500 hover:bg-indigo-900 text-white border-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:text-white focus:bg-orange-500"
              >
                Delete
              </button>
            ) : (
              <button
                onClick={() => setDeleteMany(true)}
                className="bg-indigo-900 hover:bg-orange-500 text-white border-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:text-white"
              >
                Delete Snacks
              </button>
            )
          }
        </div>
      </div>
      <div className="sm:flex flex-wrap justify-center items-start m-2">
      <h3 className={tailwind.index_h3}>
        Favorites:
      </h3>
      <div className="flex flex-wrap justify-center items-start m-2">
        {
          shownSnacks.length ? 
            shownSnacks.map((snack) => {
              if(snack.bookmarked){
                return (
                  <Snack 
                    key={snack.id}
                    id={snack.id}
                    snack={snack}
                   
                  />
                )
              }
            }) : snacks.map((snack) => {
              if (snack.bookmarked){
                return (
                  <Snack 
                    key={snack.id} 
                    snack={snack} 
                    id={snack.id}   
          
                  /> 
                )
              }
            })
          }
      </div>
      <h3 className={tailwind.index_h3}>
        Snacks:
      </h3>
        {
          shownSnacks.length ? 
            shownSnacks.map((snack) => {
              if(!snack.bookmarked){
                return (
                  <Snack 
                    key={snack.id}
                    id={snack.id}
                    snack={snack}
                    
                  />
                )
              }
            }) : snacks.map((snack) => {
              if (!snack.bookmarked){
                return (
                  <Snack 
                    key={snack.id} 
                    snack={snack} 
                    id={snack.id}   
                 
                  /> 
                )
              }
            })
          }
      </div>
    </article>
  );
}
