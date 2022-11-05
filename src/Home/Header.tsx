import { Box, Image, Flex, Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { usePathname } from '../hooks/usePathname';

function Header() {
  const pathname = usePathname();
  // usePathname is a custom hook that returns a string type of the current path

  const [activeLink = '/', setActiveLink] = useState<string>(pathname);
  // we set our default value of activeLink to '/' just to ensure there is always an active path
  // we are immediately setting our activeLink state to the returned string from usePathname

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);
  /*
    this useEffect is watching for pathname changes and when that change occurs it sets the activeLink to whatever string is returned by our usePathname hook
   */

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
          <Image src='/assets/logo-3.svg' minW={{ base: 150, sm: 100 }} />
        </Link>
      </Box>

      <Flex mt={{ base: '10', sm: '0' }} justifyContent={{ base: 'flex-end' }}>
        <Box mx={{ base: '4', sm: '2.5' }}>
          <Link to='/'>
            <Button
              w='full'
              variant='outline'
              bg={activeLink === '/' ? 'gray.100' : ''}
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
              variant='outline'
              bg={activeLink.includes('/projects') ? 'gray.100' : ''}
              leftIcon={<Icon as={GrProjects} />}
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
