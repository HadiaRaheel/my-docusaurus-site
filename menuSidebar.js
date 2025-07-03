/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const menuSidebar = {
  menuSidebar: [
    'menu', 
    {
      type: 'category',
      label: '☕ Beverages',
      items: [
        'coffee',
        'tea',
        'juice',
      ],
    },
    {
      type: 'category',
      label: '🍽️ Desserts',
      items: [
        'Ice-Cream',
        'Cakes',
        'Croissant',
      ],
    },
  ],
};

module.exports = menuSidebar;
