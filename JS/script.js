let zapas = document.querySelector('.zapas')
//speed
let speed = document.querySelector('.speed-of-car')
let speed_up = document.querySelector('.speed-up')
let speed_down = document.querySelector('.speed-down')
//temp
let temp = document.querySelector('.temp-num')
let temp_up = document.querySelector('.temp-up')
let temp_down = document.querySelector('.temp-down')
//wheels
let wheel19 = document.querySelector('.wheel-19')
let wheel21 = document.querySelector('.wheel-21')
let wheel_num = document.querySelector('.wheel-num')
let wheel_up = document.querySelector('.wheels-21')
let wheel_down = document.querySelector('.wheels-19')
console.log(wheel_up);
console.log(wheel_down);
//color
let black = document.querySelector('.black')
let white = document.querySelector('.white')
let beige = document.querySelector('.beige')
//other
let conder = document.querySelector('.conder')
let long = document.querySelector('.long')
let car = document.querySelector('.car')
let door = document.querySelector('.door')

let speed_ = 60
let temp_ = 20
let wheel_ = 19
let zapas_ = 750

//SPEED

speed_up.onclick = () => {
    speed_ += 10
    speed.innerHTML = speed_
    zapas_ -= 10
    zapas.innerHTML = zapas_
    if(speed_ >= 100 && zapas_ <= 700){
        speed_ = 100
        zapas_ = 710
    }
}
speed_down.onclick = () => {
    speed_ -= 10
    speed.innerHTML = speed_
    zapas_ += 10
    zapas.innerHTML = zapas_
    if(speed_ <= 20 && zapas_ >= 790){
        speed_ = 30
        zapas_ = 780    
    }
}

//TEMP

temp_up.onclick = () => {
    temp_ += 10
    temp.innerHTML = temp_
    zapas_+= 5
    zapas.innerHTML = zapas_
    if(temp_ >= 40 && zapas_ >= 760){
        temp_ = 30
        zapas_ = 760
    }
}

temp_down.onclick = () => {
    temp_ -= 10
    temp.innerHTML = temp_
    zapas_-= 5
    zapas.innerHTML = zapas_
    if(temp_ <= -10 && zapas_ <= 735){
        temp_ = 0
        zapas_ = 740
    }
}

//WHEELS

wheel_up.onclick = () => {
    wheel21.classList.remove('.wheel_flex','wheel_none')
    wheel19.classList.remove('.wheel_flex','wheel_none')
    wheel19.classList.add('wheel_none')
    wheel21.classList.add('wheel_flex')
    wheel_ = 21
    wheel_num.innerHTML = wheel_
    console.log('nice');
}

wheel_down.onclick = () => {
    wheel21.classList.remove('.wheel_flex','wheel_none')
    wheel19.classList.remove('.wheel_flex','wheel_none')
    wheel21.classList.add('wheel_none')
    wheel19.classList.add('wheel_flex')
    wheel_ = 19
    wheel_num.innerHTML = wheel_
    console.log('work');
}

//CONDER




// door

door.onclick = () => {
    car.classList.add('salon1')
    wheel19.classList.add('wheel_none')
    wheel21.classList.add('wheel_none')
    document.querySelector('h1').style.display = 'none'
    document.querySelector('.bot-first').style.display = 'none'
    document.querySelector('.bot-second').classList.add('bot_flex')

}

document.querySelector('.black').onclick = () => {
    car.classList.remove('salon1','salon2','salon3')
    car.classList.add('salon1')
}
document.querySelector('.white').onclick = () => {
    car.classList.remove('salon1','salon2','salon3')
    car.classList.add('salon2')
}
document.querySelector('.beige').onclick = () => {
    car.classList.remove('salon1','salon2','salon3')
    car.classList.add('salon3')
}

