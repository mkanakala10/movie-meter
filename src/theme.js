import { createSystem, defaultConfig } from '@chakra-ui/react';

const customConfig = {
    theme: {
        tokens: {
            colors: {
                black: { value: '#000000' },
                white: { value: '#ffffff' },
            },
        },
    },
};

const system = createSystem(defaultConfig, customConfig);

export default system;
