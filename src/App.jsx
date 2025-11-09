import { ChakraProvider } from '@chakra-ui/react';
import system from './theme';
import Home from './pages/home';

function App() {
  return (
    <ChakraProvider value={system}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
