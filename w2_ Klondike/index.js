/**
 * Drag and Drop Basic
 */
let leftTopDeck=[]
let rightTopDeck=[[],[],[],[]]
let unOrderDecks=[[],[],[],[],[],[],[],[]]

let timeMachine=[]

let ignoreDeck=[2,44,23,13,25]

// 隨機派牌

function creatRandomDeck() {
  let randomNum = Math.floor(Math.random() * (7 - 0 + 1))+0;
  if(randomNum<=3){
    if(unOrderDecks[randomNum].length>=6){
      return creatRandomDeck()
    }
  }else{
    if(unOrderDecks[randomNum].length>=5){
      return creatRandomDeck()
    }
  }
  return randomNum
}


const pokerArray=[]
for (let index = 1; index <=52; index++) {
  pokerArray.push(index)
}

function shuffle(arr) {
  for(let i = 0 ; i < arr.length ; i ++){
    let j = Math.floor(Math.random()*(i+1))
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
  }
  return arr 
}
const shufflePoker = shuffle(pokerArray)
console.log(pokerArray)
pokerArray.map((number)=>{
  // console.log(number)
  if(ignoreDeck.indexOf(number)!==-1)return
  const randomDeckNum= creatRandomDeck()
  // console.log(randomDeckNum)
  console.log(unOrderDecks[randomDeckNum].push(1))

  // unOrderDecks[randomDeckNum].push(1)
})
// console.log(shufflePoker)





function Card(suit, symbol) {
  this.suit = suit;
  this.symbol = symbol;
}

Card.prototype.toString = function() {
  return this.suit + this.symbol;
};

var Poker = function() {
  function suit(number) {
      switch(parseInt((number - 1) / 13)) {
          case 0 : return "桃";
          case 1 : return "心";
          case 2 : return "磚";
          case 3 : return "梅";
      }
  }
  
  function symbol(number) {
      var remain = number % 13;
      switch(remain) {
          case 0 : return 'K ';
          case 1 : return 'A ';
          case 11: return 'J ';
          case 12: return 'Q ';
          default: return remain + 
              new Array(3 - (remain + '').length).join(' ');
      }
  }

  var cards = [];
  for(var i = 0; i < 52; i++) {
      cards.push(new Card(suit(i + 1), symbol(i + 1)));
  }
  
  return {
      shuffle: function() {
          for(var i = 0; i < cards.length; i++) {
              var j = parseInt(Math.random() * cards.length - 1);
              var tmp = cards[i];
              cards[i] = cards[j];
              cards[j] = tmp;
          }
          return cards.slice(0, cards.length);
      }
  };
}();





// let dragSource = document.querySelector('#drag-source')
// dragSource.addEventListener('dragstart', dragStart)

// let dropTarget = document.querySelector('#target-container')
// dropTarget.addEventListener('drop', dropped)
// dropTarget.addEventListener('dragenter', cancelDefault)
// dropTarget.addEventListener('dragover', cancelDefault)

// function cancelDefault (e) {
//   e.preventDefault()
//   e.stopPropagation()
//   return false
// }

// function dragStart (e) {
//   console.log('dragStart')
//   e.dataTransfer.setData('text/plain', e.target.id)
// }

// function dropped (e) {
//   console.log('dropped')
//   cancelDefault(e)
//   let id = e.dataTransfer.getData('text/plain')
//   e.target.appendChild(document.querySelector('#' + id))
// }
// End of Drag and Drop Basic