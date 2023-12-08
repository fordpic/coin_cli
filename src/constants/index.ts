export const TRENDING_LATEST =
	'https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/latest';
export const GAINERS_N_LOSERS =
	'https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/gainers-losers';
export const NEW_LISTINGS_MCAP =
	'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&market_cap_max=1000000000&sort=volume_24h';

export const ACTIONS = {
	T: 'trending',
	GL: 'gainers-losers',
	NL: 'new-listings-mcap',
};
