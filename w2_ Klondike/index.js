/**
 * Drag and Drop Basic
 */
// 左方暫存
let leftTopDeck=[[],[],[],[]]
// 右方集結
let rightTopDeck=[[],[],[],[]]
// 下方混淆
let unOrderDecks=[[],[],[],[],[],[],[],[]]
//時光機
let timeMachine=[]
//忽略牌型
let ignoreDeck=[]

// 拖曳用
let onDragNumber = null 
    onDropNumber = null
    onDragDeckNumber = null
    onDropDeckNumber = null
//左上
    isCacheDeck = false
    cacheDeckNumber = null
    isSuccessDeck = false
    isGamePause = false



// 隨機派牌
function creatRandomDeck() {
  let randomNum = Math.floor(Math.random() * 8);
  // arr.push(randomNum)
  if(randomNum<=3){
    if(unOrderDecks[randomNum].length>=7){
      return creatRandomDeck()
    }else{
      return randomNum
    }
  }else{
    if(unOrderDecks[randomNum].length>=6){
      return creatRandomDeck()
    }else{
      return randomNum
    }
  }
}

// 轉換 A K Q J
function numberToSymbol(number){
  let remain = number%13
  switch(remain){
    case 0:
      return 'K'
    case 1:
      return 'A'
    case 11:
      return 'J'
    case 12:
      return 'Q'
    }
    return remain
}
// 轉換花色 黑桃 1~13 紅心 14~26 方塊 27~39 梅花 40~52
function numberToSuit(number) {
  if(number>  0 && number<=13)return 'spade'
  if(number>=14 && number<=26)return 'heart'
  if(number>=27 && number<=39)return 'diamond'
  if(number>=40 && number<=52)return 'club'

}
console.log('unOrderDecks',unOrderDecks)


const pokerArray=[]
for (let index = 1; index <=52; index++) {
  pokerArray.push(index)
}
// 洗牌
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
  let  randomDeckNum= creatRandomDeck()
  // console.log(randomDeckNum)
  unOrderDecks[randomDeckNum].push(number)
})
// console.log(unOrderDecks[1])
// console.log(shufflePoker)

// 上方一起
const orderDecksElem = document.getElementById('order-decks')
function flushGame() {
  for(let i=0 ;i<8;i++){
    console.log(i)
    const orderDeckElem = document.createElement('div')
    //左方暫存
    if(i<=3){
      orderDeckElem.classList.add('cache-deck')
      if(leftTopDeck[i].length==1){
        const poker = leftTopDeck[i][0]
        orderDeckElem.cardNumber=poker
        orderDeckElem.innerHTML=`
        <div class="poker">
          <img src="./images/${numberToSuit(poker)}${numberToSymbol(poker)}.svg" alt="">
          </div>
        `
      }
    }else{
      orderDeckElem.classList.add('done-deck')
      const numberOfIndex = i %4
      const card = rightTopDeck[numberOfIndex].slice(-1)[0]
      orderDeckElem.cardNumber=card
      orderDeckElem.deckNumber=numberOfIndex
      if(card){
        orderDeckElem.innerHTML=`
        <div class="poker">
          <img src="./images/${numberToSuit(card)}${numberToSymbol(card)}.svg" alt="">
          </div>
        `
      }
    }
    orderDecksElem.appendChild(orderDeckElem)
  }
}
flushGame()
// un-order-decks 
let init = false
const unOrderDecksElem = document.getElementById('un-order-decks')
function test(){
  unOrderDecks.forEach((decks,index)=>{
    const unOrderDeckElem = document.createElement('div')
    unOrderDeckElem.classList.add("un-order-deck")
    unOrderDeckElem.classList.add(`un-order-deck${index}`)

    decks.forEach((card,cardIndex)=>{
      console.log(card,cardIndex)
      const unOrderDeckCardElem = document.createElement('div')
      if(!isGamePause && cardIndex +1=== decks.length){
        unOrderDeckCardElem.draggable=true
      }
      unOrderDeckCardElem.classList.add("card")
      if(!init){
        unOrderDeckCardElem.style.transition = 'all .5s'
        unOrderDeckCardElem.style.top = '-1000px'
        unOrderDeckCardElem.style.left = '-2000px'
        // unOrderDeckCardElem.style.opacity = '0'
        setTimeout(() => {
          unOrderDeckCardElem.style.top= `${cardIndex * 30}px`
          unOrderDeckCardElem.style.left = '0px'
        }, cardIndex*index*30);
      }else{
        unOrderDeckCardElem.style.top= `${cardIndex * 30}px`
      }
      //告知瀏覽器選到哪一張牌跟牌區
      unOrderDeckCardElem.cardNumber = card
      unOrderDeckCardElem.deckNumber = index
      unOrderDeckCardElem.innerHTML=`
      <div class="poker">
        <img src="./images/${numberToSuit(card)}${numberToSymbol(card)}.svg" alt="">
        </div>
      `
      unOrderDeckElem.appendChild(unOrderDeckCardElem)
    })
    unOrderDecksElem.appendChild(unOrderDeckElem)
  })
  init=true
}
test()
// init = true

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