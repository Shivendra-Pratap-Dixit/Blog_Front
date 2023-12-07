
import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Blog = ({ title, content, category, date }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
      <Heading as="h3" mb={2}>
        {title}
      </Heading>
      <Text>{content}</Text>
      <Text mt={2}>Category: {category}</Text>
      <Text mt={2}>Date: {date}</Text>
      {/* Add like and comment buttons */}
      <Button colorScheme="teal" mt={2} mr={2}>
        Like
      </Button>
      <Button colorScheme="teal" mt={2}>
        Comment
      </Button>
    </Box>
  );
};

export default Blog;
