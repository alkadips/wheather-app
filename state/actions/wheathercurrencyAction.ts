export const getDispatchWheatherData = (wheatherData: any) => {
    return {
        type: "getWheather",
        payload: wheatherData
    }
}
export const getDispatchCurrency = (data: any) => {
    return {
        type: "getCurrency",
        payload: data
    }
}

