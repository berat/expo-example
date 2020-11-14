import React from "react";

import { Text, Input, Box, Button } from "../components/style";

// onPress={() => navigation.navigate('Details')}

export default function HomeScreen({ navigation }) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
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
      />
      <Button
        width="90%"
        mt={30}
        bg="0.dark"
        height={70}
        borderRadius="normal"
        onPress={() => navigation.navigate("Details")}
      >
        <Text color="0.light" fontWeight="bold" fontSize={18}>
          Ara
        </Text>
      </Button>
    </Box>
  );
}
