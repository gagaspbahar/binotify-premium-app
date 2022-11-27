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

function EditSong() {
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
          Edit Premium Song
        </Text>
        <Box maxW="50vh" mx="auto" mt="8vh">
          <Stack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Insert New Title</FormLabel>
              <Input
                type="text"
                bg="#FFFFFF"
                placeholder="New Title"
                border={"none"}
              />
            </FormControl>
            <FormControl id="username" isRequired>
              <FormLabel>Insert New Song File</FormLabel>
              <Input
                type="file"
                bg="#FFFFFF"
                placeholder="New File"
                border={"none"}
                pt="1"
              />
            </FormControl>

            <ButtonGroup gap="2" ml="500" px="76" pt="30">
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

export default EditSong;
