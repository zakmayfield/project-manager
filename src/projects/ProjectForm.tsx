import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { useState, SyntheticEvent } from 'react';
import { Project } from './Project';

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

function ProjectForm({
  project: initialProject,
  onCancel,
  onSave,
}: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);

  const handleChange = (e: any) => {
    let value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    if (value === 'number') {
      value = Number(value);
    }

    let change = {
      [e.target.name]: value,
    };

    let updatedProject: Project;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('project ->', project)
    onSave(project);
  };

  return (
    <Flex
      minW='sm'
      borderWidth='1px'
      borderRadius='lg'
      my='2.5'
      flexDir='column'
      textAlign='left'
    >
      <Flex as='form' flexDir='column' p='2.5' alignItems='stretch'>
        {/* 
            This form needs to take up the full height of the row that it's in. This form has very similar styling to the ProjectCard's but it is not filling the full height 
        */}
        <FormControl mb='4'>
          <FormLabel>Project Name</FormLabel>
          <Input
            placeholder='name'
            name='name'
            type='text'
            value={project.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb='4'>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder='Description...'
            name='description'
            value={project.description}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb='4'>
          <FormLabel>Budget</FormLabel>
          <Input
            placeholder='12000'
            name='budget'
            type='number'
            value={project.budget}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb='4'>
          <Checkbox name='isActive' isChecked={project.isActive} onChange={handleChange}>
            Active?
          </Checkbox>
        </FormControl>

        <Flex mt='6' justifyContent='space-around'>
          <Button
            flex='2'
            size='md'
            colorScheme='blue'
            mr='1'
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button flex='1' size='md' ml='1' onClick={onCancel}>
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProjectForm;
