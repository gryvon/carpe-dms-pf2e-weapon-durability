//CONFIG.debug.hooks = true;

Hooks.once('init', () => {
  loadTemplates([
    'modules/carpe-dms-pf2e-weapon-durability/templates/weapon-durability-details.hbs',
  ]);
  console.debug("weapon-durability | Initialized.")
});


Hooks.on("renderWeaponSheetPF2e", async (weapon, html) => {
  console.debug("weapon-durability | Weapon Render Hook Received.");
  // Path to the custom template.
  const tpl = 'modules/carpe-dms-pf2e-weapon-durability/templates/weapon-durability-details.hbs';

  // Render the data into the template's handlebars.
  const object = weapon.object;
  const myHtml = await renderTemplate(tpl, { weapon });

  // Find the materials-runes fieldset on the item template.
  const target = $(html).find('fieldset.material-runes');

  // Prepend custom template html into the item template.
  target.before(myHtml);

  console.log(target);

  console.log(html);

})