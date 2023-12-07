import axios from 'axios';
import { TRENDING_LATEST, GAINERS_N_LOSERS } from '../constants';
import dotenv from 'dotenv';
dotenv.config();

const CMC_KEY = process.env.CMC_API_KEY;

export const fetchTrending = async () => {
	try {
		const response = await axios.get(TRENDING_LATEST, {
			headers: {
				'X-CMC_PRO_API_KEY': CMC_KEY,
			},
		});
	} catch (err) {
		console.error(err);
	}
};

export const fetchGainersNLosers = async () => {
	try {
		const response = await axios.get(GAINERS_N_LOSERS, {
			headers: {
				'X-CMC_PRO_API_KEY': CMC_KEY,
			},
		});
	} catch (err) {
		console.error(err);
	}
};
