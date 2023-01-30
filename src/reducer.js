
export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBDAB4FAaUj0uezpREnqMncW0BVuoSIRQ8M3yXWi5wo7OXfwe_bdFKjlI3sbROss35IKG1VJc2xy2SoEmDZK-RF-YsL_bqPRgqbSyGybbYKkZ4v-vHJWmbxR3PA9hgk4V4rN8b8NFAqx_GkB1z5oMcUbj1VkidOECDcruQdFA9i4OtURqI4CgzYN6ks-u6aGYiVtwi6xDjlJ4STpL3h6w",
};

const reducer=(state,action) =>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;