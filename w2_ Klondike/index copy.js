/**
 * Drag and Drop Basic
 */
// 左方暫存
let leftTopDeck=[[],[],[],[]]
// 右方集結
let rightTopDeck=[[1],[14],[],[]]
// 下方混淆
let unOrderDecks=[[],[],[],[],[],[],[],[]]
//時光機
let timeMachine=[]
//忽略牌型
let ignoreDeck=[1,14]

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
// console.log('unOrderDecks',unOrderDecks)


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
// console.log(pokerArray)
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
    // console.log(i)
    const orderDeckElem = document.createElement('div')
    //左方暫存
    if(i<=3){
      orderDeckElem.className='cache-deck'
      orderDeckElem.id=`cache-deck-${i}`
      orderDeckElem.deckNumber=i
      if(leftTopDeck[i].length==1){
        const poker = leftTopDeck[i][0]
        orderDeckElem.cardNumber=poker
        orderDeckElem.innerHTML=`
          <div class="card">
            <img src="./images/${numberToSuit(poker)}${numberToSymbol(poker)}.svg" alt="">
          </div>
        `
      }
    }else{
      orderDeckElem.classList.add('done-deck')
      orderDeckElem.id=`done-deck-${i}`
      const numberOfIndex = i %4
      const card = rightTopDeck[numberOfIndex].slice(-1)[0]
      orderDeckElem.cardNumber=card
      orderDeckElem.deckNumber=numberOfIndex
      if(card){
        orderDeckElem.innerHTML=`
        <div class="card">
          <img src="./images/${numberToSuit(card)}${numberToSymbol(card)}.svg" alt="">
        </div>ＺＺＺＺ
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
      // console.log(card,cardIndex)
      const unOrderDeckCardElem = document.createElement('div')
      if(!isGamePause && cardIndex +1=== decks.length){
        unOrderDeckCardElem.draggable=true
      }
      unOrderDeckCardElem.classList.add("card")
      unOrderDeckCardElem.style.position='absolute'
      if(!init){
        unOrderDeckCardElem.style.transition = 'all .5s'
        // unOrderDeckCardElem.style.top = '-1000px'
        // unOrderDeckCardElem.style.left = '-2000px'
        // unOrderDeckCardElem.style.opacity = '0'
        // setTimeout(() => {
          unOrderDeckCardElem.style.top= `${cardIndex * 30}px`
          unOrderDeckCardElem.style.left = '0px'
        // }, cardIndex*index*30);
      }else{
        unOrderDeckCardElem.style.top= `${cardIndex * 30}px`
      }
      //告知瀏覽器選到哪一張牌跟牌區
      unOrderDeckCardElem.cardNumber = card
      unOrderDeckCardElem.deckNumber = index
      unOrderDeckCardElem.innerHTML=`
          <img src="./images/${numberToSuit(card)}${numberToSymbol(card)}.svg" alt="">
      `
      unOrderDeckElem.appendChild(unOrderDeckCardElem)
    })
    unOrderDecksElem.appendChild(unOrderDeckElem)
  })
  init=true
}
test()
// init = true

function dragStart (e) {
  e.defaultPrevent;
  let target=e.target.parentNode
  // console.log(target.cardNumber)
  if(isGamePause)return
  onDragNumber = target.cardNumber
  onDragDeckNumber = target.deckNumber
  console.log('dragStart onDragNumber',onDragNumber)

}

function dragEnter (e) {
  // let target = e.target.parentNode
  // console.log(target)
  console.log('dragEnter cache',e.target.id.indexOf('cache-deck'))
  // console.log('dragEnter done',e.target.parentNode.id.cardNumber)
  if(e.target.id.indexOf('cache-deck')>-1)isCacheDeck=true
  if(e.target.parentNode.id.indexOf('done-deck')>-1)isSuccessDeck=true
  // onDropNumber = e.target.cardNumber
  // onDropDeckNumber = target.deckNumber
  if(onDropNumber == onDragNumber)return
  console.log('isCacheDeck',isCacheDeck)
}

function dragLeave (e) {
  console.log('dragLeave',e.target.parentNode.parentNode)
  // if(e.target.parentNode.id.indexOf('order-decks')){
  //   isCacheDeck = false
  //   isSuccessDeck = false 
  // }
  if(e.target.parentNode.id.indexOf('cache-deck')!=-1){
    isCacheDeck = true
    isSuccessDeck = false 
    cacheDeckNumber=e.target.parentNode.deckNumber
    console.log('cache-deck','cacheDeckNumber',cacheDeckNumber)
  }
  if(e.target.parentNode.id.indexOf('done-deck')!=-1){
    isCacheDeck = false
    isSuccessDeck = true
    cacheDeckNumber=e.target.parentNode.deckNumber
    console.log('done-deck','cacheDeckNumber',cacheDeckNumber)

  }
  // console.log('dragLeave cacheDeckNumber',e.target.deckNumber)
  // console.log('dragLeave isCacheDeck',isCacheDeck)
  console.log('dragLeave isSuccessDeck',isSuccessDeck)
  console.log('dragLeave isCacheDeck',isCacheDeck)

}

function dragEnd (e) {
  if(isGamePause)return
  // console.log('isCacheDeck',isCacheDeck,'cacheDeckNumber',cacheDeckNumber)
  // console.log('onDragNumber',onDragNumber)
  // console.log('isSuccessDeck',isSuccessDeck)
  // console.log('onDragDeckNumber',onDragDeckNumber)
  console.log(isCacheDeck)
  if(isCacheDeck&& onDragNumber==unOrderDecks[onDragDeckNumber].slice(-1)[0]){
    console.log('我到左上')
    if(leftTopDeck[cacheDeckNumber].length===1)return
    timeMachine.push({
      from:{
        deckNumber:onDragDeckNumber,
        cardNumber:onDragNumber
      },
      to:{
        deckNumber: cacheDeckNumber,
        cardNumber: onDragNumber
      },
      action: 'toCacheDeck'
    })
    unOrderDecks[onDragDeckNumber].pop()
    leftTopDeck[cacheDeckNumber].push(onDragNumber)
    refreshDrawAndFlush()
    isCacheDeck=false
  }
  console.log('isSuccessDeck',isSuccessDeck)
  if(isSuccessDeck){
    console.log('我到右上')
    console.log('cacheDeckNumber',cacheDeckNumber)
    console.log('onDragNumber',onDragNumber,rightTopDeck[cacheDeckNumber].slice(-1)[0] +1)
    if(onDragNumber != rightTopDeck[cacheDeckNumber].slice(-1)[0] + 1)return
    timeMachine.push({
      from:{
        deckNumber:onDragDeckNumber,
        cardNumber:onDragNumber
      },
      to:{
        deckNumber: cacheDeckNumber,
        cardNumber: onDragNumber
      },
      action: 'toSuccessDeck'
    })
    unOrderDecks[onDragDeckNumber].pop()
    rightTopDeck[cacheDeckNumber].push(onDragNumber)
    refreshDrawAndFlush()
    isSuccessDeck = false
  }
  if(!isSuccessDeck&&!isCacheDeck){
    // console.log('我到下方')
    // console.log('onDragNumber',onDragNumber,'onDropNumber',onDropNumber)
    const mathFloorDragNumber = Math.ceil(onDragNumber/13)
    const mathFloorDropNumber = Math.ceil(onDropNumber/13)
    // 黑＋紅 = 5 ; 數字要跟前一個比
    // console.log('mathFloorDragNumber',mathFloorDragNumber,'mathFloorDropNumber',mathFloorDropNumber)
    // console.log('mathFloorDropNumber+mathFloorDragNumber!=5',mathFloorDropNumber+mathFloorDragNumber,mathFloorDropNumber+mathFloorDragNumber!=5)
    let validPushCard = mathFloorDragNumber != mathFloorDropNumber && mathFloorDropNumber+mathFloorDragNumber!=5 && (onDropNumber%13===(onDragNumber%13)+1 || (onDropNumber%13===0 && onDragNumber%13===12) )
    // console.log(e.target.parentNode)
    const isCacheCardDeck = e.target.parentNode.id.indexOf('cache-deck')>-1
    // console.log('isCacheCardDeck',isCacheCardDeck)
    // console.log('onDropNumber',onDropNumber,'onDragNumber',onDragNumber)
    if(isCacheCardDeck){
      // console.log('validPushCard',validPushCard)
      if(validPushCard){
        const cardCacheDeckNumber = e.target.parentNode.id.split('-')[2]
        // console.log('cardCacheDeckNumber',cardCacheDeckNumber)
        unOrderDecks[onDropDeckNumber].push(onDragNumber)
        leftTopDeck[cardCacheDeckNumber].pop()
        refreshDrawAndFlush()
        return
      }
    }
    // if(onDragNumber!=unOrderDecks[onDragDeckNumber].slice(-1)[0] || onDropNumber!=unOrderDecks[onDropDeckNumber].slice(-1)[0]){
    //   isCacheDeck = false
    //   isSuccessDeck = false
    //   return
    // }
    if(validPushCard){
      console.log('validPush')
      timeMachine.push({
        from:{
          deckNumber:onDragDeckNumber,
          cardNumber:onDragNumber
        },
        to:{
          deckNumber: cacheDeckNumber,
          cardNumber: onDragNumber
        },
        action: 'toUnOrder'
      })
      unOrderDecks[onDragDeckNumber].pop()
      unOrderDecks[onDropDeckNumber].push(onDragNumber)
      refreshDrawAndFlush()

    }
  }
}

const container = document.getElementById('container')
container.addEventListener('dragstart',dragStart)
container.addEventListener('dragenter',dragEnter)
container.addEventListener('dragleave',dragLeave)
container.addEventListener('dragend',dragEnd)

function refreshDrawAndFlush() {
  unOrderDecksElem.innerHTML=''
  orderDecksElem.innerHTML=''
  test()
  flushGame()
}