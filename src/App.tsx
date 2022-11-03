import './App.css';

import ProjectsPage from './projects/ProjectsPage';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex className='app' w='100%' minH='100vh'>
      <ProjectsPage />
    </Flex>
  );
}

export default App;
