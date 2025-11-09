import { Box, VStack, HStack, Text, Badge, Image, AspectRatio } from '@chakra-ui/react';

function ActorCard({ actor }) {
    return (
        <Box
            bg="white"
            borderRadius="4px"
            overflow="hidden"
            border="2px solid black"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            }}
            h="100%"
            display="flex"
            flexDirection="column"
        >
            <Box position="relative">
                <AspectRatio ratio={2 / 3}>
                    <Image
                        src={actor.image}
                        alt={actor.name}
                        objectFit="cover"
                        bg="gray.100"
                    />
                </AspectRatio>
                <Badge
                    position="absolute"
                    top={2}
                    right={2}
                    bg="black"
                    color="white"
                    px={2}
                    py={1}
                    borderRadius="2px"
                    fontSize="0.75rem"
                    fontWeight={600}
                >
                    {actor.trendingScore}%
                </Badge>
            </Box>
            <VStack spacing={1} p={4} align="center" flex={1} justify="center">
                <Text fontWeight={600} fontSize="1rem" textAlign="center">
                    {actor.name}
                </Text>
                <HStack spacing={1}>
                    <Text fontSize="0.9rem">↑</Text>
                    <Text fontSize="0.8rem" color="gray.600" fontWeight={400}>
                        Trending
                    </Text>
                </HStack>
            </VStack>
        </Box>
    );
}

export default ActorCard;