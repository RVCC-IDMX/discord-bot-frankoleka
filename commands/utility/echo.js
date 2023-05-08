const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')
			// Ensure the text will fit in an embed description, if the user chooses that option
				.setMaxLength(2000))
		.addBooleanOption(option =>
			option.setName('ephemeral')
				.setDescription('Whether or not the echo should be ephemeral')),
	async execute(client, interaction) {
		console.log(interaction);
		interaction.reply({ content: interaction.optionsgetString('input'), ephermeral: true });
	},
};