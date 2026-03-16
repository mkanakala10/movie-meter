import { Box, Container, Heading } from '@chakra-ui/react';

function Header() {
    return (
        <Box 
            as="header" 
            py={{ base: 6, md: 10 }} // Reduced slightly for a tighter look
            borderBottom="2px solid" 
            borderColor="#2196f3" 
            bg="linear-gradient(180deg, #0f3460 0%, #16213e 100%)"
            position="relative"
        >
            {/* Top Film Strip Decoration */}
            <Box 
                height="8px" 
                bg="repeating-linear-gradient(90deg, #2196f3 0px, #2196f3 15px, #1976d2 15px, #1976d2 20px, white 20px, white 25px, #1976d2 25px, #1976d2 30px)"
                position="absolute"
                top="0"
                left="0"
                right="0"
            />

            <Container maxW="container.xl" pt={4}>
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                    textAlign="center"
                >
                    <Heading 
                        as="h1" 
                        fontSize={{ base: '2.5rem', md: '3.5rem', lg: '4rem' }} 
                        fontWeight={800} 
                        letterSpacing="-1px"
                        color="white"
                        textAlign="center"
                    >
                        Movie Meter
                    </Heading>
                </Box>
            </Container>

            {/* Bottom Film Strip Decoration */}
            <Box 
                height="8px" 
                bg="repeating-linear-gradient(90deg, #2196f3 0px, #2196f3 15px, #1976d2 15px, #1976d2 20px, white 20px, white 25px, #1976d2 25px, #1976d2 30px)"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
            />
        </Box>
    );
}

export default Header;