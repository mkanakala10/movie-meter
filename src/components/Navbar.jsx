import { Box, VStack, Text, IconButton } from '@chakra-ui/react';

function Navbar({ isOpen, onToggle, currentPage, onNavigate }) {
    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'trending', label: 'Trending', icon: '📈' },
        { id: 'ai-assistant', label: 'AI Assistant', icon: '🤖' },
        { id: 'watch-later', label: 'Watch Later', icon: '🔖' },
        { id: 'actors', label: 'Actors', icon: '👥' },
        { id: 'movie-details', label: 'Movie Details', icon: '🎬' },
    ];

    return (
        <>
            {/* Menu Button */}
            <IconButton
                position="fixed"
                top={6}
                left={6}
                zIndex={50}
                bg="black"
                color="white"
                _hover={{ bg: 'gray.800' }}
                onClick={onToggle}
                aria-label="Toggle menu"
                icon={<Text fontSize="24px">{isOpen ? '✕' : '☰'}</Text>}
            />

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
                w="320px"
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
                    {navItems.map((item) => (
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
                            <Text mr={3} fontSize="20px">{item.icon}</Text>
                            <Text fontWeight="medium">{item.label}</Text>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </>
    );
}

export default Navbar;