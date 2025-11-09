import { Box, Container, Heading, Text, HStack, VStack } from '@chakra-ui/react';
import Button from './Button';

function Hero({ stats = [] }) {
    return (
        <Box as="section" py={20} borderBottom="2px solid" borderColor="gray.200" bg="white">
            <Container maxW="1200px">
                <VStack spacing={6} align="center" textAlign="center">
                    <Heading 
                        as="h1" 
                        fontSize={{ base: '3rem', md: '4rem' }} 
                        fontWeight={700} 
                        letterSpacing="-1px"
                    >
                        Movie Meter
                    </Heading>
                    <Text 
                        fontSize={{ base: '1.1rem', md: '1.3rem' }} 
                        color="gray.600" 
                        fontWeight={400}
                        maxW="2xl"
                    >
                        Track real-time trends, box office rankings, and audience sentiment
                    </Text>
                    <HStack spacing={4} flexWrap="wrap" justify="center">
                        <Button variant="primary" size="md">Explore Movies</Button>
                        <Button variant="secondary" size="md">AI Recommendations</Button>
                    </HStack>
                </VStack>
                {stats.length > 0 && (
                    <HStack spacing={16} justify="center" mt={16} flexWrap="wrap">
                        {stats.map((stat, index) => (
                            <VStack key={index} spacing={2} align="center">
                                <Text fontSize={{ base: '2rem', md: '2.5rem' }} fontWeight={700}>
                                    {stat.value}
                                </Text>
                                <Text 
                                    fontSize="0.9rem" 
                                    color="gray.600" 
                                    textTransform="uppercase" 
                                    letterSpacing="0.5px"
                                >
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