document.addEventListener("DOMContentLoaded", () => {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  //addHeaderImages(windowHeight, windowWidth);

  window.addEventListener("scroll", () => {
    const titleTop = windowHeight * 0.5 - 0.075 * windowWidth;
    const backgroundTop = titleTop + windowHeight;
    const scrollPosition = window.scrollY;
    const logo = document.querySelector("#logoImage");
    const title = document.querySelector("#titleImage");
    const titleBar = document.querySelector("#titleBar");

    titleBar.style.height = `${15 - windowHeight / 125}vw`;

    let backgroundImageStyle = document.querySelector("#background");

    if (scrollPosition < titleTop) {
      logo.children[0].style.opacity = `${1 - scrollPosition / titleTop}`;
      logo.children[1].style.opacity = `${scrollPosition / titleTop}`;
      logo.children[0].style.height = `15vw`;
      logo.children[1].style.height = `15vw`;
      logo.children[0].style.left = "17vw";
      logo.children[1].style.left = "17vw";
      title.children[0].style.height = `15vw`;
      title.children[1].style.height = `15vw`;
      title.children[0].style.left = "31vw";
      title.children[1].style.left = "31vw";
      title.children[0].style.opacity = `${1 - scrollPosition / titleTop}`;
      title.children[1].style.opacity = `${scrollPosition / titleTop}`;
      logo.classList.remove("fixed");
      title.classList.remove("fixed");
      backgroundImageStyle.classList.add("fixedBackground");
      backgroundImageStyle.classList.remove("scrollingBackground");
    } else if (scrollPosition >= titleTop && scrollPosition < backgroundTop) {
      logo.classList.add("fixed");
      logo.children[0].style.height = `${
        15 - (scrollPosition - titleTop) / 125
      }vw`;
      logo.children[1].style.height = `${
        15 - (scrollPosition - titleTop) / 125
      }vw`;
      logo.children[0].style.left = `${
        17 + (scrollPosition - titleTop) / 62
      }vw`;
      logo.children[1].style.left = `${
        17 + (scrollPosition - titleTop) / 62
      }vw`;
      title.classList.add("fixed");
      title.children[0].style.height = `${
        15 - (scrollPosition - titleTop) / 125
      }vw`;
      title.children[1].style.height = `${
        15 - (scrollPosition - titleTop) / 125
      }vw`;
      title.children[0].style.left = `${
        31 + (scrollPosition - titleTop) / 115
      }vw`;
      title.children[1].style.left = `${
        31 + (scrollPosition - titleTop) / 115
      }vw`;
      backgroundImageStyle.classList.add("scrollingBackground");
      backgroundImageStyle.classList.remove("fixedBackground");
    }
  });

  //   window.addEventListener("resize", function () {
  //     //ratio = window.innerHeight / window.innerWidth;
  //     //console.log(ratio);
  //   });

  //   //console.log(titleImages[0].closest("div"));

  //   window.addEventListener("scroll", () => {
  //     //console.log(window.scrollX);

  //

  //     if (window.scrollY < window.innerHeight * 0.6) {
  //       titleImages[0].style.width = `${15 - window.scrollY / 60}%`;
  //       titleImages[1].style.width = `${40 - window.scrollY / 30}%`;
  //       titleImages[0].closest("div").classList.remove("title");

  //       //titleImages[1].classList.remove("title");
  //     } else if (window.scrollY >= window.innerHeight * 0.6) {
  //       titleImages[0].closest("div").classList.add("title");

  //       //titleImages[1].classList.add("title");
  //     }

  //     //div[0].style.height = `50%`; //`${64 + window.scrollY}px`;
  //     //console.log(window.scrollY);
  //   });
});

// const addHeaderImages = (height, width) => {
//   let logo = document.querySelector("#logoImage");
//   let img = document.createElement("img");
//   img.src = "Images/Lake-Placid-Logo.png";
//   logo.appendChild(img);
//   img = document.createElement("img");
//   img.src = "Images/Lake-Placid-Logo-Green.png";
//   logo.appendChild(img);

//logoImage += `<img src="Images/Lake-Placid-Logo-Green.png" />`;

//let logo = document.querySelector("#logoImage");

//   console.log(logo);

//logo.appendChild(logoImage);
//};

console.log(window.innerHeight);
console.log(window.innerWidth);
