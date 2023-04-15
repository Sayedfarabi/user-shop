import { ADD_TO_TEAM, REMOVE_TO_TEAM, SET_AVAILABILITY, SET_DOMAIN, SET_GENDER } from "../action-types/actionTypes";

const initialState = {
    team: [],
    domain: null,
    available: null,
    gender: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_TEAM:
            const isMember = state.team.includes(action.payload);
            if (!isMember) {
                return {
                    ...state,
                    team: [...state.team, action.payload]
                }
            } else {
                return {
                    ...state,
                    team: [...state.team]
                }

            }

        case REMOVE_TO_TEAM:
            return {
                ...state,
                team: [...state?.team?.filter(user => user.id !== action?.payload?.id)]

            };

        case SET_DOMAIN:
            return {
                ...state,
                domain: action.payload
            }

        case SET_GENDER:
            return {
                ...state,
                gender: action.payload
            }
        case SET_AVAILABILITY:
            return {
                ...state,
                available: action.payload
            }
        default:
            return state
    }
}

export default userReducer;