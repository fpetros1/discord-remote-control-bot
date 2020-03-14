import { DiscordRemoteControlBot } from './src/discord-remote-control-bot';

new DiscordRemoteControlBot(process.argv.indexOf('--test') !== -1);
