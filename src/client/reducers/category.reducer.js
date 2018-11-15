import { actionEnums } from '../action/admin-action-enum';

const initialState = {
    isRequest: false,
    isLoading: true,
    status: false,
    data: [],
    messages: null
}

export function CategoryReducer(state = initialState, action) {
    switch(action.type){
        case actionEnums.CATEGORY_REQUEST:
        return {
            ...state,
            isRequest: true,
        };

        //GET
            case actionEnums.GET_CATEGORY_DATA:
            if (action.payload.isSuccess) {
            return {
                ...state,
                data: action.payload.data.content,
                isRequest: false,
                isLoading: false,
                status:true,
                messages: action.payload.data.messages
            };
            }
            else
            return {
                ...state,
                isRequest: false,
                isLoading: false,
                status:false,
                messages: action.payload.data.messages
            };
            default:
                return state
            }
    }
