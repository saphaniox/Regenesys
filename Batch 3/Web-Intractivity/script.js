console.log(document);

// const getMainTitle = document.getElementById('mainTitle')
// const changeColor = getMainTitle.style.color = 'yellow'
// console.log(getMainTitle)

// const getParagraph = document.querySelector('.myParagraph')
// const changeParagraph = getParagraph.textContent = 'I am changing the text content regardless of whet is there before'
// console.log(getParagraph)
// console.log(getParagraph)

// const myEventButton = document.getElementById('myButton')
// console.log(myEventButton)

// myEventButton.addEventListener('click', ()=>{
//     alert('I have been click from the Javascript File')
// })

// const handleInput = document.getElementById('myInput')
// console.log(handleInput.value)

// const handleForm = document.getElementById('myForm')
// console.log(handleForm)

// const handleParagraph = document.getElementById('myName')
// console.log(handleParagraph)

// handleForm.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     console.log(handleInput.value)
//     handleParagraph.textContent = handleInput.value

// })


// const box = document.getElementById('myBox')

// function addHighlight(){
//    box.classList.add('highlight')
// }

// const myHighlightBtn = document.getElementById('highBtn')
// myHighlightBtn.addEventListener('click', ()=>{
//     box.classList.add('highlight')
// })

// function removeHighlight(){
//     box.classList.remove('highlight')
// }

// const myContainer = document.getElementById('conatiner')

// document.getElementById('addElement').addEventListener('click', ()=>{
//     const newDiv = document.createElement('div')
//     newDiv.textContent = 'I am a New Element'
//     myContainer.appendChild(newDiv)
// })

// const validateInput = document.getElementById('myInput')
// if(validateInput.value.trim() === ""){
//     alert('This Field Cannot Be empty')
// }




//Todo

const list = document.getElementById('todoList')
const input = document.getElementById('todoInput')
const button = document.getElementById('addTodo')


button.addEventListener('click', ()=>{
    if(input.value.trim() !== ""){
        const li = document.createElement('li')
        li.textContent = input.value

        list.appendChild(li)
        input.value = ''
        console.log(li)
    }else{
        alert('Please enter a TODO')
    }
})

console.log(list)
