import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import ProjectPage from './projects/ProjectPage'
import { Flex, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import Header from './Home/Header';


function App() {
  return (
    <Box>
      <Router>
        <Header />
        <Flex w='100%'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/projects/:id' element={<ProjectPage />} />
          </Routes>
        </Flex>
      </Router>
    </Box>
  );
}

export default App;
