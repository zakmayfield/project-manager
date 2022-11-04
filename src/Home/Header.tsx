import { Box, Image, Flex, Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';

function Header() {
  return (
    <Box
      as='header'
      display='flex'
      justifyContent='space-between'
      alignItems='flex-end'
      py='5'
      px='5'
      boxShadow='sm'
    >
      <Box mr='2.5'>
        <Link to='/'>
          <Image src='/assets/logo-3.svg' minW={100} />
        </Link>
      </Box>

      <Flex flexDir={{ base: 'column', sm: 'row'}} justifyContent={{ base: 'flex-end' }}>
        <Box mx='2.5'>
          <Link to='/'>
            <Button w='full' variant='outline' leftIcon={<Icon as={FaHome} />}>
              Home
            </Button>
          </Link>
        </Box>

        <Box mx='2.5' mt={{ base: '2.5', sm: '0'}}>
          <Link to='/projects'>
            <Button w='full' variant='outline' leftIcon={<Icon as={GrProjects} />}>
              Projects
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
