exports.highlightBtn = function (pressedBtnClass) {
  const buttons = [
    ".addBlog",
    ".addAhaMoment",
    ".addDadHack",
    ".addMainProject",
    ".addSideProject",
  ];

  buttons.forEach((btnClass) => {
    const button = document.querySelector(btnClass);
    const pressedBtn = button.classList[0] === pressedBtnClass;
    button.classList.toggle("addContentHighlightBtn", pressedBtn);
  });
};
