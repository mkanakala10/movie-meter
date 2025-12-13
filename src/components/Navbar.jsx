import { Box, VStack, Text, IconButton } from '@chakra-ui/react';
import { 
    HiHome, 
    HiTrendingUp, 
    HiSparkles, 
    HiBookmark, 
    HiUsers, 
    HiFilm,
    HiMenu
} from 'react-icons/hi';

function Navbar({ isOpen, onToggle, currentPage, onNavigate }) {
    const navItems = [
        { id: 'home', label: 'Home', icon: HiHome},
        { id: 'trending', label: 'Trending', icon: HiTrendingUp },
        { id: 'ai-assistant', label: 'AI Assistant', icon: HiSparkles },
        { id: 'watch-later', label: 'Watch Later', icon: HiBookmark },
        { id: 'actors', label: 'Actors', icon: HiUsers },
        { id: 'movie-details', label: 'Movie Details', icon: HiFilm },
    ];

    return (
        <>
            {/* Menu Button - Only shows when sidebar is closed */}
            {!isOpen && (
                <Box
                    as="button"
                    position="fixed"
                    top={6}
                    left={6}
                    zIndex={50}
                    bg="black"
                    color="white"
                    p={3}
                    borderRadius="md"
                    _hover={{ bg: 'gray.800' }}
                    onClick={onToggle}
                    aria-label="Toggle menu"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <HiMenu size={24} style={{ color: 'white' }} />
                </Box>
            )}

            {/* Overlay */}
            {isOpen && (
                <Box
                    position="fixed"
                    inset={0}
                    bg="blackAlpha.500"
                    zIndex={30}
                    onClick={onToggle}
                />
            )}

            {/* Sidebar */}
            <Box
                position="fixed"
                top={0}
                left={0}
                h="100vh"
                w={{ base: "100%", sm: "320px" }}
                maxW="320px"
                bg="white"
                borderRight="2px solid black"
                zIndex={40}
                transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
                transition="transform 0.3s"
            >
                <VStack align="stretch" p={8} spacing={0}>
                    <Text fontSize="2xl" fontWeight="bold" mb={8} mt={4}>
                        Movie Meter
                    </Text>
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <Box
                                key={item.id}
                                as="button"
                                w="100%"
                                display="flex"
                                alignItems="center"
                                px={4}
                                py={3}
                                borderRadius="md"
                                bg={currentPage === item.id ? 'black' : 'transparent'}
                                color={currentPage === item.id ? 'white' : 'black'}
                                _hover={{ bg: currentPage === item.id ? 'black' : 'gray.100' }}
                                transition="all 0.2s"
                                onClick={() => {
                                    onNavigate(item.id);
                                    onToggle();
                                }}
                            >
                                <Box mr={3} fontSize="20px">
                                    <IconComponent size={20} />
                                </Box>
                                <Text fontWeight="medium">{item.label}</Text>
                            </Box>
                        );
                    })}
                </VStack>
            </Box>
        </>
    );
}

export default Navbar;