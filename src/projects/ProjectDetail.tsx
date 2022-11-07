import { Project } from './Project';
import {
  Box,
  Flex,
  Image,
  Heading,
  Badge,
  Button,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineRollback } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface ProjectDetailProps {
  project: Project;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  const navigate = useNavigate();

  return (
    <Flex
      maxW='xxl'
      minW='sm'
      borderWidth='1px'
      borderRadius='lg'
      my='2.5'
      flexDir='column'
      textAlign='left'
      fontSize='lg'
    >
      <Image borderTopRadius='lg' src={project.imageUrl} />
      <Flex
        flexDir='column'
        as='section'
        bg='gray.300'
        p='5'
        flex='1'
        justifyContent='space-around'
        borderBottomRadius='lg'
      >
        <Heading as='h3' size='sm'>
          <Flex alignItems='center'>
            <Badge
              p='2'
              borderRadius='full'
              colorScheme={project.isActive ? 'green' : 'red'}
            >
              {project.isActive ? 'active' : 'idle'}
            </Badge>
            <Box as='span' ml='2.5'>
              {project.name}
            </Box>
          </Flex>
        </Heading>

        <Box as='p' my='2.5'>
          {project.description}
        </Box>
        <Box as='p' fontSize='md'>
          Budget: ${Number(project.budget).toLocaleString()}
        </Box>

        <Flex alignItems='flex-end' justifyContent='space-between' mt='2.5'>
          <Button
            leftIcon={<Icon as={AiOutlineRollback} />}
            size='md'
            mt='2.5'
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProjectDetail;
