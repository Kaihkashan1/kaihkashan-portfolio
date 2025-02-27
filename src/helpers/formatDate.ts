export const formatDateISO = (date: Date) => {
    const isoString = date.toLocaleDateString("de-DE");
    return isoString.split("T")[0];
};
