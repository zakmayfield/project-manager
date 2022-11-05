import ProjectCard from './ProjectCard';
import { Box, Flex } from '@chakra-ui/react';
import { Project } from './Project';
import { useState } from 'react';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}
// We are defining our type interface as an object with a 'projects' property (the props obj we are passing our FN)

// After destructuring this prop obj -> { projects } we are left with a 'projects' array of objects that are in the shape of 'Project'

function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectToEdit, setProjectToEdit] = useState(() => ({}));

  const handleEdit = (project: Project) => {
    setProjectToEdit(project);
  };

  const handleCancel = () => {
    setProjectToEdit({});
  };

  return (
    <Box
      display='flex'
      flexWrap='wrap'
      gap='5'
      justifyContent={{ base: 'center', lg: 'flex-start' }}
      p='5'
    >
      {projects.map((project) => (
        <Flex key={project.id} flex='1' minW='xs' maxW='lg'>
          {/* setting flex='1' here will tell the item to grow to 100% of it's available space (until maxW is reached then it pops a new item onto the same row). This allows the card's to have responsive styling */}
          {project === projectToEdit ? (
            <ProjectForm
              key={project.id}
              project={project}
              onCancel={handleCancel}
              onSave={onSave}
            />
          ) : (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEdit}
            />
          )}
        </Flex>
      ))}
    </Box>
  );
}

export default ProjectList;
