import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const FILM_STRIP = 'repeating-linear-gradient(90deg,#2196f3 0px,#2196f3 15px,#1976d2 15px,#1976d2 20px,#fff 20px,#fff 25px,#1976d2 25px,#1976d2 30px)';

function Header() {
  return (
    <Box
      component="header"
      sx={{
        py: { xs: 3, md: 5 },
        borderBottom: '2px solid #2196f3',
        background: 'linear-gradient(180deg,#0f3460 0%,#16213e 100%)',
        position: 'relative',
      }}
    >
      <Box sx={{ height: '8px', background: FILM_STRIP, position: 'absolute', top: 0, left: 0, right: 0 }} />

      <Container maxWidth="xl" sx={{ pt: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 800,
              letterSpacing: '-1px',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            Movie Meter
          </Typography>
        </Box>
      </Container>

      <Box sx={{ height: '8px', background: FILM_STRIP, position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </Box>
  );
}

export default Header;
