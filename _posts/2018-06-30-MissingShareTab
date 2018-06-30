---
title: Fix missing "Sharing" tab in Windows 10
layout: post
icon: fab fa-windows
author: Bob Pony
comments: true
author-link: https://bobpony.org
description: How to fix a problem where the Sharing tab doesn't appear for the folder's properties.
---
# Are you trying to share folders over the network but you can't since the "Sharing" tab is missing?

Don't worry, you're not alone. I've faced this problem when I've tried to share a folder on Windows 10, but ever since the April 2018 Update. I was unable to share the folder since the Sharing tab was missing for me.

# How to fix this

## 1. Press Win and R key together on the keyboard
This should bring up the Run dialog box.

## 2. Type `regedit` then press the enter key
This will open Registry Editor.

## 3. Navigate to the following key.
In the top address bar of Registry Editor copy this below then paste it in then press the enter key.

```Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked```

## 4. Delete the following registry
If you got in then find `{f81e9010-6ea4-11ce-a7ff-00aa003ca9f6}` if it's there, then delete it.

## 5. Sign out then sign back in
After signing back in, when you go the folder's properties you should be able to see the "Sharing" tab now.

Feel free to comment below about your experiences.
