import { combineReducers } from "redux";

const init = {
  a: "aaa"
}
const dataReducer = ( state = init, action ) => {
    switch ( action.type ) {
        default: 
          return state;
    }
};

const reducer = combineReducers( {
    data: dataReducer,
} );

export default reducer

