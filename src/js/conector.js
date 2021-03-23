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
                    icon: GRAY_ICON, // don't use a colored icon here
                    text: 'Open Popup',
                    callback: onBtnClick,
                    condition: 'edit'
                }, {
                    // but of course, you could also just kick off to a url if that's your thing
                    icon: GRAY_ICON,
                    text: 'Just a URL',
                    condition: 'always',
                    url: 'http://www.multiled.com.ar/' + card.idShort + '"',
                    target: 'Trello Developer Site' // optional target for above url
                }];
        });
      }
});