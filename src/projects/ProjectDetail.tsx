import { Project } from './Project';
import {
  Box,
  Flex,
  Image,
  Heading,
  Badge,
} from '@chakra-ui/react';

interface ProjectDetailProps {
  project: Project;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <Flex
      maxW='xxl'
      minW='sm'
      borderWidth='1px'
      borderRadius='lg'
      my='2.5'
      flexDir='column'
      textAlign='left'
    >
      <Image borderTopRadius='lg' src={project.imageUrl} />
      <Flex
        flexDir='column'
        as='section'
        bg='gray.300'
        p='5'
        flex='1'
        // flex will tell each item to take up 100 percent of the space it has on it's row, this means any cards that are smaller will retain the same height dimensions as the rest of the cards
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

        <Box as='p' my='2.5' noOfLines={2}>
          {/* noOfLines will limit the description to 3 lines of real estate, after which the description is truncated to '...' */}
          {project.description}
        </Box>
        <Box as='p'>Budget: ${Number(project.budget).toLocaleString()}</Box>
        {/* toLocaleString will format the number from 1000 to 1,000 */}

        {/* <Flex alignItems='flex-end' justifyContent='space-between'>
          <Button
            leftIcon={<Icon as={FaEdit} />}
            size='md'
            mt='2.5'
            w='33%'
            onClick={() => onEdit(project)}
          >
            Edit
          </Button>

          <Button>
            <Icon as={FiEye} />
          </Button>
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default ProjectDetail;
