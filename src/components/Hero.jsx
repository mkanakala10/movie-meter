import { Box, Container, Heading, Text, HStack, VStack } from '@chakra-ui/react';
import Button from './Button';

function Hero({ stats = [] }) {
    return (
        <Box as="section" py={20} borderBottom="1px solid" borderColor="gray.200" bg="white">
            <Container maxW="1200px" display="flex" flexDirection="column" alignItems="center">
                <VStack spacing={6} align="center" textAlign="center" w="100%">
                    <Heading as="h1" fontSize={{ base: '2rem', md: '3.5rem' }} fontWeight={700} letterSpacing="-1px" textAlign="center">
                        Movie Meter
                    </Heading>
                    <Text fontSize={{ base: '1.1rem', md: '1.3rem' }} color="gray.600" fontWeight={400} textAlign="center">
                        Track real-time trends, box office rankings, and audience sentiment
                    </Text>
                    <HStack spacing={4} flexWrap="wrap" justify="center">
                        <Button variant="primary" size="md">Explore Movies</Button>
                        <Button variant="secondary" size="md">AI Recommendations</Button>
                    </HStack>
                </VStack>
                {stats.length > 0 && (
                    <HStack spacing={16} justify="center" mt={16} flexWrap="wrap" w="100%">
                        {stats.map((stat, index) => (
                            <VStack key={index} spacing={2} align="center" textAlign="center">
                                <Text fontSize={{ base: '2rem', md: '2.5rem' }} fontWeight={700} textAlign="center">
                                    {stat.value}
                                </Text>
                                <Text fontSize="0.9rem" color="gray.600" textTransform="uppercase" letterSpacing="0.5px" textAlign="center">
                                    {stat.label}
                                </Text>
                            </VStack>
                        ))}
                    </HStack>
                )}
            </Container>
        </Box>
    );
}

export default Hero;
