import React, { useState } from "react";
import Axios from "axios";

import { Text, Input, Box, Button } from "../components/style";
// onPress={() => navigation.navigate('Details')}

export default function HomeScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoad] = useState(false);

  const searchMovie = async () => {
    Axios(`http://www.omdbapi.com/?apikey=6e23ab0f&s=${keyword}`)
      .then((response) => {
        console.log(response);
        if (response.data.Response === "True") {
          setMessage("");
          setResults(response.data.Search);
        } else {
          setMessage(response.data.Error);
        }
        setLoad(true);
      })
      .catch((err) => console.log(err));
  };

  console.log(results);
  return (
    <Box flex={1} p={10}>
      <Box flex={1} alignItems="center">
        <Text fontSize={21}>Search a movie</Text>
        <Input
          width="90%"
          height={70}
          px={20}
          fontSize={20}
          bg={"#ddd"}
          color="black"
          mt={10}
          placeholder="movie name"
          borderRadius="normal"
          onChangeText={(e) => setKeyword(e)}
        />
        <Button
          width="90%"
          mt={30}
          bg="0.dark"
          height={70}
          borderRadius="normal"
          onPress={searchMovie}
        >
          <Text color="0.light" fontWeight="bold" fontSize={18}>
            Ara
          </Text>
        </Button>
      </Box>
      <Box flex={1} alignItems="center">
        {loading && <Text fontSize="21">Sonuçlar</Text>}
        {message ? (
          <Text>{message}</Text>
        ) : (
          <Box mt={20} width="100%" alignItems="center">
            {results?.slice(0, 4)?.map((item, id) => (
              <Button
                key={id}
                height={40}
                mt={5}
                mb={5}
                width="90%"
                bg="1.dark"
                borderRadius="normal"
                onPress={() =>
                  navigation.navigate("Details", {
                    poster: item.Poster,
                    title: item.Title,
                    type: item.Type,
                    year: item.Year,
                  })
                }
              >
                <Text color="white" fontSize={17}>
                  {item.Title}
                </Text>
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
