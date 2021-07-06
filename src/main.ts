import Express from 'express'
import expressListEndpoints from 'express-list-endpoints';
import path from 'path'
import router from './routes'
import layouts from 'express-ejs-layouts'
import mongoose from 'mongoose'
//import bodyParser from 'body-parser'
import methodOverride from 'method-override'

mongoose.connect('mongodb://nota:nota@localhost:27017/test_db?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.Promise = global.Promise

const app = Express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(layouts)
app.use(Express.static(__dirname + '/public'))
app.use('/', router)
var bodyParser= require('body-parser');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}))
app.listen(port, () => {
  console.log('server start');
  console.log(expressListEndpoints(app));
})