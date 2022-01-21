export const apiFetch = async (url, options) => {
    try {
        const response = await fetch(url, options)
        const result = await response.json()
        return result       
    } catch(err) {
        console.error(`You have an error: ${err}`)
    }
}