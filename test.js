import {Selector} from 'testcafe';

fixture `Empezando con TestCafe`
    .page `https://www.google.com`;

test('Búsqueda en Google', async t => {
    const searchField = Selector('input.gLFyf')

    await t
    
    .typeText(searchField, 'test')
        .pressKey('enter')
});