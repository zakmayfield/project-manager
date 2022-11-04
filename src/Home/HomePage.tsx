import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box w='100%'>
      <Heading as='h1' size='lg' my='5' textAlign='center'>
        Home
      </Heading>
    </Box>
  );
}

export default HomePage;
