const answerForm = document.querySelector(".answer_form");
const answerInput = document.querySelector(".answer_input");
const quizCanvas = document.getElementById("quizCanvas");
const img = document.createElement("img");

// const TorrentSearchApi = require("torrent-search-api");
// const torrents = await TorrentSearchApi.search("금사월", "Drama", 20);
// console.log(torrents);

const quizList = [
  {
    id: 0,
    name: "너의 목소리가 들려",
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140511_103%2Fgustmdaowlr_1399791754135n3NMn_PNG%2FScreenshot_2014-05-06-15-10-28-1.png&type=sc960_832",
  },
  {},
];

paintQuiz();
function paintQuiz() {
  img.src = quizList[0].src;
  img.id = quizList[0].id;
  img.classList.add("imgContainer");
  quizCanvas.prepend(img);
}

function quizHandler(event) {
  event.preventDefault();
  const myAnswer = answerInput.value;
  console.log(myAnswer);
  answerInput.value = "";

  if (myAnswer == quizList[0].name) {
    img.remove();
    const div = document.createElement("div");
    div.classList.add("textContainer");
    div.innerText = "정답입니다.";
    quizCanvas.prepend(div);
  } else {
    alert("오답입니다.");
  }
}
answerForm.addEventListener("submit", quizHandler);

// answerForm.addEventListener("submit", quizHandler);
