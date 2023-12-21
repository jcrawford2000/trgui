export default (state, action) => {
    switch(action.type) {
        case 'GET_SETTINGS':
            console.log('GET_SETTINGS: ' + JSON.stringify(action.payload))
            return {
                ...state, 
                loading: false,
                settings: action.payload
            }
        case 'SETTINGS_ERR':
            return {
                ...state,
                error: action.payload
            }
        case 'UPDATE_SETTINGS':
            console.log('UPDATE_SETTINGS: ' + JSON.stringify(action.payload))
            return {
                ...state,
                settings: action.payload
            }
        case 'SAVE_SETTINGS':
            console.log('SAVE_SETTINGS: ' + JSON.stringify(action.payload))
            return {
                ...state,
                settings: action.payload
            }
        default:
            return state
    }
}