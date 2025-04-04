const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

app.use(bodyParser.json());
//app.use(express.static('public')); // Serve your HTML file from 'public' folder

// Database connection
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get(
        'SELECT password FROM users WHERE username = ?',
        [username],
        (err, row) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            if (!row) {
                return res.json({ success: false, message: 'User not found' });
            }

            // In real apps, compare hashed passwords!
            if (row.password === password) {
                res.json({ success: true, message: 'Login successful' });
            } else {
                res.json({ success: false, message: 'Invalid password' });
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});