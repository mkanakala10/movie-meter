import { Button as ChakraButton } from '@chakra-ui/react';

function Button({ children, variant = 'primary', size = 'md', onClick, ...props }) {
    const sizeMap = {
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    };

    return (
        <ChakraButton
            variant={variant}
            size={sizeMap[size] || 'md'}
            onClick={onClick}
            {...props}
        >
            {children}
        </ChakraButton>
    );
}

export default Button;
