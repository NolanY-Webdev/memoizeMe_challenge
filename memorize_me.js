function memorize(elementID) {
  var things = {};

  (function memoryRetrieve(elementID) {
    if (things.hasOwnProperty(elementID)) {
      return things[elementID];
    } else {
      console.log(elementID + ' element not found. Adding now.');
      var element = document.getElementbyID(elementID);
      things[elementID] = element;
      return things[elementID];
    }
  })();

  function logIt() {
    console.log(things);
  }






  return({
    logIt : logIt
  });
}