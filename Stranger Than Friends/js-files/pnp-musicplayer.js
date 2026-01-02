const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const songList = document.getElementById("songList");

const infoText = document.getElementById("infoText");
const infoInner = infoText.querySelector(".popup-inner");
const defaultText = "Using the music player to your right, toggle it by clicking on the rainbow icon, and select between Mike and Will's 'Miwi' (past) and 'Byler' (present) dynamic to begin!";

const playlists = {
  playlist1: [
    {
      name: "There She Goes - The La's",
      src: "../assets2/music/pnp/tsg.mp3",
      img: "../assets2/albums/tsg.png",
      
    },
    {
      name: "Time After Time - Cindi Lauper",
      src: "../assets2/music/pnp/tat.mp3",
      img: "../assets2/albums/tat.png",

    },
    {
      name: "Slide - Goo Goo Dolls",
      src: "../assets2/music/pnp/s.mp3",
      img: "../assets2/albums/s.png",
 
    }

  ],
  playlist2: [
    {
      name: "Slipping Through My Fingers - ABBA",
      src: "../assets2/music/pnp/stmf.mp3",
      img: "../assets2/albums/stmf.png",
      

    },
    {
      name: "No Surprises - Radiohead",
      src: "../assets2/music/pnp/ns.mp3",
      img: "../assets2/albums/ns.png",
      

    },
    {
      name: "Take On Me - A-ha",
      src: "../assets2/music/pnp/tom.mp3",
      img: "../assets2/albums/tom.png",
     
    }
  ]
};

const playlistIntro = {
  playlist1: {
    text: "Mike and Will's 'Miwi' dynamic is centered on the two kids’ innocence, where they remained focused on playing D&D and having small adventures that always lead to laughter and memories. There were no labels, no heavy arguments, and no insecurities, just two children comfortable enough to share the world with eachother. It was a time when they could still express what they felt freely without any fear and uncomfort, as innocent and 'naive' kids.",
    img: "../assets2/other/miwi.gif"
  },
  playlist2: {
    text: "As time moved, their feelings grew. Their bond was as strong as ever, yet their dynamic started to feel different, because over time, they had both changed as people. They shifted to a 'Byler' dynamic, where the simplicity of their love towards eachother slipped from their hands and through the cracks of their misunderstanding, as they started to explore their emotions, and wonder if what they felt about the other wasn't right, but instead abnormal. The societal pressure of being fitting in and being 'normal' (heterosexual/straight) were chains that held both Mike and Will back. This was a time when their feelings developed into something complicated, unsaid, hidden, and all the more intense.",
    img: "../assets2/other/byler.gif"
},
    

};


function loadPlaylist(listName) {
  songList.innerHTML = "";
  title.textContent = "The Past and Present";

  // Show playlist intro (image ABOVE text)
  infoInner.innerHTML = `
    <img src="${playlistIntro[listName].img}" class="popup-image">
    <p class="popup-caption">${playlistIntro[listName].text}</p>
  `;
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

  document.querySelectorAll(".song-btn").forEach(b =>
    b.classList.remove("active")
  );
  btn.classList.add("active");
}

function switchPlaylist(playlistName) {
  loadPlaylist(playlistName);
}

function togglePlayer() {
  document.getElementById("player").classList.toggle("open");
}

/* ================= INITIAL STATE ================= */

infoInner.innerHTML = defaultText;
infoText.classList.add("active");