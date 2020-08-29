
export const initialState = {
    user: null,
    playlists: [],
    reccomend_songs: null,
    playlists_items: null,
    token: null,
};

const reducer = (state, action) => {


    switch (action.type) {
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

        default:
            return state;
    }
}

export default reducer