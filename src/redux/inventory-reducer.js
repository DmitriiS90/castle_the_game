const initialState = {
    isClick: false,
    key: false,
    crowbar: false,
    chestKey: false,
    clockHands: false,
    picture: false
};

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INVENTORY':
            return {
                ...state,
                isClick: true
            }
        case 'REMOVE_INVENTORY':
            return {
                ...state,
                isClick: false
            }
        case 'SET_CROWBAR':
            return {
                ...state,
                crowbar: true
            }
        case 'USE_CROWBAR':
            return {
                ...state,
                crowbar: false
            }
        case 'GET_CHEST_KEY':
            return {
                ...state,
                chestKey: true
            }
        case 'USE_CHEST_KEY':
            return {
                ...state,
                chestKey: false
            }
        case 'GET_CLOCK_HANDS':
            //debugger
            return {
                ...state,
                clockHands: true
            }
        case 'USE_CLOCK_HANDS':
            //debugger
            return {
                ...state,
                clockHands: false
            }
        case 'GET_PICTURE':
            //debugger
            return {
                ...state,
                picture: true
            }
        case 'USE_PICTURE':
            //debugger
            return {
                ...state,
                picture: false
            }
        default:
            return state;
    }
};

//export const setKey = (key) => {return {type: SET_KEY, key}};

export default inventoryReducer;