// Link dari API Al-Qur'an
var link = "http://api.alquran.cloud/v1/surah/2?offset=0&limit=5";

fetch(link)
    .then(response => response.json())
    .then(response => response.data.ayahs.forEach(ayat => {
        document.getElementById("root").innerHTML += "Ayat " + ayat.numberInSurah + "<br>"+ ayat.text + "<br>";
    }))