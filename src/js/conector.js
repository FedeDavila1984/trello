console.log('HELOOOOOOUUUUU');
window.TrelloPowerUp.initialize({
    'card-budges': function(t, opts) {
        // return an array of card budges for the given card
        return t.card('all')
            .then(function(card) {
                console.log(card);

                return [{
                    text: card.idShort
                }];
            });
    }
});