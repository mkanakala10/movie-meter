import { Box, Container, Heading } from '@chakra-ui/react';

function Header() {
    return (
        <Box 
            as="header" 
            py={{ base: 8, md: 12 }} 
            borderBottom="2px solid" 
            borderColor="gray.200" 
            bg="white"
        >
            <Container maxW="container.xl">
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                    textAlign="center"
                >
                    <Heading 
                        as="h1" 
                        fontSize={{ base: '2.5rem', md: '3.5rem', lg: '4rem' }} 
                        fontWeight={700} 
                        letterSpacing="-1px"
                    >
                        Movie Meter
                    </Heading>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;

