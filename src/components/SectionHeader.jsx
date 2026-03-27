import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function SectionHeader({ title, subtitle }) {
  return (
    <Stack spacing={1.5} mb={6} alignItems="center" textAlign="center">
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 700 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" sx={{ color: '#90caf9', fontWeight: 400 }}>
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
}

export default SectionHeader;
