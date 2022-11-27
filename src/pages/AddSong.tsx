import React from "react";
import Navbar from "../components/Navbar";

import {
  Text,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

function AddSong() {
  return (
    <>
      <Navbar children={undefined} />

      <Box
        minH="100vh"
        bg="#212121"
        textColor="white"
        ml={{ base: 0, md: 60 }}
        minW="100vh"
        mx="auto"
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" mx="auto">
          Add Premium Song
        </Text>
        <Box maxW="50vh" mx="auto" mt="8vh">
          <Stack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Insert Title</FormLabel>
              <Input
                type="text"
                bg="#FFFFFF"
                placeholder="Enter your username."
                border={"none"}
              />
            </FormControl>
            <FormControl id="singer" isRequired>
              <FormLabel>Insert Singer</FormLabel>
              <Input
                type="text"
                bg="#FFFFFF"
                placeholder="Enter your email."
                border={"none"}
              />
            </FormControl>
            <FormControl id="username" isRequired>
              <FormLabel>Insert Song</FormLabel>
              <Input
                type="file"
                bg="#FFFFFF"
                placeholder="Enter your email."
                border={"none"}
                pt="1"
              />
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                borderRadius={"22px"}
                size="lg"
                bg={"#1DB954"}
                color={"#121212"}
                _hover={{ bg: "#169844" }}
              >
                Add Song
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default AddSong;
