import Icon, { IconProps } from '@chakra-ui/icon';

export function VerifiedIcon(props: IconProps) {
    return (
        <Icon width="100%" height="100%" viewBox="0 0 24 24" {...props}>
            <rect width="24" height="24" rx="12" fill="#20BF12" />
            <path
                d="M9.99993 14.8L7.19993 12L6.2666 12.9333L9.99993 16.6667L17.9999 8.66667L17.0666 7.73334L9.99993 14.8Z"
                fill="currentColor"
            />
        </Icon>
    );
}
