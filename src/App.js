import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import {
  ChakraProvider,
  Box,
  Button,
  ButtonGroup, 
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box
        textAlign="center"
        fontSize="xl"
        boxShadow="outline"
        p="6"
        rounded="md"
        bg="white"
        bgColor="#C0B283"
        color="#76323F"
      >
        <Header />
        <Button>Ver más</Button>

      </Box>
      <Box
        maxW='sm' 
        borderRadius='lg' 
        overflow='hidden'
        textAlign="center"
        fontSize="xl"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="white"
        bgColor="#DCD0C0"
        color="#76323F"
      >
        <Body />
        <Button>Reservar</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
