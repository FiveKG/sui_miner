// pm2.cjs

module.exports = {
  apps: [
    {
      name: 'miner1',
      script: 'node mine.js --fomo --chain=mainnet --phrase="secretphrase1"',
      restart_delay: 5000,
    },
    {
      name: 'miner2',
      script: 'node mine.js --fomo --chain=mainnet --phrase="secretphrase2"',
      restart_delay: 5000,
    },
  ],
};
