import React from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'



const getPopularMovies = async () => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e2a93812004fddd622fb5e91194b8a9')
  console.log(JSON.stringify(res.data.results[0], null, 2));
}
const App = () => {
 getPopularMovies()
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default App
