import { actionEnums } from '../action/admin-action-enum'

const initialState = {
    status: false,
    data: [],
    messages: ""
}

export function CategoryReducer(state = initialState, action) {
    switch(action.type){
        case actionEnums.CATEGORY_REQUEST:
        return {
            ...state,
            isRequest: true,
        }

        //GET
            case actionEnums.GET_CATEGORY_DATA:
            {
                const { status, content, message } = action.payload
                return {
                    ...state,
                    status,
                    data: content || [],
                    message
                }
            }
            default:
                return state
            }
    }
