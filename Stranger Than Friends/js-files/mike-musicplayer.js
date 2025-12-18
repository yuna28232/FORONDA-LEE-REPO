const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const songList = document.getElementById("songList");
const defaultText = "Using the music player to your right, toggle it by clicking on the blue heart icon, and select between Mike's nostalgic and modern mixtapes to begin!";

const playlists = {
  playlist1: [
    {
      name: "Take My Breath Away - Berlin",
      src: "../assets2/music/mike/tmba.mp3",
      img: "../assets2/albums/tmba.png",
      text: "In the song Take My Breath Away (by Berlin), the line 'Watching in slow motion as you turn to me' represents how enchanted Mike feels towards Will. Mike lets the tidal waves of emotions take him to whatever kind of island, enjoying the ride without worrying where the destination is."

    },
    {
      name: "Can't Fight This Feeling - REO Speedwagon",
      src: "../assets2/music/mike/cftf.mp3",
      img: "../assets2/albums/cftf.png",
      text: "The first two lines of Can't Fight This Feeling (by REO Speedwagon)--'I can't fight this feeling any longer, and yet I'm still afraid to let it flow,' shows that Mike is filled with fear, but he knows he can’t afford to feel scared any longer. <br> Mike resists the best he can but inevitably he must give in and eventually make his romantic feelings toward Will more discernable from those that are platonic."
    },
    {
      name: "I Want to Know What Love Is - Foreigner",
      src: "../assets2/music/mike/iwtkwli.mp3",
      img: "../assets2/albums/iwtkwli.png",
      text: "The lyric 'I know you can show me' from I Want to Know What Love Is (by Foreigner) doesn’t necessarily describe Mike's sentiments towards Will, but rather more towards Eleven. <br> Throughout the seasons, Eleven is the clear, canonic (currently) love interest of Mike, and for the most part, the affection between them is evident. However, it may be that as of now, Mike is desperate to find love in Eleven, clinging to the romantic love they shared as children, until he will eventually see the true meaning of love in his best friend, Will."

    },
    {
      name: "Open Arms - Journey",
      src: "../assets2/music/mike/oa.mp3",
      img: "../assets2/albums/oa.png",
      text: "Open Arms (by Journey) encapsulates how Mike felt when him and Will had fought and encountered plenty of misunderstandings during the entirety of the fourth season. The line 'We sailed on together, we drifted apart' describes the physical and emotional distance between them, caused from Will moving away from Hawkins, Indiana in the third season finale. It caused Mike to feel like a part of him was missing, similar to the line 'Living without you, living alone, this empty house seems so cold'. Overall, this was what skewed their strong bond and temporarily altered the course and chemistry of their friendship. <br> When Mike first visited Will and Eleven in California, they first clashed and created discourse between both of them--yet not long after, Mike had immediately tried to reconcile with Will (as represented in the next line 'And here you are by my side'), which shows how much Mike cannot stray away from their relationship, with how much he respects Will and his feelings, regardless of him being oblivious and ignorant towards them at times. "

    },
    {
      name: "Can't Help Falling In Love - Elvis Presley",
      src: "../assets2/music/mike/chfil.mp3",
      img: "../assets2/albums/chfil.png",
      text: "Can't Help Falling In Love (by Elvis Presley) exhibits the general idea of Mike falling in love. Just like Take My Breath Away (by Berlin), it gives off the concept of Mike falling for his best friend--which is quite apparent in his heart-eye gazes and empathetic, genuine gestures towards Will, and his actions towards Eleven that seem to speak the opposite of being romantic and sincere. <br> It also shows how love can turn you into a fool make you go 'crazy', as implied by Mike when he voiced his want to go 'crazy together' with Will in the second season."

    }
  ],
  playlist2: [
    {
      name: "Tim I Wish You Were Born A Girl - Of Montreal",
      src: "../assets2/music/mike/tiwywbag.mp3",
      img: "../assets2/albums/tiwywbag.png",
      text: "Tim I Wish You Were Born A Girl (by Of Montreal) depicts how Mike, thought he may not show it openly, does feels something romantic towards Will. Mike cannot come to terms with this intense feeling, but he does know one thing for sure: he wants it to be portrayed as acceptible and valid by society. <br> To satisfy these conditions, he shifts the 'abnormality' towards Will fitting into the perfect heterosexual cookie-cutter shape that would make Mike feel as normal as possible-– as shown in the first lyric 'Tim, wish you were born a girl.'"

    },
    {
      name: "Andrew in Drag - The Magnetic Fields",
      src: "../assets2/music/mike/aid.mp3",
      img: "../assets2/albums/aid.png",
      text: "The message of Andrew in Drag (by The Magnetic Fields) relates to Mike as he looks at Will as if he’s the most ethereal being he’s even seen (as shown in the show). <br> Deep down he tries to deny this, finding himself wishing that him and Will would be in different circumstances--preferrably with one of them 'in drag'-- in order to make a romantic relationship between them 'normal' and 'viable'."

    },
    {
      name: "Trailers After Dark - Finn Wolfhard",
      src: "../assets2/music/mike/tad.mp3",
      img: "../assets2/albums/tad.png",
      text: "Trailers After Dark (by Finn Wolfhard) represents how Mike has felt and continued to feel towards Will. Ever since Will said 'yes' to being friends with Mike on a swing set in kindergarten, Mike has considered Will as a safe place where he could just be himself, and feel good about showing his true colors, rather than feeling like an outcast. <br> It surpasses the labels of platonic and romantic because their relationship is more than what meets the eye. It's yin and yang--how Will completes Mike and makes him feel like he belongs in any room, so long as they're a team."

    },
    {
      name: "R U Mine? - Arctic Monkeys",
      src: "../assets2/music/mike/rum.mp3",
      img: "../assets2/albums/iwby.png",
      text: "R U Mine? (by Arctic Monkeys) shows Mike's longing for exclusivity with the role of being the closest to Will. Mike often becomes possessive, overprotective, and intense over Will, even though to the regular outsider, it doesn't seem that Mike desires to be anything more than being Will’s best friend."

    },
    {
      name: "Best Friend - Rex Orange County",
      src: "../assets2/music/mike/bf.mp3",
      img: "../assets2/albums/bf.png",
      text: "Best Friend (by Rex Orange County) focuses on Mike secretly wanting more intimacy with Will. It shows the feelings of 'selfishness' Mike experiences as he desires to open up something more romantic in his friendship with Will. <br> With this, he feels the strong need to make the relationship between him and Will strictly platonic, keeping his feelings bottled up, despite it slowly becoming fit to burst as each season progresses."

    }
  ]
};

const playlistIntroText = {
  playlist1: "A nostalgic mix dedicated to the songs released during Mike's lore-accurate timeline (1980s-2000s). <br> A compilation of songs that have resonated with Mike, whether it be canon or fan-made.",
  playlist2: "A modern mix from the past two decades (2010s-2020s). <br> Filled with songs true to Mike's feelings toward Will and his own self in the storyline."
};

const infoText = document.getElementById("infoText");
const infoInner = infoText.querySelector(".popup-inner");
if (listName !== "init") {
  infoText.querySelector(".popup-inner").innerHTML =
    playlistIntroText[listName];
}
infoText.classList.add("active");


function loadPlaylist(listName) {
  songList.innerHTML = "";
  title.textContent = "Mike's Mixtapes";

 infoInner.innerHTML = playlistIntroText[listName];
  infoText.classList.add("active");

  playlists[listName].forEach(song => {
    const btn = document.createElement("button");
    btn.className = "song-btn";

    btn.innerHTML = `
      <img src="${song.img}">
      <span class="song-name">${song.name}</span>
    `;

    btn.onclick = () => playSong(song, btn);
    songList.appendChild(btn);
  });
}

function playSong(song, btn) {
  audio.src = song.src;
  title.textContent = song.name;
  audio.play();

  infoInner.innerHTML = song.text;
  infoText.classList.add("active");

  document
    .querySelectorAll(".song-btn")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
}


function togglePlayer() {
  const player = document.getElementById("player");
  player.classList.toggle("open");
}



infoText.querySelector(".popup-inner").innerHTML = defaultText;
loadPlaylist("init");

function switchPlaylist(playlistName) {
  loadPlaylist(playlistName);
}
