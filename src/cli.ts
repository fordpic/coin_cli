import chalk from 'chalk';
import ora from 'ora';
import { select, input } from '@inquirer/prompts';
import { Command } from 'commander';
import { ACTIONS } from './constants';
import { fetchTrending, fetchGainersNLosers } from './fetcher';

// Convenience
const log = console.log;
const cyan = chalk.cyan;
const green = chalk.green;
const red = chalk.red;
const program = new Command();

// Flow is:
// 1. What would you like to do? = User selects option
// 2. Option makes the correct call & returns info in terminal

async function main() {
	const spinner = ora({
		text: 'Firin up baby',
	});

	try {
		program
			.name('Ya bois coin tracker')
			.description('For making all the monies');

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
		}
	} catch (err) {
		log('\n');
		console.error(`${red(err)}`);
		spinner.stop();
	}
}

main();
