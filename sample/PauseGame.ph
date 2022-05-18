type: "Toggler"
category: "category.utility"
name: "Pause Game"
description: ""

returnEnabled: |
  Toast.fire("Success!", "Successfully paused Prodigy.", "success");

setEnabled: |
  _.network.game._paused = true;
  



returnDisabled: |
  Toast.fire("Success!", "Successfully resumed Prodigy.", "success");

setDisabled: |
  _.network.game._paused = false;