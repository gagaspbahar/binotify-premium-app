import React from 'react'
import Navbar from '../components/Navbar'

import {
  Input,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

function Login() {
  return (
    <>
      <div>Ini Login</div>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
          <Input placeholder='First name' />
      </FormControl>
      <Button colorScheme='blue'>Button</Button>

    </>
  )
}

export default Login