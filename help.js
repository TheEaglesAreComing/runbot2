exports.help = {
    "setprivate": ["/setprivate [on|off]`` - toggles the room as a private room. (The room's name will not be leaked by seen)"],
    "set": ["/set [command], [rank|on|off]"],
    "set mod": ["/set mod, [flooding|caps|stretching|spam|bannedwords|face], [on|off|rank] - sets a moderation aspect on/off or set it to moderate users of a specific rank or below."],
    "banword": ["/banword [word], [optional point value] - bans a word with an optional point value, defaulted at 3.  The bot will warn for point values of 1 - 2, mute for 3-6, hourmute for 7-9 and roomban for 10 and above."],
    "regexbanword": ["/regexbanword [regex], [optional point value] - bans a word with an optional point value, defaulted at 3.  The bot will warn for point values of 1 - 2, mute for 3-6, hourmute for 7-9 and roomban for 10 and above. Requires BotVoice"],
    "unbanword": ["/unbanword [word] - The bot will stop moderating that phrase."],
    "autoban": ["/autoban [user] - Puts the user on the rooms's blacklist."],
    "unautoban": ["/unautoban [user] - Removes the user from the room's blacklist."],
    "addcom": ["/addcom [command], [rank], [output] - adds a custom command to that room which users of specified rank and above can use, and will output the specified phrase."],
    "delcom": ["/delcom [command] - removes the command from the room's list of custom commands."],
    "appendcom": ["/appendcom [command], [text] - adds an extra line to the command."]
}