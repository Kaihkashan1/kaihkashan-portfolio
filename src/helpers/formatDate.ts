export const formatDateISO = (date: Date) => {
    const isoString = date.toISOString();
    return isoString.split("T")[0];
};
