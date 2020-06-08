function handleFirstPlay(event) {
  let player = event.target;
  console.log(player.isPlaying());
  player.onplay = null;

  // Start whatever you need to do after playback has started
}