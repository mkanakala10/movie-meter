import { useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ActorCard from '../components/ActorCard';
import MovieCard from '../components/MovieCard';
import CTA from '../components/CTA';
import Navbar from '../components/Navbar';

function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

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

    return (
        <Box minH="100vh" bg="white" color="black">
            <Navbar
                isOpen={isNavOpen}
                onToggle={() => setIsNavOpen(!isNavOpen)}
                currentPage={currentPage}
                onNavigate={setCurrentPage}
            />
            
            <Header />
            <Hero stats={heroStats} />

            {/* Trending Actors Section */}
            <Box 
                as="section" 
                py={{ base: 12, md: 16, lg: 20 }} 
                bg="white"
            >
                <Container maxW="container.xl">
                    <SectionHeader 
                        title="Trending Actors" 
                        subtitle="Most popular actors based on real-time engagement" 
                    />
                    <Box 
                        display="grid" 
                        gridTemplateColumns={{ 
                            base: "repeat(2, 1fr)", 
                            sm: "repeat(3, 1fr)", 
                            md: "repeat(4, 1fr)", 
                            lg: "repeat(5, 1fr)" 
                        }}
                        gap={{ base: 2, md: 4 }}
                        justifyItems="center"
                    >
                        {trendingActors.map((actor) => (
                            <Box 
                                key={actor.id} 
                                w="100%" 
                                maxW={{ base: "100%", sm: "200px", md: "220px" }}
                            >
                                <ActorCard actor={actor} />
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Box Office Leaders Section */}
            <Box 
                as="section" 
                py={{ base: 12, md: 16, lg: 20 }} 
                bg="gray.50"
            >
                <Container maxW="container.xl">
                    <SectionHeader 
                        title="Box Office Leaders" 
                        subtitle="Top grossing Indian films of all time" 
                    />
                    <Box 
                        display="grid" 
                        gridTemplateColumns={{ 
                            base: "repeat(1, 1fr)", 
                            sm: "repeat(2, 1fr)", 
                            md: "repeat(3, 1fr)", 
                            lg: "repeat(4, 1fr)", 
                            xl: "repeat(5, 1fr)" 
                        }}
                        gap={{ base: 2, md: 4 }}
                        justifyItems="center"
                    >
                        {boxOfficeLeaders.map((movie, index) => (
                            <Box 
                                key={movie.id} 
                                w="100%" 
                                maxW={{ base: "100%", sm: "200px", md: "220px" }}
                            >
                                <MovieCard movie={movie} rank={index + 1} />
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Upcoming Films Section */}
            <Box 
                as="section" 
                py={{ base: 12, md: 16, lg: 20 }} 
                bg="white"
            >
                <Container maxW="container.xl">
                    <SectionHeader 
                        title="Upcoming Releases" 
                        subtitle="Most anticipated films coming soon" 
                    />
                    <Box 
                        display="grid" 
                        gridTemplateColumns={{ 
                            base: "repeat(1, 1fr)", 
                            sm: "repeat(2, 1fr)", 
                            md: "repeat(3, 1fr)", 
                            lg: "repeat(4, 1fr)" 
                        }}
                        gap={{ base: 2, md: 4 }}
                        justifyItems="center"
                    >
                        {upcomingFilms.map((film) => (
                            <Box 
                                key={film.id} 
                                w="100%" 
                                maxW={{ base: "100%", sm: "200px", md: "220px" }}
                            >
                                <MovieCard movie={film} variant="upcoming" />
                            </Box>
                        ))}
                    </Box>
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