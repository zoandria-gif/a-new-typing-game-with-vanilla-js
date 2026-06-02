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
  let navEl = document.querySelector('[data-page="' + page + '"]');
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
      "clear() supprime tous les elements d'une collection",
      "throw lance une exception pour signaler une erreur dans le programme",
      "return retourne une valeur depuis une methode vers l'appelant",
      "break interrompt l'execution d'une boucle ou d'un switch immediatement",
      "continue passe directement a l'iteration suivante d'une boucle en cours",
      "null represente l'absence de valeur ou de reference a un objet",
      "instanceof verifie si un objet est une instance d'une classe donnee",
      "contains() verifie si une collection contient un element specifique",
      "print() affiche un message dans la console sans retour a la ligne",
      "println() affiche un message dans la console avec un retour a la ligne",
      "new cree une nouvelle instance d'une classe en memoire",
      "this fait reference a l'instance courante de la classe en cours",
      "super fait reference a la classe parente dans une relation d'heritage",
      "static declare un membre appartenant a la classe et non a une instance",
      "final declare une variable constante ou une classe non extensible",
      "void indique qu'une methode ne retourne aucune valeur au retour",
      "boolean type primitif representant une valeur vraie ou fausse uniquement",
      "int type primitif representant un nombre entier signe sur 32 bits",
      "double type primitif representant un nombre a virgule flottante double",
      "char type primitif representant un seul caractere unicode en memoire",
      "String type representant une chaine de caracteres immuable en Java",
      "if execute un bloc de code si la condition donnee est vraie",
      "else execute un bloc alternatif si la condition du if est fausse",
      "for repete un bloc de code un nombre defini de fois consecutives",
      "while repete un bloc de code tant que la condition reste vraie",
      "switch evalue une expression et execute le cas correspondant trouve",
      "add() ajoute un element a la fin d'une liste ou d'un ensemble",
      "get() retourne l'element a l'index specifie dans une liste donnee",
      "remove() supprime un element d'une collection a l'index indique",
      "set() remplace l'element a un index donne dans une liste existante",
      "next() retourne l'element suivant lors du parcours d'un iterateur",
      "hasNext() verifie s'il reste des elements a parcourir dans l'iterateur"
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
      "clear() removes all elements from a collection",
      "throw launches an exception to signal an error inside the program",
      "return sends a value back from a method to its caller",
      "break stops the execution of a loop or switch statement immediately",
      "continue skips to the next iteration of the current loop directly",
      "null represents the absence of a value or object reference",
      "instanceof checks if an object is an instance of a given class",
      "contains() checks if a collection contains a specific element",
      "print() displays a message in the console without a newline character",
      "println() displays a message in the console with a newline at end",
      "new creates a new instance of a class and allocates memory for it",
      "this refers to the current instance of the class being used",
      "super refers to the parent class in an inheritance relationship context",
      "static declares a member that belongs to the class not to instances",
      "final declares a constant variable or a class that cannot be extended",
      "void indicates that a method does not return any value to caller",
      "boolean primitive type representing a true or false value only",
      "int primitive type representing a signed 32-bit integer number value",
      "double primitive type representing a double precision floating-point number",
      "char primitive type representing a single unicode character in memory",
      "String type representing an immutable sequence of characters in Java",
      "if executes a block of code when the given condition is true",
      "else executes an alternative block when the if condition is false",
      "for repeats a block of code a defined number of consecutive times",
      "while repeats a block of code as long as the condition stays true",
      "switch evaluates an expression and executes the corresponding matching case",
      "add() appends an element to the end of a list or set collection",
      "get() returns the element at the specified index in a given list",
      "remove() deletes an element from a collection at the indicated index",
      "set() replaces the element at a given index in an existing list",
      "next() returns the next element when iterating through an iterator",
      "hasNext() checks if there are more elements remaining in the iterator"
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
      "System.out.print(s) affiche un message sans saut de ligne synchrone directement",
      "throws declare les exceptions qu'une methode peut propager vers l'appelant",
      "try ouvre un bloc de code surveille pour capturer les exceptions eventuelles",
      "catch(e) capture une exception lancee dans le bloc try correspondant",
      "finally execute un bloc de code apres try et catch dans tous les cas",
      "ArrayList<T>() cree une liste dynamique redimensionnable stockant des elements generiques",
      "HashMap<K,V>() cree une map stockant des paires cle-valeur sans ordre garanti",
      "get(index) retourne l'element a la position donnee dans une liste ou map",
      "put(k,v) ajoute ou remplace une paire cle-valeur dans une HashMap",
      "remove(o) supprime un element ou une cle d'une collection existante",
      "add(e) ajoute un element a la fin d'une liste ou d'un ensemble",
      "containsKey(k) verifie si une HashMap contient une cle specifique donnee",
      "containsValue(v) verifie si une HashMap contient une valeur specifique donnee",
      "keySet() retourne l'ensemble de toutes les cles presentes dans une HashMap",
      "values() retourne la collection de toutes les valeurs d'une HashMap",
      "entrySet() retourne l'ensemble des paires cle-valeur d'une HashMap",
      "Collections.shuffle(list) melange aleatoirement les elements d'une liste modifiable",
      "Collections.min(list) retourne le plus petit element d'une collection non vide",
      "Collections.max(list) retourne le plus grand element d'une collection non vide",
      "Collections.fill(list,v) remplace tous les elements d'une liste par une valeur",
      "Arrays.fill(arr,v) remplace tous les elements d'un tableau par une valeur donnee",
      "Arrays.copyOf(arr,n) copie un tableau en creant une nouvelle instance de taille n",
      "Arrays.equals(a,b) compare deux tableaux element par element pour verifier l'egalite",
      "String.valueOf(x) convertit n'importe quel type primitif en chaine de caracteres",
      "Character.isLetter(c) verifie si un caractere est une lettre alphabetique valide",
      "Character.isDigit(c) verifie si un caractere est un chiffre numerique valide",
      "Character.toUpperCase(c) convertit un caractere en sa version majuscule equivalente",
      "Integer.MAX_VALUE retourne la valeur entiere maximale representable sur 32 bits",
      "Integer.MIN_VALUE retourne la valeur entiere minimale representable sur 32 bits",
      "Math.random() retourne un nombre aleatoire double entre zero et un exclus",
      "System.currentTimeMillis() retourne le temps actuel en millisecondes depuis epoch",
      "for(T e : list) parcourt chaque element d'une collection avec la boucle foreach",
      "LinkedList<T>() cree une liste doublement chainee pour insertions et suppressions rapides",
      "HashSet<T>() cree un ensemble non ordonne qui interdit les doublons d'elements",
      "TreeMap<K,V>() cree une map triee selon l'ordre naturel des cles inserees"
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
      "System.out.print(s) prints a string inside the console without newline feed directly",
      "throws declares the exceptions a method can propagate back to its caller",
      "try opens a monitored block of code to catch potential runtime exceptions",
      "catch(e) captures an exception thrown inside the corresponding try block above",
      "finally executes a block of code after try and catch in every case",
      "ArrayList<T>() creates a resizable dynamic list storing elements of a generic type",
      "HashMap<K,V>() creates a map storing key-value pairs without guaranteed ordering",
      "get(index) returns the element at the given position in a list or map",
      "put(k,v) adds or replaces a key-value pair inside an existing HashMap",
      "remove(o) deletes an element or key from an existing collection structure",
      "add(e) appends an element to the end of a list or set collection",
      "containsKey(k) checks if a HashMap contains a specific key provided",
      "containsValue(v) checks if a HashMap contains a specific value provided",
      "keySet() returns the set of all keys present inside a HashMap",
      "values() returns the collection of all values stored inside a HashMap",
      "entrySet() returns the set of all key-value pairs inside a HashMap",
      "Collections.shuffle(list) randomly shuffles the elements of a modifiable list",
      "Collections.min(list) returns the smallest element of a non-empty collection",
      "Collections.max(list) returns the largest element of a non-empty collection",
      "Collections.fill(list,v) replaces all elements of a list with a single value",
      "Arrays.fill(arr,v) replaces all elements of an array with a given value",
      "Arrays.copyOf(arr,n) copies an array creating a new instance of size n",
      "Arrays.equals(a,b) compares two arrays element by element to verify equality",
      "String.valueOf(x) converts any primitive type into its string representation",
      "Character.isLetter(c) checks if a character is a valid alphabetical letter",
      "Character.isDigit(c) checks if a character is a valid numerical digit value",
      "Character.toUpperCase(c) converts a character to its equivalent uppercase version",
      "Integer.MAX_VALUE returns the maximum integer value representable on 32 bits",
      "Integer.MIN_VALUE returns the minimum integer value representable on 32 bits",
      "Math.random() returns a random double number between zero and one excluded",
      "System.currentTimeMillis() returns the current time in milliseconds since epoch",
      "for(T e : list) iterates over each element of a collection using foreach loop",
      "LinkedList<T>() creates a doubly linked list for fast insertions and deletions",
      "HashSet<T>() creates an unordered set that forbids duplicate elements inside",
      "TreeMap<K,V>() creates a sorted map ordered by the natural order of keys"
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
      "Pattern.compile(regex) compile la depouille reguliere donnee en un modele reutilisable pour les verifications",
      "stream().anyMatch(p) verifie si au moins un element du stream satisfait le predicat donne",
      "stream().allMatch(p) verifie si tous les elements du stream satisfont le predicat specifie",
      "stream().noneMatch(p) verifie qu'aucun element du stream ne satisfait le predicat fourni",
      "stream().filter(p) filtre les elements du stream en conservant ceux qui satisfont le predicat",
      "stream().map(f) transforme chaque element du stream en appliquant la fonction donnee",
      "stream().collect(Collectors.toList()) collecte les elements d'un stream dans une nouvelle liste",
      "stream().reduce(0,Integer::sum) reduit les elements du stream en une seule valeur accumulee",
      "stream().distinct() supprime les doublons d'un stream en conservant les elements uniques",
      "stream().sorted() trie les elements du stream selon leur ordre naturel par defaut",
      "stream().limit(n) tronque le stream pour ne conserver que les n premiers elements",
      "stream().count() retourne le nombre total d'elements presents dans le stream traite",
      "stream().forEach(a) execute une action pour chaque element du stream sans retour",
      "stream().findFirst() retourne un Optional contenant le premier element du stream rencontre",
      "Comparator.comparing(f) cree un comparateur base sur une fonction d'extraction de cle de tri",
      "Map.entry(k,v) cree une entree immuable cle-valeur utilisable dans les structures de map",
      "List.of(a,b,c) cree une liste immuable a partir des elements passes en arguments directs",
      "Map.of(k,v) cree une map immuable a partir de paires cle-valeur passees en parametre"
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
      "Pattern.compile(regex) compiles the given regular expression into a pattern engine ready for text validation",
      "stream().anyMatch(p) checks if at least one element of the stream satisfies the given predicate",
      "stream().allMatch(p) checks if every element of the stream satisfies the specified predicate condition",
      "stream().noneMatch(p) checks that no element of the stream satisfies the provided predicate test",
      "stream().filter(p) filters elements of the stream keeping only those matching the given predicate",
      "stream().map(f) transforms each element of the stream by applying the provided mapping function",
      "stream().collect(Collectors.toList()) collects all elements of a stream into a new list instance",
      "stream().reduce(0,Integer::sum) reduces stream elements into a single accumulated value using an operator",
      "stream().distinct() removes duplicate elements from a stream keeping only unique values present",
      "stream().sorted() sorts the elements of the stream according to their default natural ordering",
      "stream().limit(n) truncates the stream to retain only the first n elements encountered",
      "stream().count() returns the total number of elements present inside the processed stream",
      "stream().forEach(a) executes an action for each element of the stream without returning value",
      "stream().findFirst() returns an Optional containing the first element encountered in the stream",
      "Comparator.comparing(f) creates a comparator based on a key extraction function for sorting logic",
      "Map.entry(k,v) creates an immutable key-value entry usable inside map data structures directly",
      "List.of(a,b,c) creates an immutable list from elements passed as direct arguments to method",
      "Map.of(k,v) creates an immutable map from key-value pairs passed directly as method parameters"
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
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function getLang()  { return document.getElementById('lang-select').value; }
function getDiff()  { return document.getElementById('mode-select').value; }
function isCountdownMode() { return document.getElementById('timer-select').value !== 'words'; }

function getCountdownSeconds() {
  let val = document.getElementById('timer-select').value;
  if (val === '30')  return 30;
  if (val === '60')  return 60;
  if (val === '90')  return 90;
  if (val === '120') return 120;
  return 0;
}

function rebuildWordList() {
  stopAllTimers();

  let lang = getLang();
  let diff = getDiff();
  let pool = shuffle(WORDS[diff][lang]);

  let batchSize = 3;
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

  let countSel = document.getElementById('count-select');
  if (countSel) countSel.style.display = 'none';

  document.getElementById('live-wpm').textContent = '—';
  document.getElementById('live-acc').textContent = '—';
  document.getElementById('live-words').textContent = '0';

  let liveTimeEl = document.getElementById('live-time');
  if(liveTimeEl) {
    liveTimeEl.classList.remove('countdown-urgent');
    liveTimeEl.textContent = gameState.countdownMode ? gameState.countdownSeconds + 's' : '0s';
  }

  let inputField = document.getElementById('input-field');
  inputField.value = '';
  inputField.disabled = false;
  inputField.classList.remove('input-error');

  hidePauseButton();
  renderWords();
  showTip();
}

function buildTokensFromPool() {
  let flat = [];
  for (let b = 0; b < gameState.batchSize; b++) {
    let def = gameState.defPool[gameState.defPoolIndex % gameState.defPool.length];
    let tokens = def.split(' ');
    for (let t = 0; t < tokens.length; t++) {
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
  let inputField = document.getElementById('input-field');
  inputField.value = '';
  inputField.classList.remove('input-error');
  renderWords();
}

// ===== AFFICHAGE ET RENDU DYNAMIQUE DES MOTS =====
function renderWords() {
  let display = document.getElementById('word-display');
  if (!display) return;
  display.style.fontFamily = settings.gameFont;
  display.innerHTML = '';

  let lastDefIndex = -1;

  for (let i = 0; i < gameState.words.length; i++) {
    let word = gameState.words[i];

    if (word.defIndex !== lastDefIndex) {
      if (lastDefIndex !== -1) {
        let sep = document.createElement('div');
        sep.className = 'def-separator';
        display.appendChild(sep);
      }
      lastDefIndex = word.defIndex;
    }

    let span = document.createElement('span');
    span.id = 'w-' + i;
    span.style.whiteSpace = 'pre-wrap';

    if (i < gameState.currentIndex) {
      span.className = word.correct ? 'word-done' : 'word-wrong';
    } else if (i === gameState.currentIndex) {
      span.className = 'word-current';
    } else {
      span.className = 'word-pending';
    }

    let baseText = word.text + (word.isLastOfDef ? '' : ' ');
    span.textContent = baseText;

    display.appendChild(span);
  }

  let cur = document.getElementById('w-' + gameState.currentIndex);
  if (cur) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  updateProgress();
}

function renderCurrentWord(typed) {
  let span = document.getElementById('w-' + gameState.currentIndex);
  if (!span) return;

  let wordData = gameState.words[gameState.currentIndex];
  let target = wordData.text + (wordData.isLastOfDef ? '' : ' ');

  span.innerHTML = '';

  for (let i = 0; i < target.length; i++) {
    let charSpan = document.createElement('span');
    charSpan.textContent = target[i];

    if (target[i] === ' ') {
      charSpan.style.whiteSpace = 'pre';
    }

    if (i < typed.length) {
      let ok = typed[i] === target[i];
      charSpan.className = ok ? 'char-ok' : 'char-err';
    }

    span.appendChild(charSpan);
  }
}

// ===== CHRONOMETRES ET STATISTIQUES =====
function updateProgress() {
  let pct = (gameState.currentIndex / gameState.words.length) * 100;
  let fill = document.getElementById('progress-fill');
  if(fill) fill.style.width = pct + '%';
}

function startElapsedTimer() {
  gameState.timerInterval = setInterval(function() {
    if (gameState.isPaused) return;

    let elapsed = Math.round((Date.now() - gameState.startTime) / 1000);
    let timeEl = document.getElementById('live-time');
    if (timeEl) timeEl.textContent = elapsed + 's';

    updateLiveStats();
  }, 200);
}

function startCountdownTimer() {
  gameState.countdownLeft = gameState.countdownSeconds;
  let timeEl = document.getElementById('live-time');
  if(timeEl) timeEl.textContent = gameState.countdownLeft + 's';

  gameState.countdownInterval = setInterval(function() {
    if (gameState.isPaused) return;

    gameState.countdownLeft--;
    if(timeEl) {
      timeEl.textContent = gameState.countdownLeft + 's';
      if (gameState.countdownLeft <= 10) {
        timeEl.classList.add('countdown-urgent');
      } else {
        timeEl.classList.remove('countdown-urgent');
      }
    }
    updateLiveStats();

    if (gameState.countdownLeft <= 0) {
      finishGame();
    }
  }, 1000);
}

function stopAllTimers() {
  clearInterval(gameState.timerInterval);
  clearInterval(gameState.countdownInterval);
  gameState.timerInterval = null;
  gameState.countdownInterval = null;
}

function updateLiveStats() {
  if (!gameState.startTime) return;

  let elapsed;
  if (gameState.countdownMode) {
    elapsed = gameState.countdownSeconds - gameState.countdownLeft;
  } else {
    elapsed = (Date.now() - gameState.startTime) / 1000;
  }

  if (elapsed < 0.1) return;

  let wpm = Math.round((gameState.correctTypedKeys / 5) / (elapsed / 60));
  document.getElementById('live-wpm').textContent = wpm;

  if (gameState.totalTypedKeys > 0) {
    let acc = Math.round((gameState.correctTypedKeys / gameState.totalTypedKeys) * 100);
    document.getElementById('live-acc').textContent = acc + '%';
  }

  document.getElementById('live-words').textContent = gameState.currentIndex;
}

// ===== INTERFACES ET FENETRES PAUSE / FIN =====
function togglePause() {
  if (!gameState.isRunning) return;

  gameState.isPaused = !gameState.isPaused;
  let btn = document.getElementById('pause-btn');
  let inputField = document.getElementById('input-field');

  if (gameState.isPaused) {
    if(btn) { btn.innerHTML = '<i class="fa-solid fa-play"></i> Reprendre'; btn.classList.add('paused'); }
    inputField.disabled = true;
    inputField.placeholder = '— JEU EN PAUSE —';
    document.getElementById('word-display').classList.add('game-paused');
  } else {
    if(btn) { btn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause'; btn.classList.remove('paused'); }
    inputField.disabled = false;
    inputField.placeholder = 'Continuez a taper…';
    inputField.focus();
    document.getElementById('word-display').classList.remove('game-paused');
  }
}

function hidePauseButton() {
  let btn = document.getElementById('pause-btn');
  if (btn) {
    btn.style.display = 'none';
    btn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
    btn.classList.remove('paused');
  }
  document.getElementById('word-display').classList.remove('game-paused');
}

function showPauseButton() {
  let btn = document.getElementById('pause-btn');
  if (btn) btn.style.display = 'inline-flex';
}

function finishGame() {
  stopAllTimers();
  gameState.isRunning = false;
  gameState.isPaused = false;
  hidePauseButton();

  document.getElementById('input-field').disabled = true;

  let elapsed;
  if (gameState.countdownMode) {
    elapsed = gameState.countdownSeconds;
  } else {
    elapsed = (Date.now() - gameState.startTime) / 1000;
  }

  let wpm = elapsed > 0 ? Math.round((gameState.correctTypedKeys / 5) / (elapsed / 60)) : 0;
  let acc = gameState.totalTypedKeys > 0 ? Math.round((gameState.correctTypedKeys / gameState.totalTypedKeys) * 100) : 100;

  document.getElementById('res-wpm').textContent = wpm;
  document.getElementById('res-acc').textContent = acc + '%';
  document.getElementById('res-words').textContent = gameState.currentIndex;
  document.getElementById('res-time').textContent = Math.round(elapsed) + 's';

  let msg;
  if (wpm >= 80)      msg = '🔥 Incroyable ! Vous etes un vrai pro Java !';
  else if (wpm >= 60) msg = '<i class="fa-solid fa-bolt"></i> Excellent ! Votre vitesse est impressionnante !';
  else if (wpm >= 40) msg = '👍 Bien joue ! Continuez a pratiquer !';
  else if (wpm >= 20) msg = '📚 Bon debut ! La pratique reguliere vous aidera.';
  else                msg = '🌱 Continuez, chaque frappe vous ameliore !';

  document.getElementById('res-msg').innerHTML = msg;

  document.getElementById('live-wpm').textContent = wpm;
  document.getElementById('live-acc').textContent = acc + '%';
  document.getElementById('live-words').textContent = gameState.currentIndex;

  renderWords();
  document.getElementById('results-overlay').classList.add('show');
}

function restartGame() {
  document.getElementById('results-overlay').classList.remove('show');
  rebuildWordList();
  document.getElementById('input-field').focus();
}

function startGame(mode) {
  navigate('game');
  document.getElementById('mode-select').value = mode;

  // Déplacer le highlight vers le bon niveau
  document.querySelectorAll('.topbar-chip').forEach(function(chip) {
    chip.classList.remove('highlight');
  });
  document.querySelectorAll('.topbar-chip[onclick]').forEach(function(chip) {
    if (chip.getAttribute('onclick') === "startGame('" + mode + "')") {
      chip.classList.add('highlight');
    }
  });

  setTimeout(rebuildWordList, 50);
}

// ===== CAPTURE DES TOUCHES ET PASSAGE OBLIGATOIRE PAR ESPACE =====
document.getElementById('input-field').addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    restartGame();
    return;
  }

  if (e.key === 'Escape') {
    e.preventDefault();
    if (gameState.isRunning) togglePause();
    return;
  }

  if (!gameState.isRunning && gameState.words.length > 0 && !gameState.isPaused) {
    gameState.isRunning = true;
    gameState.startTime = Date.now();
    if (gameState.countdownMode) {
      startCountdownTimer();
    } else {
      startElapsedTimer();
    }
    showPauseButton();
  }

  if (gameState.isPaused) {
    e.preventDefault();
    return;
  }

  let wordData = gameState.words[gameState.currentIndex];
  let expectedText = wordData.text + (wordData.isLastOfDef ? ' ' : ' ');
  let typedValue = this.value;

  if (e.key === ' ') {
    e.preventDefault();

    if (typedValue.length === 0) return;

    typedValue += ' ';

    gameState.totalTypedKeys += Math.max(typedValue.length, expectedText.length);
    for (let i = 0; i < Math.min(typedValue.length, expectedText.length); i++) {
      if (typedValue[i] === expectedText[i]) {
        gameState.correctTypedKeys++;
      }
    }

    wordData.correct = (typedValue === expectedText);
    if (settings.sound) playClick();

    this.value = '';
    this.classList.remove('input-error');
    gameState.currentIndex++;

    if (gameState.currentIndex >= gameState.words.length) {
      if (gameState.countdownMode) { loadNextBatch(); } else { finishGame(); }
      return;
    }

    updateLiveStats();
    renderWords();
  }
});

document.getElementById('input-field').addEventListener('input', function() {
  if (gameState.isPaused) return;

  let typed = this.value;
  let wordData = gameState.words[gameState.currentIndex];
  if (!wordData) return;

  let expected = wordData.text + (wordData.isLastOfDef ? ' ' : ' ');
  let isError = typed.length > 0 && !expected.startsWith(typed);

  this.classList.toggle('input-error', isError);
  renderCurrentWord(typed);
});

// ===== MARQUEE ET EFFETS VISUELS DE FOND =====
function showToast(msg, type) {
  let t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.className = 'toast show ' + (type || '');
  setTimeout(function() { t.classList.remove('show'); }, 3000);
}

function buildMarquee() {
  let items = [].concat(WORDS.easy.fr, WORDS.medium.fr, WORDS.hard.fr,
                        WORDS.easy.fr, WORDS.medium.fr, WORDS.hard.fr);
  let track = document.getElementById('marquee-track');
  if (!track) return;
  track.innerHTML = '';
  items.forEach(function(w) {
    let el = document.createElement('div');
    el.className = 'marquee-item';
    el.innerHTML = '<span>' + w + '</span>';
    track.appendChild(el);
  });
  items.forEach(function(w) {
    let el = document.createElement('div');
    el.className = 'marquee-item';
    el.innerHTML = '<span>' + w + '</span>';
    track.appendChild(el);
  });
}

function buildBgCode() {
  let el = document.getElementById('bg-code');
  if (!el) return;
  let lines = [
    'public class JavaType {',
    '  String[] words = getWords();',
    '  int wpm = calcWPM();',
    '  float acc = calcAccuracy();',
    '  ',
    '  void play() {',
    '    while (!finished) {',
    '      type(nextWord());',
    '    }',
    '  }',
    '}'
  ];
  el.textContent = lines.join('\n');
}

// ===== INITIALISATION GLOBALE =====
buildMarquee();
buildBgCode();
rebuildWordList();

// // ===== PARAMETRES INTERFACE VITESSE/STYLE =====
function setTheme(t) {
  settings.theme = t;
  document.documentElement.setAttribute('data-theme', t);
  let tog = document.getElementById('theme-toggle');
  if (tog) { if (t === 'dark') { tog.classList.add('on'); } else { tog.classList.remove('on'); } }
  let btnL = document.getElementById('theme-light-btn');
  let btnD = document.getElementById('theme-dark-btn');
  if(btnL) btnL.classList.toggle('active', t === 'light');
  if(btnD) btnD.classList.toggle('active', t === 'dark');
}

function toggleTheme() {
  setTheme(settings.theme === 'dark' ? 'light' : 'dark');
}

function setAccent(color, el) {
  settings.accent = color;
  document.documentElement.style.setProperty('--accent', color);
  document.querySelectorAll('.color-swatch').forEach(function(s) { s.classList.remove('active'); });
  if (el) el.classList.add('active');
}

function setFontSize(size) {
  settings.fontSize = size;
  document.body.classList.remove('fs-small', 'fs-large');
  if (size === 'small') document.body.classList.add('fs-small');
  if (size === 'large') document.body.classList.add('fs-large');

  // Mise à jour du bouton actif
  document.getElementById('fs-small-btn').classList.remove('active');
  document.getElementById('fs-normal-btn').classList.remove('active');
  document.getElementById('fs-large-btn').classList.remove('active');
  document.getElementById('fs-' + size + '-btn').classList.add('active');
}

function setLang(l) {
  settings.lang = l;
  let lfr = document.getElementById('lang-fr');
  let len = document.getElementById('lang-en');
  if(lfr) lfr.classList.toggle('active', l === 'fr');
  if(len) len.classList.toggle('active', l === 'en');
  let sel = document.getElementById('lang-select');
  if (sel) sel.value = l;
  rebuildWordList();
  showTip();
}

// ===== EFFET SONORE AUDIO =====
let audioCtx = null;
function playClick() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let o = audioCtx.createOscillator();
    let g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.frequency.value = 800;
    g.gain.setValueAtTime(0.1, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    o.start(); o.stop(audioCtx.currentTime + 0.05);
  } catch(e) {}
}

function toggleSound() {
  settings.sound = !settings.sound;
  let tog = document.getElementById('sound-toggle');
  if(tog) tog.classList.toggle('on', settings.sound);
  let lbl = document.getElementById('sound-label');
  if(lbl) lbl.textContent = settings.sound ? 'active' : 'desactive';
}

function toggleTips() {
  settings.tips = !settings.tips;
  let tog = document.getElementById('tips-toggle');
  if(tog) tog.classList.toggle('on', settings.tips);
  let lbl = document.getElementById('tips-label');
  if(lbl) lbl.textContent = settings.tips ? 'active' : 'desactive';
  let gtip = document.getElementById('game-tip');
  if(gtip) gtip.style.display = settings.tips ? 'block' : 'none';
}

function showTip() {
  let tips = TIPS[settings.lang] || TIPS.fr;
  let tip = tips[Math.floor(Math.random() * tips.length)];
  let tipEl = document.getElementById('tip-text');
  if (tipEl) tipEl.textContent = tip;
}

function setGameFont(font) {
  settings.gameFont = font;
  let preview = document.getElementById('font-preview');
  if (preview) preview.style.fontFamily = font;
  let wd = document.getElementById('word-display');
  if (wd) wd.style.fontFamily = font;

  // Mise à jour du bouton actif
  document.getElementById('font-jb-btn').classList.remove('active');
  document.getElementById('font-courier-btn').classList.remove('active');
  document.getElementById('font-mono-btn').classList.remove('active');
  if (font === 'JetBrains Mono') document.getElementById('font-jb-btn').classList.add('active');
  else if (font === 'Courier New') document.getElementById('font-courier-btn').classList.add('active');
  else if (font === 'monospace')   document.getElementById('font-mono-btn').classList.add('active');
}

// ===== GESTION DES AVATARS ET COMPTES =====
let tempAvatarData = null;

function handleAvatar(e) {
  let file = e.target.files[0];
  if (!file) return;
  let reader = new FileReader();
  reader.onload = function(ev) {
    tempAvatarData = ev.target.result;
    let prev = document.getElementById('avatar-preview');
    if(prev) prev.innerHTML = '<img src="' + ev.target.result + '" alt="avatar">';
  };
  reader.readAsDataURL(file);
}

function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(function(t, i) {
    t.classList.toggle('active', (tab === 'login' && i === 0) || (tab === 'register' && i === 1));
  });
  let fl = document.getElementById('form-login');
  let fr = document.getElementById('form-register');
  if(fl) fl.classList.toggle('active', tab === 'login');
  if(fr) fr.classList.toggle('active', tab === 'register');
}

function doLogin() {
  let username = document.getElementById('login-username').value.trim();
  let password = document.getElementById('login-password').value;
  if (!username || !password) { showToast('Remplissez tous les champs', 'error'); return; }

  // Lecture des informations stockées dans la session courante
  let stored = JSON.parse(sessionStorage.getItem('jt_user') || 'null');
  if (stored && stored.username === username && stored.password === password) {
    loginUser(stored);
  } else {
    showToast('Compte introuvable dans cette session ou mot de passe incorrect.', 'error');
  }
}

function doRegister() {
  let name     = document.getElementById('reg-name').value.trim();
  let username = document.getElementById('reg-username').value.trim();
  let password = document.getElementById('reg-password').value;
  if (!name || !username || !password) { showToast('Remplissez tous les champs', 'error'); return; }

  let user = { name: name, username: username, password: password, avatar: tempAvatarData };

  // Sauvegarde persistante UNIQUEMENT pour la session de l'onglet
  sessionStorage.setItem('jt_user', JSON.stringify(user));
  loginUser(user);
}

function loginUser(user) {
  // Flag d'état actif pour autoriser la connexion automatique au rechargement (F5)
  sessionStorage.setItem('jt_logged_in', 'true');

  let badge = document.getElementById('user-badge');
  if(badge) badge.classList.add('show');
  let nameEl = document.getElementById('ub-name-el');
  if(nameEl) nameEl.textContent = user.name || user.username;
  let initials = (user.name || user.username).slice(0, 2).toUpperCase();
  let avatarEl = document.getElementById('ub-avatar-el');
  if (avatarEl) {
    if (user.avatar) {
      avatarEl.innerHTML = '<img src="' + user.avatar + '" alt="avatar">';
    } else {
      avatarEl.innerHTML = '<span>' + initials + '</span>';
      let initEl = document.getElementById('ub-initials');
      if(initEl) initEl.textContent = initials;
    }
  }
  let navLog = document.getElementById('nav-login');
  if(navLog) navLog.style.display = 'none';
  showToast('Bienvenue, ' + (user.name || user.username) + ' !', 'success');
  navigate('home');
}

function logout() {
  // On supprime l'état connecté, mais on NE SUPPRIME PAS jt_user du sessionStorage.
  // Le compte reste disponible si l'utilisateur utilise l'interface de Login dans le même onglet.
  sessionStorage.removeItem('jt_logged_in');

  let badge = document.getElementById('user-badge');
  if(badge) badge.classList.remove('show');
  let navLog = document.getElementById('nav-login');
  if(navLog) navLog.style.display = 'flex';
  showToast('Deconnecte', 'success');
}

// Reconnexion automatique uniquement si le flag connecté est encore présent (perdu à la fermeture ou déconnexion)
let savedUser = JSON.parse(sessionStorage.getItem('jt_user') || 'null');
let isLoggedIn = sessionStorage.getItem('jt_logged_in') === 'true';

if (savedUser && isLoggedIn) {
  loginUser(savedUser);
}