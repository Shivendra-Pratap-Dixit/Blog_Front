// components/blogs/BlogForm.js
import React, { useState } from 'react';
import { Box, Heading, Input, Textarea, Select, Button } from '@chakra-ui/react';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    username: 'exampleUser', 
    title: '',
    content: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateBlog = () => {
   alert('Blog Data:', formData)
    console.log('Blog Data:', formData);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Heading as="h3" mb={4}>
        Create Blog
      </Heading>
      <Input
        type="text"
        placeholder="Title"
        mb={2}
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <Textarea
        placeholder="Content"
        mb={2}
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <Select
        placeholder="Select category"
        mb={2}
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="business">Business</option>
        <option value="tech">Tech</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="entertainment">Entertainment</option>
      </Select>
     
      <Input
        type="text"
        placeholder="Date"
        mb={2}
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <Button colorScheme="teal" onClick={handleCreateBlog}>
        Create Blog
      </Button>
    </Box>
  );
};

export default BlogForm;
