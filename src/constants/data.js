import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹5690',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹5990',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹4490',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹3190',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹2690',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹2990',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹1990',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹1990',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹3990',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹2990',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Offering good quality, good value cooking.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Growing quickly in popularity.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'The customer is never wrong.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Top chefs in the town.',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { wines, cocktails, awards };
