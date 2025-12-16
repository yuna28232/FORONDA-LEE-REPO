const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const songList = document.getElementById("songList");

const playlists = {
  playlist1: [
    {
      name: "Boys Don't Cry - The Cure",
      src: "../assets2/music/will/bdc.mp3",
      img: "../assets2/albums/bdc.png"
    },
    {
      name: "Head Over Heels - Tears for Fears",
      src: "../assets2/music/will/hoh.mp3",
      img: "../assets2/albums/hoh.png"
    },
    {
      name: "Lover, You Should've Come Over - Jeff Buckley",
      src: "../assets2/music/will/lysco.mp3",
      img: "../assets2/albums/lysco.png"
    },
    {
      name: "Nandito Ako - Ogie Alcasid",
      src: "../assets2/music/will/na.mp3",
      img: "../assets2/albums/na.png"
    },
    {
      name: "I'm Still Standing - Elton John",
      src: "../assets2/music/will/iss.mp3",
      img: "../assets2/albums/iss.png"
    }
  ],
  playlist2: [
    {
      name: "Good Luck, Babe! - Chappell Roan",
      src: "../assets2/music/will/glb.mp3",
      img: "../assets2/albums/glb.png"
    },
    {
      name: "Heather - Conan Gray",
      src: "../assets2/music/will/h.mp3",
      img: "../assets2/albums/h.png"
    },
    {
      name: "I Wanna Be Yours - Arctic Monkeys",
      src: "../assets2/music/will/iwby.mp3",
      img: "../assets2/albums/iwby.png"
    },
    {
      name: "Out of My League - Fitz and The Tantrums",
      src: "../assets2/music/will/ooml.mp3",
      img: "../assets2/albums/ooml.png"
    },
    {
      name: "Is It Too Much to Ask - Faye Webster",
      src: "../assets2/music/will/iitmta.mp3",
      img: "../assets2/albums/iitmta.png"
    }
  ]
};

function loadPlaylist(listName) {
  songList.innerHTML = "";
  title.textContent = "Will's Mixtape";

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

  document.querySelectorAll(".song-btn")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
}

function togglePlayer() {
  document.getElementById("player").classList.toggle("open");
}

loadPlaylist("playlist1");

