const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cowsay')
		.setDescription('Use cowsay!')
		.addStringOption(option =>
			option.setName('text')
				.setDescription('The text to make the cow say')
				.setRequired(true)),
	async execute(interaction) {
		const text = interaction.options.getString('text');
		const cow = cowsay.say({ text });
		await interaction.reply(`\`\`\`${cow}\`\`\``);
	},
};
