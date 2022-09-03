// The dark colors aren't on Figma

// FIGMA: some colors are very similar to others eg rgba(235, 235, 235, 1) and
// rgba(238, 238, 238, 1), so I picked 1 and used it for both situations

export const colors = {
    main: {
        light: 'rgba(255, 255, 255, 1)',
        dark: '#000000',
    },
    secondary: {
        light: 'rgba(238, 238, 238, 1)',
        dark: '#111111',
    },
    text: {
        primary: {
            light: 'rgb(0, 0, 0)',
            dark: 'rgb(255, 255, 255)',
        },
        secondary: {
            light: 'rgba(167, 167, 167, 1)',
            dark: '',
        },
        subtle: {
            light: 'rgba(90, 90, 90, 1)',
            dark: '',
        },
        placeholder: {
            light: 'rgb(186, 186, 186)',
            dark: 'rgb(69, 69, 69)',
        },
        placeholderSearch: {
            light: 'rgb(180, 180, 180)',
            dark: 'rgb(75, 75, 75)',
        },
        // The search result small text
        label: {
            light: 'rgba(117, 117, 117, 1)',
            dark: '',
        },
    },
    divider: {
        light: 'rgb(217, 217, 217)',
        dark: 'rgb(38, 38, 38)',
    },
    overlay: 'rgba(0, 0, 0, 0.6)',
    cardOverlay:
        'linear-gradient(180deg, #D9D9D9 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.69) 100%)',
    accent: {
        green: 'rgba(32, 191, 18, 1)',
    },
};
