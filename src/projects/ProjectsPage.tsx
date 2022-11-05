import { Heading, Box, Flex, Icon, Button } from '@chakra-ui/react';
import ProjectList from './ProjectList';
import { Project } from './Project';
import { useState, useEffect } from 'react';
import { projectAPI } from './projectAPI';
import { FaSpinner } from 'react-icons/fa';

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit] = useState<number>(4);

  useEffect(() => {
    setLoading(true);
    projectAPI
      .get(currentPage, limit)
      .then((data) => {
        setError(undefined);
        setLoading(false);
        currentPage === 1
          ? setProjects(data)
          : setProjects((projects) => [...projects, ...data]);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
        if (e instanceof Error) {
          setError(e.message);
        }
      });
  }, [currentPage, limit]);

  const saveProject = (project: Project) => {
    projectAPI
      .put(project)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p: Project) => {
          return p.id === project.id ? updatedProject : p;
        });
        setProjects(updatedProjects)
      })
      .catch((e) => e instanceof Error && setError(e.message));
  };
  // this function is taking a project that was saved, a singular project, and comparing it against the previous state of 'projects'
  // if the project that you saved has an id that equals one in the array then it will update that project with the data you inputted otherwise it'll keep the project as it was previously
  // if id === id then update that one project, else dont update anything

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Box w='100%'>
      <Heading as='h1' size='lg' my='5' textAlign='center'>
        Projects
      </Heading>

      {error && (
        <Flex w='100%' mt='5' justifyContent='center'>
          {error}
        </Flex>
      )}

      <Box>
        <ProjectList projects={projects} onSave={saveProject} />
      </Box>

      {loading && (
        <Flex w='100%' mt='5' justifyContent='center'>
          <Icon as={FaSpinner} className='spinner' w={8} h={8} />
        </Flex>
      )}

      <Flex justifyContent='center' my='5'>
        <Button colorScheme='blue' onClick={nextPage}>
          See more projects
        </Button>
      </Flex>
    </Box>
  );
}

export default ProjectsPage;
