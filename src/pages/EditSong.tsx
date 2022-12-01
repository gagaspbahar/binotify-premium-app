import React, { useEffect, useState } from "react";
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
  FormHelperText,
  color,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { axiosConfig } from "../utils/axios";
import config from "../config/config";
import axios from "axios";
import Loading from "../components/Loading";

import { getAuthData } from "../utils/auth";

function EditSong() {
  type Song = {
    title: string;
    filename: string;
  };

  const { id } = useParams();
  const [song, setSong] = useState<Song>();
  const [title, setTitle] = useState("");
  const [audio, setAudio] = useState<File | null>();
  const [loading, setIsLoading] = useState(false);
  const newAxiosInstance = axios.create(axiosConfig);
  const userId = getAuthData().userId;

  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleChangeFile: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAudio(e.target.files?.item(0));
  };

  useEffect(() => {
    newAxiosInstance.get(`${config.REST_API_URL}/song/${id}`).then((res) => {
      setSong(res.data.data);
      console.log(song);
    });
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    console.log("liat data");
    console.log(title);
    console.log(audio);
    if (audio !== undefined) {
      formData.append("file", audio as File);
      console.log("masok file");
    }
    if (title !== "") {
      formData.append("title", title);
      console.log("masok title");
    }
    formData.append("artist_id", userId.toString());
    console.log(formData);
    newAxiosInstance
      .put(`${config.REST_API_URL}/song/${id}`, formData)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      });
    setIsLoading(false);
  };

  return (
    <>
      <Loading loading={loading} />
      <Navbar children={undefined} />

      <Box minH="100vh" bg="#212121" textColor="white" minW="100vh" pt="10">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" mx="auto">
          Edit Premium Song
          {id}
        </Text>
        <Box maxW="50vh" mx="auto" mt="8vh">
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Insert New Title</FormLabel>
              <Input
                type="text"
                bg="#FFFFFF"
                color="black"
                placeholder={song?.title}
                border={"none"}
                onChange={handleChangeTitle}
              />
            </FormControl>
            <FormControl id="username">
              <FormLabel>Insert New Song File</FormLabel>
              <Input
                type="file"
                bg="#FFFFFF"
                placeholder="New File"
                border={"none"}
                color="black"
                onChange={handleChangeFile}
                pt="1"
              />
              <FormHelperText color="white">
                Previous Song: {song?.filename}{" "}
              </FormHelperText>
            </FormControl>

            <ButtonGroup gap="2" ml="500" px="76" pt="30">
              <Link style={{ textDecoration: "none" }}>
                <Button
                  bg="#1DB954"
                  _hover={{ bg: "#1DB954", color: "black" }}
                  onClick={handleSubmit}
                >
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
