var R = new XMLHttpRequest();
R.open("GET", "https://canary.discordapp.com/api/guilds/251862462343806976/widget.json", true);
R.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var Q = JSON.parse(this.responseText);
        document.getElementById("memberCount").innerText = " There are currently " + Q.members.length + " members online.";
    }
};
R.send();