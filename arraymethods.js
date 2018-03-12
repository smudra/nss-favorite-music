//1. Create three separate arrays; one for songs, one for albums, and one for artists.

var songArray = ["Voulez Vous ", "Stayin' Alive ", "Come Together ", "River of Dreams ", "To The Moon and Back ", "Livin' La Vida Loca ", "Ray of Light ", "We've got It Goin' On ", "Heal the World ", "Crazy "];
var albumArray = ["Mamma Mia ", "Saturday Night Fever ", "Abbey Road ", "River of Dreams ", "Savage Garden ", "Ricky Martin ", "Ray of Light ", "Backstreet Boys  ", "Dangerous ", "St. Elsewhere"];
var artistArray = ["ABBA ", "Bee Gees ", "The Beatles ", "Billy Joel ", "Savage Garden ", "Ricky Martin ", "Madonna ", "Backstreet Boys ", "Michael Jackson ", "Gnarls Barkley"];

var songsDOM = document.getElementById("songs-dom");
var albumsDOM = document.getElementById("albums-dom");
var artistsDOM = document.getElementById("artists-dom");

// ========== Adding songs to the DOM ========== 

// looping through the songs
songArray.forEach(function(song) {
    songsDOM.innerHTML += '<li class="list-style">' + song + '</li>'; 
    // console.log("Show me songs ", song);
  });

// ========== Adding Albums to the DOM ==========

// looping through the albums
albumArray.forEach(function(album) {
    albumsDOM.innerHTML += '<li class="list-style">' + album + '</li>'; 
    // console.log("Show me albums ", album);
  });

// ========== Adding Artists to the DOM ========== 

// looping through the artists
artistArray.forEach(function(artist) {
    artistsDOM.innerHTML += '<li class="list-style">' + artist + '</li>'; 
    // console.log("Show me artists ", artist);
  });


// 6. Using a form; Add 2 more songs.
//     - Each song should be added to the end of the song array.
//  ========== Adding Additional Songs to the End  ========== 

function displaySong() {
    var inputSong = document.getElementById("input-song").value.toUpperCase(); 

    console.log("What is inputSong showing? ", inputSong);
    songArray.push(inputSong);

    songsDOM.innerHTML = "";
    songArray.forEach(function(song) {
        songsDOM.innerHTML += '<li class="list-style">' + song + '</li>'; 
      });
}
//     - Each album should be added to the end of the album array.
//  ========== Adding Albums to the End ========== 
function displayAlbum() {
    var inputAlbum = document.getElementById("input-album").value;
    console.log("What is in inputAlbum ", inputAlbum);
    albumArray.push(inputAlbum);

    albumsDOM.innerHTML = "";
    albumArray.forEach(function(album) {
        albumsDOM.innerHTML += `<li class="list-style">` + album +`</li>`;
    });
}


//     - Each artist should be added to the beginning of the artist array.
//  ========== Adding Artists to Beginning ========== 
function displayArtist() {
    var inputArtist = document.getElementById("input-artist").value.toLowerCase();

    console.log("What's inputArtist showing? ", inputArtist);

    artistArray.unshift(inputArtist);
    artistsDOM.innerHTML = "";
    artistArray.forEach(function(artist) {
        artistsDOM.innerHTML += `<li class="list-style">` + artist + `</li>`;
    });
}


function displaySong() {
    var inputSong = document.getElementById("input-song").value; 

    console.log("What is inputSong showing? ", inputSong);
    songArray.push(inputSong);

    songsDOM.innerHTML = "";
    songArray.forEach(function(song) {
        songsDOM.innerHTML += '<li class="list-style">' + song + '</li>'; 
        // console.log("Show me songs ", song);
      });

    console.log("What is songArray showing? ", songArray);

}