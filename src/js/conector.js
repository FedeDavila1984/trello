var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';
var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg';

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, opts) {
        // Botones dentro del card
        return [/*{
            // usually you will provide a callback function to be run on button click
            // we recommend that you use a popup on click generally
            icon: GRAY_ICON, // don't use a colored icon here
            text: 'Open Popup',
            callback: onBtnClick,
            condition: 'edit'
        },*/ {
            // but of course, you could also just kick off to a url if that's your thing
            icon: GRAY_ICON,
            text: 'MULTILED SA',
            condition: 'always',
            url: 'https://www.multiled.com.ar',
            target: 'MULTILED' // optional target for above url
        }];
    },

    'board-buttons': function (t, opts) {
        return [{
          // we can either provide a button that has a callback function
          icon: {
            dark: WHITE_ICON,
            light: BLACK_ICON
          },
          text: 'Callback',
          callback: onBtnClick,
          condition: 'edit'
        }, {
          // or we can also have a button that is just a simple url
          // clicking it will open a new tab at the provided url
          icon: {
            dark: WHITE_ICON,
            light: BLACK_ICON
          },
          text: 'URL',
          condition: 'always',
          url: 'https://trello.com/inspiration',
          target: 'Inspiring Boards' // optional target for above url
        }];
    },
  
    'card-badges': function(t, opts) {
        // return an array of card budges for the given card
        return t.card('all')
            .then(function(card) {
                // console.log(card);
                return [{
                    text: card.idShort
                }];
            });
    }
});