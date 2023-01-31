let click = 1;

function addBlock() {

    if (click <= 10) {
        const myNode = document.createElement("div");
        myNode.className = "block";
        myNode.innerHTML = click;
        document.getElementById("assignment-03").appendChild(myNode);

        click++;

    }
    else {
        alert("you can only add 10 blocks");
    }


}