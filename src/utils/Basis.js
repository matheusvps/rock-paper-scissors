const OptionsNames = {
   ROCK: "Rock",
   PAPER: "Paper",
   SCISSORS: "Scissors"
};

const ResultNames = {
   WIN: "Você ganhou !",
   LOSE: "Você perdeu!",
   DRAW: "Empate"
}

const Options = [
   {
      id: 1,
      name: OptionsNames.ROCK,
      win: OptionsNames.SCISSORS,
      loses: OptionsNames.PAPER,
   },
   {
      id: 2,
      name: OptionsNames.PAPER,
      win: OptionsNames.ROCK,
      loses: OptionsNames.SCISSORS,
   },
   {
      id: 3,
      name: OptionsNames.SCISSORS,
      win: OptionsNames.PAPER,
      loses: OptionsNames.ROCK,
   },
];

const returnOption = () => Options[Math.floor(Math.random() * Options.length)];

export {
   Options,
   OptionsNames,
   ResultNames,
   returnOption,
}