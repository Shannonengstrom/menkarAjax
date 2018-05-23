// requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
// globals
const port = 5000;
let guests = [];
// uses
app.use( express.static( 'server/public' ) );
// people forget this line and then their POSTs no worky
app.use( bodyParser.urlencoded( { extended: true } ) );
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); //end server up

// get route
app.get( '/guests', ( req, res )=>{
    console.log( 'in GET hit for /guests route' );
    res.send( guests );
}); //end guests GET

// post route
app.post( '/guests', (req, res)=>{
    console.log( 'in POST hit for /guests route:', req.body );
    guests.push( req.body.name );
    res.sendStatus( 200 );
}); // end guests POST