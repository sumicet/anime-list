import { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/components/button/usage

export const Button: ComponentStyleConfig = {
    baseStyle: (props) => ({
        boxSize: 32,
        borderRadius: 'radius5',
        _disabled: {
            opacity: 0.5,
            cursor: 'auto',
        },
        bgColor: mode('secondary.light', 'secondary.dark')(props),
    }),
    variants: {
        square: {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        },
    },
};
