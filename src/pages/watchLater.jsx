import { Box, Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import MovieCard from '../components/MovieCard';
import { useWatchLater } from '../contexts/WatchLaterContext';

function WatchLater() {
  const { watchLater, removeFromWatchLater } = useWatchLater();

  return (
    <Box
      minH="100vh"
      bg="linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
      color="white"
    >
      <Header />

      <Container maxW="container.xl">
        <VStack spacing={0} align="stretch">
          <Box as="section" py={12} textAlign="center">
            <SectionHeader
              title="Watch Later"
              subtitle="Movies you've marked to watch next. Tap remove to keep your list tidy."
              textAlign="center"
            />
          </Box>

          {watchLater.length === 0 ? (
            <Box py={20} textAlign="center">
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Your watchlist is empty
              </Text>
              <Text color="gray.300">
                Add movies by tapping the watchlist button on any movie card.
              </Text>
            </Box>
          ) : (
            <Box as="section" py={8}>
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing={{ base: 4, md: 6 }}
                justifyItems="center"
              >
                {watchLater.map((movie) => (
                  <Box key={movie.id} w="100%" maxW="220px">
                    <MovieCard
                      movie={movie}
                      variant="upcoming"
                      isInWatchlist
                      onRemoveFromWatchlist={() => removeFromWatchLater(movie.id)}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
}

export default WatchLater;
