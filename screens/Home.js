// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, Dimensions, Flatlist } from "react-native";
// import { SliderBox } from "react-native-image-slider-box";
// import List from "../components/List";

// import { getPopularMovies, getUpcomingMovies } from "../services/services";

// const dimensions = Dimensions.get("screen");
// const Home = () => {
//   const [moviesImages, setMovieImages] = useState();
//   const [popularMovies, setPopularMovies] = useState();
//   const [error, setError] = useState(false);

// const getData = () => {
//   return Promise.all([
//     getUpcomingMovies(),
//     getPopularMovies()
//   ])
// }


//   useEffect(() => {
//     getData()
//       .then(([upcomingMoviesData, popularMoviesData]) => {
//         const moviesImagesArray = [];
//         upcomingMoviesData.forEach((movie) => {
//           moviesImagesArray.push(
//             "https://image.tmdb.org/t/p/w500/" + movie.poster_path
//           );
//         });
//         setMovieImages(moviesImagesArray);
//         setPopularMovies(popularMoviesData)
//       })
//       .catch((err) => {
//         setError(true);
//       });   
//   },[]);
//   return (
//     <>
//     <View style={styles.sliderContainer}>
//       <SliderBox
//         images={moviesImages}
//         sliderBoxHeight={dimensions.height / 1}
//         autoplay={true}
//         circleLoop={true}
//       />
//     </View>
//       <View style={styles.caroussel}>
//         <Flatlist
//         data={popularMovies}
//         horizontal={true}
//         renderItem={({ item}) => <Text>{item.title}</Text>}>
//         </Flatlist>
//       </View>
//       <View>
//         <List title='List component' content={popularMovies}></List>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   sliderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   caroussel : {
//     height: 0
//   }
// });

// export default Home;

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import { getPopularMovies, getUpcomingMovies } from "../services/services";

const dimensions = Dimensions.get("screen");
const Home = () => {
  const [moviesImages, setMovieImages] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then((movies) => {
        const moviesImagesArray = [];
        movies.forEach((movie) => {
          moviesImagesArray.push(
            "https://image.tmdb.org/t/p/w500/" + movie.poster_path
          );
        });
        setMovieImages(moviesImagesArray);
    
      })
      .catch((err) => {
        setError(err);
      });
  });

  //   getPopularMovies()
  //     .then((movies=> {})
  //     .catch((error) => {
  //       setError(error);
  //     })
  // }, []);
  return (
    <View style={styles.sliderContainer}>
      <SliderBox
        images={moviesImages}
        sliderBoxHeight={dimensions.height / 1}
        autoplay={true}
        circleLoop={true}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;