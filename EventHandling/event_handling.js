import { default as fsWithCallbacks } from 'fs';
const fs = fsWithCallbacks.promises;

process.on('exit', (code) => {
    console.log(`Exit event called with code: ${code}. Program exiting.`);
});

process.on('unhandledRejection', (reason, promise) =>
    console.error(`Unhandled Rejection at: ${promise}. Reason: ${reason}.`)
);

const readFileAsync = async (filename) => {
    try {
        return await fs.readFile(filename, 'utf8');
    } catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
};

readFileAsync('incorrFileName.txt')
    .then((data) => console.log(`File content: ${data}`))
    .catch((error) => {
        console.error(`Caught error: ${error.message}. Throwing a custom error.`);
        throw new Error('Error thrown from catch handler');
    });

console.log('Script execution complete.');
