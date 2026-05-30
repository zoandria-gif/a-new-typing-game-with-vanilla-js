// /**
//  * Point culture (en Français car je suis un peu obligé): 
//  * Dans ce genre de jeu, un mot equivaut a 5 caractères, y compris les espaces. 
//  * La precision, c'est le pourcentage de caractères tapées correctement sur toutes les caractères tapées.
//  * 
//  * Sur ce... Amusez-vous bien ! 
//  */
// let startTime = null, previousEndTime = null;
// let currentWordIndex = 0;
// const wordsToType = [];

// const modeSelect = document.getElementById("mode");
// const wordDisplay = document.getElementById("word-display");
// const inputField = document.getElementById("input-field");
// const results = document.getElementById("results");

// const words = {
//     easy: ["apple", "banana", "grape", "orange", "cherry"],
//     medium: ["keyboard", "monitor", "printer", "charger", "battery"],
//     hard: ["synchronize", "complicated", "development", "extravagant", "misconception"]
// };

// // Generate a random word from the selected mode
// const getRandomWord = (mode) => {
//     const wordList = words[mode];
//     return wordList[Math.floor(Math.random() * wordList.length)];
// };

// // Initialize the typing test
// const startTest = (wordCount = 50) => {
//     wordsToType.length = 0; // Clear previous words
//     wordDisplay.innerHTML = ""; // Clear display
//     currentWordIndex = 0;
//     startTime = null;
//     previousEndTime = null;

//     for (let i = 0; i < wordCount; i++) {
//         wordsToType.push(getRandomWord(modeSelect.value));
//     }

//     wordsToType.forEach((word, index) => {
//         const span = document.createElement("span");
//         span.textContent = word + " ";
//         if (index === 0) span.style.color = "red"; // Highlight first word
//         wordDisplay.appendChild(span);
//     });

//     inputField.value = "";
//     results.textContent = "";
// };

// // Start the timer when user begins typing
// const startTimer = () => {
//     if (!startTime) startTime = Date.now();
// };

// // Calculate and return WPM & accuracy
// const getCurrentStats = () => {
//     const elapsedTime = (Date.now() - previousEndTime) / 1000; // Seconds
//     const wpm = (wordsToType[currentWordIndex].length / 5) / (elapsedTime / 60); // 5 chars = 1 word
//     const accuracy = (wordsToType[currentWordIndex].length / inputField.value.length) * 100;

//     return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2) };
// };

// // Move to the next word and update stats only on spacebar press
// const updateWord = (event) => {
//     if (event.key === " ") { // Check if spacebar is pressed
//         if (inputField.value.trim() === wordsToType[currentWordIndex]) {
//             if (!previousEndTime) previousEndTime = startTime;

//             const { wpm, accuracy } = getCurrentStats();
//             results.textContent = `WPM: ${wpm}, Accuracy: ${accuracy}%`;

//             currentWordIndex++;
//             previousEndTime = Date.now();
//             highlightNextWord();

//             inputField.value = ""; // Clear input field after space
//             event.preventDefault(); // Prevent adding extra spaces
//         }
//     }
// };

// // Highlight the current word in red
// const highlightNextWord = () => {
//     const wordElements = wordDisplay.children;

//     if (currentWordIndex < wordElements.length) {
//         if (currentWordIndex > 0) {
//             wordElements[currentWordIndex - 1].style.color = "black";
//         }
//         wordElements[currentWordIndex].style.color = "red";
//     }
// };

// // Event listeners
// // Attach `updateWord` to `keydown` instead of `input`
// inputField.addEventListener("keydown", (event) => {
//     startTimer();
//     updateWord(event);
// });
// modeSelect.addEventListener("change", () => startTest());

// // Start the test
// startTest();

// ===== NAVIGATION ENTRE LES PAGES =====
function navigate(page) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.nav-item').forEach(function(n) { n.classList.remove('active'); });
  document.getElementById('page-' + page).classList.add('active');
  var navEl = document.querySelector('[data-page="' + page + '"]');
  if (navEl) navEl.classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'game') {
    setTimeout(function() { document.getElementById('input-field').focus(); }, 100);
  }
}

document.querySelectorAll('.nav-item[data-page]').forEach(function(btn) {
  btn.addEventListener('click', function() { navigate(btn.dataset.page); });
});

// ===== DONNEES JAVA (les phrases a taper) =====
const WORDS = {
  easy: {
    fr: [
      "toString() retourne une representation en chaine de caracteres de l'objet",
      "hashCode() retourne un code de hachage pour l'objet",
      "equals() compare deux objets pour verifier s'ils sont egaux",
      "length() retourne la longueur d'une chaine de caracteres",
      "size() retourne le nombre d'elements dans une collection",
      "isEmpty() verifie si une collection est vide",
      "clone() cree une copie de l'objet",
      "getClass() retourne la classe de l'objet",
      "charAt() retourne le caractere a un index specifique",
      "trim() supprime les espaces aux deux extremites d'une chaine",
      "toUpperCase() convertit une chaine en majuscules",
      "toLowerCase() convertit une chaine en minuscules",
      "clear() supprime tous les elements d'une collection"
    ],
    en: [
      "toString() returns a string representation of the object",
      "hashCode() returns a hash code for the object",
      "equals() compares two objects to check if they are equal",
      "length() returns the length of a string",
      "size() returns the number of elements in a collection",
      "isEmpty() checks if a collection is empty",
      "clone() creates a copy of the object",
      "getClass() returns the class of the object",
      "charAt() returns the character at a specific index in a string",
      "trim() removes whitespace from both ends of a string",
      "toUpperCase() converts a string to uppercase",
      "toLowerCase() converts a string to lowercase",
      "clear() removes all elements from a collection"
    ]
  },
  medium: {
    fr: [
      "indexOf(str) retourne l'index de la premiere occurrence d'une sous-chaine specifiee",
      "substring(0,5) retourne une partie de la chaine extraite selon les index",
      "replace(a,b) remplace toutes les occurrences d'une sous-chaine par une autre",
      "split(\",\") divise une chaine en un tableau de sous-chaines selon un separateur",
      "compareTo(o) compare deux chaines de caracteres selon l'ordre alphabetique",
      "startsWith(s) verifie si une chaine commence par une autre sequence precise",
      "endsWith(s) verifie si une chaine se termine par une autre sequence precise",
      "valueOf(x) convertit une valeur donnee en chaine de caracteres exploitable",
      "parseInt(s) convertit une chaine en entier de type primitif",
      "parseDouble(s) convertit une chaine en nombre a virgule flottante double",
      "Math.abs(n) retourne la valeur absolue d'un nombre positif ou negatif",
      "Math.max(a,b) retourne le plus grand des deux nombres passes en parametre",
      "Math.min(a,b) retourne le plus petit des deux nombres passes en parametre",
      "Math.round(f) arrondit un nombre a l'entier le plus proche mathematiquement",
      "Arrays.sort(arr) trie un tableau d'elements de maniere croissante",
      "Math.sqrt(x) renvoie la racine carree positive d'un nombre double specifie",
      "Math.floor(x) renvoie le plus grand entier inferieur ou egal au nombre",
      "Math.ceil(x) renvoie le plus petit entier superieur ou egal au nombre",
      "System.out.print(s) affiche un message sans saut de ligne synchrone directement"
    ],
    en: [
      "indexOf(str) returns the index of the first occurrence of a substring inside text",
      "substring(0,5) returns a portion of the string extracted using native parameters",
      "replace(a,b) replaces all occurrences of a substring with another target sequence",
      "split(\",\") splits a string into an array of substrings using delimiters",
      "compareTo(o) compares two strings according to lexicographical alphabetical order",
      "startsWith(s) checks if a string starts with another specific character sequence",
      "endsWith(s) checks if a string ends with another specific character sequence",
      "valueOf(x) converts a value to a string representation that can be used",
      "parseInt(s) converts a string to an integer primitive data type easily",
      "parseDouble(s) converts a string to a floating-point number double precision format",
      "Math.abs(n) returns the absolute value of a number regardless of sign",
      "Math.max(a,b) returns the larger of two numbers provided inside parameters list",
      "Math.min(a,b) returns the smaller of two numbers provided inside parameters list",
      "Math.round(f) rounds a number to the nearest integer value using mathematics",
      "Arrays.sort(arr) sorts an array of elements into ascending numerical order quickly",
      "Math.sqrt(x) returns the correctly rounded positive square root of double value",
      "Math.floor(x) returns the largest double value less than or equal to argument",
      "Math.ceil(x) returns the smallest double value greater than or equal to argument",
      "System.out.print(s) prints a string inside the console without newline feed directly"
    ]
  },
  hard: {
    fr: [
      "Collections.sort(list) trie une liste modifiable triee selon l'ordre naturel des elements",
      "Arrays.asList(a,b,c) cree une liste a partir d'un tableau de taille fixe non modifiable",
      "Integer.toBinaryString(n) convertit un entier en chaine binaire representant la valeur brute",
      "String.format(\"%s\",x) formate une chaine avec des arguments selon une configuration donnee",
      "Collections.unmodifiableList(l) cree une liste non modifiable securisee pour empecher les changements",
      "Objects.requireNonNull(o) lance une exception si l'objet est null pour verifier les arguments",
      "Optional.ofNullable(v) cree un Optional a partir d'une valeur nullable pour eviter les erreurs",
      "Stream.of(1,2,3) cree un Stream a partir de valeurs pour le traitement fonctionnel sequentiel",
      "Collections.frequency(l,x) retourne la frequence d'un element dans une liste donnee en parametre",
      "Arrays.copyOfRange(a,0,3) copie une partie d'un tableau dans une nouvelle instance allouee",
      "Collections.reverseOrder() retourne un comparateur pour trier en ordre inverse les objets comparables",
      "Math.pow(base,exp) calcule la puissance d'un nombre en elevant la base selon l'exposant",
      "String.join(\"-\",parts) rassemble des chaines avec un delimiteur specifique insere entre chaque element",
      "Files.readString(path) lit tout le contenu d'un fichier en chaine avec un codage standard",
      "Executors.newFixedThreadPool(n) cree un pool de threads reutilisables pour executer des taches simultanees",
      "CompletableFuture.supplyAsync(s) execute une tache asynchrone en arriere-plan et retourne un resultat futur",
      "LocalDate.now() recupere la date actuelle du systeme sans fuseau horaire ni indication d'heure",
      "Pattern.compile(regex) compile la depouille reguliere donnee en un modele reutilisable pour les verifications"
    ],
    en: [
      "Collections.sort(list) sorts a list with objects into ascending order based on natural comparison",
      "Arrays.asList(a,b,c) creates a list from an array with fixed sizes backend structural references",
      "Integer.toBinaryString(n) converts an integer to a binary string representation containing base two digits",
      "String.format(\"%s\",x) formats a string with arguments applying layout instructions specified inside input",
      "Collections.unmodifiableList(l) creates an unmodifiable list wrapping original data structures to prevent edits",
      "Objects.requireNonNull(o) throws an exception if the object is null to protect execution lines",
      "Optional.ofNullable(v) creates an Optional from a nullable value providing clean container API methods",
      "Stream.of(1,2,3) creates a Stream from values enabling pipeline execution structures inside modern applications",
      "Collections.frequency(l,x) returns the frequency of an element in a list tracking total matching occurrences",
      "Arrays.copyOfRange(a,0,3) copies a portion of an array slicing original contents into separate variables",
      "Collections.reverseOrder() returns a comparator for reverse sorting structures inversion of standard ordering rules",
      "Math.pow(base,exp) calculates the power of a number multiplying base by itself exponent times",
      "String.join(\"-\",parts) joins strings with a delimiter character repeating separator pattern between each word",
      "Files.readString(path) reads all content from a file into a string using default charset format",
      "Executors.newFixedThreadPool(n) creates a thread pool that reuses threads handling heavy concurrent background execution",
      "CompletableFuture.supplyAsync(s) runs an asynchronous task inside background environments resolving values using worker workers",
      "LocalDate.now() obtains the current date from the system clock without time metadata information included",
      "Pattern.compile(regex) compiles the given regular expression into a pattern engine ready for text validation"
    ]
  }
};

// ===== ASTUCES JAVA =====
const TIPS = {
  fr: [
    "toString() est appelee automatiquement avec System.out.println()",
    "hashCode() doit etre redefini si vous redefinissez equals()",
    "equals() compare le contenu, == compare les references",
    "length() s'utilise sur les String, size() sur les Collections",
    "isEmpty() est plus lisible que size() == 0",
    "parseInt() lance une NumberFormatException si la String n'est pas un nombre",
    "Math.round() retourne un long pour les double",
    "Arrays.sort() utilise le tri rapide pour les primitifs",
    "Collections.sort() utilise le tri fusion (stable)",
    "String.format() est utile pour formater des messages complexes"
  ],
  en: [
    "toString() is called automatically by System.out.println()",
    "hashCode() must be overridden whenever equals() is overridden",
    "equals() compares content, == compares references",
    "length() is for String, size() is for Collections",
    "isEmpty() is more readable than size() == 0",
    "parseInt() throws NumberFormatException if the String is not a number",
    "Math.round() returns long for double arguments",
    "Arrays.sort() uses quicksort for primitives",
    "Collections.sort() uses merge sort (stable)",
    "String.format() is great for formatting complex messages"
  ]
};

// ===== PARAMETRES GLOBAUX =====
let settings = {
  theme: 'dark',
  lang: 'fr',
  sound: false,
  tips: true,
  gameFont: 'JetBrains Mono',
  accent: '#f78166',
  fontSize: 'normal'
};

// ===== ETAT DU JEU =====
let gameState = {
  words: [],           
  currentIndex: 0,     
  startTime: null,     
  totalTypedKeys: 0,   
  correctTypedKeys: 0, 
  isRunning: false,
  isPaused: false,
  timerInterval: null,

  countdownMode: false,
  countdownSeconds: 0,
  countdownLeft: 0,
  countdownInterval: null,

  defPool: [],        
  defPoolIndex: 0,    
  batchSize: 3        
};

// ===== LOGIQUE FLUX DE TEXTE =====
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function getLang()  { return document.getElementById('lang-select').value; }
function getDiff()  { return document.getElementById('mode-select').value; }
function isCountdownMode() { return document.getElementById('timer-select').value !== 'words'; }

function getCountdownSeconds() {
  var val = document.getElementById('timer-select').value;
  if (val === '30')  return 30;
  if (val === '60')  return 60;
  if (val === '90')  return 90;
  if (val === '120') return 120;
  return 0;
}

function rebuildWordList() {
  stopAllTimers();

  var lang = getLang();
  var diff = getDiff();
  var pool = shuffle(WORDS[diff][lang]);

  var batchSize = 3;
  if (!isCountdownMode()) {
    if (diff === 'easy') batchSize = 3;
    else if (diff === 'medium') batchSize = 5;
    else batchSize = 7;
  }

  gameState.defPool = pool;
  gameState.defPoolIndex = 0;
  gameState.batchSize = batchSize;

  gameState.words = buildTokensFromPool();
  gameState.currentIndex = 0;
  gameState.startTime = null;
  gameState.totalTypedKeys = 0;
  gameState.correctTypedKeys = 0;
  gameState.isRunning = false;
  gameState.isPaused = false;
  gameState.countdownMode = isCountdownMode();
  gameState.countdownSeconds = getCountdownSeconds();
  gameState.countdownLeft = getCountdownSeconds();

  settings.lang = lang;

  var countSel = document.getElementById('count-select');
  if (countSel) countSel.style.display = 'none';

  document.getElementById('live-wpm').textContent = '—';
  document.getElementById('live-acc').textContent = '—';
  document.getElementById('live-words').textContent = '0';

  var liveTimeEl = document.getElementById('live-time');
  if(liveTimeEl) {
    liveTimeEl.classList.remove('countdown-urgent');
    liveTimeEl.textContent = gameState.countdownMode ? gameState.countdownSeconds + 's' : '0s';
  }

  var inputField = document.getElementById('input-field');
  inputField.value = '';
  inputField.disabled = false;
  inputField.classList.remove('input-error');

  hidePauseButton();
  renderWords();
  showTip();
}

function buildTokensFromPool() {
  var flat = [];
  for (var b = 0; b < gameState.batchSize; b++) {
    var def = gameState.defPool[gameState.defPoolIndex % gameState.defPool.length];
    var tokens = def.split(' ');
    for (var t = 0; t < tokens.length; t++) {
      flat.push({ 
        text: tokens[t], 
        defIndex: b, 
        correct: undefined,
        isLastOfDef: (t === tokens.length - 1)
      });
    }
    gameState.defPoolIndex++;
  }
  return flat;
}

function loadNextBatch() {
  gameState.words = buildTokensFromPool();
  gameState.currentIndex = 0;
  var inputField = document.getElementById('input-field');
  inputField.value = '';
  inputField.classList.remove('input-error');
  renderWords();
}


// ===== AFFICHAGE ET RENDU DYNAMIQUE DES MOTS =====
function renderWords() {
  var display = document.getElementById('word-display');
  if (!display) return;
  display.style.fontFamily = settings.gameFont;
  display.innerHTML = '';

  var lastDefIndex = -1;

  for (var i = 0; i < gameState.words.length; i++) {
    var word = gameState.words[i];

    if (word.defIndex !== lastDefIndex) {
      if (lastDefIndex !== -1) {
        var sep = document.createElement('div');
        sep.className = 'def-separator';
        display.appendChild(sep);
      }
      lastDefIndex = word.defIndex;
    }

    var span = document.createElement('span');
    span.id = 'w-' + i;
    span.style.whiteSpace = 'pre-wrap'; 

    if (i < gameState.currentIndex) {
      span.className = word.correct ? 'word-done' : 'word-wrong';
    } else if (i === gameState.currentIndex) {
      span.className = 'word-current';
    } else {
      span.className = 'word-pending';
    }

    var baseText = word.text + (word.isLastOfDef ? '' : ' ');
    span.textContent = baseText;

    display.appendChild(span);
  }

  var cur = document.getElementById('w-' + gameState.currentIndex);
  if (cur) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  updateProgress();
}

function renderCurrentWord(typed) {
  var span = document.getElementById('w-' + gameState.currentIndex);
  if (!span) return;
  
  var wordData = gameState.words[gameState.currentIndex];
  var target = wordData.text + (wordData.isLastOfDef ? '' : ' ');
  
  span.innerHTML = '';

  for (var i = 0; i < target.length; i++) {
    var charSpan = document.createElement('span');
    charSpan.textContent = target[i];
    
    if (target[i] === ' ') {
      charSpan.style.whiteSpace = 'pre';
    }

    if (i < typed.length) {
      var ok = typed[i] === target[i];
      charSpan.className = ok ? 'char-ok' : 'char-err';
    }
    
    span.appendChild(charSpan);
  }
}