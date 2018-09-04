---
title: How to fix Steam issues under Windows XP
layout: post
icon: fab fa-steam
author: Bob Pony
comments: true
author-link: https://bobpony.org
description: Fix the issue when you get "content servers unreachable" when downloading a game.
category: guides
---
Apparently since a few weeks ago, Windows XP users including Linux users who use wine to play their steam windows games on their Linux systems have been experiencing issues when trying to download the game from Steam, especially to the users who have a fresh install. I've experienced the same problem before, until now. I've found the solution on how to fix it, keep on reading to learn how!

Steps
1. Exit Steam (If you haven't exited it out already)
2. Navigate to the path ```C:/Program Files/Steam/config/```
3. Edit the file ```config.vdf``` in a text editor (Don't use NOTEPAD!)

In the text editor, find the section that looks like this

```"InstallConfigStore" {

"Software" {

"Valve" {

"Steam"

"cip"```

Then paste in this under "cip"

```"CS" "valve511.steamcontent.com;valve501.steamcontent.com;valve517.steamcontent.com;valve557.steamcontent.com;valve513.steamcontent.com;valve535.steamcontent.com;valve546.steamcontent.com;valve538.steamcontent.com;valve536.steamcontent.com;valve530.steamcontent.com;valve559.steamcontent.com;valve545.steamcontent.com;valve518.steamcontent.com;valve548.steamcontent.com;valve555.steamcontent.com;valve556.steamcontent.com;valve506.steamcontent.com;valve544.steamcontent.com;valve525.steamcontent.com;valve567.steamcontent.com;valve521.steamcontent.com;valve510.steamcontent.com;valve542.steamcontent.com;valve519.steamcontent.com;valve526.steamcontent.com;valve504.steamcontent.com;valve500.steamcontent.com;valve554.steamcontent.com;valve562.steamcontent.com;valve524.steamcontent.com;valve502.steamcontent.com;valve505.steamcontent.com;valve547.steamcontent.com;valve560.steamcontent.com;valve503.steamcontent.com;valve507.steamcontent.com;valve553.steamcontent.com;valve520.steamcontent.com;valve550.steamcontent.com;valve531.steamcontent.com;valve558.steamcontent.com;valve552.steamcontent.com;valve563.steamcontent.com;valve540.steamcontent.com;valve541.steamcontent.com;valve537.steamcontent.com;valve528.steamcontent.com;valve523.steamcontent.com;valve512.steamcontent.com;valve532.steamcontent.com;valve561.steamcontent.com;valve549.steamcontent.com;valve522.steamcontent.com;valve514.steamcontent.com;valve551.steamcontent.com;valve564.steamcontent.com;valve543.steamcontent.com;valve565.steamcontent.com;valve529.steamcontent.com;valve539.steamcontent.com;valve566.steamcontent.com;valve165.steamcontent.com;valve959.steamcontent.com;valve164.steamcontent.com;valve1611.steamcontent.com;valve1601.steamcontent.com;valve1617.steamcontent.com;valve1603.steamcontent.com;valve1602.steamcontent.com;valve1610.steamcontent.com;valve1615.steamcontent.com;valve909.steamcontent.com;valve900.steamcontent.com;valve905.steamcontent.com;valve954.steamcontent.com;valve955.steamcontent.com;valve1612.steamcontent.com;valve1607.steamcontent.com;valve1608.steamcontent.com;valve1618.steamcontent.com;valve1619.steamcontent.com;valve1606.steamcontent.com;valve1605.steamcontent.com;valve1609.steamcontent.com;valve907.steamcontent.com;valve901.steamcontent.com;valve902.steamcontent.com;valve1604.steamcontent.com;valve908.steamcontent.com;valve950.steamcontent.com;valve957.steamcontent.com;valve903.steamcontent.com;valve1614.steamcontent.com;valve904.steamcontent.com;valve952.steamcontent.com;valve1616.steamcontent.com;valve1613.steamcontent.com;valve958.steamcontent.com;valve956.steamcontent.com;valve906.steamcontent.com"```

After that, save the file then start Steam. Now try downloading any game now, if it starting downloading like it should, then feel free to pat yourself at the back like a good boy.
