function previewImage(image) {
    var previewDiv = document.getElementById("preview");
    previewDiv.innerHTML = ""; 

    var previewImage = document.createElement("img");
    previewImage.src = image.src;
    previewImage.alt = image.alt;

    previewDiv.appendChild(previewImage);
}

function resetPreview() {
    var previewDiv = document.getElementById("preview");
    previewDiv.innerHTML = "<p>Hover over an image below to display here</p>";
}
