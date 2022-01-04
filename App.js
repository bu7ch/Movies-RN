import React, { useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const getPopularMovies = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e2a93812004fddd622fb5e91194b8a9"
  );
  return res.data.results
};
const App = () => {
  const [movie, setMovie] = useState("");
  getPopularMovies().then((movies) => {
    setMovie(movies[0]);
  });
  return (
    <View>
      <Text> Nom du film : {movie.original_title}</Text>
      <Text> Langue : {movie.original_language}</Text>
      <Text> Date de sortie : {movie.release_date}</Text>
    </View>
  );
};

export default App;
