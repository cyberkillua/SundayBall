<script>
  import { v4 as uuidv4 } from "uuid";
  import { playerDataStore, teamDataStore } from "../stores";
  import ShowTeams from "./ShowTeams.svelte";
  import BTN from "./button.svelte";

  export let numberOfPlayers;
  export let numberOfTeams;

  let playerName = "";
  let playerPosition = "";
  let showCount = false;
  let quality = "";
  const handleSubmit = () => {
    const playerData = {
      id: uuidv4(),
      playerName,
      playerPosition,
      quality,
    };
    playerDataStore.update((currentPlayer) => {
      return [playerData, ...currentPlayer];
    });
    playerName = "";
    playerPosition = "";
    showCount = true;
    quality = "";

    setTimeout(() => {
      showCount = false;
      showCount = showCount;
    }, 1000);
  };
  $: playerCount = $playerDataStore.length;

  const totalPlayers = numberOfPlayers * numberOfTeams;
</script>

<div class="teamGen">
  {#if playerCount < totalPlayers}
    <p>Players will be sorted into teams by position and level</p>
    <div class="inputForm">
      <form on:submit|preventDefault={handleSubmit}>
        <input
          type="text"
          bind:value={playerName}
          placeholder="Enter Player Name"
          required
        />
        <select name="position" id="" bind:value={playerPosition} required>
          <option value="">--Choose player position--</option>
          <option value="F">Foward</option>
          <option value="M">Midfielder</option>
          <option value="D">Defender</option>
        </select>

        <select name="level" id="" bind:value={quality} required>
          <option value="">--Choose player level--</option>
          <option value="A">Elite</option>
          <option value="B">Good</option>
          <option value="C">Average</option>
        </select>
        {#if showCount === false}
          <div class="btn-container">
            <BTN data={"Add"} disabledState={false} />
          </div>
        {:else}
          <div class="btn-container">
            <BTN data={`${playerCount}/${totalPlayers}`} disabledState={true} />
          </div>
        {/if}
      </form>
    </div>
  {:else}
    <ShowTeams {numberOfPlayers} {numberOfTeams} />
  {/if}
</div>

<style>
  .teamGen {
    margin-top: 1rem;
    text-align: center;
  }
  p {
    font-size: 2.5rem;
    padding: 1rem;
  }
  .inputForm {
    margin: 2rem auto;
    width: 40%;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
  }
  input {
    padding: 2rem;
    margin: 1rem 0;
  }
  select {
    appearance: none;
    padding: 2rem;
    margin: 1rem 0;
  }
  .btn-container {
    margin-top: 4rem;
  }

  @media (max-width: 49em) {
    .teamGen {
      margin-top: 10rem;
    }
    .inputForm {
      width: 80%;
    }
  }
</style>
