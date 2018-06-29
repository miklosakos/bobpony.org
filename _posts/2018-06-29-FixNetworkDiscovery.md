---
title: Fix Network Discovery problems where your PC doesn't show on the network
layout: post
icon: fab fa-windows
author: Bob Pony
comments: true
author-link: https://bobpony.org
description: How to fix Network Discovery problems especially if you have Windows 10
---
# Do you have issues where your computer refuses to be shown in the Network at all or any other computers not showing?
It probably looks something like this, assuming that you already have turned on Network Discovery. 

![Nothing in Network](https://i.imgur.com/MujwP83.png "PCs not showing in the network.")

With Windows 10 April 2018 Update (version 1803 or build 17134), ever since Microsoft axed the HomeGroup feature from it, there has been problems where computers over the Windows Network wouldn't be shown even though Network Discovery is turned on, but appear to be invisible in the "Network" folder of File Explorer. Follow these steps on how to fix the problem.

Don't worry! You're not alone, I've faced this problem too with Windows 10 computers since the Windows 10 April 2018 Update for me.

# How to fix this

## 1. Right click on the start button
You should get menu options

![Menu when right clicking start button](https://i.imgur.com/Vk2XSj1.png "Right clicking on the start button")
## 2. Click on Computer Management
You'll get a window that looks like this

![Computer Management](https://i.imgur.com/siJ9inL.png "Computer Management")
## 3. Expand "Services and Applications"

![Expanding "Services and Applications"](https://i.imgur.com/zHMXfQ5.png "Expanding "Services and Applications"")
## 4. Click on "Services"

![Click on "Services"](https://i.imgur.com/vbOkxrK.png "Click on "Services"")
## 5. Make sure the following essential services are running.
- DNS Client
- SSDP Discovery
- UPnP Device Host

If not, then start them and click on them then set the Startup type to Automatic.

## 6. Enable the last and important service.

Find the service "Function Discovery Resource Publication service." then start it and set its startup type to Automatic. It should look like this...

![Service](https://i.imgur.com/JTqL3sO.png "Function Discovery Resource Publication service.")

## 7. Profit!

Try going to the Network then if you see your PC shows up, it works! Also, try visiting the Network on another computer on the local network and see if the computer is shown. Don't forget to do these steps again on the other computers.

Feel free to comment about your experience below.