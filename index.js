//navbar
let nav=document.getElementById('navbar')
let menu=document.getElementById('menubtn')
      menu.addEventListener('click',() => { nav.classList.toggle('hidden')
})

//serchbar
let serchicon=document.querySelectorAll('.sicon')
let inputbar=document.getElementById('inbar')
serchicon.forEach(serch =>{
    serch.addEventListener('click',(e) =>{
    inputbar.classList.toggle('hidden')
})
})
console.log(serchicon)
console.log(inputbar)

// // Select all elements with the class name 'btn'
// const buttons = document.querySelectorAll('.btn');

// // Loop through each button and attach an event listener
// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     // Your event handling logic here
//     console.log(`Clicked ${event.target.textContent}`);
//     // This will log which button was clicked
//   });
// });
