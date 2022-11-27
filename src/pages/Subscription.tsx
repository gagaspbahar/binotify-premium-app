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
  TableContainer,
  Select,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { useState } from "react";

import { colors } from "../theme";

interface Users {
  no: number;
  username: string;
  email: string;
  status: string;
}

const initialUsers: Users[] = [
  {
    no: 1,
    username: "gagasgede",
    email: "gagasgede@binotify.com",
    status: "PENDING",
  },
  {
    no: 2,
    username: "clauculus",
    email: "clauculus@binotify.com",
    status: "ACCEPTED",
  },
  {
    no: 3,
    username: "lyoraf",
    email: "lyo@binotify.com",
    status: "PENDING",
  },
];

function Subscription() {
  const [users, setUsers] = useState(initialUsers);

  return (
    <>
      <Navbar children={undefined} />
      <Box minH="100vh" bg="#212121" textColor="white" ml={{ base: 0, md: 60 }}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" pb="10">
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
              {users.map((user) => {
                return (
                  <Tr>
                    <Td>{user.no}</Td>
                    <Td>{user.username}</Td>
                    <Td>{user.email}</Td>
                    <Td>
                      {user.status === "PENDING" ? (
                        <ButtonGroup gap="2">
                          <Button
                            bg={colors.primaryColor}
                            _hover={{
                              bg: colors.white,
                              color: "black",
                            }}
                          >
                            Accept
                          </Button>

                          <Button
                            bg={colors.red}
                            _hover={{
                              bg: colors.white,
                              color: "black",
                            }}
                          >
                            Reject
                          </Button>
                        </ButtonGroup>
                      ) : (
                        user.status
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Subscription;
