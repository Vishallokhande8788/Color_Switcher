const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons)
// console.log(body)

buttons.forEach((button) => {
    console.log(button)
})
addEventListener('click',(e)=>{
    console.log(e.target.id)


    if(e.target.id === "grey"){
        body.style.backgroundColor = "grey"
    }
    else if (e.target.id ==='orange'){
        body.style.backgroundColor = 'orange'
    }
    else if (e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
    }
    else if (e.target.id === 'yellow'){
        body.style.backgroundColor = 'yellow'
    }
    else if (e.target.id === 'green'){
        body.style.backgroundColor = 'green'
    }
    else if (e.target.id === 'aqua'){
        body.style.backgroundColor = 'aqua'
    }
    else if (e.target.id === 'purple'){
        body.style.backgroundColor = 'purple'
    }
    else if (e.target.id === 'pink'){
        body.style.backgroundColor = 'pink'
    }
    else if (e.target.id === 'red'){
        body.style.backgroundColor = 'red'
    }
    else{
        body.style.backgroundColor = 'white'
    }
})


