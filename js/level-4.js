const nameField = document.getElementById('name');
const sendName = document.getElementById('send-name');
const deleteName = document.getElementById('delete-name');

const emailField = document.getElementById('email')
const sendEmailBtn = document.getElementById('send-email')
const deleteEmailBtn = document.getElementById("delete-email")

const messageField = document.getElementById('message')
const sendMessageBtn = document.getElementById('send-message')
const deleteMessageBtn = document.getElementById('delete-message')


const sendButton = document.getElementById('send')
const resetBtn = document.getElementById('reset')

//send name code here
sendName.addEventListener('click', function(){
    let name = nameField.value;
    nameField.value = '';
    localStorage.setItem('name', name);
})

deleteName.addEventListener('click', function(){
    localStorage.removeItem('name')
})




//send email

sendEmailBtn.addEventListener('click', function(){
    let email = emailField.value;
    emailField.value = '';
    localStorage.setItem('email', email);
})

deleteEmailBtn.addEventListener('click', function(){
    localStorage.removeItem('email')
})

//send message code
sendMessageBtn.addEventListener('click', function(){
    let message = messageField.value;
    messageField.value = '';
    localStorage.setItem('message', message);
})

deleteMessageBtn.addEventListener('click', function(){
    localStorage.removeItem('message')
})

//send object 
sendButton.addEventListener('click', function(){
    let name = nameField.value;
    let message = messageField.value;
    let email = emailField.value;
    const obj = {name: name, email:email, message:message};
    localStorage.setItem('person-data', JSON.stringify(obj))
})


//reset
resetBtn.addEventListener('click', function(){
    localStorage.clear()
})