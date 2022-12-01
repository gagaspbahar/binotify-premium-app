import React from "react";
import Navbar from "../components/Navbar";

import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Slide,
  Button,
  Link,
  ButtonGroup,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  CloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { axiosConfig } from "../utils/axios";
import { getUserId } from "../utils/auth";
import axios from "axios";
import config from "../config/config";
import Loading from "../components/Loading";
import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

function AddSong() {
  const [loading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [audio, setAudio] = useState<File | null>();
  const newAxiosInstance = axios.create(axiosConfig);
  const toast = useToast();
  const userId = getUserId();
  const navigate = useNavigate();
  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(e.target.value);
    console.log("hi");
    console.log(title);
  };

  const handleChangeFile: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAudio(e.target.files?.item(0));
  };

  const handleCloseAlert = async () => {
    setShowAlert(false);
    navigate("/song-management");
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", audio as File);
    formData.append("title", title);
    formData.append("artist_id", userId.toString());
    console.log(formData);
    newAxiosInstance
      .post(`${config.REST_API_URL}/song`, formData)
      .then((res) => {
        console.log(res);
        setShowAlert(true);
        // navigate('/song-management');
      });
    setIsLoading(false);
  };

  return (
    <>
      <Navbar children={undefined} />
      {showAlert && (
        <Alert
          status="success"
          variant="subtle"
          // flexDirection='column'
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="80px"
        >
          <AlertIcon />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Your song has been added.</AlertDescription>
          <CloseButton
            alignSelf="flex-end"
            position={"absolute"}
            right={-1}
            top={-1}
            onClick={handleCloseAlert}
          />
        </Alert>
      )}

      <Loading loading={loading} />

      <Box minH="100vh" bg="#212121" textColor="white" minW="100vh">
        <Text
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mx="auto"
          pt="10"
        >
          Add Premium Song
        </Text>
        <Box maxW="50vh" mx="auto" mt="8vh">
          <Stack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Insert Title</FormLabel>
              <Input
                type="text"
                bg="#FFFFFF"
                placeholder="Enter song title."
                border={"none"}
                color="black"
                onChange={handleChangeTitle}
              />
            </FormControl>
            <FormControl id="song-file" isRequired>
              <FormLabel>Insert Song</FormLabel>
              <Input
                type="file"
                bg="#FFFFFF"
                placeholder="Enter your email."
                color="black"
                border={"none"}
                pt="1"
                onChange={handleChangeFile}
              />
            </FormControl>

            <ButtonGroup gap="2" ml="30vh" mr="30vh" px="76" pt="6">
              {/* <Link href="/song-management" style={{ textDecoration: "none" }}> */}
              <Button
                bg="#1DB954"
                _hover={{ bg: "#1DB954", color: "black" }}
                onClick={handleSubmit}
              >
                Done
              </Button>
              {/* </Link> */}
              <RouterLink to={{ pathname: "/song-management" }}>
                <Button
                  colorScheme="#212121"
                  variant="outline"
                  _hover={{ bg: "#7D7575", color: "black" }}
                >
                  Cancel
                </Button>
              </RouterLink>
            </ButtonGroup>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default AddSong;
