export const MoveToChannel = (msg, params) => {
    
    const channelName = params[0];

    if (channelName) {

        const channelArray = [...msg
            .channel
            .guild
            .channels
            .cache
            .values()]

        const voiceChannels = channelArray.filter(channel => channel.type === 'voice');

        const selectedChannels = voiceChannels
            .filter(channel => channel.name.toLowerCase().startsWith(channelName.toLowerCase()));

        if (selectedChannels.length > 0) {
            const channel = selectedChannels[0];
            msg.member.edit({
                channel
            });
        }
    }

}