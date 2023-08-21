<script lang="ts">
  type Item = {
    id: number;
    text: string;
  };

  // A fake dataSource, normally you'll fetch data from the server
  const dataSource: Item[] = [...Array(100).keys()].map((id) => ({ id, text: "Value " + id }));
  const pageSize = 20;
  let page = 0;

  function loadItems(source: Item[], page: number, pageSize: number): Item[] {
    const start = pageSize * page;

    return source.slice(start, start + pageSize);
  }

  // Initial load
  let items = loadItems(dataSource, page, pageSize);

  function handleScroll(e: Event) {
    const list = e.target;

    if (
      list instanceof HTMLUListElement &&
      list.scrollTop + list.clientHeight >= list.scrollHeight
    ) {
      items = [...items, ...loadItems(dataSource, ++page, pageSize)];
    }
  }
</script>

<h1>Infinite Scroll Demo</h1>

<ul on:scroll={handleScroll}>
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
