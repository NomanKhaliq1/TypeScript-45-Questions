interface Album {
    artist: string;
    title: string;
    tracks?: number; 
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
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