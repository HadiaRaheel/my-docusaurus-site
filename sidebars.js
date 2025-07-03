const menuSidebar = require('./menuSidebar');
const infoSidebar = require('./infoSidebar');
const eventsSidebar = require('./eventsSidebar');
/* @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  menuSidebar: menuSidebar.menuSidebar,
  infoSidebar: infoSidebar.infoSidebar,
  eventsSidebar: eventsSidebar.eventsSidebar,
};
module.exports = sidebars;