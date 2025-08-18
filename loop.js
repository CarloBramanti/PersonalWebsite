// Colonna 1 Reroll BIO
const trigger = document.getElementById('trigger-really');
const funnyBio = document.getElementById('funny-bio');

const textColors = ['red', 'blue'];

const bioOptions = [
  //"He does messy drawings to make his brain shut down.",
  "He hates writing bios where he speaks in third person of himself.",
  "His 4 favorites on Letterboxd are: John Wick, John Wick 2, John Wick 3, and John Wick 4.",
  "He likes, among others, the following video games: Return of the Obra Dinn, Hollow Knight, Kentucky Route Zero, Pokémon Crystal, The Binding of Isaac, Disco Elysium.",
  "He is the top of the West, always cool, he is the best <a style='color: var(--textColor)' href='https://www.youtube.com/watch?v=sFFLQ89bJRM&t=1s' target='_blank'>*whistling*</a>",
  "He is in this <a style='color: var(--textColor)' href='images/Disco Elysium.png' target='_blank'>image</a>.",
];

const spinSpeed = 35; // velocità in millisecondi per ogni frame
const spinDuration = 1100; // durata totale in millisecondi

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

trigger.addEventListener('click', () => {
  let interval = setInterval(() => {
    funnyBio.innerHTML = bioOptions[Math.floor(Math.random() * bioOptions.length)];
  }, spinSpeed);

  setTimeout(() => {
    clearInterval(interval);
    // Fissa la bio finale casuale
    funnyBio.innerHTML = bioOptions[Math.floor(Math.random() * bioOptions.length)];
  }, spinDuration);
});

//Picks the right file according to the theme (red or blue)
function setTheme() {
  const arrowLeft = document.getElementById('arrow-left');
  const arrowRight = document.getElementById('arrow-right');
  const arrowDown = document.getElementById('arrow-down');
  const arrowDownMobile = document.getElementById('arrow-down-mobile');
  const arrowLink1 = document.getElementById('arrow-link1');
  const arrowLink2 = document.getElementById('arrow-link2');

  const i = getRandomIntInclusive(0, textColors.length - 1)
  const newColor = textColors[i];
  const root = document.documentElement;
  root.style.setProperty('--textColor', newColor);

  arrowLeft.src = `arrow-left-${newColor}.svg`;
  arrowLink1.src = `arrow-right-${newColor}.svg`;
  arrowLink2.src = `arrow-right-${newColor}.svg`;
  arrowRight.src = `arrow-right-${newColor}.svg`;
  arrowDown.src = `arrow-down-${newColor}.svg`;
  arrowDownMobile.src = `arrow-down-${newColor}.svg`;
}


// Colonna 2 Loop immagini libro
const latestFrame = document.getElementById('latest-frame');
const latestImage = document.getElementById('latest-image');
const latestImages = ['images/CD/latest1.jpg', 'images/CD/latest2.jpg', 'images/CD/latest3.jpg'];
let latestIndex = 0;
let latestInterval = null;

function startLatestLoop() {
  latestImage.src = latestImages[latestIndex];
  latestImage.style.maxHeight = '100%'; // oppure mantieni 90% se preferisci
  latestIndex = (latestIndex + 1) % latestImages.length;

  latestInterval = setInterval(() => {
    latestImage.src = latestImages[latestIndex];
    latestIndex = (latestIndex + 1) % latestImages.length;
  }, 1000);
}

function stopLatestLoop() {
  clearInterval(latestInterval);
  latestIndex = 0;
  latestImage.src = 'images/CD/CD_cover.jpg';
  latestImage.style.maxHeight = '90%'; // ritorna alla dimensione originale
}

latestFrame.addEventListener('mouseenter', () => {
  startLatestLoop();
});

latestFrame.addEventListener('mouseleave', () => {
  stopLatestLoop();
});

// Colonna 3
const projects = [
  {
    name: "Project 1",
    folder: "project1",
    caption: "<em>Spoiled Air</em> is a project of visualization of air and its relationship with mental health issues. Prompted by an assignment received during my MA to visualize the invisible element by definition, air, I developed an essential installation that gives the viewer a series of quantified information about air volumes, atmospheric composition, breathing mechanisms, and the perception of such in situations of isolation and psychological distress. The information is represented through the metaphoric unit of inflatable origamis, hinting both at the calming practice of breathing in a paper bag, and at the sense of enclosure and missing air that various conditions of psychological struggle can induce. The last bit of information eventually opens as the origami unfolds, inviting to breathe.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg"]
  },
  {
    name: "Project 2",
    folder: "project2",
    caption: "<em>Images of Uncertain Mysophobia</em> is a speculative publication about future pandemics. The project starts with the assignment, received during my MA at DAE, to make an exercise in future archeology and imagine what will be the representative features of our time, hereby defined by after-COVID uncertainty. Based on scenarios of higher risk that seem to have more consensus in the scientific community, I developed an editorial project that through archival images and diaristic notes tells the story of laboratory leak and speculates on what could be the iconography of the next pandemic.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg"]
  },
  {
    name: "Project 3",
    folder: "project3",
    caption: "<em>The Bigger Picture</em> is an exploratory diagrammatic installation I designed as a graduation project at DAE. The installation consists of a room-sized flowchart drawn directly onto the exhibition surfaces with invisible ink so that it can be seen only a small bit at a time by using a UV-flashlight. Through the game/investigation experience made of crossroads, choices and secret easter eggs, I try to unpack all the information of my research about the formal and and theoretical similarities between design and conspiracy theories. <em>The Bigger Picture</em> tries to open a discussion about the perception of legitimacy of information, and about the role in society of design and conspiracy theories: two closed esoteric systems of knowledge in constant need to expand the scope of their research.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg"]
  },

  {
    name: "Project 4",
    folder: "project4",
    caption: "In 2023 I designed the visual identity for <em>Backward Steps</em>, an independent musical project of producer and beat-maker Ha-Maze. Together with the artist we defined the core aspects of the project that needed to be conveyed and we imagined how to translate such sensations and ideas through visual metaphors. The lo-fi, broken, and glitchy urban sounds were represented by juxtaposing photographs and videos with a residual, dreamlike appearance with animated ASCII art. The ASCII typographic visuals were obtained using a P5js script (based on the work of Andreas Gysin) that maps and converts the brightness of the pixels in a video into a list of glyphs.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg"]
  },

  {
    name: "Project 5",
    folder: "project5",
    caption: "<em>Representation Wars</em> is an infographic designed with the purpose of deconstructing the rhetorical function of nationalistic war depictions inside the Rijksmuseum in Amsterdam. Prompted by an assignment received during my MA to design an hacking intervention within the context of the Rijksmuseum that could counter its role of creator of national identity, I examined room 2.1.5 of the museum, where some of the most important depiction of dutch naval battles are exhibited. I then selected The Battle of Leghorn by Reiner Nooms as a case study and designed an essential infographic that could, by displaying some selected historical information, expose the limits of this painting as an historical document and explain the way it serves as tool of national glorification through a series of representational stratagems.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg"]
  },
  // aggiungi altri progetti
];

const dotsContainer = document.getElementById("gallery-dots-B");
const loopContainer = document.getElementById("loop-B");
const captionEl = document.getElementById("caption-B");
const leftArrow = document.querySelector(".gallery-arrows img:first-child");
const rightArrow = document.querySelector(".gallery-arrows img:last-child");

let currentIndex = 0;
let loopInterval;
let isHovering = false;
let colorIndex = 0;

function startLoop() {
  loopInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % projects.length;
    if (!isHovering) showPreview(currentIndex);
  }, 3500);
}

function stopLoop() {
  clearInterval(loopInterval);
}

function showColorVersion(index) {
  const project = projects[index];
  const colorImg = project.colorImages[colorIndex % project.colorImages.length];
  loopContainer.innerHTML = `<img src="images/${project.folder}/${colorImg}" class="loop-image" />`;
  captionEl.innerHTML = project.caption;
  captionEl.style.display = "block";
}

loopContainer.addEventListener("mouseenter", () => {
  isHovering = true;
  stopLoop();
  colorIndex = 0;
  showColorVersion(currentIndex);
});

loopContainer.addEventListener("mouseleave", () => {
  console.log("Esco dall’hover");

  isHovering = false;
  captionEl.style.display = "none";
  loopContainer.innerHTML = "";
  showPreview(currentIndex);
  startLoop();
});

loopContainer.addEventListener("click", () => {
  if (isHovering) {
    colorIndex++;
    showColorVersion(currentIndex);
  }
});

leftArrow.addEventListener("click", () => {
  if (!isHovering) goToIndex(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
  if (!isHovering) goToIndex(currentIndex + 1);
});

//Pallini di navigazione progetti
function createDots() {
  dotsContainer.innerHTML = "";
  projects.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      if (!isHovering) goToIndex(i);
    });

    dotsContainer.appendChild(dot);
  });
}

function goToIndex(index) {
      currentIndex = (index + projects.length) % projects.length;
      showPreview(currentIndex);
      stopLoop();
      startLoop();
    }

function updateDots() {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function showPreview(index) {
  const project = projects[index];
  loopContainer.innerHTML = `<img src="images/${project.folder}/preview-bw.jpg" class="loop-image" />`;
  updateDots();
}

// Nascode il footer della colonna 3
document.getElementById('loop-B').addEventListener('mouseenter', () => {
  document.getElementById('Portfolio').style.display = 'none';
});

document.getElementById('loop-B').addEventListener('mouseleave', () => {
  document.getElementById('Portfolio').style.display = 'block'; // o 'flex', ecc.
});

// Inizializza
showPreview(currentIndex);
startLoop();
createDots();
updateDots();