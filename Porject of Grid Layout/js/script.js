nav1 = document.getElementById('nav');
logo1 = document.querySelector('.logo_pic');
ul_tag = document.querySelector('.list');
bars = document.querySelector('.to');
a_tags = document.querySelectorAll('li > a');
i_tags = document.querySelectorAll('a > i');
container = document.querySelector('.container');
main1 = document.querySelector('.main1');
main2 = document.querySelector('#main2');
content5 = document.querySelector('.main3');
content8 = document.querySelector('#content8');
content9 = document.querySelector('#content9');
cont7_col1 = document.querySelector('.col1');
cont7_col2 = document.querySelector('.col2');

left = document.querySelector('.one1');
left2 = document.querySelector('.one2');
left3 = document.querySelector('.one3');
left4 = document.querySelector('.one4');
middle = document.querySelector('.three1');
middle2 = document.querySelector('.three2');
middle3 = document.querySelector('.three3');
right = document.querySelector('.two1');
right2 = document.querySelector('.two2');
right3 = document.querySelector('.two3');
right4 = document.querySelector('.two4');

console.log(nav1);
console.log(logo1);
console.log(ul_tag);
console.log(bars);
console.log(a_tags);
console.log(i_tags);
console.log(container);
console.log(main1);

function rightClick()
{
    cont7_col1.style.opacity = '0';
    cont7_col2.style.opacity = '1';
}
function leftClick()
{
    cont7_col1.style.opacity = '1';
    cont7_col2.style.opacity = '0';
}

function togglemenu()
{
    ul_tag.classList.toggle('show');
    bars.classList.toggle('fa-times');
}
function scroll()
{
    if(document.documentElement.scrollTop > 20)
    {
        nav1.style.backgroundColor = 'white';
        nav1.style.borderBottom = '1px solid #a6a6a6';
        // logo1.src = 'file:///C:/Users/DELL/Desktop/Project-Grid%20Layout/images/logo_dark.png';
        logo1.src = '../images/logo_dark.png';


        for(m=0;m<a_tags.length;m++)
        {
            a_tags[m].style.color = '#646464';
        }
        
        for(m=0;m<i_tags.length;m++)
        {
            i_tags[m].style.color = '#646464';
        }
        
    }
    else
    {
        nav1.style.backgroundColor = 'transparent';
        nav1.style.borderBottom = 'none';
        // logo1.src = 'file:///C:/Users/DELL/Desktop/Project-Grid%20Layout/images/logo_light.png';
        logo1.src = '../images/logo_light.png';


        for(m=0;m<a_tags.length;m++)
        {
            a_tags[m].style.color = 'white';
        }
        
        for(m=0;m<i_tags.length;m++)
        {
            i_tags[m].style.color = 'white';

        }

    }   


}

    // var referalpoint = 280;      
function scrollBound()
{
    if(container.getBoundingClientRect().top < 280)
    {
        left.style.opacity='1';
        middle.style.opacity='1';
        right.style.opacity='1';
        left.style.transform='translateX(0px)';
        middle.style.transform='translateY(0px)';
        right.style.transform='translateX(0px)';
    }
    if(main1.getBoundingClientRect().top < 320)
    {
        left2.style.opacity='1';
        right2.style.opacity='1';
        left2.style.transform='translateX(0px)';
        right2.style.transform='translateX(0px)';
    }
    if(main2.getBoundingClientRect().top < 340)
    {
        left3.style.opacity = '1';
        right3.style.opacity = '1';
        left3.style.transform = 'translateX(0px)';
        right3.style.transform = 'translateY(0px)';
    }
    if(content5.getBoundingClientRect().top < 450)
    {
        middle2.style.opacity = '1';
        middle2.style.transform = 'translateY(0px)';
    }
    if(content8.getBoundingClientRect().top < 600)
    {
        middle3.style.opacity = '1';
        middle3.style.transform = 'translateY(0px)';
    }
    if(content9.getBoundingClientRect().top < 600)
    {
        left4.style.opacity = '1';
        right4.style.opacity = '1';
        left4.style.transform = 'translateX(0px)';
        right4.style.transform = 'translateX(0px)';
    }
}



