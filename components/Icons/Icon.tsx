import { IconProps } from '@chakra-ui/icon';
import { ArrowLeftIcon, CloseIcon, SearchIcon } from './components';

const icons = {
    search: SearchIcon,
    close: CloseIcon,
    arrowLeft: ArrowLeftIcon,
};

/**
 * @param name The name of the icon
 */
export function Icon({
    name,
    ...rest
}: Omit<IconProps, 'as' | 'name'> & { name: keyof typeof icons }) {
    const IconComponent = icons[name];
    return <IconComponent {...rest} />;
}
