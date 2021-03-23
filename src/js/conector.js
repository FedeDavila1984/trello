console.log('HELOOOOOOUUUUU');
window.TrelloPowerUp.initialize({
    'card-badges': function(t, opts) {
        // return an array of card budges for the given card
        return t.card('all')
            .then(function(card) {
                console.log(card);

                return [{
                    text: card.idShort
                }];
            });
    },

    'card-buttons': function (t, opts) {
        return t.card('idShort')
            .then(function(card) {
                console.log('Presionó el botón');

                return [{
                    // usually you will provide a callback function to be run on button click
                    // we recommend that you use a popup on click generally
                    text: 'Open Popup',
                    callback: onBtnClick,
                    condition: 'edit'
                }, {
                    // but of course, you could also just kick off to a url if that's your thing
                    text: 'GoGoGo',
                    condition: 'always',
                    url: 'http://www.multiled.com.ar/' + card.idShort + '"',
                    target: 'Multiled SA' // optional target for above url
                }];
        });
      }
});