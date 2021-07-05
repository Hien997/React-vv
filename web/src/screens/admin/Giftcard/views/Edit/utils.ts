
export const getDate = (isEnd: boolean) => {
    const systemDate = new Date();
    const dateIOS = systemDate.toISOString();
    const currentTime = dateIOS.substr(0, 19).replace('T', ' ');
    if (isEnd) {
        const year = systemDate.getFullYear() + 5;
        return `${year}${dateIOS.substr(4, 6)} ${dateIOS.substr(11, 8)}`;
    }

    return currentTime;
};

export const replaceAt = (
    value: string,
    index: number,
    replacement: string
) => {
    return (
        value.substr(0, index) +
        replacement +
        value.substr(index + replacement.length)
    );
};
