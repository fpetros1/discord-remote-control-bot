import { ToggleMute } from "./toggle-mute";
import { ToggleDeaf } from "./toggle-deaf";

export const ToggleMuteDeaf = (msg) => {
    ToggleMute(msg);
    ToggleDeaf(msg);
}