
export const initialState = {
    user: 'null',
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    token: null, 
    // IMP NOTICE: After production of this project , set the above user value to null. 
    // So every user first go through spotify user autehentication
};

 const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }
            case 'SET_TOKEN': 
            return {
                ...state,
                user: action.token
            }
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists
                }
                case 'SET_DISCOVER_WEEKLY':
                    return {
                        ...state,
                        discover_weekly: action.discover_weekly,
                    }
        default:
            return state;
    }
 }

 export default reducer