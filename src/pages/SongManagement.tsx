import React, {useState} from "react";
import Navbar from "../components/Navbar";
import playIcon from "../assets/play-white.png";

import {
  Text, Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Image, Link, 
  TableContainer,
} from '@chakra-ui/react'

function SongManagement() {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <>
      <Navbar children={undefined} />
      <Box minH="100vh" bg="#212121" textColor="white" ml={{ base: 0, md: 60 }}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="left" ml="10" pb="10">
          Manage Songs
        </Text>
        <TableContainer px="10">
          <Table variant="striped" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th color="white">#</Th>
                <Th color="white">Title</Th>
                <Th color="white">Duration</Th>
                <Th color="white"></Th>
              </Tr>
            </Thead>
            <Tbody>
              
              {/* efeknya boleh dihapus aja tar kalo artis gabisa play lagu */}
              <Tr _hover={{bg:'#282828'}} 
                onMouseEnter={() => setShowIcon(true)}
                onMouseLeave={() => setShowIcon(false)}
              >
                <Td>{showIcon ?  <Image src={playIcon} w="18px" h="18px"/> : "1"}</Td>
                <Td>What Makes You Beautiful</Td>
                <Td>3:50</Td>
                <Td>{showIcon ? "Edit" : ""}</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>One Thing</Td>
                <Td>3:50</Td>
                <Td>Edit</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Night Changes</Td>
                <Td>3:50</Td>
                <Td>Edit</Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>History</Td>
                <Td>3:50</Td>
                <Td>Edit</Td>
              </Tr>
              <Tr>
                <Td>5</Td>
                <Td>Steal My Girl</Td>
                <Td>3:50</Td>
                <Td>Edit</Td>
              </Tr>
              <Tr>
                <Td>6</Td>
                <Td>18</Td>
                <Td>3:50</Td>
                <Td>Edit</Td>
              </Tr>
              <Tr>
                <Td>7</Td>
                <Td>Drag Me Down</Td>
                <Td>3:50</Td>
                <Td>Edit</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default SongManagement;
