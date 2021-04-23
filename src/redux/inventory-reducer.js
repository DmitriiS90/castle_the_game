const SET_KEY = 'SET_KEY'

const initialState = {
    key: false,
    crowbar: false
};

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_KEY1':
            //debugger
            return {
                ...state,
                key: true
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

export const setKey = (key) => {return {type: SET_KEY, key}};

export default inventoryReducer;