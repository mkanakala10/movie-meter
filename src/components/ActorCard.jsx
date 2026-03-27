import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

function ActorCard({ actor }) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg,#16213e,#0f3460)',
        borderRadius: '4px',
        overflow: 'hidden',
        border: '2px solid #2196f3',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 6px 20px rgba(33,150,243,0.5)',
        },
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '150%' }}>
        <Box
          component="img"
          src={actor.image}
          alt={actor.name}
          sx={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: 'grey.800',
          }}
        />
        <Chip
          label={`${actor.trendingScore}%`}
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: 'linear-gradient(135deg,#2196f3,#1976d2)',
            color: '#fff',
            border: '1px solid #64b5f6',
            fontWeight: 600,
            fontSize: '0.75rem',
          }}
        />
      </Box>

      <Stack spacing={0.5} p={2} alignItems="center" flex={1} justifyContent="center">
        <Typography fontWeight={600} fontSize="0.95rem" textAlign="center">
          {actor.name}
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography fontSize="0.9rem">↑</Typography>
          <Typography fontSize="0.8rem" sx={{ color: '#90caf9' }}>
            Trending
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ActorCard;
