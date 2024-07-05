const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseString(value)
    
    if (value === reverse){
        alert(" I t's  a  P A L I N D R O M E")
    }else {
        alert("Not a Palindrome !!")
    }
      
    input.value = ""
}