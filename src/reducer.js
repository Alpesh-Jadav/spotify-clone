
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    playlists_items: null,
    token: null, 
    // IMP NOTICE: After production of this project , set the above user value to null. 
    // So every user first go through spotify user autehentication
};

 const reducer = (state, action) => {
   

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
                case 'SET_PLAYLIST_ITEMS':
                    return {
                        ...state,
                        playlists_items: action.playlists_items,
                    }
        default:
            return state;
    }
 }

 export default reducer