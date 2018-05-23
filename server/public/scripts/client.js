$( document ).ready( readyNow );

function addGuest(){
    console.log( 'in addGuest' );
    let objectToSend = {
        name: $( '#nameIn' ).val()
    }; //end objectToSend
    console.log( 'sending:', objectToSend );
    $.ajax({
        method: 'POST',
        url: '/guests',
        data: objectToSend 
    }).then( function( response ){
        console.log( 'back from server with:', response );
        getGuests();
    }); // end ajax
} //end addGuest

function displayGuests( guests ){
    let el = $( '#guestsOut' );
    el.empty();
    for( guest of guests ){
        el.append( '<li>' + guest + '</li>');
    } // end for
} // end displayGuests

function getGuests(){
    console.log( 'in getGuests' );
    // make AJAX GET call to server to retrieve guests
    $.ajax({
        method: 'GET',
        url: '/guests'
    }).then( function( response ){
        console.log( 'back from server with:', response );
        displayGuests( response );
    }); // end ajax
} // end guetGuests

function readyNow(){
    getGuests();
    $( '#addNameButton').on( 'click', addGuest );
    $( '#refreshButton' ).on( 'click', getGuests );
} //end readyNow