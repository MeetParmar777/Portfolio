// navbar scroll changes script start **************
navbar = document.getElementById('navbar');
logo = document.querySelector('.img');
list_items = document.querySelectorAll('a > li');

// console.log(list);

function scroll()
{
    if(document.documentElement.scrollTop > 80)
    {
        navbar.style.background = 'white';
        logo.src = '../images/logo-light.jpg';

        for(m=0; m<list_items.length; m++)
        {
            list_items[m].style.color = 'black';
        }
    }
    else
    {
        navbar.style.background = '#231F20';
        logo.src = '../images/logo-dark.jpg';

        for(m=0; m<list_items.length; m++)
        {
            list_items[m].style.color = 'white';
        }
    }

}
// navbar scroll changes script end------

// form validation script start *******************
name1 = document.getElementById('nm');
phone = document.getElementById('pn');
email = document.getElementById('email');
msg = document.getElementById('txt');
nmErr = document.getElementById('nmErr');
pnErr = document.getElementById('pnErr');
emailErr = document.getElementById('emailErr');
msgErr = document.getElementById('msgErr');

nmExp = /^[A-Z a-z]+$/
pnExp = /^[0-9]{10,10}$/

function validation()
{
    // name validation
    if(name1.value == '')
    {
        name1.style.border = '2px solid red';
        nmErr.innerHTML = '*Name is required...!';
        nmErr.style.color = 'red';
        return false;
    }
    else if(!nmExp.test(name1.value))
    {
        nmErr.innerHTML = '*Only alphabets';
        nmErr.style.color = 'red';
        name1.style.border = '2px solid red';
        return false;
    }
    else
    {
        nmErr.innerHTML = '';
        name1.style.border = '1px solid';
    }

    // phone validation
    if(phone.value == '')
    {
        pnErr.innerHTML = '*Phone number is required...!';
        pnErr.style.color = 'red';
        phone.style.border = '2px solid red';
        return false;
    }
    else if(!pnExp.test(phone.value))
    {
        pnErr.innerHTML = '*Only numbers & 10 Digits';
        pnErr.style.color = 'red';
        phone.style.border = '2px solid red';
        return false;
    }
    else
    {
        pnErr.innerHTML = ' ';
        phone.style.border = '1px solid';
    }

    // email validation
    if(email.value == '')
    {
        emailErr.innerHTML = '*Email is required...!';
        emailErr.style.color = 'red';
        email.style.border = '2px solid red';
        return false;
    }
    else
    {
        emailErr.innerHTML = ' ';
        email.style.border = '1px solid';
    }

    // msg validation
    if(msg.value == '')
    {
        msgErr.innerHTML = '*Message is required...!';
        msgErr.style.color = 'red';
        msg.style.border = '2px solid red';
        return false;
    }
    else
    {
        msgErr.innerHTML = ' ';
        msg.style.border = '1px solid';
    }


    name1.value='';
    phone.value='';
    email.value='';
    msg.value='';
}
// form validation script end----------


// nav bars script start----------
bars = document.querySelector('.fa-bars');
ul_tag = document.querySelector('.list');

console.log(bars);
console.log(list);

function toggleMenu()
{
    // list.style.opacity = '1';
    ul_tag.classList.toggle('show');
    bars.classList.toggle('fa-xmark');
}