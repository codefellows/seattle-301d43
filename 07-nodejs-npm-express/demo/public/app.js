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

const source = $('#song-template').html();
const template = Handlebars.compile(source);

// set up instance methods
// Song.prototype.toHtmlString = function() {
//   return `<div style="background-image: url(${this.imageUrl})">
//     <h3>${this.title}</h3>
//     <h4>${this.artist}</h4>
//     <h6>${this.genre}</h6>
//   </div>`;
// };

Song.prototype.toHtmlString = function() {
  return template(this);
};

// create song instances
new Song('Shut Up And Dance', 'Walk the Moon', '<strong>rock</strong>', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Walk_the_Moon_-_Talking_Is_Hard.png/220px-Walk_the_Moon_-_Talking_Is_Hard.png');
new Song('Gang of Rhythm', 'Walk Off the Earth', 'indie', 'https://upload.wikimedia.org/wikipedia/en/3/35/Walk_off_the_Earth_-_REVO.jpg');
new Song('Dorothy', 'Polo and Pan', 'electronic', 'https://f4.bcbits.com/img/a2508153936_16.jpg');
new Song('Take Five', ' Dave Brubeck Quartet', 'jazz', 'https://upload.wikimedia.org/wikipedia/en/e/e5/Time_out_album_cover.jpg');
new Song('The Fruit That Ate Itself', 'Modest Mouse', 'Alternative', 'https://lh3.googleusercontent.com/Tem7TxFYBEG388g05QS48UXz0nOZCn_pdSQ2U5UQpD9t0Rw2otetQy3wtVbbceFMVR9FfGdD1Q=s512-c-e100-rwu-v1');
new Song('El Rey', 'Vicente Fernandez', 'Regional Mexican', 'https://en.wikipedia.org/wiki/Vicente_Fern%C3%A1ndez#/media/File:Vicente_Fern%C3%A1ndez_-_Pepsi_Center_-_06.11.11.jpg');
new Song('Oh! Centra' , 'Javelin', 'luxury pop', 'https://f4.bcbits.com/img/a0390655255_10.jpg');
new Song ('Ungirthed', 'Purity Ring', 'Canadian witch house', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Purity_Ring_-_Shrines.png/220px-Purity_Ring_-_Shrines.png');
new Song ('Vanished', 'Crystal Castles', 'nintendo-dance-electro', 'https://images.eil.com/large_image/CRYSTAL_CASTLES_CRYSTAL%2BCASTLES-432563.jpg');
new Song('Never Gonna Give You Up', 'Rick Astley', 'Troll', 'https://images-na.ssl-images-amazon.com/images/I/517uGjBtGhL._SS500.jpg');

// put song instances on page
const $songsContainer = $('#songs-container');
for(const song of Song.allSongs) {
  $songsContainer.append(song.toHtmlString());
}
