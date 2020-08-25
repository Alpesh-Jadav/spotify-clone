
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBW2ImLc000GN_VcC7eq8FOr5idJeGAx7YdAASZ8l3Y6K9X7ShEH4tdSETZZ-bbfTUF4WbbDZydMFieTjJrvCVPXnsgrB4wLxLnqikV7XGzyLMmjKdz0NbVNrytaIJl6zgc7Nb7ozRyzfgNxGmkxRn5i5HvdoA"
    // IMP NOTICE: After production of this project , set the above token value to null. 
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
        default:
            return state;
    }
 }

 export default reducer