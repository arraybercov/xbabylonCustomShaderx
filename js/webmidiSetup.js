var input;
var cc1, cc2, cc3, cc4,
    cc5, cc6, cc7, cc8 = undefined

WebMidi.enable(function (err) {

  if (err) {
    console.log("WebMidi could not be enabled.", err);
  }

  // Viewing available inputs and outputs
  console.log(WebMidi.inputs);
  console.log(WebMidi.outputs);

  // Display the current time
  console.log(WebMidi.time);

  // Store the controller as your input
  input = WebMidi.getInputByName("IAC Driver Bus 1");

// Listen for a 'note on' message on all channels
input.addListener('noteon', "all",
  function (e) {
    console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
  }
);

// Listen to control change message on all channels (CCs)
input.addListener('controlchange', "all",
  function (e) {
    // console.log("Received 'controlchange' message.", e);

    // Look at your midi device in the console and find the matching controller number. Plug it in below:
    if (e.controller.number === 1) {
      cc1 = e.value;
      // console.log("cc 1:", cc1)
    }
    if (e.controller.number === 2) {
      cc2 = e.value;
      // console.log("cc 2: ", cc2)
    }
    if (e.controller.number === 3) {
      cc3 = e.value;
      // console.log("cc 3: ", cc3)
    }
    if (e.controller.number === 4) {
      cc4 = e.value;
      // console.log("cc 4: ", cc4)
    }
    if (e.controller.number === 5) {
      cc5 = e.value;
      // console.log("cc5: ", cc5)
    }
    if (e.controller.number === 6) {
      // console.log("cc 6: ", cc6)
      cc6 = e.value;
    }
    if (e.controller.number === 7) {
      // console.log("cc 7: ", cc7)
      cc7 = e.value;
    }
    if (e.controller.number === 8) {
      // console.log("cc 8: ", cc8)
      cc8 = e.value;
    }
  } );
} );
