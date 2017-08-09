// Reducer
export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_MOVIE':
            return [
                ...state,
                {
                    key: state.reduce((maxKey, movie) => Math.max(movie.key, maxKey), -1) + 1,
                    title: action.title,
                    releaseYear: action.releaseYear,
                    details: action.details,
                }
            ];

        case 'UPDATE_MOVIE':
            return state.map((movie, index) => {
                if (movie.key === action.key) {
                    return Object.assign({}, movie, action.updates);
                }

                return movie;
            });

        case 'DELETE_MOVIE':
            return state.filter(movie => movie.key !== action.key);

        default:
            return state;
    }
};

// Actions
export const createMovie = (movie) => (
    {
        type: 'CREATE_MOVIE',
        title: movie.title,
        releaseYear: movie.releaseYear,
        details: movie.details,
    }
);

export const updateMovie = (key, updates) => (
    {
        type: 'UPDATE_MOVIE',
        key: key,
        updates: updates
    }
);

export const deleteMovie = (key) => (
    {
        type: 'DELETE_MOVIE',
        key: key
    }
);