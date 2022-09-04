import { ComponentStyleConfig } from '@chakra-ui/theme';

// https://chakra-ui.com/docs/components/text/usage

export const Modal: ComponentStyleConfig = {
    baseStyle: (props) => ({
        overlay: {
            bg: 'overlay',
            zIndex: '99',
        },
        dialogContainer: {
            alignItems: props.isCentered ? 'center' : 'flex-start',
            display: 'flex',
            justifyContent: 'center',
            zIndex: '100',
        },
        // Can also style the following
        // dialog: {},
        // body: {},
    }),
};
