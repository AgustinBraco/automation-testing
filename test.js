import {Selector} from 'testcafe';

fixture `Empezando con TestCafe`
    .page `https://www.google.com`;

test('Búsqueda en Google', async t => {
    // Selector('ETIQUETA.CLASE') el punto significa class
    // Si hay varios con la misma clase va a tomar el primero
    const searchField = Selector('input.gLFyf');
    const ourHistory = Selector('h3.LC20lb.MBeuO.DKV0Md');

    // Lo tenemos por defecto.
    await t

    // Tipear texto en (WEBELEMENT, 'TEXTO')
    .typeText(searchField, 'avature')
        .pressKey('enter')
        // Presionar tecla ENTER
    .click(ourHistory)
});