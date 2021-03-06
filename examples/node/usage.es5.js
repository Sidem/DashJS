const DashJS = require("../../dist/dash.cjs.min");
const schema = require("../schema.json");

const network = "testnet";
const sdkOpts = {
  network,
  mnemonic: "arena light cheap control apple buffalo indicate rare motor valid accident isolate",
  schemas: {dashpay: schema}
};
const sdk = new DashJS.SDK(sdkOpts);
const acc = sdk.wallet.getAccount();
readDocument();

async function sendPayment() {
  const tx = await acc.createTransaction({recipient: {address: 'yLptqWxjgTxtwKJuLHoGY222NnoeqYuN8h', amount: 0.12}})
  console.log(tx)
}

async function readDocument() {
  const queryOpts = {
  };
  const profile = await sdk.platform.documents.fetch('profile', queryOpts);
  console.log(profile);
}
