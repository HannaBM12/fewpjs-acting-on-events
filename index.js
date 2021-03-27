// Your code here

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace('px', " ")
    let left = parseInt(leftNumbers, 10)
    
    if (left > 0){
        dodger.style.left = `${left - 1}px`
    }
    
}


function moveDodgerRight(){
    let rightNumber = dodger.style.left.replace("px", " ")
    let right = parseInt(rightNumber, 10)
    
    if (right<359){
        dodger.style.left = `${right + 1}px`
    }
}