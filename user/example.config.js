/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Documentation: https://discordtickets.app
 * 	> Discord support server: https://go.eartharoid.me/discord
 *
 * ###############################################################################################
 */


module.exports = {
	defaults: {
		colour: '#009999',
		log_messages: false,
		name_format: 'ticket-{number}',
		opening_message: 'Hello {name}, thank you for creating a ticket. A member of staff will soon be available to assist you.\n\n__We will archive all messages in this channel at the end of the game.__'
	},
	'dsctickets.text-transcripts': {
        channels: {
            '895395828649312296': '895405497333715004'
        }
    	},
	developer: { debug: false },
	locale: 'en-US',
	logs: {
		enabled: false,
		keep_for: 30,
		split: true
	},
	max_listeners: 10,
	plugins: [
    	'dsctickets.text-transcripts'
	],
	presence: {
		duration: 60,
		presences: [
			{
				activity: '/new',
				type: 'PLAYING'
			},
			{
				activity: 'with tickets',
				type: 'PLAYING'
			},
			{
				activity: 'tickets',
				type: 'WATCHING'
			}
		],
		randomise: true
	},
	super_secret_setting: true,
	update_notice: true
};
