// Question: https://stackoverflow.com/questions/72921186/create-an-object-of-objects-using-for-loop/72921398#72921398

const createChannels = () => {
  const topObj = {}
  for(let i = 1; i <= 8; i++){
    const botObj = {}
    for(let c = 10; c <= 360; c += 10){
      botObj[c] = Math.floor(Math.random() * 10)
    }
    topObj[i] = botObj
  }
  return topObj
}
const myChannels = createChannels()
console.log(myChannels)