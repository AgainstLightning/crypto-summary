const fetchSummaryData = async () => {
    const response = await fetch("./api/summary")
    const data = await response.json()
    
    return data
}

const api = { fetchSummaryData }

export default api