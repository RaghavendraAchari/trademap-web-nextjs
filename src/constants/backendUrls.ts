const baseUrl = "http://localhost:8080"

const allTrades = baseUrl + "/tradedetails"
const pendingDays = allTrades + "/pendingDates"
const setupsAndInstuments = allTrades + "/setupsAndInstuments"

const allNotes = baseUrl + "/notes"
const categoriesAndTags = allNotes + "/categoriesAndTags"

const allInsights = baseUrl + "/insights"
const allInsightsWithTitlesOny = baseUrl + "/insights/onlyTitles"
const uploadContentImage = allInsights + "/uploadContentImage"



export default {
    baseUrl: baseUrl,
    tradeDetails: {
        allTrades,
        pendingDays,
        setupsAndInstuments,
        getImageDownloadablePath
    },
    notes: {
        allNotes,
        categoriesAndTags
    },
    insights: {
        allInsights,
        allInsightsWithTitlesOny,
        uploadContentImage
    }
}

function getImageDownloadablePath(path: string) {
    return allTrades + "/downloadImage" + "?path=" + encodeURIComponent(path);
}