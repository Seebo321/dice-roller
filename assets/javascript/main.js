// variables and consts
const diceNumber = document.querySelector('#dicenumber')
const rollButton = document.querySelector('#roll')
const total = document.querySelector('#total')
const diceRollsButton = document.querySelector('#diceRolls')
const resetButton = document.querySelector('#reset')
const diceList = document.querySelector('#dicelist')
const sides = document.querySelector('#sides')
let sidesValue = sides.value
let totalAmount = 0
let diceRolls =[]
let index=0
let lists = []
let diceRollslength=diceRolls.length
let number =('<li>' + diceRolls[0] + '</li>')


// functions

rollButton.addEventListener("click", function () {  
    let diceNumberValue= diceNumber.value;
    let rollNumber = 0
    diceRolls =[]
    lists = []
    let a=sides.value
   while (rollNumber < diceNumberValue){ 
       rollNumber ++;
   let y =  Math.floor(Math.random() *a)+1;
   console.log(y)
   diceRolls.push(y)
   console.log(diceRolls)

   
}

totalAmount= (
    diceRolls.reduce((a, b) => a + b, 0)); //*https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
total.innerHTML = ('Your outcome is ' + totalAmount)
diceList.innerHTML = ('')
    })
diceRollsButton.addEventListener("click", function () {   
     index = 0
     diceRollslength=diceRolls.length
    while (index < diceRollslength ){
        index += 1
         number =('<li>' + diceRolls[0] + '</li>')
        lists.push(number)
        diceRolls.shift(0)
        console.log(index)
    }
diceList.innerHTML = (lists)

})

resetButton.addEventListener("click", function(){
    lists= []
    diceRolls=[]
    diceList.innerHTML = ('')
    diceNumber.value = 0
    total.innerHTML = ('')
    totalAmount = 0
    sides.value = ('6')
})


