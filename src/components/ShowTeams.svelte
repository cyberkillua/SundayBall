<script>
  import { playerDataStore } from "../stores";
  import gsap from "gsap";
  import BTN from "./button.svelte";
  import { afterUpdate } from "svelte";

  let TeamA = [];
  let TeamB = [];
  let TeamC = [];
  let TeamD = [];
  let showTeam = false;
  let loading = false;

  afterUpdate(() => {
    gsap.to(".ball", { rotation: 360, duration: 4, ease: "bounce.out" });
  });

  const getLineUps = () => {
    loading = true;
    loading = loading;

    setTimeout(() => {
      const sortedByPosition = $playerDataStore.sort((a, b) =>
        b.playerPosition.localeCompare(a.playerPosition)
      );

      let counter = 0;
      for (let i = 0; i < sortedByPosition.length; i++) {
        const currentPlayer = sortedByPosition[i];
        if (shouldPushToTeamA(TeamA.length, counter)) {
          TeamA.push(currentPlayer);
          counter++;
        } else if (shouldPushToTeamB(TeamB.length, counter)) {
          TeamB.push(currentPlayer);
          counter++;
        } else if (shouldPushToTeamC(TeamC.length, counter)) {
          TeamC.push(currentPlayer);
          counter++;
        } else {
          TeamD.push(currentPlayer);
          //reset counter to start sharing players from Team A again
          counter = 0;
        }
      }
      loading = false;
      showTeam = true;
    }, 3000);
  };

  const copyTeam = () => {
    const content = document.getElementById("team").textContent;
    navigator.clipboard.writeText(content);
  };

  const refresh = () => {
    TeamA = [];
    TeamB = [];
    TeamC = [];
    TeamD = [];
    loading = true;
    loading = loading;

    setTimeout(() => {
      let sortedByPosition = $playerDataStore.sort((a, b) =>
        b.playerPosition.localeCompare(a.playerPosition)
      );

      let forwards = sortedByPosition.filter(
        (player) => player.playerPosition === "F"
      );

      let Mid = sortedByPosition.filter(
        (player) => player.playerPosition === "M"
      );

      let def = sortedByPosition.filter(
        (player) => player.playerPosition === "D"
      );

      const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      forwards = shuffle(forwards);
      Mid = shuffle(Mid);
      def = shuffle(def);

      const finalPlayers = forwards.concat(Mid, def);

      // console.log(shuffle(sortedByPosition));
      let counter = 0;
      for (let i = 0; i < finalPlayers.length; i++) {
        const currentPlayer = finalPlayers[i];
        if (shouldPushToTeamA(TeamA.length, counter)) {
          TeamA.push(currentPlayer);
          counter++;
        } else if (shouldPushToTeamB(TeamB.length, counter)) {
          TeamB.push(currentPlayer);
          counter++;
        } else if (shouldPushToTeamC(TeamC.length, counter)) {
          TeamC.push(currentPlayer);
          counter++;
        } else {
          TeamD.push(currentPlayer);
          //reset counter to start sharing players from Team A again
          counter = 0;
        }
      }
      loading = false;
      showTeam = true;
    }, 3000);
  };

  const shouldPushToTeamA = (length, counter) => {
    return length < 6 && counter === 0;
  };
  const shouldPushToTeamB = (length, counter) => {
    return length < 6 && counter === 1;
  };
  const shouldPushToTeamC = (length, counter) => {
    return length < 6 && counter === 2;
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
        <div class="Card">
          <h2>Team A</h2>
          {#each TeamA as player (player.id)}
            <p>
              <span class="player-position">{player.playerPosition}</span>
              {player.playerName}
            </p>
          {/each}
        </div>
        <div class="Card">
          <h2>Team B</h2>
          {#each TeamB as player (player.id)}
            <p>
              <span class="player-position">{player.playerPosition}</span>
              {player.playerName}
            </p>{/each}
        </div>
        <div class="Card">
          <h2>Team C</h2>
          {#each TeamC as player (player.id)}
            <p>
              <span class="player-position">{player.playerPosition}</span>
              {player.playerName}
            </p>{/each}
        </div>
        <div class="Card">
          <h2>Team D</h2>
          {#each TeamD as player (player.id)}
            <p>
              <span class="player-position">{player.playerPosition}</span>
              {player.playerName}
            </p>{/each}
        </div>
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
  }
  .player-position {
    color: #b3b3b3;
    margin-right: 1.5rem;
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
  @media (max-width: 49em) {
    .lineupContainer {
      margin: 1rem auto;
    }
    .Card {
      width: 50%;
      height: 45rem;
    }
  }
</style>
