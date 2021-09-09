import { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault(); // cam refresh page
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" onChange={updateName} />
      <input type="text" name="price" onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};
export default AddMovie;
