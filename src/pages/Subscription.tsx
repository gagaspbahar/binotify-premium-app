import React from "react";
import Navbar from "../components/Navbar";

import {
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function Subscription() {
  return (
    <>
      <Navbar children={undefined} />
      <Box minH="100vh" bg="#212121" textColor="white" ml={{ base: 0, md: 60 }}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="left" ml="10" pb="10">
          Subscription Requests
        </Text>
        <TableContainer px="10">
          <Table variant="striped" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th color="white">No</Th>
                <Th color="white">Username</Th>
                <Th color="white">Email</Th>
                <Th color="white">Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>gagasbestiegede</Td>
                <Td>gagasgede@binotify.com</Td>
                <Td>ditolak</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>gagasbestiegede</Td>
                <Td>gagasgede@binotify.com</Td>
                <Td>ditolak</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>gagasbestiegede</Td>
                <Td>gagasgede@binotify.com</Td>
                <Td>ditolak</Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>gagasbestiegede</Td>
                <Td>gagasgede@binotify.com</Td>
                <Td>ditolak</Td>
              </Tr>
              <Tr>
                <Td>5</Td>
                <Td>gagasbestiegede</Td>
                <Td>gagasgede@binotify.com</Td>
                <Td>ditolak</Td>
              </Tr>
              <Tr>
                <Td>6</Td>
                <Td>gagasbestiegede</Td>
                <Td>gagasgede@binotify.com</Td>
                <Td>ditolak</Td>
              </Tr>
              <Tr>
                <Td>7</Td>
                <Td>gagasbestiegede</Td>
                <Td>gagasgede@binotify.com</Td>
                <Td>ditolak</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Subscription;
