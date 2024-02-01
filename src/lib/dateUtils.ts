import { format } from "date-fns"


export function getDateInISOAsLocalDate(date: Date): string {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 16)
}

export function getTimeIn12HrFormat(date: Date) {
    if (date === null || date === undefined)
        return ""

    return "" + date.getHours() + " : " + date.getMinutes() + " " + (date.getHours() >= 12 ? "PM" : "AM")
}

export function getFullDateTime(date: Date) {
    return format(date, "dd MMM yyyy - HH:mm a");
}

export function getFullDateTimeWithMinutes(date: Date) {
    return format(date, "dd MMM yyyy - HH:mm:ss a");
}