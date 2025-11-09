import { Box, VStack, HStack, Text, Badge, Image, AspectRatio } from '@chakra-ui/react';
import Button from './Button';

function MovieCard({ movie, variant = 'default', rank, onViewDetails, onAddToWatchlist, onSetReminder }) {
    const isUpcoming = variant === 'upcoming';

    return (
        <Box
            bg="white"
            borderRadius="4px"
            overflow="hidden"
            border="2px solid black"
            position="relative"
            transition="all 0.2s"
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            }}
            h="100%"
            display="flex"
            flexDirection="column"
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
            </Box>
            <VStack spacing={3} p={4} align="center" flex={1} justify="space-between">
                <Text fontWeight={600} fontSize="1.1rem" textAlign="center">
                    {movie.title}
                </Text>
                {!isUpcoming && (
                    <VStack spacing={2} w="100%">
                        <Text fontWeight={500} color="gray.600" textAlign="center">
                            {movie.revenue}
                        </Text>
                        <Text color="gray.500" fontSize="0.85rem" textAlign="center">
                            {movie.releaseDate}
                        </Text>
                        <Button variant="primary" size="sm" w="100%" onClick={onViewDetails}>
                            View Details
                        </Button>
                    </VStack>
                )}
                {isUpcoming && (
                    <HStack spacing={2} w="100%">
                        <Button variant="primary" size="sm" onClick={onAddToWatchlist} flex={1}>
                            Watchlist
                        </Button>
                        <Button variant="secondary" size="sm" onClick={onSetReminder} flex={1}>
                            Remind
                        </Button>
                    </HStack>
                )}
            </VStack>
        </Box>
    );
}

export default MovieCard;