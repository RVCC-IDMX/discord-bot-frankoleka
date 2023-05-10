const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');
let cowlist = [];

function get_cows(error, cow_names) {
	if (error) {
		console.log(error);
	}
	else if (cow_names) {
		console.log(`Number of cows available: ${cow_names.length}`);
		cowlist = cow_names;
		console.log(cowlist);
	}
}

cowsay.list(get_cows);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cowsay')
		.setDescription('Use cowsay!')
		.addStringOption(option =>
			option.setName('text')
				.setDescription('The text to make the cow say')
				.setRequired(true)
				.setMaxLength(2000))
		.addStringOption(option =>
			option.setName('cow')
				.setDescription('The cow to use')
				.setRequired(false)),
	async execute(interaction) {
		const text = interaction.options.getString('text');
		const cowName = interaction.options.getString('cow') || 'default';
		// try {
		// 	const isValidCow = cowName && typeof cowsay.say({ text, f: cowName }) === 'string';
		// 	console.log(isValidCow);
		// }
		// catch (error) {
		if (!cowlist.includes(cowName))	{
			return await interaction.reply(`Invalid cow name. Available cows are: ${cowlist.join(', ')}`);
		}
		try {
			const cow = cowsay.say({ text, f: cowName }).replaceAll('`', '\'');
			await interaction.reply(`\`\`\`${cow}\`\`\``);
		}
		catch (error) {
			console.error(error);
			await interaction.reply('An error occurred while trying to use cowsay. Try a different cow.');
		}
	},
};
