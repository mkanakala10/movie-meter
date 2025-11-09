import { useState } from 'react';
import { Box, VStack, HStack, Text, Badge, Image, AspectRatio, Button } from '@chakra-ui/react';

function MovieCard({ movie, variant = 'default', rank, onViewDetails, onAddToWatchlist, onSetReminder }) {
    const isUpcoming = variant === 'upcoming';
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Box
            bg="white"
            borderRadius="4px"
            overflow="hidden"
            border="1px solid"
            borderColor={isUpcoming ? 'black' : 'gray.200'}
            position="relative"
            transition="all 0.2s"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderColor: 'black',
            }}
        >
            {rank !== undefined && (
                <Box
                    position="absolute"
                    top={3}
                    left={3}
                    bg="black"
                    color="white"
                    w={10}
                    h={10}
                    borderRadius="2px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="1.2rem"
                    fontWeight={700}
                    zIndex={2}
                >
                    #{rank}
                </Box>
            )}
            <Box position="relative">
                <AspectRatio ratio={2 / 3}>
                    <Image
                        src={movie.image}
                        alt={movie.title}
                        objectFit="cover"
                        bg="gray.100"
                    />
                </AspectRatio>
                {isUpcoming && (
                    <Badge
                        position="absolute"
                        top={3}
                        right={3}
                        bg="black"
                        color="white"
                        px={3}
                        py={1.5}
                        borderRadius="2px"
                        fontSize="0.75rem"
                        fontWeight={600}
                        zIndex={2}
                    >
                        Coming Soon
                    </Badge>
                )}
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bgGradient="linear(to-t, blackAlpha.700, transparent)"
                    p={4}
                    opacity={isHovered ? 1 : 0}
                    transition="opacity 0.2s"
                >
                    {!isUpcoming && movie.rating && (
                        <Text color="white" fontWeight={500}>
                            {movie.rating}
                        </Text>
                    )}
                    {isUpcoming && movie.genre && (
                        <Text color="white" fontWeight={500} fontSize="0.85rem">
                            {movie.genre}
                        </Text>
                    )}
                </Box>
            </Box>
            <VStack spacing={3} p={6} align="stretch">
                <Text fontWeight={600} fontSize="1.2rem" lineHeight="1.3">
                    {movie.title}
                </Text>
                <HStack justify="space-between" fontSize="0.9rem">
                    {!isUpcoming && (
                        <>
                            <Text fontWeight={600} fontSize="1rem">
                                {movie.revenue}
                            </Text>
                            <Text color="gray.600">{movie.releaseDate}</Text>
                        </>
                    )}
                    {isUpcoming && movie.releaseDate && (
                        <Text fontWeight={500} fontSize="0.9rem">
                            {new Date(movie.releaseDate).toLocaleDateString('en-IN', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </Text>
                    )}
                </HStack>
                {!isUpcoming && (
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={onViewDetails}
                        w="100%"
                    >
                        View Details
                    </Button>
                )}
                {isUpcoming && (
                    <HStack spacing={2}>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={onAddToWatchlist}
                            flex={1}
                        >
                            Add to Watchlist
                        </Button>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={onSetReminder}
                            flex={1}
                        >
                            Set Reminder
                        </Button>
                    </HStack>
                )}
            </VStack>
        </Box>
    );
}

export default MovieCard;
