const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const songList = document.getElementById("songList");
const defaultText = "Select between Will's nostalgic and modern mixtapes to begin!";

const playlists = {
  playlist1: [
    {
      name: "Boys Don't Cry - The Cure",
      src: "../assets2/music/will/bdc.mp3",
      img: "../assets2/albums/bdc.png",
      text: "Boys Don't Cry (by The Cure) encapsulates the silent longing of Will for his bestfriend, Mike. <br> The heavily repeated line 'Boys don’t cry' is the heavy burden Will carries as a boy during the 80’s, since this was a time where toxic masculinity thrived, and boys couldn't express their emotions freely. <br> It shows that often the greatest feelings are left unsaid."

    },
    {
      name: "Head Over Heels - Tears for Fears",
      src: "../assets2/music/will/hoh.mp3",
      img: "../assets2/albums/hoh.png",
      text: "Head over Heels (by Tears for Fears) conveys how Will fell for Mike—-realizing that he’s in the trenches of his feelings, trapped beneath the layers of emotions he has. <br> Once he realizes this, he lives in fear of Mike finding out his feelings and disregarding it."

    },
    {
      name: "Lover, You Should've Come Over - Jeff Buckley",
      src: "../assets2/music/will/lysco.mp3",
      img: "../assets2/albums/lysco.png",
      text: "Lover, You Should've Come Over (by Jeff Buckley) demonstrates Will’s regret of not being able to voice out his feelings towards Mike, who already gave his commitment to another person. <br> Will is haunted by the feelings that he never fully expressed but he still patiently waits for Mike and has his arms open for him--'Lover, you should've come over, 'cause it’s not too late.'"

    },
    {
      name: "Nandito Ako - Ogie Alcasid",
      src: "../assets2/music/will/na.mp3",
      img: "../assets2/albums/na.png",
      text: "Similar to the line 'Lover, you should've come over, 'cause it’s not too late', the song Nandito Ako (by Ogie Alcasid) exhibits the devotion of Will staying and waiting for Mike. <br> Will doesn’t simply yearn for Mike’s romantic love, but instead, just wants Mike to lean on him--'Nandito ako.'"

    },
    {
      name: "I'm Still Standing - Elton John",
      src: "../assets2/music/will/iss.mp3",
      img: "../assets2/albums/iss.png",
      text: "I'm Still Standing (by Elton John) signifies Will, who through his newfound, siphoned powers from Vecna, the inspirational speech from Robin, and the additional encouragement from Mike, he loses his fear of loving, and accepts himself for who he truly is. <br> Even after all that he’s been through, he is 'still standing' and finally can be his whole, complete self without hiding and erasing his feelings."

    }
  ],
  playlist2: [
    {
      name: "Good Luck, Babe! - Chappell Roan",
      src: "../assets2/music/will/glb.mp3",
      img: "../assets2/albums/glb.png",
      text: "Good Luck, Babe! (by Chappell Roan) expresses the bitter side of Will's feelings. <br> The bitterness that Will knows that Mike is oblivious towards him and his feelings, and all he ever wanted was for Mike to open his eyes and acknowledge Will for who he truly was. <br> 'I don’t want to call it off,' represents the stubbornness of Will not wanting to let go of Mike, despite the fact that he needs to accept that Mike wouldn't be able to wholeheartedly return his romantic sentiments, due to the 80s heteronormative bubble he was trapped in, along with his puppy-love relationship with Eleven/Jane that kept his true feelings bubbling deep inside."

    },
    {
      name: "Heather - Conan Gray",
      src: "../assets2/music/will/h.mp3",
      img: "../assets2/albums/h.png",
      text: "Heather (by Conan Gray) emphasizes something deeper other than the jealousy Will feels towards Eleven. <br> The constant comparison he forces onto himself between Eleven--'I’m not even half as pretty'--and how he wants to be her so that Will’s feelings towards Mike wouldn’t be viewed as wrong in the public eye."

    },
    {
      name: "I Wanna Be Yours - Arctic Monkeys",
      src: "../assets2/music/will/iwby.mp3",
      img: "../assets2/albums/iwby.png",
      text: "I Wanna Be Yours (by Arctic Monkeys) shows again how Will’s heart yearns for his best friend, Mike. <br> A key point to this song is how it sings about being used by a special person, to be nothing but something to be disposed of when not needed. Since Will realizes that he can’t have Mike, Will settles with being whatever Mike wants him to be, because that would be enough for Will. <br> Mike makes him feel as if he isn't a mistake, and he's better for being different."

    },
    {
      name: "Out of My League - Fitz and The Tantrums",
      src: "../assets2/music/will/ooml.mp3",
      img: "../assets2/albums/ooml.png",
      text: "Out of My League (by Fitz and The Tantrums) is Will’s sole belief of doubt that Mike would ever like him back. <br> It’s Will’s mild way of resigning from the thought that they were never meant to be."

    },
    {
      name: "Is It Too Much to Ask - Faye Webster",
      src: "../assets2/music/will/iitmta.mp3",
      img: "../assets2/albums/iitmta.png",
      text: "Is It Too Much to Ask (by Faye Webster), again, portrays Will’s longing to fullfull a romantic relationship with Mike. <br> It says how he would settle for less just to have something with Mike. Even if he would never hear the sweet nothings of 'I love you's' from Mike, Will would still feel satisfied from not getting the whole of Mike in a romantic view, even if it meant a little piece in a deep, platonic way."

    }
  ]
};

const playlistIntroText = {
  playlist1: "A nostalgic mix dedicated to the songs released during Will's lore-accurate timeline (1980s-2000s). A compilation of songs that have resonated with Will, whether it be canon or fan-made.",
  playlist2: "A modern mix from the past two decades (2010s-2020s). <br> Filled with songs true to Will's feelings toward Mike and his own self in the storyline."
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
  title.textContent = "Will's Mixtapes";

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
