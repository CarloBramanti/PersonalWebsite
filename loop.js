// Colonna 1 Reroll BIO

const trigger = document.getElementById('trigger-really');
const funnyBio = document.getElementById('funny-bio');

const bioOptions = [
  "He does messy drawings to make his brain shut down.",
  "He hates writing bios where he speaks in third person of himself.",
  "His 4 favorites on Letterboxd are: John Wick, John Wick 2, John Wick 3, and John Wick 4.",
  "He likes, among others, the following video-games: Return of the Obra Dinn, Hollow Knight, Kentucky Route Zero, Pokémon Crystal, The Binding of Isaac, Disco Elysium.",
  "He is the top of the West, Always cool, he is the best.",
  "He is in this image.",
];

const spinSpeed = 35; // velocità in millisecondi per ogni frame
const spinDuration = 1100; // durata totale in millisecondi

trigger.addEventListener('click', () => {
    let interval = setInterval(() => {
        funnyBio.textContent = bioOptions[Math.floor(Math.random() * bioOptions.length)];
    }, spinSpeed);

    setTimeout(() => {
        clearInterval(interval);
        // Fissa la bio finale casuale
        funnyBio.textContent = bioOptions[Math.floor(Math.random() * bioOptions.length)];
    }, spinDuration);
});

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
    caption: "Spoiled air is a project of visualization of air and its relationship with mental health issues. Prompted by an assignment received during my MA to visualize the invisible element by definition, air, I developed an essential installation that gives the viewer a series of quantified information about air volumes, atmospheric composition, breathing mechanisms, and the perception of such in situations of isolation and psychological distress. The information is represented through the metaphoric unit of inflatable origamis, hinting both at the calming practice of breathing in a paper bag, and at the sense of enclosure and missing air that various conditions of psychological struggle can induce. The last bit of information eventually opens as the origami unfolds, inviting to breathe.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg"]
  },
  {
    name: "Project 2",
    folder: "project2",
    caption: "Images of Uncertain Mysophobia is a speculative publication about future pandemics. The project starts with the assignment, received during my MA at DAE, to make an exercise in future archeology and imagine what will be the representative features of our time, hereby defined by after-COVID uncertainty. Based on scenarios of higher risk that seem to have more consensus in the scientific community, I developed an editorial project that through archival images and diaristic notes tells the story of laboratory leak and speculates on what could be the iconography of the next pandemic.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg"]
  },
  {
    name: "Project 3",
    folder: "project3",
    caption: "<em>The Bigger Picture</em> is an exploratory diagrammatic installation I designed as my graduation project at DAE. It documents and comments on the grey area between conspiracy theories and design, two closed esoteric systems of knowledge that promise their adherents access to higher understanding, provided they continually expand the scope of their research. Online conspiracy environments are teeming with design artifacts: data visualizations, maps, infographics, and, most importantly, diagrams. At the same time, designers are often driven to be hyper-connective and bridge every possible discipline, field of knowledge, and skill to create a more extensive understanding of the world. The project seeks to foster an understanding of conspiracy theories as phenomena arising from inescapable human biases, which cannot simply be debunked as long as people completely deny them within themselves.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg"]
  },
  // aggiungi altri progetti
];

const loopContainer = document.getElementById("loop-B");
const captionEl = document.getElementById("caption-B");
const leftArrow = document.querySelector(".gallery-arrows img:first-child");
const rightArrow = document.querySelector(".gallery-arrows img:last-child");

let currentIndex = 0;
let loopInterval;
let isHovering = false;
let colorIndex = 0;

function showPreview(index) {
  const project = projects[index];
  loopContainer.innerHTML = `<img src="images/${project.folder}/preview-bw.jpg" class="loop-image" />`;
}

function startLoop() {
  loopInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % projects.length;
    if (!isHovering) showPreview(currentIndex);
  }, 2500);
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
  console.log("Esco dall’hover"); // DEBUG

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
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  if (!isHovering) showPreview(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  if (!isHovering) showPreview(currentIndex);
});

// Inizializza
showPreview(currentIndex);
startLoop();

//Gestione del passaggio da colonna 2 a 3 nel layout a due colonne

 // Quando clicchi su "OTHER PROJECTS", mostra colonna 3, nascondi colonna 2
  document.getElementById("OTHER-PROJECTS-2col").addEventListener("click", () => {
    const isSmallScreen = window.matchMedia("(max-width: 1146px)").matches;

    if (isSmallScreen) {
      document.getElementById("col-2").style.display = "none";
      document.getElementById("col-3").style.display = "block";
    }
  });

  // Quando clicchi su "LATEST", mostra colonna 2, nascondi colonna 3
  document.getElementById("LATEST-2col").addEventListener("click", () => {
    const isSmallScreen = window.matchMedia("(max-width: 1146px)").matches;

    if (isSmallScreen) {
      document.getElementById("col-3").style.display = "none";
      document.getElementById("col-2").style.display = "block";
    }
  });

  //Reset display delle colonne
  function resetColumnsOnResize() {
    const isLargeScreen = window.matchMedia("(min-width: 1147px)").matches;

    if (isLargeScreen) {
      // Rimuovi eventuali stili inline settati da JS
      document.getElementById("col-2").style.display = "";
      document.getElementById("col-3").style.display = "";
    }
  }

  // Ascolta i cambiamenti nella dimensione della finestra
  window.addEventListener("resize", resetColumnsOnResize);

  // Esegui anche subito nel caso si ricarichi la pagina a schermo largo
  resetColumnsOnResize();

  // Nascode il footer della colonna 3
  document.getElementById('loop-B').addEventListener('mouseenter', () => {
  document.getElementById('Portfolio').style.display = 'none';
});

document.getElementById('loop-B').addEventListener('mouseleave', () => {
  document.getElementById('Portfolio').style.display = 'block'; // o 'flex', ecc.
});