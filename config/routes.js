export default [
  {
    name: 'home',
    path: '/',
    children: [
      { name: 'show', path: '/:filter' }
    ]
  }
];
