export default (state, action) => {
    switch(action.type) {
        case 'NEW_EVENT':
            console.log('UPDATE_STAT: ' + JSON.stringify(action.payload));
            return {
                ...state,
                stats: [...state.events, action.payload]
            };
        default:
            return state;
    }
}