import ProjectCard from './ProjectCard';
import { Box } from '@chakra-ui/react';
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
    <Box display='flex' flexWrap='wrap' justifyContent='space-around'>
      {projects.map((project) => (
        <Box key={project.id}>
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
        </Box>
      ))}
    </Box>
  );
}

export default ProjectList;
