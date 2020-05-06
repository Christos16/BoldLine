const price = [
  {
    _id: 0,
    name: 'Any',
    array: []
  },
  {
    _id: 1,
    name: '$0 to $40',
    array: [0, 40]
  },
  {
    _id: 2,
    name: '$41 to $80',
    array: [41, 80]
  },
  {
    _id: 3,
    name: '$81 to $100',
    array: [81, 100]
  },
  {
    _id: 4,
    name: '$101 to 150',
    array: [101, 150]
  },
  {
    _id: 5,
    name: 'More than $150',
    array: [150, 15000000]
  }
];

const menCategory = [
  {
    _id: 1,
    name: 'Knitwear'
  },
  {
    _id: 2,
    name: 'Jeans'
  },
  {
    _id: 3,
    name: 'Jacket'
  }
];

const size = [
  {
    _id: 1,
    name: 'XS'
  },
  {
    _id: 2,
    name: 'S'
  },
  { _id: 3, name: 'M' },
  { _id: 4, name: 'L' },
  { _id: 5, name: 'XL' }
];

const womenCategory = [
  {
    _id: 1,
    name: 'Basics'
  },
  {
    _id: 2,
    name: 'Blazer'
  }
];

export { price, menCategory, womenCategory, size };
