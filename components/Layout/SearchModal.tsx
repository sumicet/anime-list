import { Box } from '@chakra-ui/layout';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/modal';

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
                    <Box bg="white" width="100%" height="100px" />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
