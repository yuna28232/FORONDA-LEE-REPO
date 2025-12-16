const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const songList = document.getElementById("songList");

const playlists = {
  playlist2: [
    {
      name: "Tim I Wish You Were Born A Girl - Of Montreal",
      src: "../assets2/music/will/bdc.mp3",
      img: "../assets2/albums/tiwywbag.png"
    },
    {
      name: "Andrew in Drag - The Magnetic Fields",
      src: "../assets2/music/will/hoh.mp3",
      img: "../assets2/albums/aid.png"
    },
    {
      name: "Trailers after Dark- Finn Wolfhard",
      src: "../assets2/music/will/lysco.mp3",
      img: "../assets2/albums/tad.png"
    },
    {
      name: "R U Mine? - Arctic Monkeys",
      src: "../assets2/music/will/na.mp3",
      img: "../assets2/albums/iwby.png"
    },
    {
      name: "Best Friend - Rex Orange County",
      src: "../assets2/music/will/iss.mp3",
      img: "../assets2/albums/iss.png"
    }
  ],
  playlist1: [
    {
      name: "Take My Breath Away - Berlin",
      src: "../assets2/music/will/glb.mp3",
      img: "../assets2/albums/tmba.png"
    },
    {
      name: "Can't Fight This Feeling - REO Speedwagon",
      src: "../assets2/music/will/h.mp3",
      img: "../assets2/albums/cftf.png"
    },
    {
      name: "I Want to Know What Love Is - Arctic Monkeys",
      src: "../assets2/music/will/iwby.mp3",
      img: "../assets2/albums/iwtkwli.png"
    },
    {
      name: "Open Arms - Journey",
      src: "../assets2/music/will/ooml.mp3",
      img: "../assets2/albums/oa.png"
    },
    {
      name: "Can't Help Falling in Love - Elvis Presley",
      src: "../assets2/music/will/iitmta.mp3",
      img: "../assets2/albums/chfil.png"
    }
  ]
};

function loadPlaylist(listName) {
  songList.innerHTML = "";
  title.textContent = "Mike's Mixtape";

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
