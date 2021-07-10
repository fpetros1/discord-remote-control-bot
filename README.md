# Remote Control Bot

[![Tests](https://github.com/fpetros1/discord-remote-control-bot/actions/workflows/main.yml/badge.svg)](https://github.com/fpetros1/discord-remote-control-bot/actions/workflows/main.yml)

Simple bot for remote controlling your user by chat

## Environment Configuration

Create a REMOTE_CONTROL_BOT_TOKEN environment variable with the bot token provided by Discord

## Running for development

Install dependencies with `npm install` and run with `npm start`

## Run bot connection test with Discord

Install dependencies with `npm install` and run with `npm test`

## Build for production

Install dependencies with `npm install` and run with `npm run build`, webpack will generate a `dist/discord-remote-control-bot.bundle.js` file

## Run in production

`node ./dist/discord-remote-control-bot.bundle.js`

## Available Commands
###### The bot user must have the corresponding permission for each command
###### All commands must be executed when you are connected to a voice channel

| Command       |  Parameters                            | Description                                  | Examples                           |
| ------------- | -------------------------------------- | -------------------------------------------- | ---------------------------------- |
| !mtc          | channelName(ignore case/partial match) | Move your user to the desired channel        | !mtc general, !mtc gen, !mtc gener |
| !dc           | None                                   | Disconnect your user from the voice chat     | !dc                                |
| !tm           | None                                   | Toggle server mute for your user             | !tm                                |
| !td           | None                                   | Toggle server deaf for your user             | !td                                |
| !tmd          | None                                   | Toggle server mute and deaf for your user    | !tmd                               |
