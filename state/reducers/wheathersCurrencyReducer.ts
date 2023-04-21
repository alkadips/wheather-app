
const initialState = {
    wheatherscurrency: [],
    loading: true
}

const wheathersCurrencyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getWheathers":
            return {
                ... state,
                wheatherData: action.payload,
                loading: false
            }

        case "getcurrency":
            return {
                ... state,
                currencyData: action.payload,
                loading: false
            } 
            
        default: 
            return state    
    }
}
export default wheathersCurrencyReducer;