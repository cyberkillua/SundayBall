import { writable } from "svelte/store";

export const playerDataStore = writable([
  // {
  //   id: 1,
  //   playerName: "Abdy",
  //   playerPosition: "F",
  //   quality: "A",
  // },
  // {
  //   id: 2,
  //   playerName: "moshood",
  //   playerPosition: "D",
  //   quality: "A",
  // },
  // {
  //   id: 3,
  //   playerName: "sly",
  //   playerPosition: "F",
  //   quality: "A",
  // },
  // {
  //   id: 4,
  //   playerName: "kazo",
  //   playerPosition: "M",
  //   quality: "A",
  // },
  // {
  //   id: 5,
  //   playerName: "pogba",
  //   playerPosition: "M",
  //   quality: "A",
  // },
  // {
  //   id: 6,
  //   playerName: "Bahsar",
  //   playerPosition: "F",
  //   quality: "A",
  // },
  // {
  //   id: 7,
  //   playerName: "Ola",
  //   playerPosition: "F",
  //   quality: "A",
  // },
  // {
  //   id: 8,
  //   playerName: "Rashford",
  //   playerPosition: "F",
  //   quality: "A",
  // },
  // {
  //   id: 9,
  //   playerName: "xhaka",
  //   playerPosition: "M",
  //   quality: "B",
  // },
  // {
  //   id: 10,
  //   playerName: "neves",
  //   playerPosition: "M",
  //   quality: "B",
  // },
  // {
  //   id: 11,
  //   playerName: "ndidi",
  //   playerPosition: "M",
  //   quality: "B",
  // },
  // {
  //   id: 12,
  //   playerName: "tola",
  //   playerPosition: "M",
  //   quality: "B",
  // },
  // {
  //   id: 13,
  //   playerName: "scholes",
  //   playerPosition: "M",
  //   quality: "B",
  // },
  // {
  //   id: 14,
  //   playerName: "sule",
  //   playerPosition: "M",
  //   quality: "B",
  // },
  // {
  //   id: 15,
  //   playerName: "kola",
  //   playerPosition: "D",
  //   quality: "B",
  // },
  // {
  //   id: 16,
  //   playerName: "jazzman12345677",
  //   playerPosition: "D",
  //   quality: "B",
  // },
  // {
  //   id: 17,
  //   playerName: "maguire",
  //   playerPosition: "D",
  //   quality: "B",
  // },
  // {
  //   id: 18,
  //   playerName: "dias",
  //   playerPosition: "D",
  //   quality: "C",
  // },
  // {
  //   id: 19,
  //   playerName: "matrix",
  //   playerPosition: "D",
  //   quality: "C",
  // },
  // {
  //   id: 20,
  //   playerName: "ramos",
  //   playerPosition: "D",
  //   quality: "C",
  // },
  // {
  //   id: 21,
  //   playerName: "silva",
  //   playerPosition: "D",
  //   quality: "C",
  // },
  // {
  //   id: 22,
  //   playerName: "kano",
  //   playerPosition: "D",
  //   quality: "C",
  // },
  // {
  //   id: 23,
  //   playerName: "dave",
  //   playerPosition: "F",
  //   quality: "C",
  // },
  // {
  //   id: 24,
  //   playerName: "martinez",
  //   playerPosition: "D",
  //   quality: "C",
  // },
]);

export const finalPlayerList = writable([]);

export const teamDataStore = writable({
  numberOfPlayers: 0,
  numberOfTeams: 0,
});
