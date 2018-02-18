const express = require(`express`);
const bodyParser = require(`body-parser`);
const path = require(`path`);
const messagesRoutes = require(`./routes/messages`)
const topicsRoutes = require(`./routes/topics`)
const usersRoutes = require(`./routes/users`)
const app = express();

const PORT = process.env.PORT || 8080;


const User = require(`./db/models/User`);
const Message = require(`./db/models/Message`);
const Topic = require(`./db/models/Topic`);
app.use(bodyParser.json());

app.use(express.static(`public`));

app.get(`/`, (req, res) => {
  res.send(`Smoke Test`);
})

/* ROUTES */

app.use(`/api/messages`, messagesRoutes)
app.use(`/api/users`, usersRoutes)
app.use(`/api/topics`, topicsRoutes)
// app.use('/api', routes);

/* Angular */
app.get(`/*`, (req, res) => {
  return res.sendFile(__dirname + `/public/index.html`);
});


app.listen(PORT, () => {
  console.log(`Server Listening On Port: ${PORT}`);
 })