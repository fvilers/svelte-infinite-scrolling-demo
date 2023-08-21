<script lang="ts">
  type Item = {
    id: number;
    text: string;
  };

  const items: Item[] = [...Array(1000).keys()].map((id) => ({ id, text: "Value " + id }));
</script>

<h1>Infinite Scroll Demo</h1>

<ul>
  {#each items as item (item.id)}
    <li>{item.text}</li>
  {/each}
</ul>
