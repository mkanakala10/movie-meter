import { Box, Container, VStack, Heading, Text } from '@chakra-ui/react';
import Button from './Button';

function CTA({ title, description, buttonText = 'Get Started', onButtonClick }) {
    return (
        <Box as="section" py={20} bg="gray.50" borderTop="1px solid" borderColor="gray.200">
            <Container maxW="600px" display="flex" flexDirection="column" alignItems="center">
                <VStack spacing={4} textAlign="center" align="center" w="100%">
                    <Heading as="h2" size={{ base: 'lg', md: 'xl' }} fontWeight={600} textAlign="center">
                        {title}
                    </Heading>
                    {description && (
                        <Text fontSize="1.1rem" color="gray.600" mb={4} textAlign="center">
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
