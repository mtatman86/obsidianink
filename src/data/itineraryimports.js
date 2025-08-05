export const itineraryMap = {
  // Edinburgh
  'edinburgh-day-1': () => import('./edinburgh/itineraries/day-1.js'),
  'edinburgh-day-2': () => import('./edinburgh/itineraries/day-2.js'),
  'edinburgh-day-3': () => import('./edinburgh/itineraries/day-3.js'),
  'edinburgh-day-4': () => import('./edinburgh/itineraries/day-4.js'),

  // London
  'london-day-1': () => import('./london/itineraries/day-1.js'),
  'london-day-2': () => import('./london/itineraries/day-2.js'),
  'london-day-3': () => import('./london/itineraries/day-3.js'),
  'london-day-4': () => import('./london/itineraries/day-4.js'),

  // Nottingham
  'nottingham-day-1': () => import('./nottingham/itineraries/day-1.js'),
  'nottingham-day-2': () => import('./nottingham/itineraries/day-2.js'),
  'nottingham-day-3': () => import('./nottingham/itineraries/day-3.js'),
  'nottingham-day-4': () => import('./nottingham/itineraries/day-4.js'),

  // Paris
  'paris-day-1': () => import('./paris/itineraries/day-1.js'),
  'paris-day-2': () => import('./paris/itineraries/day-2.js'),
  'paris-day-3': () => import('./paris/itineraries/day-3.js'),
};
