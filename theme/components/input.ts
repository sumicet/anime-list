import { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/components/input/usage

export const Input: ComponentStyleConfig = {
    baseStyle: (props) => ({
        field: {
            background: mode('secondary.light', 'secondary.dark')(props),
            borderRadius: 'radius30',
            color: mode('text.primary.light', 'text.primary.dark')(props),
            textStyle: 'small500',
            _focusVisible: {
                outline: '0px',
            },
            _hover: {},
            _placeholder: {
                color: mode('text.placeholder.light', 'text.placeholder.dark')(props),
                textStyle: 'small',
            },
        },
    }),
    variants: {
        clear: (props) => ({
            field: {
                background: mode('main.light', 'main.dark')(props),
                _placeholder: {
                    color: mode(
                        'text.placeholderSearch.light',
                        'text.placeholderSearch.dark'
                    )(props),
                },
            },
        }),
    },
    sizes: {
        small: {
            field: {
                textStyle: 'small',
                paddingY: 'space8',
                paddingX: 'space16',
            },
        },
        large: {
            field: {
                paddingY: 'space24',
                paddingX: 'space35',
                width: '100%',
                textStyle: 'body500',
                _placeholder: {
                    textStyle: 'body500',
                },
            },
        },
    },
    defaultProps: {
        size: 'small',
    },
};
