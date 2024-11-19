<script>
  import { playerDataStore } from "../stores";
  import gsap from "gsap";
  import BTN from "./button.svelte";
  import { afterUpdate } from "svelte";
  import { chunkArray } from "../utils/chunkArray";

  export let numberOfPlayers;
  export let numberOfTeams;

  let bigTeam = [];
  let showTeam = false;
  let loading = false;

  afterUpdate(() => {
    gsap.to(".ball", { rotation: 360, duration: 4, ease: "bounce.out" });
  });

  const getLineUps = () => {
    loading = true;
    loading = loading;

    setTimeout(() => {
      const players = $playerDataStore;
      let qualityA = players.filter((player) => player.quality === "A");
      let qualityB = players.filter((player) => player.quality === "B");
      let qualityC = players.filter((player) => player.quality === "C");

      qualityA = qualityA.sort((a, b) =>
        b.playerPosition.localeCompare(a.playerPosition)
      );
      qualityB = qualityB.sort((a, b) =>
        b.playerPosition.localeCompare(a.playerPosition)
      );
      qualityC = qualityC.sort((a, b) =>
        b.playerPosition.localeCompare(a.playerPosition)
      );

      const sortedByPosition = [...qualityA, ...qualityB, ...qualityC];

      bigTeam = chunkArray(sortedByPosition, numberOfTeams);

      loading = false;
      showTeam = true;
    }, 3000);
  };

  const copyTeam = () => {
    const content = document.getElementById("team").textContent;
    navigator.clipboard.writeText(content);
  };

  const refresh = () => {
    loading = true;
    loading = loading;
    setTimeout(() => {
      const players = $playerDataStore;
      let qualityA = players.filter((player) => player.quality === "A");
      let qualityB = players.filter((player) => player.quality === "B");
      let qualityC = players.filter((player) => player.quality === "C");

      qualityA = qualityA.sort((a, b) =>
        b.playerPosition.localeCompare(a.playerPosition)
      );
      qualityB = qualityB.sort((a, b) =>
        b.playerPosition.localeCompare(a.playerPosition)
      );
      qualityC = qualityC.sort((a, b) =>
        b.playerPosition.localeCompare(a.playerPosition)
      );

      const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      qualityA = shuffle(qualityA);
      qualityB = shuffle(qualityB);
      qualityC = shuffle(qualityC);
      const finalPlayers = qualityA.concat(qualityB, qualityC);
      bigTeam = chunkArray(finalPlayers, numberOfTeams);

      loading = false;
      showTeam = true;
    }, 3000);
  };
</script>

<div class="lineupContainer">
  {#if loading === false}
    <p>Here are the teams...</p>
    <div on:click|preventDefault={getLineUps}>
      <BTN data={"Tap In"} disabledState={showTeam} />
    </div>

    {#if showTeam}
      <div class="card-container" id="team">
        {#each bigTeam as team, index (index)}
          <div class="Card">
            <h2>Team {index + 1}</h2>
            {#each team as player (player.id)}
              <p>
                {player.playerName.toUpperCase()}
                <span class="player-level">
                  {player.quality === "A"
                    ? "Elite"
                    : player.quality === "B"
                      ? "Good"
                      : player.quality === "C"
                        ? "Average"
                        : "Low"}
                </span>
                <span class="player-position"
                  >{player.playerPosition === "F"
                    ? "Foward"
                    : player.playerPosition === "M"
                      ? "Midfielder"
                      : player.playerPosition === "D"
                        ? "Defender"
                        : "Low"}</span
                >
              </p>
            {/each}
          </div>
        {/each}
      </div>

      <button on:click|preventDefault={copyTeam} class="underline"
        >Copy Teams.</button
      >

      <button on:click|preventDefault={refresh} class="underline"
        >Refresh Teams.</button
      >
    {/if}
  {:else if loading === true}
    <div class="loading-container">
      <div class="img-container">
        <img class="ball" src="/ball.png" alt="loading ball" />
      </div>
      <p>Chilll, It’s only football</p>
    </div>
  {/if}
</div>

<style>
  .underline {
    text-decoration: underline;
    cursor: pointer;
    border: none;
    padding: 1rem;
    background-color: transparent;
  }
  .lineupContainer {
    margin: 3rem auto;
    padding: 1rem;
  }
  .card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 3rem auto;
  }
  .Card {
    width: 25%;
    height: 40rem;
    text-align: start;
    padding: 2rem;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 29px;
    margin: 1rem 0;
  }
  p {
    font-weight: 300;
    line-height: 29px;
    color: #1f1d1d;
    margin: 1rem 0;
    font-size: 1.8rem;
  }
  .player-position {
    color: #b3b3b3;
    margin-right: 1.5rem;
    font-size: 1.2rem;
  }
  .loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
  img {
    height: 6rem;
  }
  .player-level {
    color: red;
    font-size: 1.2rem;
  }
  @media (max-width: 49em) {
    .lineupContainer {
      margin: 1rem auto;
    }
    .card-container {
      width: 100%;
      margin: 1rem auto;
    }
    .Card {
      width: 50%;
      margin-bottom: 2rem;
      margin-top: 0;
      background-color: tomato;
      height: auto;
    }
    p {
      margin: 0 0;
    }
  }
</style>
