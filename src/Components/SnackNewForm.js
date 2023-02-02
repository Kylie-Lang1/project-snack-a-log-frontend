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
  console.log(snack);

  return (
    <div class="">
      <form
        onSubmit={handleSubmit}
        class="w-full bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4"
      >
        {snack.map((x, i) => {
          return (
            <div class="mb-4">
              <button
                onClick={() => remove(x)}
                class="bg-indigo-900 hover:bg-orange-500 text-white border-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Remove this form
              </button>
              <div class="mb-4">
                <label
                  htmlFor="name"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Name:{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => handleTextChange(i, e, "name")}
                  value={x?.name}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="mb-4">
                <label
                  htmlFor="fiber"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Fiber:{" "}
                </label>
                <input
                  type="number"
                  min="0"
                  id="fiber"
                  onChange={(e) => handleTextChange(i, e, "fiber")}
                  value={x?.fiber}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="mb-4">
                <label
                  htmlFor="protein"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Protein:{" "}
                </label>
                <input
                  type="number"
                  min="0"
                  id="protein"
                  onChange={(e) => handleTextChange(i, e, "protein")}
                  value={x?.protein}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="mb-4">
                <label
                  htmlFor="added_sugar"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Sugar:{" "}
                </label>
                <input
                  type="number"
                  min="0"
                  id="added_sugar"
                  onChange={(e) => handleTextChange(i, e, "added_sugar")}
                  value={x?.added_sugar}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="mb-4">
                <label
                  htmlFor="image"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Image:{" "}
                </label>
                <input
                  pattern="http[s]*://.+"
                  required
                  value={x?.image}
                  placeholder="http://"
                  onChange={(e) => handleTextChange(i, e, "image")}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          );
        })}
        <div className="md-flex justify-around ">
          <p
            onClick={newRow}
            class="bg-indigo-900 inline hover:bg-orange-500 text-white border-none font-bold py-4 px-4 m-5  rounded focus:outline-none focus:shadow-outline"
          >
            Add new snack
          </p>
          <button
            type="submit"
            class="bg-indigo-900 hover:bg-orange-500 text-white border-none font-bold py-2 px-4 my-4  rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <Link to={`/snacks`}>
            <button class="bg-indigo-900 hover:bg-orange-500 text-white border-none font-bold py-2 px-4 mx-2  rounded focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SnackNewForm;
