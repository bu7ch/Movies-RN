import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, StyleSheet } from "react-native";
import { getMovie } from "../services/services";
const placeholder = require("../assets/placeholder.png");
const Detail = ({ route, navigation }) => {
  const [movieDetail, setmovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const movieId = route.params.movieDetail.id;

  useEffect(() => {
    getMovie(movieId).then((movieData) => {
      setmovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);
  return (
    <>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      "https://image.tmdb.org/t/p/w500" +
                      movieDetail.poster_path,
                  }
                : placeholder
            }
          />
        </ScrollView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 125,
    borderRadius: 20,
  },
});

export default Detail;
