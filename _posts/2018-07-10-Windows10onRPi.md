---
title: How to install full Windows 10 for ARM on the Raspberry Pi 3
layout: post
icon: fab fa-windows
author: Bob Pony
comments: true
author-link: https://bobpony.org
description: The guide on how to install the full Windows 10 on the Raspberry Pi 3.
category: guides
---
The Raspberry Pi 3 is a credit card sized computer for experimenting or for small projects. It's an inexpensive computer, if you don't have one then I highly recommend you that you should [get one](https://www.amazon.com/CanaKit-Raspberry-Power-Supply-Listed/dp/B07BC6WH7V) since they're very inexpensive and fun to play around with. This guide tells you how to easily install full Windows 10 for ARM on the Raspberry Pi 3, no Windows IoT!

# Requirements
- Have a Raspberry Pi 3 (Works with other Raspberry Pi 3 models)
- A MicroSD Card that has at least 16 GB of space.
- Patience
- A computer that has an operating system running at least Windows 10 version 1703 (Creators Update)

# The steps on how to install Windows 10 for ARM on the RPi 3

1. Use MiniTool Partition Wizard to Partition the MicroSD with a boot partition that has 100 MB in size and the file system set as FAT16 (FAT) not FAT32 or NTFS and name it "BOOT", after that make the BOOT partition marked as active then make another partition that takes up the entire MicroSD card and make sure the file system is NTFS and have the name of the partition as "Windows".
2. Download the Windows 10 (arm64) from [this website](https://uup.rg-adguard.net/index.php) created by adguard.
(Select "Windows (Final version)" for type, "Feature update to Windows 10, version 1803 [arm64]" for version, select a language and an edition, and then select "Download ISO compiler in OneClick! (unZIP -> RUN creatingISO.cmd))
3. Now run the creatingISO batch file, and wait until it's complete.
4. After completion, mount the ISO in Windows. Copy the install.wim from the sources folder to a folder somewhere on your drive.
5. Now apply the wim image to the MicroSD Card. Make sure you run this command as administrator
```dism /apply-image /imagefile:install.wim /applydir:E: /index:1```

This might take a while depending on the speed of your MicroSD card!

Remember to replace the "E:" drive letter with the drive letter that is on the Windows partition of the MicroSD card.

# Creating the BCD
1. bcdboot E:\Windows /s K: /f UEFI
2. bcdedit /store K:\EFI\Microsoft\Boot\BCD /set {default} testsigning on
3. bcdedit /store K:\EFI\Microsoft\Boot\BCD /set {default} nointegritychecks on
4. bcdedit /store K:\EFI\Microsoft\Boot\BCD /set {default} bootmenupolicy legacy

Remember to replace the "E:" drive letter with the drive letter that is on the Windows partition of the MicroSD card, and replace the "K:" drive letter with the drive letter that is on the Boot partition of the MicroSD card.

# Injecting drivers
1. Download drivers by [clicking here](https://github.com/andreiw/RaspberryPiPkg/files/2110828/WoA64_Drivers.zip)
2. Extract it to a folder under the name ```WoA64_Drivers```
3. Run this command as admin ```dism /image:E: /add-driver /driver:WoA64_Drivers /recurse /forceunsigned```

Transfer the MicroSD card into the Raspberry Pi after its done injecting the drivers then enjoy!

Please note to not connect any devices into the Raspberry Pi, including the keyboard and mouse, until Windows is fully loaded, since you may run into issues.

Another note, during the setup process if you see the bsod and you haven't connected any USB devices yet... that's normal. After the reboot, it should take you into the OOBE (Out of box experience). This might take a while depending on the speed of your MicroSD card!

If you have any questions or comments about your experience then comment below!
