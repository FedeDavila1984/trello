console.log('HELOOOOOOUUUUU');
window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {
        // return an array of card budges for the given card
        return t.card('all')
            .then(function(card) {
                console.log(card);

                return [{
                    text: '<a href="http://www.multiled.com.ar/' + card.idShort + '" target="_blank">' + card.idShort + ' vence: ' + card.due + '</a>'
                }];
            });
    }
});