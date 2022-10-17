import { c as create_ssr_component, a as subscribe, f as each, e as escape } from "../../_app/immutable/chunks/index-cb891586.js";
import { c as contract, s as signer } from "../../_app/immutable/chunks/ethers-95b9ad39.js";
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $contract, $$unsubscribe_contract;
  let $signer, $$unsubscribe_signer;
  $$unsubscribe_contract = subscribe(contract, (value) => $contract = value);
  $$unsubscribe_signer = subscribe(signer, (value) => $signer = value);
  let nbOfProposals = 0;
  let proposals = [];
  const fetch = async () => {
    console.log("fetching");
    if ($contract) {
      let _proposals = [];
      nbOfProposals = (await $contract.nbOfProposals()).toNumber();
      for (let i = 0; i < nbOfProposals; i++) {
        const results = await $contract.getVotes(i);
        _proposals[i] = {
          index: i,
          msg: await $contract.getProposal(i),
          yes: results.yes.toNumber(),
          no: results.no.toNumber(),
          isVoted: await $contract.isVotedBy(i, await $signer.getAddress())
        };
      }
      proposals = _proposals;
      console.log(proposals);
    }
    setTimeout(fetch, 5e3);
  };
  contract.subscribe((_contract) => {
    if (_contract) {
      fetch();
    }
  });
  $$unsubscribe_contract();
  $$unsubscribe_signer();
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Let's vote !"}" data-svelte="svelte-12g9356">`, ""}

${$signer && $contract ? `<table><tr class="${"text-left"}"><th>Proposal</th>
			<th>Yes</th>
			<th>No</th></tr>
		${each(proposals, (proposal) => {
    return `<tr><td>${escape(proposal.msg)}</td>
				<td>${escape(proposal.yes)}</td>
				<td>${escape(proposal.no)}</td>
				${!proposal.isVoted ? `<td><button class="${"bg-green rounded p-2 hover:bg-purple"}">Yes</button><button class="${"bg-red rounded p-2 ml-2 hover:bg-purple"}">No</button></td>` : ``}
			</tr>`;
  })}</table>` : `<p>Please connect your wallet so we can do stuff ...</p>`}`;
});
export {
  Routes as default,
  prerender
};
