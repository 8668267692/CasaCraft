document.getElementById("designForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("clientName").value.trim();
    let home = document.getElementById("homeType").value;
    let theme = document.getElementById("theme").value;
    let rooms = document.getElementById("rooms").value;
    let color = document.getElementById("wallColor").value;
    let furniture = document.getElementById("furniture").value;
    let pattern = document.getElementById("pattern").value;
    let kitchen = document.getElementById("kitchen").value;
    let budget = document.getElementById("budget").value;

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("resultInfo").innerHTML = `
        <h3>Client Details</h3>
        <p><b>Client Name:</b> ${name}</p>
        <p><b>Home Type:</b> ${home}</p>
        <p><b>Interior Theme:</b> ${theme}</p>
        <p><b>Number of Rooms:</b> ${rooms}</p>
        <p><b>Wall Colour:</b> ${color}</p>
        <p><b>Furniture:</b> ${furniture}</p>
        <p><b>Wall Pattern:</b> ${pattern}</p>
        <p><b>Kitchen Style:</b> ${kitchen}</p>
        <p><b>Budget:</b> ${budget}</p>
    `;

    document.getElementById("livingText").innerText =
        theme + " living room with " + color + " walls and " + furniture + ".";

    document.getElementById("bedroomText").innerText =
        theme + " bedroom with " + color + " walls and " + pattern + ".";

    document.getElementById("kitchenText").innerText =
        kitchen + " with a " + theme + " interior style.";

    document.getElementById("furnitureText").innerText =
        furniture + " with " + pattern + " and " + color + " wall colour.";

    document.getElementById("resultSection").style.display = "block";

    document.getElementById("resultSection").scrollIntoView({
        behavior: "smooth"
    });

});


// CasaCraft Video Controls

let videos = document.querySelectorAll(".video-card video");

videos.forEach(function(video) {

    video.addEventListener("play", function() {

        videos.forEach(function(otherVideo) {

            if (otherVideo !== video) {
                otherVideo.pause();
            }

        });

    });

});
