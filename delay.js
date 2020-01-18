window.addEventListener('DOMContentLoaded',function() {
    getTrainList();
});

function getTrainList() {
    var url = "https://tetsudo.rti-giken.jp/free/delay.json";
    fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(json) {
        for(var i = 0; i < json.length; i++) {
            var train = json[i].name;
            var company = json[i].company;

            var row = document.getElementById('train-delay').insertRow();
            row.insertCell().textContent = i + 1;
            row.insertCell().textContent = train;
            row.insertCell().textContent = company;
        }
    });
}
