import React, { useState } from "react";
import Navbar from "../components/Navbar";
import playIcon from "../assets/play-white.png";

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
  Image,
  Link,
  TableContainer,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import { FiTrash } from "react-icons/fi";

function DeleteSong() {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <>
      <Navbar children={undefined} />
      <Box minH="100vh" bg="#212121" textColor="white" ml={{ base: 0, md: 60 }}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="left" ml="10" mb="10">
          Delete Songs
        </Text>

        <TableContainer px="10" mb="10">
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
              <Tr>
                <Td>
                  {showIcon ? <Image src={playIcon} w="18px" h="18px" /> : "1"}
                </Td>
                <Td>What Makes You Beautiful</Td>
                <Td>3:50</Td>
                <Td>
                  <FiTrash />
                </Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>One Thing</Td>
                <Td>3:50</Td>
                <Td>
                  <FiTrash />
                </Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Night Changes</Td>
                <Td>3:50</Td>
                <Td>
                  <FiTrash />
                </Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>History</Td>
                <Td>3:50</Td>
                <Td>
                  <FiTrash />
                </Td>
              </Tr>
              <Tr>
                <Td>5</Td>
                <Td>Steal My Girl</Td>
                <Td>3:50</Td>
                <Td>
                  <FiTrash />
                </Td>
              </Tr>
              <Tr>
                <Td>6</Td>
                <Td>18</Td>
                <Td>3:50</Td>
                <Td>
                  <FiTrash />
                </Td>
              </Tr>
              <Tr>
                <Td>7</Td>
                <Td>Drag Me Down</Td>
                <Td>3:50</Td>
                <Td>
                  <FiTrash />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box>
          <ButtonGroup gap="2" ml="500">
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
        </Box>
      </Box>
    </>
  );
}

export default DeleteSong;
