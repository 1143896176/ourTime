export const getAssetsFile = (url: string) => {
    return new URL(`../assets/images/${url}`, import.meta.url).href
}

export const getRootFile = (url: string) => {
    return new URL(`../assets/${url}`, import.meta.url).href
}