import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from './Button';

function CTA({ title, description, buttonText = 'Get Started', onButtonClick }) {
  return (
    <Box
      component="section"
      sx={{ py: 10, borderTop: '2px solid #2196f3' }}
    >
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 700 }}
          >
            {title}
          </Typography>
          {description && (
            <Typography variant="body1" sx={{ color: '#90caf9' }}>
              {description}
            </Typography>
          )}
          <Button variant="primary" size="lg" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default CTA;
