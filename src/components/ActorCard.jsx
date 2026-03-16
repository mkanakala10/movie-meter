import { Box, VStack, HStack, Text, Badge, Image, AspectRatio } from '@chakra-ui/react';

function ActorCard({ actor }) {
    return (
        <Box
            bg="linear-gradient(135deg, #16213e, #0f3460)"
            borderRadius="4px"
            overflow="hidden"
            border="2px solid #2196f3"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 6px 20px rgba(33, 150, 243, 0.5)',
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
                    bg="linear-gradient(135deg, #2196f3, #1976d2)"
                    color="white"
                    px={2}
                    py={1}
                    borderRadius="2px"
                    fontSize="0.75rem"
                    fontWeight={600}
                    border="1px solid #64b5f6"
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
                    <Text fontSize="0.8rem" color="#90caf9" fontWeight={400}>
                        Trending
                    </Text>
                </HStack>
            </VStack>
        </Box>
    );
}

export default ActorCard;