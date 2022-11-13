console.log("This is project 4");
const name= document.getElementById('name');
const email= document.getElementById('email');
const contact= document.getElementById('contact');
let validEmail = false;
let validPhone = false;
let validUsername = false;
console.log(name, email, phone);

name.addEventlistener('blur',()=>{
    console.log('name is blurred');
    let regex = /^[a-zA-Z]([0-9a-zA]){2,10}$/;
    let str = username.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is not valid');
        username.classlist.remove('is-invalid');
        ValidName = true;
    }
    else{
        console.log('Your name is not valid');
        username.classlist.add('is-invalid');
    }
})
email.addEventlistener('blur',()=>{
    console.log('email is blurred');
    console.log('email is blurred');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z])$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is not valid');
        email.classlist.remove('is-invalid');
        ValidEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classlist.add('is-invalid');
    }
})
phone.addEventlistener('blur',()=>{
    console.log('phone is blurred');
    // console.log('name is blurred');
    let regex = /^([0-9]){2,10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is not valid');
        phone.classlist.remove('is-invalid');
        ValidPhone = true;
    }
    else{
        console.log('Your name is not valid');
        phone.classlist.add('is-invalid');
    }

})
let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    console.log(ValidEmail, ValidName, ValidPhone)
    // submit your form
    if(validEmail && validUser && validPhone){
        console.log('Phone, email and user are valid. Submitting the form');
    let success = document.getElementById('success');
    success.classList.add('show');
    failure.classList.remove('show');

    }
    else{
    console.log('One out of Phone, email and user are not valid. Hence not Submitting the form.Please correct the error and try again');
    let success = document.getElementById('failure');
    success.classList.add('show');
    success.classList.remove('show');

    }    


    

})

