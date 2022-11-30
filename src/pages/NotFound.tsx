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

function NotFound() {
  return (
    <>
      <Text>tes</Text>
    </>
  );
}

export default NotFound;
