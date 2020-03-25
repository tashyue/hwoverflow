const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator');
dotenv.config();


//db
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, 
     useUnifiedTopology: true
    })
.then(() => {
    console.log('DB Connected')
})

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
})

//routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use('/', postRoutes);
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({
          error: "Unauthorized"
      })
    }
  });


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`);
    
    
    
});


//super
class Holiday {
    constructor(dest, days) {
        this.dest = dest
        this.days = days
    }

    info() {
        console.log(`${this.dest} will take ${this.days} days.`);
    }
}

//sub 
class Expedition extends Holiday {
    constructor(dest, days, gear) {
        super(dest, days)
        this.gear = gear;
    }

    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
        
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"])
tripWithGear.info()