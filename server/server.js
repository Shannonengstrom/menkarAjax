// requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
// globals
const port = 5000;
let guests = [ 'Ally', 'Dev', 'Mary' ];
// uses
app.use( express.static( 'server/public' ) );
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); //end server up

// get route
app.get( '/guests', ( req, res )=>{
    console.log( 'in GET hit for /guests route' );
    res.send( guests );
}); //end guests GET