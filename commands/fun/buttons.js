const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Select your button'),
	async execute(interaction) {

		const button = new ButtonBuilder()
			.setLabel('repo for discord-bot')
			.setURL('https://github.com/RVCC-IDMX/discord-bot-frankoleka')
			.setStyle(ButtonStyle.Link);

		await interaction.reply({
			components: [new ActionRowBuilder().addComponents(button)],
		});
	},
};
