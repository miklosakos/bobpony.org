---
title: Best Windows 10 Tweaks
layout: post
icon: fab fa-windows
author: Bob Pony
comments: true
author-link: https://bobpony.org
description: The best tweaks for Windows 10 in my opinion.
---
Do you not like the way how the way Windows 10 works? Neither do I. Anyways, let's dig into the best tweaks for Windows 10 which are the best in my opinion, feel free to try it out for yourself. I'll keep updating this post later on...
# 1. Removing all of the modern/metro apps
Don't have an use for them? Well I highly recommend you do this "tweak", please note the following...
- You can't reinstall them later after they get removed
- This will not remove Microsoft Edge, the Settings App, and Windows Mixed Reality.
- Also, please note this will remove the calculator app too in Windows 10 including Sticky notes.
- You'll gain 2 GB of space.

To do this, run PowerShell as an administrator then paste this code in:

#### ```Get-AppXProvisionedPackage -online | Remove-AppxProvisionedPackage -online; Get-AppxPackage -AllUsers | Remove-AppxPackage```
# 2. Disable Cortana
Do you not like to talk to a personal computer assistant that collects from you? Neither do I. All you have to do is go to group policy then Computer Configuration -> Windows Compontents -> Search -> Allow Cortana then set it to Disabled.

Do you have any amazing tweaks you have for Windows 10? Feel free to comment below what tweak you have or edit this page on GitHub.
