const fetchSummaryData = async () => {
    const response = await fetch("./api/summary")
    const data = await response.json()
    
    console.log(data);
}

const api = { fetchSummaryData }

export default api