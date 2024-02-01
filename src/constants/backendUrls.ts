const baseUrl = "http://localhost:8080"

const allTrades = baseUrl + "/tradedetails"
const pendingDays = allTrades + "pendingDates"

const allNotes = baseUrl + "/notes"
const categoriesAndTags = allNotes + "/categoriesAndTags"



export default {
    baseUrl: baseUrl,
    tradeDetails: {
        allTrades,
        pendingDays,
        getImageDownloadablePath
    },
    notes: {
        allNotes,
        categoriesAndTags
    }
}

function getImageDownloadablePath(path: string) {
    return allTrades + "/downloadImage" + "?path=" + encodeURIComponent(path);
}