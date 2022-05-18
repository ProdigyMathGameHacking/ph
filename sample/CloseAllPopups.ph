type: "Hack"
category: "category.utility"
name: "Close all popups"
description: "Closes all popups in Prodigy."

return: |
  All open popups were closed

setClick: |
  _.instance.prodigy.open.menuCloseAll();