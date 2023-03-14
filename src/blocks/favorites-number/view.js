// Disclaimer: Importing the `store` using a global is just a temporary solution.
const { store } = window.__experimentalInteractivity;

store({
	selectors: {
		wpmovies: {
			// state.wpmovies.favoriteMovies is defined in `favorites-number/view.js`.
			// The state is shared between all blocks!
			favCount: ({ state }) => state.wpmovies.favoriteMovies.length,
			isFavoriteMoviesEmpty: ({ state }) =>
				`https://s.w.org/images/core/emoji/14.0.0/svg/${
					state.wpmovies.favoriteMovies.length !== 0
						? '2764'
						: '1f90d'
				}.svg`,
		},
	},
});
