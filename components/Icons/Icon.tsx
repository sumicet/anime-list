import { IconProps } from '@chakra-ui/icon';
import { CloseIcon, SearchIcon } from './components';

const icons = {
    search: SearchIcon,
    close: CloseIcon,
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
