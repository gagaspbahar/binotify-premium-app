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
  Image
} from '@chakra-ui/react';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        textColor={'white'}
        bg={useColorModeValue('#121212', 'gray.800')}>
          
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={8} px={6}>
        <Stack align={'center'}>
          <Image src={premiumLogo}  alt="logo" mb={8}/>
          <Text fontSize={'lg'} color={'white'}>
            To continue, login to Binotify.
          </Text>
        </Stack>

        <Box>
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" bg="#212121" placeholder="Enter your username" border={"none"} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} bg="#212121" placeholder="Enter your password" border={"none"}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={handleShowClick}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                borderRadius={"22px"}
                size="lg"
                bg={'#1DB954'}
                color={'#121212'}
                _hover={{ bg: '#169844'}}>
                Login
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={'center'} textColor="#939393">
                Didn't have an account? <Link color={'#1DB954'}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </>
  )
}

export default Login