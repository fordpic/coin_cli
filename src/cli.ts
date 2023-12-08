import chalk from 'chalk';
import ora from 'ora';
import figlet from 'figlet';
import { select } from '@inquirer/prompts';
import { Command } from 'commander';
import { ACTIONS } from './constants/index.js';
import {
	fetchTrending,
	fetchGainersNLosers,
	fetchNewListingsByMCap,
} from './fetcher/index.js';

const log = console.log;
const cyan = chalk.cyan;
const green = chalk.green;
const red = chalk.red;
const program = new Command();

async function main() {
	const spinner = ora({
		text: 'Firin up baby',
	});

	log(figlet.textSync('Ya Bois Token Tracker'));

	try {
		program.version('1.0.0').description('For making all the monies');

		const choices = await select({
			message: 'What would you like to do?',
			choices: [
				{
					name: 'See Top Trending Tokens',
					value: ACTIONS['T'],
				},
				{
					name: 'See Biggest Gainers and Losers',
					value: ACTIONS['GL'],
				},
				{
					name: 'See New Listings By Market Cap',
					value: ACTIONS['NL'],
				},
			],
		});

		if (choices === ACTIONS['T']) {
			log(`${green('\nSnaggin the top trending tokens now...')}`);
			spinner.start();

			const data = await fetchTrending();
			spinner.stop();

			log(`${cyan.bold('Gotchu king!')} See the top trending tokens below: \n`);
			log(`${data}`);
		} else if (choices === ACTIONS['GL']) {
			log(`${green('\nSnaggin the biggest gainers n losers now...')}`);
			spinner.start();

			const data = await fetchGainersNLosers();
			spinner.stop();

			log(`${cyan.bold('Gotchu king!')} See the gainers n losers below: \n`);
			log(`${data}`);
		} else if (choices === ACTIONS['NL']) {
			log(
				`${green(
					'\nSnaggin the newest listings and sorting them by market cap for ya...'
				)}`
			);
			spinner.start();

			const { data } = await fetchNewListingsByMCap();
			spinner.stop();

			log(
				`${cyan.bold(
					'Gotchu king!'
				)} See the newest listings by market cap below: \n`
			);
			log(`${JSON.stringify(data, null, 2)}`);
		} else {
			log(`${red('You gotta select a real option my dood...try again lol')}`);
		}
	} catch (err) {
		log('\n');
		console.error(`${red(err)}`);
		spinner.stop();
	}
}

main();
