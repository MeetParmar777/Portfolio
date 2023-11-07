h1_1 =  document.getElementById('first');
h1_2 =  document.getElementById('second');
h1_3 =  document.getElementById('third');
h1_4 =  document.getElementById('fourth');
h1_5 =  document.getElementById('fifth');

btn = document.getElementsByClassName('round');
main = document.getElementById('slide');
main2 = document.getElementById('slide2');
main3 = document.getElementById('slide3');

slider_icons = document.querySelector('.icons');
sub_main1 = document.querySelector('.sub-main1');
sub_main2 = document.querySelector('.sub-main2');
sub_main3 = document.querySelector('.sub-main3');
sub_main4 = document.querySelector('.sub-main4');
sub_main5 = document.querySelector('.sub-main5');

nav = document.querySelector('.navbar');
ul_list = document.querySelector('.lists');
bars = document.querySelector('.fa-bars');

console.log(h1_1);

a=0;
firsth1 = setInterval('count1()',150)
// clearInterval(count1());
function count1()
{
    if(a==18)
    {
        clearInterval(firsth1);
    }
    else
    {
        h1_1.innerHTML = ++a;
    }
}
b=0
secondh1 = setInterval('count2()',100)
function count2()
{
    if(b==24)
    {
        clearInterval(secondh1)
    }
    else
    {
        h1_2.innerHTML = ++b;
    }

}

c=0;
thirdh1 =  setInterval('count3()',250)
function count3()
{
    if(c==7)
    {
        clearInterval(thirdh1)
    }
    else
    {
        h1_3.innerHTML = ++c;
    }
}

d=0;
fourthh1 =  setInterval('count4()',200)
function count4()
{
    if(d==12)
    {
        clearInterval(fourthh1)
    }
    else
    {
        h1_4.innerHTML = ++d;
    }
}
e=0;
fifthh1 = setInterval('count5()',500)
function count5()
{
    if(e==4)
    {
        clearInterval(fifthh1)
    }
    else
    {
        h1_5.innerHTML = ++e;
    }
}

btn[0].onclick =  function ()
{
    main.style.transform = 'translateX(0%)';
    main2.style.transform = 'translateX(0%)';
    main3.style.transform = 'translateX(0%)';
}
btn[1].onclick =  function ()
{
    main.style.transform = 'translateX(-100%)';
    main2.style.transform = 'translateX(-100%)';
    main3.style.transform = 'translateX(-100%)';
}
btn[2].onclick =  function ()
{
    main.style.transform = 'translateX(-200%)';
    main2.style.transform = 'translateX(-200%)';
    main3.style.transform = 'translateX(-200%)';
}

slider= [sub_main1,sub_main2,sub_main3,sub_main4,sub_main5];
console.log(slider);

// let currentIndex = 0;
// function showSlide(index) {
    //     sub_main1.style.opacity = '1';
    // }
    // function nextSlide() {
        //     if (slider < slider.length - 1) {
//         currentIndex++;
//         showSlide(currentIndex);
//     }
// }
// function prevSlide() {
    //     if (currentIndex > 0) {
        //         currentIndex--;
        //         showSlide(currentIndex);
        //     }
        // }
function rightClick()
{
    sub_main1.style.opacity = '0';
    sub_main2.style.opacity = '1';
}

function leftClick()
{
    sub_main1.style.opacity = '1';
    sub_main2.style.opacity = '0';
}

function scroll()
{
    if(document.documentElement.scrollTop > 20)
    {
        nav.style.backgroundColor = 'white';
    }
    else
    {
        nav.style.backgroundColor = 'transparent';
    }
}

function toggleMenu()
{
    ul_list.classList.toggle('show');
    bars.classList.toggle('fa-xmark');
}

// infinite slider start
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logo-slider").appendChild(copy);
// infinite slider end