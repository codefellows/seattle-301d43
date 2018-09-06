'use strict';

// set up constructor
const Song = function(title, artist, genre, imageUrl) {
  this.title = title;
  this.artist = artist;
  this.genre = genre;
  this.imageUrl = imageUrl || 'https://picsum.photos/200/200';
  Song.allSongs.push(this);
};
Song.allSongs = [];

// set up instance methods
Song.prototype.toHtmlString = function() {
  return this.title;
};

// create song instances
new Song('Shut Up And Dance', 'Walk the Moon', 'rock', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Walk_the_Moon_-_Talking_Is_Hard.png/220px-Walk_the_Moon_-_Talking_Is_Hard.png');

// put song instances on page
const $songsContainer = $('#songs-container');
for(const song of Song.allSongs) {
  $songsContainer.append(song.toHtmlString());
}
