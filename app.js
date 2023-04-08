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
  {
    id: 1,
    name: "마인",
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMTA0MTVfOTIg%2FMDAxNjE4NDcxMjk4NjQw.5RZOhBwf3wunRFR1hghIbu_z1EJ1dVZ2Qpi0MFgaUA4g.M94jBj3gRvHzAqgw2MBGRqny1EoWd6b2UEEwcPPIxEog.JPEG%2FIQKyconN0pqYO9EAfjYSSpIlZK9A.jpg&type=sc960_832",
  },
  {
    id: 2,
    name: "공부의 신",
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120212_263%2Fkwon_60_1329032695996CzeJp_JPEG%2F%25B0%25F8%25BA%25CE%25C0%25C7_%25BD%25C5.E08.100126.avi_002773373.jpg&type=sc960_832",
  },
  {
    id: 3,
    name: "썸바디",
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMTBfODMg%2FMDAxNjczMzYwMjg3MzYy.kOSrUIPcEAKG_pt-KdKxdil0DD99bZWi6byx0YM6ve4g.6O8XKUGQhdKDkxbonls1MzI4gFCMjTEf-Su6YTdHcNAg.PNG.css1886%2F7%25C8%25AD.mkv_002381254.png&type=sc960_832",
  },
  {
    id: 4,
    name: "지금 우리 학교는",
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDJfMjkw%2FMDAxNjQzNzc0Mjk3MTE1.ynGws6FGGEIQM53rvoMrOPx6ksaVvtllpSIH9wUoOowg.BXlHLPhzK9x-0xJMQJBpc7BgWRe0zMUAL0hJOynrWs0g.PNG.above_cloud%2FK-20220202-111531.png&type=sc960_832",
  },
  {
    id: 5,
    name: "유미의 세포들",
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MjVfMjQ1%2FMDAxNjMyNTQwNDY4MzE2.niJW3th3GBJU6Mz6NG3BzKHuV7CUHwGMXnzKAnjSDvsg.ZIIVzxlYxsqxPobW9CbJN_r3PKyaG8bfFL7eGX08csEg.JPEG.tjdud0013%2FIMG_1557.jpg&type=sc960_832",
  },
];
let randomQuiz = Math.floor(Math.random() * quizList.length);
paintQuiz();
function paintQuiz() {
  console.log(randomQuiz);
  img.src = quizList[randomQuiz].src;
  img.id = quizList[randomQuiz].id;
  img.classList.add("imgContainer");
  quizCanvas.prepend(img);
}

function quizHandler(event) {
  event.preventDefault();
  const myAnswer = answerInput.value;
  console.log(myAnswer);
  answerInput.value = "";

  if (myAnswer == quizList[randomQuiz].name) {
    img.remove();
    const btn = document.createElement("button");
    function reload() {
      location.reload();
    }
    btn.addEventListener("click", reload);
    btn.innerText = "다음 문제!";
    const div = document.createElement("div");
    div.classList.add("textContainer");
    div.innerText = "정답입니다.";
    quizCanvas.prepend(div);
    div.append(btn);
  } else {
    alert("오답입니다.");
  }
}
answerForm.addEventListener("submit", quizHandler);

// answerForm.addEventListener("submit", quizHandler);
