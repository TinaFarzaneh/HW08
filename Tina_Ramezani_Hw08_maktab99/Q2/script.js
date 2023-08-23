const callback = function (elem) {
  elem.style.backgroundColor = "red";
  elem.innerHTML = "Tina Ramezani";
};
function elemCreator(elementType, callback) {
  const element = document.createElement(elementType);

  document.body.appendChild(element);
  callback(element);
}

elemCreator("div", callback);
