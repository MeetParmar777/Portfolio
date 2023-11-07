navbar = document.getElementById('navbar');
NameErr = document.getElementById('nameErr');
EmailErr = document.getElementById('emailErr');
PhoneErr = document.getElementById('phoneErr');
txtErr = document.getElementById('txtErr');
nameInp = document.getElementById('nm');
emailInp = document.getElementById('email');
phoneInp = document.getElementById('phone');
txtarea = document.getElementById('txtarea');
console.log(navbar);

function scroll()
{
    if(document.documentElement.scrollTop > 30)
    {
        navbar.style.background = '#212121';
    }
    else
    {
        navbar.style.background = 'transparent';
    }
}

function validation()
{
    if(nameInp.value=='')
    {
        NameErr.innerHTML = 'A name is required.';
        NameErr.style.color = 'red';
        nameInp.style.border = '1px solid red';

        return false;
    }
    else
    {
        NameErr.innerHTML = ''
        nameInp.style.border = 'none';
    }

    if(emailInp.value=='')
    {
        EmailErr.innerHTML = 'An email is required.';
        EmailErr.style.color = 'red';
        emailInp.style.border = '1px solid red';

        return false;
    }
    else
    {
        EmailErr.innerHTML = ''
        emailInp.style.border = 'none';
    }

    if(phoneInp.value=='')
    {
        PhoneErr.innerHTML = 'A phone number is required.';
        PhoneErr.style.color = 'red';
        phoneInp.style.border = '1px solid red';

        return false;
    }
    else
    {
        PhoneErr.innerHTML = ''
        phoneInp.style.border = 'none';
    }

    if(txtarea.value=='')
    {
        txtErr.innerHTML = 'A message is required.';
        txtErr.style.color = 'red';
        txtarea.style.border = '1px solid red';

        return false;
    }
    else
    {
        txtErr.innerHTML = ''
        txtarea.style.border = 'none';
    }
}

