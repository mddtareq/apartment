import { PENDING, DONE, ONGOING } from "./actionTypes";

const initialState = {

}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
          
            return state;

        case DONE:

           
            return state;

        case ONGOING:
            return state;
        default:
            return state;
    }
}

export default reducers;