type: "Hack"
category: "category.utility"
name: "Close all popups"
description: "Closes all popups in Prodigy."

return: |
  Toast.fire("Closed!", "All open popups were closed.", "success");

setClick: |
  _.instance.prodigy.open.menuCloseAll();