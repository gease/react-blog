const fetchUser = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_USER': return [...state, action.payload];
        default: return state;
    }
}

export default fetchUser;
