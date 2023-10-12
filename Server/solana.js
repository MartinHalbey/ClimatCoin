const { Connection, PublicKey } = require('@solana/web3.js');

const url = "https://api.mainnet-beta.solana.com";
const connection = new Connection(url, 'confirmed');

async function getBalance(publicKey) {
    const pk = new PublicKey(publicKey);
    const balance = await connection.getBalance(pk);
    return balance;
}

// Additional Solana functionalities can be added here

module.exports = {
    getBalance
};
