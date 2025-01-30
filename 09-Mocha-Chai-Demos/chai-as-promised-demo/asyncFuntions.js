export const fetchData = async () => {
    return "Fetched Data";
}

export const fetchError = async () =>{
    throw new Error("Failed to fetch data")
}