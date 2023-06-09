const generateMemeBtn = document.querySelector(
    ".meme-generator .meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .title");
//    phele sabko call karvaya hai
  const updateDetails = (url, title) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
  };
  
//   ab jo api me key/value assign the uske saat match karvaya hai
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title);
      });
  };
  
//   aik function bana lia jo api se chezein fetch karrha means get karrha 
  generateMemeBtn.addEventListener("click", generateMeme);
  
//   onclick ka function banaya hai yeh
  generateMeme();
//   function islie call karvaya hai takee reload hone pe by default aik meme show ho