// Dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
import SnackEditForm from "./SnackEditForm";
import { FaBookmark } from "react-icons/fa"
import { FaRegBookmark } from "react-icons/fa"
import * as tailwind from "../css/styles";

// API url for http requests
const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
// Defining variables
  const { id } = useParams();
  const [snack, setSnack] = useState({});
  const [bookmarked, setBookmarked] = useState()
  let navigate = useNavigate();

// useEffet runs when a different snack ID is requested or when the snack object is changed afer edit
  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data);
        setBookmarked(res.data.bookmarked)
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id, snack]);
  
// Delete request for delete function below
  const deleteSnack = () => {
    axios
    .delete(`${API}/snacks/${id}`)
    .then(() => navigate(`/snacks`))
    .catch((c) => console.warn("catch", c));
  };

// handleDelete function for delete button
const handleDelete = () => {
  let text = "Are you sure you want to delete?"
  if (window.confirm(text) === true) {
    deleteSnack()
  }
}

// Put request for bookmark button
  const updateBookmark = (updatedSnack, id) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(() => navigate(`/snacks/${id}`))
      .catch(c => console.warn('catch', c));
}

// onClick function for bookmark button to update bookmark and snack.bookmark state
  const handleBookmark = () => {
    setBookmarked(!bookmarked)

    const copySnack = {...snack}
    copySnack.bookmarked = !snack.bookmarked
    setSnack(copySnack)
    
    updateBookmark(copySnack, id)
  }

  // For loop to determine if snack is healthy or unhealthy
    if (
      (Number(snack.fiber) < 5 && Number(snack.protein) < 5) ||
      snack.added_sugar > 5
    ) {
      snack.is_healthy = false;
    } else {
      snack.is_healthy = true;
    }
    
  return (
    <div className={tailwind.details_page}>
        <div className="details-wrapper md:flex">
          <div className="relative p-0 m-0">
            <img 
                src={snack.image} 
                className={tailwind.details_img}
                alt={`${snack.name} pic`} 
              />
            { 
            bookmarked ? (
              <>
                <FaBookmark className={tailwind.bookmark} />
                <button 
                  className={tailwind.bookmark_text} 
                  onClick={handleBookmark}
                >
                  Unbookmark Snack
                </button>
              </>
            ) : (
              <>
                <FaRegBookmark className={tailwind.bookmark} />
                <button 
                  className={tailwind.bookmark_text} 
                  onClick={handleBookmark}
                >
                  Bookmark Snack
                </button>
              </>    
              )
            }
          </div>
          <section className="info">
              <div className={tailwind.details_head}>
                  <h3 className={tailwind.details_h3}>{snack.name}</h3>
                  { snack.is_healthy ? (
                      <img src={heartSolid} alt="sold"  className={tailwind.heart}/>
                    ) : (
                      <img src={heartOutline} alt="regular" className={tailwind.heart}/> 
                    )}
              </div>
              <div className="float-none">
                  <p className={`${tailwind.info} pt-10`}>
                    <span className="font-bold">Fiber:</span> {snack.fiber} g
                  </p>
                  <p className={tailwind.info}>
                    <span className="font-bold" >Protein:</span> {snack.protein} g
                  </p>
                  <p className={tailwind.info}>
                    <span className="font-bold">Added Sugar:</span> {snack.added_sugar} g
                  </p>
              </div>
              <div className="buttons mt-8">
                  <Link to="/snacks">
                      <button className={tailwind.button}>Back</button>
                  </Link>
                  <button className={tailwind.button} onClick={handleDelete}>
                    Delete
                  </button>
                  <SnackEditForm />
              </div>
          </section>
        </div>
    </div>
  );
}

export default SnackDetails;
