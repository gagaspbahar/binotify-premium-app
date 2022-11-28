import premiumLogo from "../assets/premium-logo.svg";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
  Image,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { axiosInstance } from "../utils/axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthToken, getAuthData } from "../utils/auth";
import { Payload } from "../types/user";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(e.target.value);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/login", {
        username: username,
        password: password,
      });

      console.log("Login successful");
      setLoading(false);
      setAuthToken(response.data.token);

      const payload: Payload = getAuthData();
      if (payload.isAdmin) {
        navigate("/subscription");
      } else {
        navigate("/song-management");
      }
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      if (err.response?.status === 401) {
        console.log("Login Failed");
      } else {
        console.log("Internal server error");
      }
    }

    /*

    if (response.status === 200) {
      // setLoading(true);
      console.log(loading)
      console.log("Login successful");
      console.log(loading)
      setLoading(false)
      setAuthToken(response.data.token);
      const payload: Payload = getAuthData();
      if (payload.isAdmin) {
        navigate("/subscription")
      } else {
        navigate("/song-management")
      }
    } else {
      setLoading(false);
      console.log("Error login")
    }
  
  */
  };

  return (
    <>
      {/* nanti distyling */}
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        textColor={"white"}
        bg={useColorModeValue("#121212", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={8} px={6}>
          <Stack align={"center"}>
            <Image src={premiumLogo} alt="logo" mb={8} />
            <Text fontSize={"lg"} color={"white"}>
              To continue, login to Binotify.
            </Text>
          </Stack>

          <Box>
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  bg="#212121"
                  placeholder="Enter your username"
                  border={"none"}
                  onChange={handleChangeUsername}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    bg="#212121"
                    placeholder="Enter your password"
                    border={"none"}
                    onChange={handleChangePassword}
                  />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={handleShowClick}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  borderRadius={"22px"}
                  size="lg"
                  bg={"#1DB954"}
                  color={"#121212"}
                  _hover={{ bg: "#169844" }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"} textColor="#939393">
                  Didn't have an account?{" "}
                  <Link href="/register" color={"#1DB954"}>
                    Sign Up
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Login;
