export function dateFormatter() {
    /**
     * Formats date from UNIX format to normal view 31.12.1970
     * @param date: number | string | any
     */
    function FromUnixToString(date: number | string | any): string {
        return new Date(date * 1000).toLocaleDateString('ru-RU');
    }

    /**
     * Rollback to Date
     * @param date: string
     */
    function FromStringToDate(date: string): Date | string {
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

    /**
     * Formats date from normal view 31.12.1970 to UNIX format
     * @param date: string
     */
    function FromStringToUnix(date: string): number | string {
        try {
            const year = parseInt(date.slice(date.length - 4, date.length));
            const month = parseInt(date.slice(3, 5)) - 1;
            const day = parseInt(date.slice(0, 2));

            const hour = 0;
            const minutes = 0;
            const milliseconds = new Date(year, month, day, hour, minutes).getTime();

            return milliseconds / 1000;
        } catch (e) {
            console.error('FromStringToUnix Error');
        }
        return date;
    }
    return { FromUnixToString, FromStringToDate, FromStringToUnix };
}
