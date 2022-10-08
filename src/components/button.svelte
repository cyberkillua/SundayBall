<script>
  export let data;
  export let disabledState;
</script>

<div>
  <button class="circle-btn" disabled={disabledState}>{data}</button>
</div>

<style>
  div {
    margin: 2rem;
  }
  .circle-btn {
    height: 9rem;
    width: 9rem;
    border-radius: 50%;
    border: 1px solid #b3b3b3;
    background: #ffffff;
    padding: 1.5rem;
  }
</style>
