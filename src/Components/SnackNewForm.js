import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  const [snack, setSnack] = useState([
    {
      name: "",
      fiber: "",
      protein: "",
      added_sugar: "",
      is_healthy: false,
      selected: false,
      bookmarked: false,
      image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image",
    },
  ]);

  const remove = (form) => {
    const filter = snack.filter((s) => s !== form);
    setSnack(filter);
  };

  let navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (i, e, s) => {
    let temp = [...snack];
    temp[i][s] = e.target.value;
    setSnack(temp);
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const newRow = () => {
    setSnack([
      ...snack,
      {
        name: "",
        fiber: "",
        protein: "",
        added_sugar: "",
        is_healthy: false,
        selected: false,
        bookmarked: false,
        image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image",
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < snack.length; i++) {
      addSnack(snack[i]);
    }
  };

  return (
    <div className="sm:w-1/3 pb-96">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl px-10 pt-6 pb-10 mt-10"
      >
        {snack.map((x, i) => {
          return (
            <div>
              <button
                onClick={() => remove(x)}
                className="block bg-indigo-900 hover:bg-orange-500 text-white border-none uppercase text-lg mx-auto p-2 rounded"
              >
                Remove
              </button>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name:{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => handleTextChange(i, e, "name")}
                  value={x?.name}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md  shadow-2xl placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="fiber"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Fiber:{" "}
                </label>
                <input
                  type="number"
                  min="0"
                  id="fiber"
                  onChange={(e) => handleTextChange(i, e, "fiber")}
                  value={x?.fiber}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md  shadow-2xl placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="protein"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Protein:{" "}
                </label>
                <input
                  type="number"
                  min="0"
                  id="protein"
                  onChange={(e) => handleTextChange(i, e, "protein")}
                  value={x?.protein}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="added_sugar"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Sugar:{" "}
                </label>
                <input
                  type="number"
                  min="0"
                  id="added_sugar"
                  onChange={(e) => handleTextChange(i, e, "added_sugar")}
                  value={x?.added_sugar}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Image:{" "}
                </label>
                <input
                  pattern="http[s]*://.+"
                  required
                  value={x?.image}
                  placeholder="http://"
                  onChange={(e) => handleTextChange(i, e, "image")}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mb-4"
                />
              </div>
              <div>
                <label htmlFor="is_healthy">Healthy:</label>
                <input
                  id="is_healthy"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={snack.is_healthy}
                />
              </div>
              <div className="flex justify-around">
                <p
                  onClick={newRow}
                  className="inline bg-indigo-900 hover:bg-orange-500 text-white border-none uppercase text-lg px-2 pt-4 rounded"
                >
                  New row
                </p>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="block bg-indigo-900 hover:bg-orange-500 text-white border-none uppercase text-lg py-2 px-4 mx-2  rounded"
                >
                  Submit
                </button>
                <Link to={`/snacks`}>
                  <button className="block bg-indigo-900 hover:bg-orange-500 text-white border-none uppercase text-lg py-2 px-4  rounded">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default SnackNewForm;
