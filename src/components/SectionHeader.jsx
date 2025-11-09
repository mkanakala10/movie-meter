import { VStack, Heading, Text } from '@chakra-ui/react';

function SectionHeader({ title, subtitle }) {
    return (
        <VStack spacing={3} mb={12} textAlign="center" align="center">
            <Heading 
                as="h2" 
                fontSize={{ base: '2rem', md: '2.5rem' }} 
                fontWeight={700}
            >
                {title}
            </Heading>
            {subtitle && (
                <Text fontSize="1.1rem" color="gray.600" fontWeight={400}>
                    {subtitle}
                </Text>
            )}
        </VStack>
    );
}

export default SectionHeader;