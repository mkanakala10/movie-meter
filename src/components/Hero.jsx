import { Box, Container, Text, HStack, VStack } from '@chakra-ui/react';
import Button from './Button';

function Hero({ stats = [] }) {
    return (
        <Box 
            as="section" 
            py={{ base: 12, md: 16, lg: 20 }} 
            borderBottom="2px solid" 
            borderColor="gray.200" 
            bg="white"
        >
            <Container maxW="container.xl">
                <VStack spacing={{ base: 4, md: 6 }} align="center" textAlign="center">
                    <Text 
                        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} 
                        color="gray.600" 
                        fontWeight={400}
                        maxW="3xl"
                    >
                        Track real-time trends, box office rankings, and audience sentiment
                    </Text>
                    <HStack 
                        spacing={{ base: 3, md: 4 }} 
                        flexWrap="wrap" 
                        justify="center"
                    >
                        <Button variant="primary" size="md">Explore Movies</Button>
                        <Button variant="secondary" size="md">AI Recommendations</Button>
                    </HStack>
                </VStack>
                {stats.length > 0 && (
                    <HStack 
                        spacing={{ base: 8, md: 12, lg: 16 }} 
                        justify="center" 
                        mt={{ base: 12, md: 16 }} 
                        flexWrap="wrap"
                    >
                        {stats.map((stat, index) => (
                            <VStack key={index} spacing={2} align="center">
                                <Text 
                                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} 
                                    fontWeight={700}
                                >
                                    {stat.value}
                                </Text>
                                <Text 
                                    fontSize={{ base: 'xs', md: 'sm' }} 
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