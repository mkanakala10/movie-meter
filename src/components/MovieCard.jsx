import { Box, VStack, HStack, Text, Badge, Image, AspectRatio } from '@chakra-ui/react';
import Button from './Button';

function MovieCard({
    movie,
    variant = 'default',
    rank,
    onViewDetails,
    onAddToWatchlist,
    onRemoveFromWatchlist,
    isInWatchlist,
    onSetReminder,
}) {
    const isUpcoming = variant === 'upcoming';

    const handleAddToWatchlist = () => {
        if (!onAddToWatchlist) return;
        // Allow callbacks that accept a movie object or no args
        if (onAddToWatchlist.length > 0) {
            onAddToWatchlist(movie);
        } else {
            onAddToWatchlist();
        }
    };

    const handleRemoveFromWatchlist = () => {
        if (!onRemoveFromWatchlist) return;
        if (onRemoveFromWatchlist.length > 0) {
            onRemoveFromWatchlist(movie.id);
        } else {
            onRemoveFromWatchlist();
        }
    };

    const watchlistAction = isInWatchlist ? handleRemoveFromWatchlist : handleAddToWatchlist;
    const watchlistLabel = isInWatchlist ? 'Remove' : 'Watchlist';
    const watchlistVariant = isInWatchlist ? 'secondary' : 'primary';

    return (
        <Box
            bg="rgba(22, 33, 62, 0.8)" // Slightly transparent for a cleaner look
            borderRadius="lg" // Smoother corners
            overflow="hidden"
            border="1px solid" // Thinner border is often "cleaner"
            borderColor="blue.500"
            position="relative"
            transition="all 0.3s ease"
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 10px 30px rgba(33, 150, 243, 0.3)',
                borderColor: 'blue.300',
            }}
            h="100%"
            display="flex"
            flexDirection="column"
        >
            {/* Rank Badge */}
            {rank !== undefined && (
                <Box
                    position="absolute"
                    top={2}
                    left={2}
                    bg="blue.500"
                    color="white"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="bold"
                    zIndex={3}
                    boxShadow="md"
                >
                    #{rank}
                </Box>
            )}

            <Box position="relative" overflow="hidden">
                <AspectRatio ratio={2 / 3}>
                    <Image
                        src={movie.image}
                        alt={movie.title}
                        objectFit="cover"
                        transition="transform 0.5s"
                        _hover={{ transform: 'scale(1.05)' }} 
                    />
                </AspectRatio>
                
                {isUpcoming && (
                    <Badge
                        position="absolute"
                        top={2}
                        right={2}
                        colorScheme="blue"
                        variant="solid"
                        fontSize="0.65rem"
                        zIndex={2}
                    >
                        Coming Soon
                    </Badge>
                )}
            </Box>

            <VStack p={4} spacing={3} flex={1} justify="space-between" align="center">
                <VStack spacing={1} w="100%">
                    <Text 
                        fontWeight="bold" 
                        fontSize="md" 
                        textAlign="center" 
                        noOfLines={1} 
                        color="white"
                    >
                        {movie.title}
                    </Text>
                    
                    {isUpcoming && movie.genre && (
                        <Text color="gray.400" fontSize="xs" textAlign="center">
                            {movie.genre}
                        </Text>
                    )}
                    
                    {!isUpcoming && (
                        <>
                            <Text fontWeight="bold" color="blue.300" fontSize="sm" textAlign="center">
                                {movie.revenue}
                            </Text>
                            <Text color="gray.400" fontSize="xs" textAlign="center">
                                {movie.releaseDate}
                            </Text>
                        </>
                    )}
                </VStack>

                {/* Action Buttons */}
                <Box w="100%">
                    {!isUpcoming ? (
                        <Button variant="primary" size="sm" w="100%" onClick={onViewDetails}>
                            View Details
                        </Button>
                    ) : (
                        <HStack spacing={2} w="100%">
                            <Button
                                variant={watchlistVariant}
                                size="xs"
                                onClick={watchlistAction}
                                flex={1}
                            >
                                {watchlistLabel}
                            </Button>
                            <Button variant="secondary" size="xs" onClick={onSetReminder} flex={1}>
                                Remind
                            </Button>
                        </HStack>
                    )}
                </Box>
            </VStack>
        </Box>
    );
}

export default MovieCard;