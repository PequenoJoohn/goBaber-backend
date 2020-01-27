import app from './app';

app.listen(3333, () => {
    try {
        console.log('[SUCCESS]Server is running success.');
    } catch (err) {
        console.log('[ERROR]Server not running.');
    }
});
