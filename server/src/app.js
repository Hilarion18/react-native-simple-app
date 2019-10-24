require('dotenv').config()
import mongoose from 'mongoose'
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
const app = express();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongo rnmobx connected')
});

var mongodUri = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}${process.env.MLAB_URL}`
mongoose.connect(mongodUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
export default app;
