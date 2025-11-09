import { VStack, Heading, Text } from '@chakra-ui/react';

function SectionHeader({ title, subtitle }) {
    return (
        <VStack spacing={2} mb={12} textAlign="center" align="center">
            <Heading as="h2" size={{ base: 'lg', md: 'xl' }} fontWeight={600} textAlign="center">
                {title}
            </Heading>
            {subtitle && (
                <Text fontSize="1rem" color="gray.600" fontWeight={400} textAlign="center">
                    {subtitle}
                </Text>
            )}
        </VStack>
    );
}

export default SectionHeader;
