import fs from 'fs';

const poemContent = `
    Roses are red,
    Violets are blue,
    Sugar is sweet,
    And so are you.

    Deep into that darkness peering,
    Long I stood there, wondering, fearing,
    Doubting, dreaming dreams no mortals
    Ever dared to dream before;
    But the silence was unbroken,
    And the stillness gave no token,
    And the only word there spoken
    Was the whispered word, "Lenore!"
    This I whispered, and an echo
    Murmured back the word, "Lenore!"
    Merely this, and nothing more.
`;

fs.writeFileSync('poem.txt', poemContent, 'utf8');

fs.readFile('poem.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Contents of poem.txt:');
        console.log(data);
    }
});
