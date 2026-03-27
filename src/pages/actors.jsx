import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import ActorCard from '../components/ActorCard';

function Actors() {
  const [actors, setActors] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    if (!apiKey) {
      setError('Missing TMDB API key. Add VITE_TMDB_API_KEY to your .env file.');
      setIsLoading(false);
      return;
    }

    const fetchActors = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const pages = await Promise.all(
          [1, 2, 3].map((page) =>
            fetch(
              `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=${page}`
            ).then((r) => r.json())
          )
        );

        const allPeople = pages.flatMap((d) => d.results || []);
        const indianActors = allPeople
          .filter((person) =>
            person.known_for?.some(
              (m) =>
                m.origin_country?.includes('IN') ||
                ['hi', 'ta', 'te', 'ml', 'kn'].includes(m.original_language)
            )
          )
          .filter((person) => person.profile_path)
          .slice(0, 40)
          .map((person) => ({
            id: person.id,
            name: person.name,
            image: `https://image.tmdb.org/t/p/w500${person.profile_path}`,
            trendingScore: Math.round(person.popularity),
          }));

        setActors(indianActors);
        setFiltered(indianActors);
      } catch (err) {
        setError('Unable to load actors. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActors();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFiltered(actors);
    } else {
      setFiltered(
        actors.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
  }, [search, actors]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
        color: '#fff',
      }}
    >
      <Header />
      <Container maxWidth="xl">
        <Stack spacing={0}>
          <Box component="section" py={6} textAlign="center">
            <SectionHeader
              title="Indian Actors"
              subtitle="Explore the most popular stars of Indian cinema"
            />
            <Box sx={{ maxWidth: '400px', mx: 'auto', mt: 2 }}>
              <TextField
                fullWidth
                placeholder="Search actors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#90caf9' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '50px',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    '& fieldset': { borderColor: '#2196f3' },
                    '&:hover fieldset': { borderColor: '#64b5f6' },
                    '&.Mui-focused fieldset': { borderColor: '#64b5f6' },
                  },
                  '& input::placeholder': { color: '#90caf9' },
                  '& input': { color: '#fff' },
                }}
              />
            </Box>
          </Box>

          {error && (
            <Typography color="error" textAlign="center" pb={3}>{error}</Typography>
          )}

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
              <CircularProgress size={56} sx={{ color: '#64b5f6' }} thickness={4} />
            </Box>
          ) : filtered.length > 0 ? (
            <Box pb={8}>
              <Grid container spacing={3}>
                {filtered.map((actor) => (
                  <Grid item xs={6} sm={4} md={3} lg={2.4} key={actor.id}>
                    <ActorCard actor={actor} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <Typography fontSize="1.2rem" fontWeight="bold" mb={1}>
                No actors found
              </Typography>
              <Typography sx={{ color: 'grey.400' }}>
                {search ? `No results for "${search}"` : 'Check back soon!'}
              </Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default Actors;
