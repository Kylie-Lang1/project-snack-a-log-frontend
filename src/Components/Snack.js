import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import regular from "../assets/heart-regular.png";
import solid from "../assets/heart-solid.png";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import * as tailwind from "../css/styles"

const API = process.env.REACT_APP_API_URL

export default function Snack({ snack, id }) {

  const [indexSnack, setIndexSnack] = useState(snack);
  let navigate = useNavigate()

  const handleSelect = (e) => {
      let value = e.target.value
      snack.selected = value
      return snack
  }

  // Put request for bookmark button
  const updateBookmark = (updatedSnack, id) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(() => navigate('/snacks/'))
      .catch(c => console.warn('catch', c));
  }

  // onClick function for bookmark button to update bookmark and snack.bookmark state
  const handleBookmark = () => {
    const copySnack = {...indexSnack}
    copySnack.bookmarked = !indexSnack.bookmarked
    setIndexSnack(copySnack)
    
    updateBookmark(copySnack, id)
  }

  return (
  <>
    <section className="m-4 bg-white shadow-2xl rounded-lg w-96 h-96">
      <div>
        <Link to={`/snacks/${snack.id}`}>
          <img
            src={snack.image}
            alt={snack.name}
            className="object-cover h-80 w-full rounded-t-lg"
          ></img>
        </Link>
        <div className="flex items-center relative">
          <div className="flex flex-auto items-center">
            <input
              type="checkbox"
              onChange={handleSelect}
              className="float-left item-align-center ml-2"
              />
            <h5 className="inline break-normal px-2 py-2 truncate w-64"> 
              <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
            </h5>
          </div>
          <div className="flex flex-auto items-center justify-end pr-3">
            {snack.is_healthy ? (
              <span>
                <img src={solid} alt="solid" className="h-8 w-10 pr-3"></img>
              </span>
            ) : (
              <span>
                <img src={regular} alt="regular" className="h-8 w-10 pr-3"></img>
              </span>
            )}
            {
              indexSnack.bookmarked ? (
                <button className="border-none" onClick={handleBookmark}>
                  <FaBookmark 
                  className={tailwind.index_bookmark}
                  
                  /> 
                </button>
              ) : (
                <button className="border-none" onClick={handleBookmark}>
                  <FaRegBookmark 
                    className={tailwind.index_bookmark} 
                  />
                </button>
              )
            }
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
