import {Selector} from 'testcafe';

fixture `Starting with TestCafe`
    .page `https://www.google.com`;

const googleSearch = Selector("input.gLFyf");
const avatureLink = Selector("h3.LC20lb.MBeuO.DKV0Md");
const contactLink = Selector("#menu-item-27727");
const submitButton = Selector("#enContactUs");
const validationText = Selector("div.ffErrorVal.fw400.invalid-feedback");

test('Avature test', async t => {
    await t
    .typeText(googleSearch, 'avature')
    .pressKey('enter')
    .click(avatureLink)
    .click(contactLink)
    .click(submitButton)
    .expect(validationText.innerText).contains('Please enter your first name')
});