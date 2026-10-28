Who's That Pokémon?

https://demsingh30.github.io/Pokemon_Game/

A guessing game inspired by the classic "Who's That Pokémon?" reveal. A random first-generation Pokémon shows up as a black pixelated silhouette. Type your guess, and if you're right, the silhouette turns into the full sprite and you earn a point.

I built it while learning JavaScript, as a small project I actually wanted to play.

<!-- Add a screenshot here: ![Who's That Pokémon? screenshot](screenshot.png) -->
# Who's That Pokémon?
 
A guessing game inspired by the classic "Who's That Pokémon?" reveal. A random first-generation Pokémon shows up as a black pixelated silhouette. Type your guess, and if you're right, the silhouette turns into the full sprite and you earn a point.
 
I built it while learning JavaScript, as a small project I actually wanted to play.
 
<!-- Live demo: [Play it here](https://demsingh30.github.io/whos-that-pokemon/) -->
 
<!-- Add a screenshot here: ![Who's That Pokémon? screenshot](screenshot.png) -->
 
## How to play
 
1. Look at the silhouette.
2. Type your guess and click **Guess**.
3. Right guess: the Pokémon is revealed and you get **1 point**.
4. Wrong guess: you see "Oops! It is ..." with the answer.
5. Click **Next** for a new Pokémon.
6. Your points are saved in your browser, so they're still there after a refresh. Click **Reset** to start over at 0.
## Features
 
- Picks a random Pokémon from the original 151 every round
- Pixelated black silhouette that becomes a smooth sprite in a circle when revealed (CSS only; JavaScript just adds and removes one class)
- Guess matching ignores capital letters and extra spaces
- Points saved with `localStorage`, so they survive a refresh
- Reset button for points
- New rounds without reloading the page: the Guess button turns into **Next** after you answer
- A "stamp" that stops the same Pokémon from earning a second point
## Built with
 
- HTML
- CSS (`filter`, `image-rendering`, `:not()`)
- JavaScript (`fetch`, DOM manipulation, `localStorage`)
- [PokéAPI](https://pokeapi.co/) for the Pokémon data and sprites
## Run it yourself
 
1. Download or clone this repo.
2. Open `index.html` in your browser. You'll need an internet connection for the Pokémon data.
## Bugs I tracked down
 
- **The black square.** I put a gradient background on the silhouette image, and the whole box turned black. The CSS `filter` applies to everything painted on the element, background included. I found it by unticking styles one at a time in DevTools, then moved the background to only apply when the hidden class is removed.
- **Free points.** Clicking Guess twice on the same Pokémon gave two points. I fixed it by saving the Pokémon's number after paying a point, and checking that number before paying again. The saved number has to live outside the click handler, or it resets on every click.
- **The old sprite fading out.** On a new round, the previous Pokémon slowly faded to black before the new one loaded. The CSS `transition` was on the always-on rule, so I moved it to the revealed state. Now hiding is instant and revealing still fades in.
## What I learned
 
- Fetching from an API and reading the response
- Why storage returns text, and why it needs to become a number before adding to it
- Where a variable lives (its scope) decides who can see it
- A check only looks; a stamp writes (`===` asks, `=` writes)
- How to debug: read the Console, shrink the problem, change one thing, test
## What's next
 
- Hint button
- Pick which generations to play
- Make it playable online
## Credits
 
Pokémon and Pokémon character names are trademarks of Nintendo, Game Freak, and Creatures Inc. This is a fan project made for learning, with no commercial purpose. Data and sprites come from [PokéAPI](https://pokeapi.co/).
 
Built by [demsingh30](https://github.com/demsingh30)
