// https://eth-ropsten.alchemyapi.io/v2/RukLR5VYmXJPpI1M0xBcCnRYY1G6lAtc

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/RukLR5VYmXJPpI1M0xBcCnRYY1G6lAtc',
      accounts: ['b384222b559769b2a07be6eb02c3fc0ba7a33d6fcfb2a00b0654e037a0f19227'],
    },
  },
};