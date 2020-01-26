import projectSettings from "../../project_settings"

export const getRequest = async (url) => {
    const response  = await fetch(`${projectSettings.apiBaseUrl}${url}`)

    if (!response.ok) {
        console.warn(`Get request to url: ${url} failed`)
        return
    }

    if (
        response.headers.has("Content-Type") && 
        response.headers.get("Content-Type") === "application/json"
    ) {
        return await response.json()
    }

    return await response.text()
}

export const postRequest = async (url, data, contentType = "application/json") => {
    const headers = {
        "Content-Type": contentType
    }

    if (contentType === "application/json") {
        data = JSON.stringify(data)
    }

    const response = await fetch(`${projectSettings.apiBaseUrl}${url}`, {
        method: "POST",
        cache: "no-cache",
        headers,
        body: data
    })

    if (!response.ok) {
        console.warn(`Post request to url: ${url} failed`)
        return
    }
    
    if (
        response.headers.has("Content-Type") && 
        response.headers.get("Content-Type") === "application/json"
    ) {
        return await response.json()
    }

    return await response.text()
}