
import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import Blog from './Blog';
import { Link } from 'react-router-dom';

const Blogs = () => {
  
  const blogsData = [
    {
      id: 1,
      title: 'Sample Blog 1',
      content: 'This is the content of the sample blog.',
      category: 'Tech',
      date: '2023-01-01',
    },
    {
      id: 2,
      title: 'Sample Blog 2',
      content: 'This is another sample blog content.',
      category: 'Lifestyle',
      date: '2023-01-02',
    },
  ];

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Blogs
      </Heading>
      {blogsData.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          content={blog.content}
          category={blog.category}
          date={blog.date}
        />
      ))}
      {/* Add a link/button to navigate to the BlogForm component */}
      <Link to="/blogform"><Button colorScheme="teal" mt={4} >
        Create Blog
      </Button></Link>
    </Box>
  );
};

export default Blogs;
