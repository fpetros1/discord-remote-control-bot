import { ChannelCommands } from "./channel";
import { MemberCommands } from "./member";

export const AllCommands = {
    ...ChannelCommands,
    ...MemberCommands
};