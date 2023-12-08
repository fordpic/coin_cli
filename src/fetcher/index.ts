import axios from 'axios';
import dotenv from 'dotenv';
import {
	TRENDING_LATEST,
	GAINERS_N_LOSERS,
	NEW_LISTINGS_MCAP,
} from '../constants/index.js';

dotenv.config();
const CMC_KEY = process.env.CMC_API_KEY;

export const fetchTrending = async () => {
	try {
		const response = await axios.get(TRENDING_LATEST, {
			headers: {
				'X-CMC_PRO_API_KEY': CMC_KEY,
				Accept: 'application/json',
			},
		});
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const fetchGainersNLosers = async () => {
	try {
		const response = await axios.get(GAINERS_N_LOSERS, {
			headers: {
				'X-CMC_PRO_API_KEY': CMC_KEY,
				Accept: 'application/json',
			},
		});
		return response.data;
	} catch (err) {
		console.error(err);
	}
};

export const fetchNewListingsByMCap = async () => {
	try {
		const response = await axios.get(NEW_LISTINGS_MCAP, {
			headers: {
				'X-CMC_PRO_API_KEY': CMC_KEY,
				Accept: 'application/json',
			},
		});
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
