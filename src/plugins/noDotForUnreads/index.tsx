/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NoDotForUnreads",
    description: "Disables the red dot in the tray when you only have unreads.",
    authors: [Devs.UnmatchedBracket],
    patches: [
        {
            find: "SYSTEM_TRAY_OPEN_VOICE_SETTINGS",
            replacement: {
                match: /=[^,]+.hasAnyUnread\(\)/,
                replace: "=false"
            }
        }
    ]
});
