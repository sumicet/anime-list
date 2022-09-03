const todayDate = new Date();
const currentDate = todayDate.getDate();
export type Format = 'short' | 'long';
const getMonth = (month?: Format) => new Intl.DateTimeFormat('en-US', { month }).format(todayDate);

const getSuffix = () => {
    switch (currentDate % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
};

export const getToday = (format?: Format) =>
    format === 'short'
        ? `${getMonth(format)} ${currentDate}${getSuffix()}`
        : `Today is the ${currentDate}${getSuffix()} of ${getMonth(format)}`;
