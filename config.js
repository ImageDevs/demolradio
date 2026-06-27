// ===== Numbers Station configuration =====
// Edit these directly, OR use setup.html to generate this file.

window.RADIO_CONFIG = {
  // The frequency (MHz) that unlocks the broadcast.
  TARGET: 19.4,

  // How precisely the listener must tune, in MHz. Smaller = harder.
  TOLERANCE: 0.2,

  // The audio source. Leave EMPTY ("") to use the built-in default
  // numbers-station broadcast — the radio works without any file.
  // To use your own recording, set one of:
  //  1) A file committed into this repo, e.g. "broadcast.mp3"
  //  2) A direct Google Drive link (use setup.html to convert a share link)
  AUDIO_SRC: "broadcast.mp3",

  // If true, the audio loops while the listener stays tuned in.
  LOOP: false
};
