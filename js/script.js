// 'use strict'

const box = document.querySelector('.box'),
    btn = document.querySelector('button')

    // clientwidth bu bizga korinib turgan yuzani bo'yi va kengligini uzunligini aniqlaydi 

    // const width = box.clientWidth
    // const height = box.clientHeight

    // console.log(width)
    // console.log(height)

    const scrollheight = box.scrollHeight

    // console.log(scrollheight)

    btn.addEventListener('click', ()=>{
        box.style.height = scrollheight+'px'
    })


function car(name, color, mph){
    this.name= name
    this.color= color
    this.mph= mph
    this.speed = function () {
        console.log(`speed of car ${this.name} is ${this.mph}`)        
    }
}

car.prototype.sayHello = function(){
    console.log(console.log(`Car name of ${this.name} say hello)`))
}


const mercedes = new car('mersedes', 'white', 320);
const bmw = new car('bmw', 'red', 320);

mercedes.sayHello()
bmw.sayHello()

bmw.speed()
mercedes.speed()

console.log(mercedes);
console.log(bmw);


// Context this &clocure

//1) Odiiy functionni contexti ya'ni this xar doim window global abjectga qaram bo'ladi yani osiladi

function logger() {
    console.log(this)
    function sum(){
        console.log(this)
        return a+b
    }
    console.log(sum())
}
logger(1,2)
// 2) Context this objectni ichidagi metodda objecktni o'ziga teng

const obj = {
    x:10,
    y:12,
    sum:function(){
        console.log(this)
    }
}
obj.sum()

// 3) context this funksiya konstrujtorda yangi objectni ekzempriyaga teng

function car(name, color){
    this.name = name,
    this.color = color,
    this.isAirbag = true 
}
const bmw_x6 =new car('BMW', 'Black')

    