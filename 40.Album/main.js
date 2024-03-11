"use strict";
function make_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const albums = [
    make_album('Alan Walker', 'Faded'),
    make_album('Arijit Singh', 'Best of Arijit Singh'),
    make_album('Atif Aslam', 'Greatest Hits', 15)
].map(album => `artist: ${album.artist}\ntitle: ${album.title}${album.tracks ? `\ntracks: ${album.tracks}` : ''}`).join('\n\n');
console.log(albums);
