import { useEffect, useState } from 'react';
import { 
  Box, 
  Container, 
  SimpleGrid, 
  VStack, 
  HStack, 
  Spinner, 
  Center, 
  Text 
} from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ActorCard from '../components/ActorCard';
import MovieCard from '../components/MovieCard';
import CTA from '../components/CTA';

function Home() {
    const [trendingActors, setTrendingActors] = useState([]);
    const [boxOffice, setBoxOffice] = useState([]);
    const [anticipated, setAnticipated] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        
        const fetchHomeData = async () => {
            setIsLoading(true);
            try {
                
                const actorRes = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`);
                const actorData = await actorRes.json();
                
                const indianActors = (actorData.results || [])
                    .filter(person => 
                        person.known_for.some(m => m.origin_country?.includes('IN'))
                    )
                    .slice(0, 20)
                    .map(person => ({
                        id: person.id,
                        name: person.name,
                        image: `https://image.tmdb.org/t/p/w500${person.profile_path}`,
                        trendingScore: Math.round(person.popularity)
                    }));
                
                setTrendingActors(indianActors);

                
                const boRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&region=IN&with_origin_country=IN&primary_release_year=2026&sort_by=revenue.desc`);
                const boData = await boRes.json();
                
                setBoxOffice((boData.results || []).slice(0, 5).map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    revenue: movie.revenue > 0 ? `₹${(movie.revenue / 10000000).toFixed(1)} Cr` : 'Blockbuster',
                    rating: movie.vote_average,
                    releaseDate: movie.release_date
                })));

                // 3. Fetch 2026 Most Anticipated (Sorted by Popularity)
                const antRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&region=IN&with_origin_country=IN&primary_release_year=2026&sort_by=popularity.desc`);
                const antData = await antRes.json();
                
                setAnticipated((antData.results || []).slice(0, 4).map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    releaseDate: movie.release_date,
                    genre: 'Highly Anticipated'
                })));

            } catch (err) {
                console.error("Error fetching homepage data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        if (apiKey) fetchHomeData();
    }, []);

    const heroStats = [
        { value: '12K+', label: 'Movies Tracked' },
        { value: '8K+', label: 'Actors' },
        { value: '2M+', label: 'User Reviews' },
    ];

    if (isLoading) {
        return (
            <Center h="100vh" bg="#1a1a2e">
                <Spinner size="xl" color="blue.300" thickness="4px" />
            </Center>
        );
    }

    return (
        <Box 
            minH="100vh" 
            bg="linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" 
            color="white"
        >
            <Header />
            
            <Container maxW="container.xl">
                <VStack spacing={0} align="stretch">
                    <Hero stats={heroStats} />

                    {/* Trending Actors Carousel */}
                    <Box as="section" py={12}>
                        <SectionHeader 
                            title="Trending Indian Actors" 
                            subtitle="Most popular stars in 2026 based on recent hits" 
                            textAlign="center"
                        />
                        <HStack 
                            spacing={6} 
                            overflowX="auto" 
                            py={6} 
                            px={4}
                            sx={{
                                '&::-webkit-scrollbar': { display: 'none' },
                                scrollbarWidth: 'none',
                                '-ms-overflow-style': 'none',
                            }}
                        >
                            {trendingActors.length > 0 ? (
                                trendingActors.map((actor) => (
                                    <Box key={actor.id} minW="180px">
                                        <ActorCard actor={actor} />
                                    </Box>
                                ))
                            ) : (
                                <Text w="100%" textAlign="center">Updating trending stars...</Text>
                            )}
                        </HStack>
                    </Box>

                    {/* Box Office Leaders Section */}
                    <Box as="section" py={12}>
                        <SectionHeader 
                            title="2026 Box Office Leaders" 
                            subtitle="Highest grossing Indian films this year" 
                            textAlign="center"
                        />
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={6}>
                            {boxOffice.map((movie, index) => (
                                <Box key={movie.id} w="100%">
                                    <MovieCard movie={movie} rank={index + 1} />
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>

                    {/* Most Anticipated Section */}
                    <Box as="section" py={12}>
                        <SectionHeader 
                            title="Most Anticipated 2026" 
                            subtitle="Films generating the most buzz right now" 
                            textAlign="center"
                        />
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                            {anticipated.map((film) => (
                                <Box key={film.id} w="100%">
                                    <MovieCard movie={film} variant="upcoming" />
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>

                    <CTA 
                        title="Ready to Dive Deeper?" 
                        description="Track your favorite stars and never miss a release date in 2026."
                        buttonText="Explore All Trends" 
                    />
                </VStack>
            </Container>
        </Box>
    );
}

export default Home;