import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

function Signup({ onNavigate }) {
  const { signInWithGoogle, isAuthenticated, user } = useAuth();

  const handleSignIn = async () => {
    const loggedInUser = await signInWithGoogle();
    
    if (loggedInUser) {
      onNavigate('home');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: 'rgba(23, 34, 65, 0.96)',
            border: '1px solid #2196f3',
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            textAlign: 'center',
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h4" fontWeight={800}>
              {isAuthenticated ? `Welcome back, ${user?.displayName}` : 'Sign up with Google'}
            </Typography>
            <Typography sx={{ color: '#d8d8d8' }}>
              Access full rating features after authentication. Your data is synced with your account.
            </Typography>
            <Button
              variant="primary"
              size="md"
              onClick={handleSignIn}
              sx={{ width: '100%', maxWidth: 350, mx: 'auto' }}
            >
              {isAuthenticated ? 'Continue to Home' : 'Sign in with Google'}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;