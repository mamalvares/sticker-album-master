let text = "";

for (let i = 0; i <= 670; i++) {
    text += "<td><input type=checkbox>" + i + "<td>";
}

document.getElementById("figurinha").innerHTML = text;