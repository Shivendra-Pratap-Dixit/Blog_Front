import { Box, Flex ,Link as ChakraLink, Spacer} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex p="4" bg="teal.500" color="white">
        <Box>
            <Link to="/">
                <ChakraLink fontSize="xl" fontWeight="bold">Blog App</ChakraLink>
            </Link>
        </Box>
        <Spacer/>
        <Box>
            <Link to="/blog">
                <ChakraLink mx="4">Blogs</ChakraLink>
            </Link>
            <Link to="/signin">
                <ChakraLink mx="4">Login</ChakraLink>
            </Link>
            <Link to="/signup">
                <ChakraLink mx="4">Signup</ChakraLink>
            </Link>
        </Box>
    </Flex>
  )
}

export default Navbar