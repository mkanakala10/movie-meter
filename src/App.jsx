import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import system from './theme';
import Home from './pages/home';
import Trending from './pages/trending';
import WatchLater from './pages/watchLater';
import MovieMeterChatbot from './components/MovieMeterChatbot';
import Navbar from './components/Navbar';
import { WatchLaterProvider } from './contexts/WatchLaterContext';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
  };

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'ai-assistant':
        return <MovieMeterChatbot />;
      case 'trending':
        return <Trending />;
      case 'watch-later':
        return <WatchLater />;
      case 'actors':
        return <div style={{ padding: '40px' }}>Actors Page - Coming Soon</div>;
      case 'movie-details':
        return <div style={{ padding: '40px' }}>Movie Details Page - Coming Soon</div>;
      default:
        return <Home />;
    }
  };

  return (
    <ChakraProvider value={system}>
      <WatchLaterProvider>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <Navbar 
            isOpen={isNavOpen} 
            onToggle={handleToggleNav}
            currentPage={currentPage}
            onNavigate={handleNavigate}
          />
          
          {/* Main content area */}
          <div>
            {renderPage()}
          </div>
        </div>
      </WatchLaterProvider>
    </ChakraProvider>
  );
}

export default App;