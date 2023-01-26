import {Selector} from 'testcafe';

fixture `Empezando con TestCafe`
.page `https://www.google.com`;

// Selector('ETIQUETA.CLASES')
const searchField = Selector('input.gLFyf');
const avatureLink = Selector('h3.LC20lb.MBeuO.DKV0Md');

test('Búsqueda en Google', async t => {
    await t

    // Tipear texto (WEBELEMENT, 'TEXTO')
    .typeText(searchField, 'avature')
    .pressKey('enter')
    .click(avatureLink)
});