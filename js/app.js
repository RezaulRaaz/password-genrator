window.addEventListener('load', function() {
    generatePassword();
})

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passGen = document.getElementById("generatePassword")
let suggetionBox = document.getElementById("suggestionBox")
let copyBtn = document.getElementsByClassName("copy")
let suggestion = document.getElementsByClassName("suggestion")
let successMessage = document.getElementById("success_message")

passGen.addEventListener("click",generatePassword)

function generatePassword(){
    let sugestionLimit=5;
    let sugetionHtml="";
    for (let i = 0; i < sugestionLimit; i++) {
        sugetionHtml += `<div class="suggestion">
        <div>
            <p>${randomPasswordGenerate()}</p>
            </div>
            <div onclick="copyClipboard(this)" class="copy icon"><ion-icon name="copy-outline"></ion-icon></div>
        </div>`;
    }
    suggetionBox.innerHTML = sugetionHtml;
}

let passLimit = 15

function randomPasswordGenerate() {
    let myNewPassword = ""
    for (let i = 0; i < passLimit; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        myNewPassword += characters[randomNumber]
    }
    return myNewPassword
}
function copyClipboard(e){
    // console.log(suggestion)
    // suggestion.forEach((item, index) => {
    //     item.style.background='none'
    // });
    // suggestion.style.background='none'
    let getText=e.parentNode.getElementsByTagName('p')[0].innerText;
    navigator.clipboard.writeText(getText);
    showSuccessMessage()
    e.parentNode.style.background='aqua'
}
function showSuccessMessage(){
    successMessage.style.display="block"
    setTimeout(() => {
        successMessage.style.display="none"
    }, "2000");
}

