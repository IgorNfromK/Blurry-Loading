const loadingText = document.querySelector(".loading__text");
const backgroundView = document.querySelector(".background__image");

let load = 0;

let int = setInterval(blurringBackgroundImage, 30);

function blurringBackgroundImage() {
  load++;
  if (load > 99) clearInterval(int);
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  backgroundView.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  console.log(load);
}

const scale = (
  number,
  initialMinimum,
  initialMax,
  outputMinimum,
  outputMaximum
) => {
  let res =
    ((number - initialMinimum) * (outputMaximum - outputMinimum)) /
      (initialMax - initialMinimum) +
    outputMinimum;
  return res;
};
