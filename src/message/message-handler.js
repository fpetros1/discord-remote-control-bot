import { AllCommands } from './commands/all';

export function MessageHandler(msg) {
    
    const msgContent = msg.content;

    if (msgContent.startsWith('!')) {

        const words = msgContent.split(' ');
        const firstWord = words.shift();
        const commandKey = firstWord.substring(1, firstWord.length);

        if (AllCommands[commandKey]) {
            AllCommands[commandKey](msg, words);
        }
    }

};