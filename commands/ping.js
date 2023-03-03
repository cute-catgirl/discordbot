const { SlashCommandBuilder } = require('discord.js');
//const client = require('../main.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription("Replies with the bot's ping"),
	async execute(interaction) {
		await interaction.reply({ content: `Ping: ${interaction.client.ws.ping}ms`, ephemeral: true });
	},
};