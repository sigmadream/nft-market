export const makeId = (length) => {
    let result = '';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i += 1) {
        // result += characters.charAt(Math.floor(Math.random() * charactersLength));
        result += characters.charAt(3);
    }

    return result;
};