const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

app.get('/json-config', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form-config.json'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log('server started')
})