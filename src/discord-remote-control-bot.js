import Discord from 'discord.js';
import { MessageHandler } from './message/message-handler';

export class DiscordRemoteControlBot {

    constructor(test) {
        const envVarToken = 'REMOTE_CONTROL_BOT_TOKEN';
        const botToken = process.env[envVarToken];
    
        if (!botToken) {
            throw new Error(
                'Bot token is not defined, please define the "REMOTE_CONTROL_BOT_TOKEN" environment variable');
        }
        
        const client = new Discord.Client();

        if (test) {
            client.login(botToken).then(() => {
                console.log('Connection Test: Successful');
                process.exit(0);
            }).catch(error => {
                console.error(error);
                console.log('Connection Test: Failed');
                process.exit(1);
            });
        } else {
            client.on('ready', () => {
                console.log('Bot is ready')
            });
    
            client.on('message', MessageHandler);
            client.login(botToken)
        }
    }

}
