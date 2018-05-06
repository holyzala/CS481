import * as echo from '../actions/echo'

const initialState = {
    message: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case echo.ECHO_SUCCESS:
            console.log(action);
            return {
                message: action.payload
            };
        default:
            return state
    }
}

export const serverMessage = (state) => state.message
