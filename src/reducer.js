
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQASGlkrI5Sbh2lqDU8TKpu3VUmp1ANXwKZKxRv8QHZ_lw2QoYhQWs4Wri1BV_5PezeacJN-vfusS5fSlxBXJ9pIAdsUqOyV8RddzlbM5Zw2si4GLcCUU9oObdkpJXgvQo1WnDD3w5b4WfzBjCRwio7x3PGSpBc"
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