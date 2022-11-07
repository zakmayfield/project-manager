import { Heading, Box, Flex, Image, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import HomeImageUpload from './HomeImageUpload';

function HomePage() {
  return (
    <Box w='100%'>
      <Heading as='h1' size='lg' my='5' textAlign='center'>
        Home
      </Heading>

      <Flex justify='center' alignItems='center' flexDir='column'>
        <Image src='/assets/warning.png' alt='work in progress' boxSize='sm' />
        <Box>Home page is a work in progress</Box>

        <Box color='blue'>
          <Link to='/projects'>Looking for Projects?</Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default HomePage;
