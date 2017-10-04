// File I/O System Module
fs = require('fs');

// Variables used to store song data
var songs = [];
var labels = [];
var allChords = [];
var labelCounts = [];
var labelProbabilities = [];
var chordCountsInLabels = {};
var probabilityOfChordsInLabels = {};

// Songs that are used to measure level of difficulty and their chords
var imagine = ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'];
var somewhere_over_the_rainbow = ['c', 'em', 'f', 'g', 'am'];
var tooManyCooks = ['c', 'g', 'f'];
var iWillFollowYouIntoTheDark = ['f', 'dm', 'bb', 'c', 'a', 'bbm'];
var babyOneMoreTime = ['cm', 'g', 'bb', 'eb', 'fm', 'ab'];
var creep = ['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'];
var army = ['ab', 'ebm7', 'dbadd9', 'fm7', 'bbm', 'abmaj7', 'ebm'];
var paperBag = ['bm7', 'e', 'c', 'g', 'b7', 'f', 'em', 'a', 'cmaj7',
                'em7', 'a7', 'f7', 'b'];
var toxic = ['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7',
              'g7'];
var bulletproof = ['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'];
var song_11 = [];

// Adds the label for a song and its chords to songs array
// Adds the level of difficulty to the labels arary
function train(chords, label){
  songs.push([label, chords]);
  labels.push(label);
  // if there are duplicate chords, do not push to the chords array 
  for (var i = 0; i < chords.length; i++){
    if(!allChords.includes(chords[i])){
      allChords.push(chords[i]);
    }
  }

  // if label counts doesn't already contain the provided label, increment that label's count
  if (Object.keys(labelCounts).indexOf(label) > -1) {
    labelCounts[label] = labelCounts[label] + 1;
  } else {
    labelCounts[label] = 1;
  }
};

// Returns the amount of songs there are in the songs array
function getNumberOfSongs(){
  if (songs.length > 0) {
    return songs.length
  } else {
    return 0;
  }
};

// Calculates and sets the label level of difficulty with
// the level of a label passed in through labelCounts
function setLabelProbabilities() {
  Object.keys(labelCounts).forEach(label => {
    var numberOfSongs = getNumberOfSongs();
    labelProbabilities[label] = labelCounts[label] / numberOfSongs;
  });
};

// loops through each song and checks to see if there are any chords in the song array
// then it sets the number of chords in the chordCountsInLabel array
function setChordCountsInLabels(){
  songs.forEach(song => {
    if (chordCountsInLabels[song[0]] === undefined){
      chordCountsInLabels[song[0]] = {};
    }
    song[1].forEach(chord => {
      if (chordCountsInLabels[song[0]][chord] > 0){
        chordCountsInLabels[song[0]][chord] = chordCountsInLabels[song[0]][chord] + 1;
      } else {
        chordCountsInLabels[song[0]][chord] = 1;
      }
    });
  });
}

// loops through the array that holds the chordCountInLabels values
// looks at a songs chord and then specificly at a single chord
// and sets the probability of a chord's difficulty level 
function setProbabilityOfChordsInLabels(){
  probabilityOfChordsInLabels = chordCountsInLabels;
  Object.keys(probabilityOfChordsInLabels).forEach(chords => {
    Object.keys(probabilityOfChordsInLabels[chords]).forEach(singleChord => {
      probabilityOfChordsInLabels[chords][singleChord] = 
        probabilityOfChordsInLabels[chords][singleChord] * 1.0 / songs.length;
    });
  });
}

// calling the train function for each song title, including 
// their level of difficulty
train(imagine, 'easy');
train(somewhere_over_the_rainbow, 'easy');
train(tooManyCooks, 'easy');
train(iWillFollowYouIntoTheDark, 'medium');
train(babyOneMoreTime, 'medium');
train(creep, 'medium');
train(paperBag, 'hard');
train(toxic, 'hard');
train(bulletproof, 'hard');

setLabelProbabilities();
setChordCountsInLabels();
setProbabilityOfChordsInLabels();

// classifies and calculates the level of difficulty of an array of chords for a label
function classify(chords){
  var total = labelProbabilities;
  console.log('total', total);
  var classified = {};
  Object.keys(total).forEach(obj => {
    var first = labelProbabilities[obj] + 1.01;
    chords.forEach(chord => {
      var probabilityOfChordInLabel = probabilityOfChordsInLabels[obj][chord];
      if (probabilityOfChordInLabel === undefined){
        first + 1.01;
      } else {
        first = first * (probabilityOfChordInLabel + 1.01);
      }
    });
    classified[obj] = first;
  });
  console.log('classified', classified);
};

// calling the classify method in order to calculate the level
// of difficulty for these chords
classify(['d', 'g', 'e', 'dm']);
classify(['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m']);