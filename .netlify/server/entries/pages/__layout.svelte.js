import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../_app/immutable/chunks/index-cb891586.js";
import "@walletconnect/web3-provider";
import { p as provider, s as signer } from "../../_app/immutable/chunks/ethers-95b9ad39.js";
const app = "";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: '@keyframes svelte-nw59cy-animatedgradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}header.svelte-nw59cy{position:relative}header.svelte-nw59cy:after{content:"";position:absolute;bottom:0;left:0;right:0;height:5px;background:linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);border-radius:0;z-index:-1;animation:svelte-nw59cy-animatedgradient 3s ease alternate infinite;background-size:300% 300%}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_provider;
  let $signer, $$unsubscribe_signer;
  $$unsubscribe_provider = subscribe(provider, (value) => value);
  $$unsubscribe_signer = subscribe(signer, (value) => $signer = value);
  $$result.css.add(css);
  $$unsubscribe_provider();
  $$unsubscribe_signer();
  return `<header class="${"container flex flex-row justify-between mx-auto py-8 relative svelte-nw59cy"}"><h1>just vote it</h1>

	${$signer ? `<button class="${"bg-pink rounded p-4 hover:bg-purple"}">Disconnect</button>` : `<button class="${"bg-pink rounded p-4 hover:bg-purple"}">Connect</button>`}
</header>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"container flex flex-col justify-around mx-auto pt-16"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  _layout as default
};
