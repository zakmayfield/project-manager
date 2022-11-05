import { Box, Image, Flex, Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { useState } from 'react';

function Header() {
  const [activeLink, setActiveLink] = useState<string>('home');
  const changeActiveLink = (linkTo: 'home' | 'projects') => {
    linkTo === 'home' ? setActiveLink('home') : setActiveLink('projects');
  };
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
            onClick={() => changeActiveLink('home')}
          />
        </Link>
      </Box>

      <Flex mt={{ base: '10', sm: '0' }} justifyContent={{ base: 'flex-end' }}>
        <Box mx={{ base: '4', sm: '2.5' }}>
          <Link to='/'>
            <Button
              w='full'
              variant={activeLink === 'home' ? 'solid' : 'outline'}
              leftIcon={<Icon as={FaHome} />}
              onClick={() => changeActiveLink('home')}
            //   size={activeLink === 'home' ? 'lg' : 'md'}
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
              variant={activeLink === 'projects' ? 'solid' : 'outline'}
              onClick={() => changeActiveLink('projects')}
            //   size={activeLink === 'projects' ? 'lg' : 'md'}
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
