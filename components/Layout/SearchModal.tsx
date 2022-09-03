import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/modal';
import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Icon } from '../Icons';

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const iconColor = useColorModeValue('main.light', 'main.dark');

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeOnOverlayClick
            preserveScrollBarGap
            isCentered
        >
            <ModalOverlay />
            <ModalContent maxWidth={618}>
                <ModalBody>
                    <Flex
                        role="button"
                        onClick={onClose}
                        width="100%"
                        justifyContent="flex-end"
                        marginBottom="space10"
                    >
                        <Icon name="close" boxSize={14} color={iconColor} />
                    </Flex>
                    <Input variant="clear" size="large" placeholder="Search..." />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
