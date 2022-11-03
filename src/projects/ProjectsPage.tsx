import { Heading, Box } from '@chakra-ui/react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import {Project} from './Project'
import { useState } from 'react';

function ProjectsPage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS)

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p
    })
    setProjects(updatedProjects)
  }
  // this function is taking a project that was saved, a singular project, and comparing it against the previous state of 'projects'
  // if the project that you saved has an id that equals one in the array then it will update that project with the data you inputted otherwise it'll keep the project as it was previously
  // if id === id then update that one project, else dont update anything

  return (
    <Box>
      <Heading as='h1' size='lg'>
        Projects
      </Heading>

      <Box>
        <ProjectList projects={projects} onSave={saveProject} />
      </Box>
    </Box>
  );
}

export default ProjectsPage;
