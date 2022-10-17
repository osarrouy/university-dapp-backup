import { c as create_ssr_component, a as subscribe, d as add_attribute } from "../../_app/immutable/chunks/index-cb891586.js";
import { c as contract } from "../../_app/immutable/chunks/ethers-95b9ad39.js";
const create_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-1ahp89v{width:300px}",
  map: null
};
const prerender = true;
const Create = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_contract;
  $$unsubscribe_contract = subscribe(contract, (value) => value);
  let proposal = "";
  $$result.css.add(css);
  $$unsubscribe_contract();
  return `${$$result.head += `${$$result.title = `<title>Create a proposal</title>`, ""}<meta name="${"description"}" content="${"Let's vote !"}" data-svelte="svelte-1p4khna">`, ""}

<form class="${"flex justify-between"}"><input type="${"text"}" class="${"grow bg-grey-light py-4 border-b-2 svelte-1ahp89v"}" placeholder="${"write your proposal"}"${add_attribute("value", proposal, 0)}>
	<button type="${"submit"}" class="${"bg-pink rounded p-4 ml-4 hover:bg-purple"}">submit</button>
</form>`;
});
export {
  Create as default,
  prerender
};
