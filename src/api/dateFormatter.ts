export function dateFormatter() {
    /**
     * Formats date from UNIX format to normal view 31.12.1970
     * @param date: number | string | any
     */
    function FromUnixToString(date: number | string | any) {
        return new Date(date * 1000).toLocaleDateString('ru-RU');
    }

    /**
     * Rollback to Date
     * @param date: string
     */
    function FromStringToDate(date: string) {
        try {
            const year = parseInt(date.slice(date.length - 4, date.length));
            const month = parseInt(date.slice(3, 5)) - 1;
            const day = parseInt(date.slice(0, 2));
            return new Date(year, month, day);
        } catch (e) {
            console.error('FromStringToDate Error');
        }
        return date;
    }
    return { FromUnixToString, FromStringToDate };
}
