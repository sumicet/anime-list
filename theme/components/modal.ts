import { ComponentStyleConfig } from '@chakra-ui/theme';

// https://chakra-ui.com/docs/components/text/usage

export const Modal: ComponentStyleConfig = {
    baseStyle: (props) => ({
        overlay: {
            bg: 'overlay',
        },
        dialogContainer: {
            alignItems: props.isCentered ? 'center' : 'flex-start',
            display: 'flex',
            justifyContent: 'center',
        },
        // dialog: {},
        // body: {},
    }),
};
