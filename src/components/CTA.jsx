import { Box, Container, VStack, Heading, Text } from '@chakra-ui/react';
import Button from './Button';

function CTA({ title, description, buttonText = 'Get Started', onButtonClick }) {
    return (
        <Box as="section" py={20} bg="gray.50" borderTop="2px solid" borderColor="gray.200">
            <Container maxW="600px">
                <VStack spacing={6} textAlign="center" align="center">
                    <Heading 
                        as="h2" 
                        fontSize={{ base: '2rem', md: '2.5rem' }} 
                        fontWeight={700}
                    >
                        {title}
                    </Heading>
                    {description && (
                        <Text fontSize="1.1rem" color="gray.600">
                            {description}
                        </Text>
                    )}
                    <Button variant="primary" size="lg" onClick={onButtonClick}>
                        {buttonText}
                    </Button>
                </VStack>
            </Container>
        </Box>
    );
}

export default CTA;