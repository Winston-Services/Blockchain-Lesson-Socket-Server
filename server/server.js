const { Server } = require("socket.io");
const { Blockchain, Block } = require("./blockchain.js");

const io = new Server(
  3000,
  {
    /* options */
  }
);

io.on("connection", client => {
  // say hello
  const sayHello = () => {};
  // add a trx
  const send = () => {};
  // get trx pool
  const trxPool = () => {};
  // get trx hash
  const trxHash = () => {};

  // get block pool
  const blockPool = () => {};
  // get block by block number
  const block = () => {};
  // get block by hash
  const blockHash = () => {};

  // mineABlock
  const mineBlock = () => {};

  // submit trx
  const submitTrx = () => {};
  // receive trx
  const receive = () => {};
  // vote
  const vote = () => {};
  // proposal
  const proposal = () => {};
});
