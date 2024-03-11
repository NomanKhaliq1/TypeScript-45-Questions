make_shirt('Medium', 'Code Like a Pro');
make_shirt('Large', 'Hello, World!');

function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it says: "${message}".`);
}