import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
  FormHelperText,
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
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    budget: '',
  });

  function validate(project: Project) {
    let errors: any = {
      name: '',
      description: '',
      budget: '',
    };

    if (project.name.length === 0) {
      errors.name = 'Project name is required';
    }
    if (project.description.length === 0) {
      errors.description = 'Description is required';
    }
    if (project.budget.length === 0 || Number(project.budget) < 1) {
      errors.budget = 'Budget must be more than $0';
    }

    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      (errors.budget.length === 0 || errors.budget === '0')
    );
  }
  // this isValid fn returns true or false depending on the conditions being met within return ()

  const handleChange = (e: any) => {
    // let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    let value;

    if (e.target.name === 'budget') {
      value = e.target.value.replace(/\D/g, '');
    } else if (e.target.type === 'checkbox') {
      value = e.target.checked
    } else {
      value = e.target.value
    }
    // implemented an if check to add regex to the 'budget' input
    // budget needs to be a string of numbers due to data on the backend
    // this regex is to ensure that only numbers are entered into a text input

    let change = {
      [e.target.name]: value,
    };

    let updatedProject: Project;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });

    setErrors(() => validate(updatedProject));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isValid()) return;
    onSave(project);
    onCancel()
    // calling on cancel will set the projectToEdit to {}, meaning the form will close if you hit save on an unedited ProjectCard
  };

  return (
    <Flex
      borderWidth='1px'
      borderRadius='lg'
      flexDir='column'
      w='100%'
    >
      <Flex as='form' flexDir='column' p='2.5' alignItems='stretch'>
        {/* 
            This form needs to take up the full height of the row that it's in. This form has very similar styling to the ProjectCard's but it is not filling the full height 
        */}
        <FormControl mb='4' isRequired>
          <FormLabel>Project Name</FormLabel>
          <Input
            autoFocus
            placeholder='Project Name'
            name='name'
            type='text'
            value={project.name}
            onChange={handleChange}
          />
          {errors.name && (
            <FormHelperText color='red'>{errors.name}</FormHelperText>
          )}
        </FormControl>

        <FormControl mb='4'>
          <FormLabel>Description *</FormLabel>
          <Textarea
            placeholder='Description...'
            name='description'
            value={project.description}
            onChange={handleChange}
          />
          {errors.description && (
            <FormHelperText color='red'>{errors.description}</FormHelperText>
          )}
        </FormControl>

        <FormControl mb='4' isRequired>
          <FormLabel>Budget</FormLabel>
          <Input
            placeholder='12000'
            name='budget'
            type='string'
            value={project.budget}
            onChange={handleChange}
          />
          {errors.budget && (
            <FormHelperText color='red'>{errors.budget}</FormHelperText>
          )}
        </FormControl>

        <FormControl mb='4'>
          <Checkbox
            name='isActive'
            isChecked={project.isActive}
            onChange={handleChange}
          >
            Active?
          </Checkbox>
        </FormControl>

        <Flex mt='6' justifyContent='space-around'>
          <Button
            flex='2'
            size='md'
            colorScheme='blue'
            mr='1'
            disabled={!isValid()}
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
