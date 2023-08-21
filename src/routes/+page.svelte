<script lang="ts">
  import { infiniteScroll } from "$lib/infiniteScroll";

  type Item = {
    id: number;
    text: string;
  };

  // A fake dataSource, normally you'll fetch data from the server
  const dataSource: Item[] = [...Array(100).keys()].map((id) => ({ id, text: "Value " + id }));
  const pageSize = 20;

  function loadItems(source: Item[], page: number, pageSize: number): Item[] {
    const start = pageSize * page;

    return source.slice(start, start + pageSize);
  }

  // Initial load
  let items = loadItems(dataSource, 0, pageSize);

  function handleLoadMore(page: number) {
    items = [...items, ...loadItems(dataSource, page, pageSize)];
  }
</script>

<h1>Infinite Scroll Demo</h1>

<ul use:infiniteScroll={handleLoadMore}>
  {#each items as item (item.id)}
    <li>{item.text}</li>
  {/each}
</ul>
<p>Showing {items.length} items</p>

<style>
  ul {
    height: 200px;
    overflow-y: scroll;
    width: 200px;
  }
</style>
