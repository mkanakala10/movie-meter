import { createSystem, defaultConfig } from '@chakra-ui/react';

const customConfig = {
    theme: {
        tokens: {
            colors: {
                black: { value: '#000000' },
                white: { value: '#ffffff' },
                blue: {
                    500: { value: '#2196f3' },
                    600: { value: '#1976d2' },
                    700: { value: '#1565c0' },
                },
            },
        },
        components: {
            Button: {
                variants: {
                    primary: {
                        bg: 'linear-gradient(135deg, #2196f3, #1976d2)',
                        color: 'white',
                        border: '2px solid #64b5f6',
                        _hover: {
                            bg: 'linear-gradient(135deg, #1976d2, #1565c0)',
                            transform: 'scale(1.05)',
                            boxShadow: '0 6px 20px rgba(33, 150, 243, 0.7)',
                        },
                        _active: {
                            transform: 'scale(0.95)',
                        },
                    },
                    secondary: {
                        bg: 'transparent',
                        color: '#2196f3',
                        border: '2px solid #2196f3',
                        _hover: {
                            bg: '#2196f3',
                            color: 'white',
                        },
                    },
                },
            },
        },
    },
};

const system = createSystem(defaultConfig, customConfig);

export default system;
