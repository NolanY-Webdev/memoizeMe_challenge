var memorize = (function() {
  var things = {};

  function memoryRetrieve(elementID) {
    if (things.hasOwnProperty(elementID)) {
      return things[elementID];
    } else if (document.getElementbyID(elementID)) {
      console.log(elementID + ' element not found. Adding now.');
      var element = document.getElementbyID(elementID);
      things[elementID] = element;
      return things[elementID];
    } else {
      console.log('ERROR: Not a valid elementID');
    }
  }

  function logIt() {
    console.log(things);
  }

  return {
    logIt : logIt,
    memoryRetrieve : memoryRetrieve
  };
})();