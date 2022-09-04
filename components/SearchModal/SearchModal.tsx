import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/modal';
import { Input } from '@chakra-ui/input';
import { Flex, VStack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Icon } from '../Icons';
import { useSearch } from '../../hooks';
import { Results } from './Results';

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const bgColor = useColorModeValue('main.light', 'main.dark');

    const { input, onChange, data, error, query, isLoading } = useSearch();

    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick preserveScrollBarGap>
            <ModalOverlay />
            <ModalContent maxWidth={618} top="17.5%">
                <ModalBody>
                    <Flex
                        role="button"
                        onClick={onClose}
                        width="100%"
                        justifyContent="flex-end"
                        marginBottom="space10"
                    >
                        <Icon name="close" boxSize={14} color={bgColor} />
                    </Flex>
                    <VStack spacing="space20">
                        <Input
                            value={input || undefined}
                            onChange={(event) => onChange(event.target.value)}
                            variant="clear"
                            size="large"
                            placeholder="Search..."
                        />
                        {query && (
                            <Results
                                data={data?.data}
                                error={error}
                                query={query}
                                isLoading={isLoading}
                                onClose={onClose}
                            />
                        )}
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
