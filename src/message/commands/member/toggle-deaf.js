export const ToggleDeaf = (msg) => {
    msg.member.edit({
        deaf: !msg.member.voice.deaf
    });
}