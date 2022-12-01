import React, { useState, useEffect } from "react";
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
import { axiosConfig } from "../utils/axios";
import { getUserId } from "../utils/auth";
import config from "../config/config";
import axios from "axios";

function SongManagement() {
  type Songs = {
    no: number;
    song_id: number;
    title: string;
    artist_id: number;
    audio_path: string;
  };

  const initialSongs: Songs[] = [];
  const [songs, setSongs] = useState(initialSongs);
  const [page, setPage] = useState(1);
  const newAxiosInstance = axios.create(axiosConfig);
  const userId = getUserId();

  useEffect(() => {
    newAxiosInstance
      .get(`${config.REST_API_URL}/songlist/${userId}?page=${page}`)
      .then((res) => {
        const songData: Songs[] = res.data.data.songList.map((song: any) => {
          return {
            no: res.data.data.songList.indexOf(song) + 1,
            song_id: song.songId,
            title: song.title,
            artist_id: song.artist_id,
            audio_path: song.audio_path,
          };
        });
        setSongs(songData);
      });
  }, [page]);

  const handleNextPage = (e: any) => {
    setPage(page + 1);
  };

  const handlePrevPage = (e: any) => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  /*
  useEffect(() => {
    try {
      const userId = getUserId();
      const getSongs = async () => {
        const response = await axiosInstance.get(
          "songlist/" + userId.toString() + "?page=" + page.toString()
        );
        setSongs(response.data.data.songList);
        console.log(response.data.page);
      };
      getSongs();
    } catch (err) {
      console.log(err);
    }
  }, []);
  */

  return (
    <>
      <Navbar children={undefined} />
      <Box minH="100vh" bg="#212121" textColor="white">
        <Flex minWidth="max-content" alignItems="center" gap="2" pr="10">
          <Text fontSize="4xl" fontWeight="bold" textAlign="left" ml="10">
            Manage Songs
          </Text>
          <Spacer />
          <ButtonGroup gap="2">
            <Link href="/add-song" style={{ textDecoration: "none" }}>
              <Button
                colorScheme="#212121"
                variant="outline"
                _hover={{ bg: "#1DB954", color: "black" }}
              >
                Add Songs
              </Button>
            </Link>
            <Link href="/delete-song" style={{ textDecoration: "none" }}>
              <Button
                colorScheme="#212121"
                variant="outline"
                _hover={{
                  bg: "#FF0052",
                  color: "black",
                }}
              >
                Delete Songs
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>

        <TableContainer px="10">
          <Table variant="striped" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th color="white">#</Th>
                <Th color="white">Title</Th>
                <Th color="white"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {songs.length > 0 &&
                songs.map((item) => {
                  return (
                    <Tr key={item.song_id}>
                      <Td>{item.no}</Td>
                      <Td>{item.title}</Td>
                      <Td>
                        <Link
                          href={"/edit-song/" + item.song_id.toString()}
                          style={{ textDecoration: "none" }}
                        >
                          Edit
                        </Link>
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

export default SongManagement;
