import { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

export const Input: ComponentStyleConfig = {
    baseStyle: (props) => ({
        field: {
            background: mode('secondary.light', 'secondary.dark')(props),
            borderRadius: 'radius30',
            textStyle: 'small',
            paddingY: 'space8',
            paddingX: 'space16',
            color: mode('text.primary.light', 'text.primary.dark')(props),
            _focusVisible: {
                outline: '0px',
            },
            _hover: {},
            _placeholder: {
                color: mode('text.placeholder.light', 'text.placeholder.dark')(props),
            },
        },
    }),
};
