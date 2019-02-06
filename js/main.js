// Список песен:
// 1. LA Chill Tour, 
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3

// 2. This is it band, 
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3

// 3. LA Fusion Jam,
// https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3
const songs = [
    {'file': 'LA%20Chill%20Tour.mp3', 'name':'LA Chill Tour'},
    {'file': 'This%20is%20it%20band.mp3', 'name':'This is it band'},
    {'file': 'LA%20Fusion%20Jam.mp3', 'name':'LA Fusion Jam'}
  ];
  const path = 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/';
  
  let i = 0;
  let players = document.getElementsByClassName( 'mediaplayer' );
  
  function controls( e ) {
    let audio = this.querySelector( 'audio' );
    let target = e.target;
    let title = this.getElementsByClassName( 'title' );
    while ( target != this ) {
  
      if ( target.classList.contains( 'playstate' ) ) {
        if ( this.classList.contains( 'play' ) ) {
          this.classList.remove( 'play' );
          audio.pause();
        } else {
          this.classList.add( 'play' );
          audio.play();
        }
        return;
      }
  
      if ( target.classList.contains( 'stop' ) ) {
        this.classList.remove( 'play' );
        audio.pause();
        audio.currentTime = 0;
        return;
      }
  
      if ( target.classList.contains( 'next' ) ) {
        if ( i < songs.length - 1) {
          i++
        } else {
          i = 0;
        }
        audio.src = path + songs[i].file;
        audio.currentTime = 0;
        audio.play();
        this.classList.add( 'play' );
        for ( let item of title ) {
          changeTitle( item, songs[i].name);
        }
  
        return;
      }
  
      if ( target.classList.contains( 'back' ) ) {
        if ( i > 0) {
          i--
        } else {
          i = songs.length - 1;
        }
        audio.src = path + songs[i].file;
        audio.currentTime = 0;
        audio.play();
        this.classList.add( 'play' );
        for ( let item of title ) {
          changeTitle( item, songs[i].name);
        }
        return;
      }
      target = target.parentNode;
    }
  }
  
  function changeTitle(elem, string) {
    elem.setAttribute( 'title', string );
  }
  
  for ( let player of players ) {
    player.addEventListener( 'click', controls );
  }