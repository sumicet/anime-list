const transitionTimingFunction = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
};

const transitionDuration = {
    'ultra-fast': '0.08s',
    faster: '0.1s',
    fast: '0.15s',
    normal: '0.2s',
};

// Write each property separately when styling
export const transition = {
    // Can also define a `property` like below
    // property: transitionProperty,
    easing: transitionTimingFunction,
    duration: transitionDuration,
};
