import { create } from "zustand";

const useGameStore = create((set) => ({
  sequence: [],
  userInput: [],
  step: 0,
  strictMode: false,
  playing: false,

  addStep: () =>
    set((state) => ({
      sequence: [...state.sequence, Math.floor(Math.random() * 4)],
      userInput: [],
      step: state.step + 1,
      playing: true,
    })),

  resetGame: () =>
    set(() => ({
      sequence: [],
      userInput: [],
      step: 0,
      playing: false,
    })),

  setStrictMode: (strict) => set(() => ({ strictMode: strict })),

  addUserInput: (input) =>
    set((state) => {
      const newUserInput = [...state.userInput, input];

      if (
        newUserInput.every((num, index) => num === state.sequence[index])
      ) {
        if (newUserInput.length === state.sequence.length) {
          setTimeout(() => {
            set((state) => ({
              userInput: [],
              step: state.step + 1,
              sequence: [...state.sequence, Math.floor(Math.random() * 4)],
            }));
          }, 1000);
        }
      } else {
        if (state.strictMode) {
          alert("Você errou! O jogo será reiniciado.");
          return { sequence: [], userInput: [], step: 0, playing: false };
        } else {
          alert("Você errou! Tente novamente.");
          return { userInput: [] };
        }
      }

      return { userInput: newUserInput };
    }),
}));

export default useGameStore;
