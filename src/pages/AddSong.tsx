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
  ButtonGroup,
} from "@chakra-ui/react";

function AddSong() {
  return (
    <>
      <Navbar children={undefined} />

      <Box
        minH="100vh"
        bg="#212121"
        textColor="white"
        ml={{ base: 0, md: 40 }}
        minW="100vh"
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

            <ButtonGroup gap="2" ml="500" px="76" mt="10">
              <Link href="/song-management" style={{ textDecoration: "none" }}>
                <Button bg="#1DB954" _hover={{ bg: "#1DB954", color: "black" }}>
                  Done
                </Button>
              </Link>
              <Link href="/song-management" style={{ textDecoration: "none" }}>
                <Button
                  colorScheme="#212121"
                  variant="outline"
                  _hover={{ bg: "#7D7575", color: "black" }}
                >
                  Cancel
                </Button>
              </Link>
            </ButtonGroup>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default AddSong;
