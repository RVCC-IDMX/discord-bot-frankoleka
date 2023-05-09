const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')
				.setRequired(true)
				// Ensure the text will fit in an embed description, if the user chooses that option
				.setMaxLength(2000))
		.addBooleanOption(option => option.setName('ephemeral')
			.setDescription('Whether to show the response to everyone or just the user')),
	async execute(interaction) {
		// If ephemeral exists, make it true, if not make it false
		const ephemeralBool = interaction.options.getBoolean('ephemeral') ?? false;
		const replyObject = {
			content: interaction.options.getString('input'), ephemeral: ephemeralBool,
		};
		await interaction.reply(replyObject);
	},
};