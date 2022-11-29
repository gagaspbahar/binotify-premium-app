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
  Spinner,
} from "@chakra-ui/react";
import { axiosInstance } from "../utils/axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  const handleChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmation: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmation(e.target.value);
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/register", {
        username: username,
        password: password,
        email: email,
        name: name,
      });

      console.log("Register successful");
      setLoading(false);

      navigate("/login");
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      if (err.response?.status === 401) {
        console.log("Register Failed");
      } else {
        console.log("Another Error");
      }
    }
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
        <Stack spacing={8} mx={"auto"} maxW={"lg"} minW={"md"} py={8} px={6}>
          <Stack align={"center"}>
            <Text fontSize={"6xl"} color={"white"} py={8}>
              Binotify
            </Text>
            <Text fontSize={"lg"} color={"white"}>
              Sign up for free to start listening
            </Text>
          </Stack>

          <Box>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Insert your name</FormLabel>
                <Input
                  type="text"
                  bg="#212121"
                  placeholder="Enter your name."
                  border={"none"}
                  onChange={handleChangeName}
                />
              </FormControl>
              <FormControl id="username" isRequired>
                <FormLabel>Create a username</FormLabel>
                <Input
                  type="text"
                  bg="#212121"
                  placeholder="Enter your username."
                  border={"none"}
                  onChange={handleChangeUsername}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>What's your email?</FormLabel>
                <Input
                  type="text"
                  bg="#212121"
                  placeholder="Enter your email."
                  border={"none"}
                  onChange={handleChangeEmail}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Create a Password</FormLabel>
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

              <FormControl id="confirm-password" isRequired>
                <FormLabel>Confirm Your Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    bg="#212121"
                    placeholder="Enter your password"
                    border={"none"}
                    onChange={handleChangeConfirmation}
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
                  onClick={handleRegister}
                >
                  Sign Up
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Have an account?{" "}
                  <Link href="/login" color={"#1DB954"}>
                    Log In
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

export default Register;
