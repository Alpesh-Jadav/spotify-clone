
export const initialState = {
    user: null,
    playlists: [],
    reccomend_songs: null,
    playlists_items: null,
    playlists_duration: 0,
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
            case 'SET_RECCOMEND_SONGS':
                return {
                    ...state,
                    reccomend_songs: action.reccomend_songs,
                }
                case 'SET_PLAYLISTS_ITEMS_DURATION':
                    return {
                        ...state,
                        playlists_duration: action.playlists_duration,
                    }
        default:
            return state;
    }
 }

 export default reducer