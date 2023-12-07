
import React, { useState } from 'react';
import { Box, Button, Heading, Input } from '@chakra-ui/react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    avatar:'',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    alert('Signup Success:', formData)
    console.log('Signup Data:', formData);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" w="400px" alignItems="center" mx="auto" mt="10px">
      <Heading as="h3" mb={4}>
        Sign Up
      </Heading>
      <Input
        type="text"
        placeholder="Username"
        mb={2}
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        type="email"
        placeholder="Emai"
        mb={2}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Avatar url"
        mb={2}
        name="avatar"
        value={formData.avatar}
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
      <Button colorScheme="teal" onClick={handleSignup}>
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
