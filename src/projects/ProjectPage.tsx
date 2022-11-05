import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Project } from './Project';
import { projectAPI } from './projectAPI';
import { Flex, Icon } from '@chakra-ui/react';
import { FaSpinner } from 'react-icons/fa';
import ProjectDetail from './ProjectDetail';

function ProjectPage() {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const id: number = Number(params.id);

  useEffect(() => {
    setLoading(true);
    projectAPI
      .find(id)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {error && (
        <Flex w='100%' mt='5' justifyContent='center'>
          {error}
        </Flex>
      )}

      {loading && (
        <Flex w='100%' mt='5' justifyContent='center'>
          <Icon as={FaSpinner} className='spinner' w={8} h={8} />
        </Flex>
      )}

      {project && <ProjectDetail project={project} />}
    </div>
  );
}

export default ProjectPage;
