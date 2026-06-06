export const isSnap =
    typeof navigator !== "undefined" &&
    navigator.userAgent &&
    navigator.userAgent.includes("ReactSnap");