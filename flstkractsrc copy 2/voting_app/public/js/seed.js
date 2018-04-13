window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Cardano',
      description: 'The first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/adalogo.jpg',
      productImageUrl: 'images/products/adalogox.jpg',
    },
    {
      id: 2,
      title: 'Bitcoin',
      description: 'The Orignal the progenitor of all blockchains.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/btclogo.jpeg',
      productImageUrl: 'images/products/btclogox.jpeg',
    },
    {
      id: 3,
      title: 'Ethereum Classic',
      description: 'the classic version preserving untampered history; free from external interference and subjective tampering of transactions.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/etclogo.jpeg',
      productImageUrl: 'images/products/etclogox.jpeg',
    },
    {
      id: 4,
      title: 'Ethereum',
      description: 'A decentralized platform that runs smart contracts.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/ethlogo.png',
      productImageUrl: 'images/products/ethlogox.png',
    },
  ];

  return { products: products };
}());
