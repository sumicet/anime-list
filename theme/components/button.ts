import { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/components/button/usage

export const Button: ComponentStyleConfig = {
    baseStyle: (props) => ({
        padding: 'space8',
        borderRadius: 'radius5',
        _disabled: {},
        bgColor: mode('secondary.light', 'secondary.dark')(props),
    }),
    variants: {
        square: {
            boxSize: 32,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        },
    },
};
