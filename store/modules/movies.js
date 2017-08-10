// Reducer
export default (state = [], action) => {
    switch(action.type) {
        case 'CREATE_MOVIE':
            return [
                ...state,
                {
                    key: state.reduce((maxKey, movie) => Math.max(movie.key, maxKey), -1) + 1,
                    ...action.movie,
                }
            ];

        default:
            return state;
    }
};

// Actions
export const createMovie = (movie) => (
    {
        type: 'CREATE_MOVIE',
        movie: movie,
    }
);