import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$12",
      id: 12345,
    },
    {
      name: "Transporter",
      price: "$19",
      id: 12346,
    },
    {
      name: "Inception",
      price: "$20",
      id: 12348,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
