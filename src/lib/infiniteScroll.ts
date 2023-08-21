import type { Action } from "svelte/action";

type Callback = (page: number) => void;

export const infiniteScroll: Action<HTMLElement, Callback> = (node, callback) => {
  let page = 0;
  const handleScroll = () => {
    if (node.scrollTop + node.clientHeight >= node.scrollHeight) {
      callback(++page);
    }
  };

  node.addEventListener("scroll", handleScroll);

  return {
    destroy() {
      node.removeEventListener("scroll", handleScroll);
    },
  };
};
