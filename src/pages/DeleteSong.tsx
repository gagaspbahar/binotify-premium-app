import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import playIcon from "../assets/play-white.png";

import {
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Link,
  TableContainer,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { axiosConfig } from "../utils/axios";
import { FiTrash } from "react-icons/fi";
import config from "../config/config";
import axios from "axios";
import { getUserId } from "../utils/auth";
const userId = getUserId();

function DeleteSong() {
  type Songs = {
    no: number;
    song_id: number;
    title: string;
    artist_id: number;
    audio_path: string;
  };

  const initialSongs: Songs[] = [];
  const [page, setPage] = useState(1);
  const [showIcon, setShowIcon] = useState(false);
  const [songs, setSongs] = useState(initialSongs);
  const [length, setLength] = useState(0);
  const newAxiosInstance = axios.create(axiosConfig);

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
        setLength(songs.length);
      });
  }, [page, length]);

  const handleDeletion = async (songId: number) => {
    newAxiosInstance
      .delete(`${config.REST_API_URL}/song/${songId}`)
      .then((res) => {
        console.log(res);
        setLength(length - 1);
      });
  };

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
                        <FiTrash onClick={() => handleDeletion(item.song_id)} />
                      </Td>
                    </Tr>
                  );
                })}
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
