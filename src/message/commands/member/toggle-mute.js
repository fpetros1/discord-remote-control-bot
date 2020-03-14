export const ToggleMute = (msg) => {
    msg.member.edit({
        mute: !msg.member.voice.mute
    });
}