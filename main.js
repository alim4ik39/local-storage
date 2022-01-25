// Отправляем в локал сторедж
// localStorage.setItem('student1', 'Aruuke')
// localStorage.setItem('student2', 'Sheradil')
// localStorage.setItem('count', 21)

// // Получаем из локал стореджа

// let user = localStorage.getItem('student1')
// // alert(user)

// // Удаляем свойство
// localStorage.removeItem('count')

// // Очистка всего локал стореджа
// localStorage.clear()

// let input = document.getElementById('input')
// let btn = document.getElementById('btn')
// let output = document.getElementById('output')
// let h1 = document.createElement('h1')

// btn.addEventListener('click', ()=>{
// получили значение инпута и отобразили в консоли
//     console.log(input.value);
// значение инпута отправили в локал сторедж
//     localStorage.setItem('name', input.value)
// а затем получили значение из локал сторедж
//     let name = localStorage.getItem('name')
// и отобразили в h1
//     h1.innerHTML = name
//     output.append(h1)
//     input.value=''
// })

// let light = document.getElementById('button1')
// let dark = document.getElementById('button2')
// document.body.style.backgroundColor='silver'

// dark.addEventListener('click', ()=>{
//     if(localStorage.getItem('color2')=='light'){
//         document.body.style.backgroundColor='black'     
//     }
//   localStorage.setItem('color1', 'dark')
// })

// light.addEventListener('click', ()=>{
//     if(localStorage.getItem('color1')=='dark'){
//         document.body.style.backgroundColor='silver'     
//     }
// localStorage.removeItem('color1')
// localStorage.setItem('color2','light')

//     localStorage.setItem('color2', 'light')
// })

let h1=document.createElement('h1')
h1.textContent='To Do List'
let div=document.createElement('div')
let input=document.getElementById('input')
let button=document.createElement('button')
button.textContent='Add item'
let img=document.createElement('img')
img.src='./Check_mark.svg.png'
let h2=document.createElement('h2')
let hi=document.createElement('h2')


input.style.cssText=`
width:600px;
color:red;
`

h1.style.cssText=`
margin-left:670px;
`

img.style.cssText=`
max-width:20px;
max-height:100px;
margin-left:650px;
color:green;
`

button.addEventListener('click', ()=>{
    console.log(input.value);
    localStorage.setItem('name', input.value)
    let name = localStorage.getItem('name')
    h2.innerHTML = name
    div.append(h2)
    input.value=''
})

    



document.body.append(div)
div.append(h1,input,button)
