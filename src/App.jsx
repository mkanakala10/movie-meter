import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Home from './pages/home';
import Trending from './pages/trending';
import WatchLater from './pages/watchLater';
import Actors from './pages/actors';
import AllMovies from './pages/allMovies';
import MovieMeterChatbot from './components/MovieMeterChatbot';
import Navbar from './components/Navbar';
import { WatchLaterProvider } from './contexts/WatchLaterContext';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleToggleNav = () => setIsNavOpen((prev) => !prev);
  const handleNavigate = (pageId) => setCurrentPage(pageId);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'ai-assistant':
        return <MovieMeterChatbot />;
      case 'trending':
        return <Trending />;
      case 'watch-later':
        return <WatchLater />;
      case 'actors':
        return <Actors />;
      case 'all-movies':
        return <AllMovies />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WatchLaterProvider>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <Navbar
            isOpen={isNavOpen}
            onToggle={handleToggleNav}
            currentPage={currentPage}
            onNavigate={handleNavigate}
          />
          <div>{renderPage()}</div>
        </div>
      </WatchLaterProvider>
    </ThemeProvider>
  );
}

export default App;
