import { useState } from 'react';
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ActorCard from '../components/ActorCard';
import MovieCard from '../components/MovieCard';
import CTA from '../components/CTA';

function Home() {
    // Placeholder data - will be replaced with API calls later
    const [trendingActors] = useState([
        { id: 1, name: 'Rajkummar Rao', image: 'https://via.placeholder.com/200x300?text=Rajkummar+Rao', trendingScore: 95 },
        { id: 2, name: 'Alia Bhatt', image: 'https://via.placeholder.com/200x300?text=Alia+Bhatt', trendingScore: 92 },
        { id: 3, name: 'Vicky Kaushal', image: 'https://via.placeholder.com/200x300?text=Vicky+Kaushal', trendingScore: 90 },
        { id: 4, name: 'Deepika Padukone', image: 'https://via.placeholder.com/200x300?text=Deepika+Padukone', trendingScore: 88 },
        { id: 5, name: 'Ranveer Singh', image: 'https://via.placeholder.com/200x300?text=Ranveer+Singh', trendingScore: 87 },
    ]);

    const [boxOfficeLeaders] = useState([
        { id: 1, title: 'Animal', image: 'https://via.placeholder.com/300x450?text=Animal', revenue: '₹915 Cr', rating: 4.2, releaseDate: '2023' },
        { id: 2, title: 'Jawan', image: 'https://via.placeholder.com/300x450?text=Jawan', revenue: '₹1150 Cr', rating: 4.5, releaseDate: '2023' },
        { id: 3, title: 'Pathaan', image: 'https://via.placeholder.com/300x450?text=Pathaan', revenue: '₹1050 Cr', rating: 4.3, releaseDate: '2023' },
        { id: 4, title: 'Gadar 2', image: 'https://via.placeholder.com/300x450?text=Gadar+2', revenue: '₹690 Cr', rating: 4.1, releaseDate: '2023' },
        { id: 5, title: 'RRR', image: 'https://via.placeholder.com/300x450?text=RRR', revenue: '₹1300 Cr', rating: 4.7, releaseDate: '2022' },
    ]);

    const [upcomingFilms] = useState([
        { id: 1, title: 'Kalki 2898 AD', image: 'https://via.placeholder.com/300x450?text=Kalki+2898+AD', releaseDate: '2024-06-27', genre: 'Sci-Fi' },
        { id: 2, title: 'Singham Again', image: 'https://via.placeholder.com/300x450?text=Singham+Again', releaseDate: '2024-08-15', genre: 'Action' },
        { id: 3, title: 'Pushpa 2', image: 'https://via.placeholder.com/300x450?text=Pushpa+2', releaseDate: '2024-08-15', genre: 'Action' },
        { id: 4, title: 'Stree 2', image: 'https://via.placeholder.com/300x450?text=Stree+2', releaseDate: '2024-08-30', genre: 'Horror-Comedy' },
    ]);

    const heroStats = [
        { value: '10K+', label: 'Movies Tracked' },
        { value: '5K+', label: 'Actors' },
        { value: '1M+', label: 'User Reviews' },
    ];

    const handleViewDetails = (movieId) => {
        console.log('View details for movie:', movieId);
        // TODO: Navigate to movie detail page
    };

    const handleAddToWatchlist = (filmId) => {
        console.log('Add to watchlist:', filmId);
        // TODO: Add to watchlist
    };

    const handleSetReminder = (filmId) => {
        console.log('Set reminder for:', filmId);
        // TODO: Set reminder
    };

    return (
        <Box minH="100vh" bg="white" color="black">
            <Hero stats={heroStats} />

            {/* Trending Actors Section */}
            <Box as="section" py={20} bg="white">
                <Container maxW="1400px">
                    <SectionHeader 
                        title="Trending Actors" 
                        subtitle="Most popular actors based on real-time engagement" 
                    />
                    <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={8}>
                        {trendingActors.map((actor) => (
                            <ActorCard key={actor.id} actor={actor} />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Box Office Leaders Section */}
            <Box as="section" py={20} bg="gray.50">
                <Container maxW="1400px">
                    <SectionHeader 
                        title="Box Office Leaders" 
                        subtitle="Top grossing Indian films of all time" 
                    />
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={8}>
                        {boxOfficeLeaders.map((movie, index) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                rank={index + 1}
                                onViewDetails={() => handleViewDetails(movie.id)}
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Upcoming Films Section */}
            <Box as="section" py={20} bg="white">
                <Container maxW="1400px">
                    <SectionHeader 
                        title="Upcoming Releases" 
                        subtitle="Most anticipated films coming soon" 
                    />
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
                        {upcomingFilms.map((film) => (
                            <MovieCard
                                key={film.id}
                                movie={film}
                                variant="upcoming"
                                onAddToWatchlist={() => handleAddToWatchlist(film.id)}
                                onSetReminder={() => handleSetReminder(film.id)}
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            <CTA
                title="Ready to Explore Indian Cinema?"
                description="Join thousands of movie enthusiasts tracking trends and discovering new films"
                buttonText="Get Started"
            />
        </Box>
    );
}

export default Home;
