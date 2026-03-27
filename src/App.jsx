import { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Button as MuiButton } from '@mui/material';
import theme from './theme';
import Home from './pages/home';
import Trending from './pages/trending';
import WatchLater from './pages/watchLater';
import Actors from './pages/actors';
import AllMovies from './pages/allMovies';
import Signup from './pages/signup';
import MovieMeterChatbot from './components/MovieMeterChatbot';
import Navbar from './components/Navbar';
import { WatchLaterProvider } from './contexts/WatchLaterContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [ratings, setRatings] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('movieMeterRatings')) || {};
    } catch {
      return {};
    }
  });

  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    localStorage.setItem('movieMeterRatings', JSON.stringify(ratings));
  }, [ratings]);

  const handleToggleNav = () => setIsNavOpen((prev) => !prev);
  const handleNavigate = (pageId) => setCurrentPage(pageId);

  const handleRate = (movieId, value) => {
    if (!isAuthenticated) {
      alert('Please sign up using Google to rate movies.');
      setCurrentPage('signup');
      return;
    }
    setRatings((prev) => ({ ...prev, [movieId]: value }));
  };

  const renderPage = () => {
    const sharedProps = { onNavigate: handleNavigate, onRate: handleRate, ratings };
    switch (currentPage) {
      case 'home':
        return <Home {...sharedProps} />;
      case 'ai-assistant':
        return <MovieMeterChatbot />;
      case 'trending':
        return <Trending {...sharedProps} />;
      case 'watch-later':
        return <WatchLater />;
      case 'actors':
        return <Actors />;
      case 'all-movies':
        return <AllMovies {...sharedProps} />;
      case 'signup':
        return <Signup onNavigate={handleNavigate} />;
      default:
        return <Home {...sharedProps} />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingTop: '70px' }}>
      <Box
        sx={{
          position: 'fixed',
          top: 8,
          right: 16,
          zIndex: 100,
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        {isAuthenticated ? (
          <>
            <Box sx={{ color: '#fff', fontWeight: 700 }}>
              {user?.name || 'Signed In'}
            </Box>
            <MuiButton variant="outlined" color="inherit" onClick={async () => { await logout(); setCurrentPage('home'); }}>
              Sign out
            </MuiButton>
          </>
        ) : (
          <MuiButton
            variant="contained"
            color="primary"
            onClick={() => handleNavigate('signup')}
          >
            Sign up with Google
          </MuiButton>
        )}
      </Box>

      <Navbar
        isOpen={isNavOpen}
        onToggle={handleToggleNav}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <div>{renderPage()}</div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <WatchLaterProvider>
          <AppContent />
        </WatchLaterProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
