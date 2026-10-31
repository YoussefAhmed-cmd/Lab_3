
document.getElementById("greet").onclick = function () {

    let name = document.getElementById("name").value;

    if (name == "") {

        return;
    }

    document.getElementById("title").innerHTML = "Welcome, " + name + "!";

    let item = document.createElement("li");
    item.innerHTML = name;

    document.getElementById("list").prepend(item);

    item.onclick = function () {
        document.getElementById("title").innerHTML = "Goodbye, " + name + "!";
        item.remove();
    };

    document.getElementById("name").value = "";
};
