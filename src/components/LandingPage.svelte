<script>
  import { teamDataStore } from "../stores";
  import BTN from "./button.svelte";
  import TeamGenerator from "./TeamGenerator.svelte";

  let numberOfPlayers;
  let numberOfTeams;
  let showTeamGen = false;

  const handleSubmit = () => {
    showTeamGen = true;
  };
</script>

{#if showTeamGen}
  <TeamGenerator {numberOfPlayers} {numberOfTeams} />
{:else}
  <div class="teamGen">
    <p>Welcome to Sunday Ball</p>
    <div class="inputForm">
      <form on:submit|preventDefault={handleSubmit}>
        <input
          type="number"
          bind:value={numberOfPlayers}
          placeholder="Number of Players Per Team"
          required
        />
        <input
          type="number"
          bind:value={numberOfTeams}
          placeholder="Number of Teams"
          required
        />
        <div class="btn-container">
          <BTN data={"Next"} disabledState={false} />
        </div>
      </form>
    </div>
  </div>
{/if}

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
