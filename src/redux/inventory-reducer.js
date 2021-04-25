const initialState = {
    isClick: false,
    key: false,
    crowbar: false
};

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INVENTORY':
            //debugger
            return {
                ...state,
                isClick: true
            }
        case 'REMOVE_INVENTORY':
            //debugger
            return {
                ...state,
                isClick: false
            }
        case 'SET_CROWBAR':
            //debugger
            return {
                ...state,
                crowbar: true
            }
        case 'USE_CROWBAR':
            //debugger
            return {
                ...state,
                crowbar: false
            }
        default:
            return state;
    }
};

//export const setKey = (key) => {return {type: SET_KEY, key}};

export default inventoryReducer;