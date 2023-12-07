
import React, { useState } from 'react';
import { Box, Button, Heading, Input, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    alert('Login Succes:', formData)
    console.log('Login Data:', formData);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" w="600px" mx="auto" mt={"10px"}>
      <Heading as="h3" mb={4}>
        Sign In
      </Heading>
      <Input
        type="text"
        placeholder="Email"
        mb={2}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        mb={2}
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button colorScheme="teal" onClick={handleLogin}>
        Sign In
      </Button>
      <Box mt={4}>
        Don't have an account?{' '}
        <Link as={RouterLink} to="/signup">
          Sign Up
        </Link>
      </Box>
    </Box>
  );
};

export default Signin;
