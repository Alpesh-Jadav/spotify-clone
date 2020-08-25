
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBxlzvhoxjsAhl4obV9mFFNwXUzY0USQmaEXkx7FcbDJJjxnmR6O3A578FkjwzLaTvVkVRQafbdywkAamai9sDHkHvRM6ZYFRxNZ7Pbz85Wr9OV0PHWfGExx3oX8nP2p9kk8RlNbNXQfi-UbXpDV9zlF9T8xNw"
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
        default:
            return state;
    }
 }

 export default reducer