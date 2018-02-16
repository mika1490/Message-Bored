const express = require(`express`);
const bodyParser = require(`body-parser`);
const path = require(`path`);
const indexRoutes = require(`./routes/index`);
const messagesRoutes = require(`./routes/messages`)
const app = express();

const PORT = process.env.PORT || 8080;


const routes = require('./routes');
const User = require(`./db/models/User`);
const Message = require(`./db/models/Message`);
const Topic = require(`./db/models/Topic`);
app.use(bodyParser.json());

app.use(express.static(`public`));

app.get(`/`, (req, res) => {
  res.send(`Smoke Test`);
})

/* ROUTES */
app.use(`/index`, indexRoutes);
app.use(`/messages`, messagesRoutes)
// app.use('/api', routes);

/* RENDER */
// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root : path.join(__dirname, '/public') });
// });

app.listen(PORT, () => {
  console.log(`Server Listening On Port: ${PORT}`);
 })