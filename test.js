import {Selector} from 'testcafe';

fixture `Empezando con TestCafe`
.page `https://www.google.com`;

const googleSearch = Selector("input.gLFyf");
const avatureLink = Selector("h3.LC20lb.MBeuO.DKV0Md");
const careersLink = Selector("#menu-item-41598");
const avatureSearch = Selector("input.TextField.WizardFieldInputContainer.WizardFieldInput");

test('Búsqueda en Google', async t => {
    await t
    .typeText(googleSearch, 'avature')
    .pressKey('enter')
    .click(avatureLink)
    .click(careersLink)
    .typeText(avatureSearch, 'QA')
    .pressKey('enter')
});