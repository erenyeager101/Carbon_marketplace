document.getElementById('mineForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mineId = document.getElementById('mineSelect').value;
    updateMapAndResults(mineId);
});

function updateMapAndResults(mineId) {
    let mapUrl, forestCover, carbonSink, afforestation;

    // Map and data based on the selected mine
    switch (mineId) {
        case '1':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26637.350795427126!2d80.65394749730905!3d17.457952818630947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725467981757!5m2!1sen!2sin";
            forestCover = "120 hectares";
            carbonSink = "6,000 metric tons CO2";
            afforestation = "50 hectares to be afforested";
            break;
        case '2':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d61430.291860233076!2d82.56850505283919!3d22.337366202420846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725468709622!5m2!1sen!2sin";
            forestCover = "90 hectares";
            carbonSink = "4,500 metric tons CO2";
            afforestation = "80 hectares to be afforested";
            break;
        case '3':
            mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21718.618390267315!2d82.66766447937763!3d22.339096944773654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725468770879!5m2!1sen!2sin";
            forestCover = "150 hectares";
            carbonSink = "7,500 metric tons CO2";
            afforestation = "No additional afforestation needed";
            break;
        default:
            mapUrl = "";
            forestCover = "Not Available";
            carbonSink = "Not Available";
            afforestation = "N/A";
    }

    // Update map
    document.getElementById('mapContainer').innerHTML = `
        <iframe src="${mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    // Update results
    document.getElementById('forestCover').textContent = `Total Forest Cover: ${forestCover}`;
    document.getElementById('carbonSink').textContent = `Carbon Sink: ${carbonSink}`;
    document.getElementById('afforestation').textContent = `Land Area to be Afforested: ${afforestation}`;
}
