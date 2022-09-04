import Icon, { IconProps } from '@chakra-ui/icon';

export function SmallArrowRightIcon(props: IconProps) {
    return (
        <Icon width="100%" height="100%" viewBox="0 0 24 24" {...props}>
            <path d="M16 12L10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12Z" fill="currentColor" />
        </Icon>
    );
}
