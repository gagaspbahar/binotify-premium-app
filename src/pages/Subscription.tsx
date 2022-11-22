import React from "react";
import Navbar from "../components/Navbar";

import {
  Text, Box
} from '@chakra-ui/react';

function Subscription() {
  return (
    <>
      <Navbar children={undefined} />
      <Box minH="100vh"
        bg="#212121"
        textColor="white"
        ml={{ base: 0, md: 60 }}
      >
        <Text  fontSize="4xl" fontWeight="bold" textAlign="left" ml='10'>Subscription Requests</Text> 
      </Box>
    </>
  );
}

export default Subscription;
