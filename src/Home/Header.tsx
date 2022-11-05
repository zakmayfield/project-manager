import { Box, Image, Flex, Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';

function Header() {
  // I need to reconsider using react router to grab route paramaters and check if path is / or /projects then that will update the state as routes change, rather than event handlers

  return (
    <Box
      as='header'
      display='flex'
      flexDir={{ base: 'column', sm: 'row' }}
      justifyContent='space-between'
      alignItems={{ base: 'center', sm: 'flex-end' }}
      py='5'
      px='5'
      boxShadow='sm'
    >
      <Box mr='2.5'>
        <Link to='/'>
          <Image
            src='/assets/logo-3.svg'
            minW={{ base: 150, sm: 100 }}
          />
        </Link>
      </Box>

      <Flex mt={{ base: '10', sm: '0' }} justifyContent={{ base: 'flex-end' }}>
        <Box mx={{ base: '4', sm: '2.5' }}>
          <Link to='/'>
            <Button
              w='full'
              variant='outline'
              leftIcon={<Icon as={FaHome} />}
            >
              Home
            </Button>
          </Link>
        </Box>

        <Box mx={{ base: '4', sm: '2.5' }}>
          <Link to='/projects'>
            <Button
              w='full'
              leftIcon={<Icon as={GrProjects} />}
              variant='outline'
            >
              Projects
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
