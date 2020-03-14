export const Disconnect = (msg) => {
    msg.member.edit({
        channel: null
    });
}