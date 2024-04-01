// const x="привет";
// alert(x);
// print(x);
// let age= prompt("сколько тебе лет?");
// alert(`ваш возраст${age}`)
// let x= confirm("подтвердите пороль")
// let x=90
// z=3+x
// c=3*x
// d=x/6
// s=x-9
// q=x%4
// w=x**2
// alert(`значение ${z} ${c} ${d} ${s} ${q} ${w}`)
// let x=20
// if(x>10){
//     alert("x>10")
// }
// else if(x<10){
//     alert("x<10")
// }
// let age= prompt("сколько вам лет");
// if (age>18){
//     let x=confirm("вы уверены что вам больше 18?")}
// else if(age<18){
//     let x=confirm("вход запрещен")
// }
// const zag=document.querySelector(".zag")

// zag.addEventListener("click", function(event){
//    zag.style.color="#c436b8" 
// })
const buttonleft=document.querySelector(".button_left")
const buttonright=document.querySelector(".button_right")
const screen_krypt=document.querySelector(".screen_krypt")
const zag3=document.querySelector(".zag3")
const one_two=document.querySelector(".one_two")
const text_2=document.querySelector(".text_2")
const number=document.querySelector(".number")
const header=document.querySelector(".header")
let one=0
function changeScreen(one){
   if (one==1){
      screen_krypt.style.background="url(fon4.png)"
      zag3.innerHTML="Towers of Time"
      text_2.innerHTML="Башни Времени - это постоянно меняющиеся башни с различными модификаторами сражений и соперниками. При первом входе в режим вы получите туториал, который мы подробно рассмотрим в следующем разделе.Однако после преодоления таких Tutorial башен вам будет предложены уже основные варианты башен,  в которых вы играете с разнообразными наборами условий и модификаторов."
      one_two.style.background="url(0203.png) no-repeat"
      number.style.background="url(02big.png) no-repeat"
      number.style.left="80%"
   }                                                     
   
    else if (one==0){
      screen_krypt.style.background="url(krypt.png)"
      zag3.innerHTML="Krypt"
      text_2.innerHTML="Все головоломки и ключи. Крипта в Mortal Kombat 11 сильно отличается своих аналогов из предыдущих частей. Раньше это была небольшая локация, которую мы исследовали с видом от первого лица и открывали различные надгробия и сундуки, чтобы зарабатывать награды в виде дополнительных скинов и фаталити.в."
      one_two.style.background="url(0103.png) no-repeat"
      number.style.background="url(01.png) no-repeat"  
      number.style.left="85%"
      number.style.left="80%"
   }
   else if (one==2){
      screen_krypt.style.background="url(fon_online.png)"
      zag3.innerHTML="Online"
      text_2.innerHTML="В онлайн мк11 можно  получить уникальные скины, зарабатывать рейтинг и  сразится против профессиональных игроков ."
      one_two.style.background="url(0303.png) no-repeat"
      number.style.background="url(03big.png) no-repeat"  
     
   }
}

buttonleft.addEventListener("click", function(event){
   
   if (one==0){
      one=2
      changeScreen(one)
   }
   else {
      one=one-1
      changeScreen(one)
   }

   })
   buttonright.addEventListener("click", function(event){
      if (one==2){
      one=0
      changeScreen(one)
   }
   else {
      one=one+1
      changeScreen(one)
   }
   
   
   
      })

const crest=document.querySelector(".crest")
const button9=document.querySelector(".button9")
const pop_up=document.querySelector(".pop_up")
const pop_up_bg=document.querySelector(".pop_up_bg")
let nik="test"
let gmail="text@gmail.com"
const input1=document.querySelector(".input1")
const input2=document.querySelector(".input2")
let text12=document.querySelector(".text12")
button9.addEventListener("click", function(event){
   event.preventDefault()
   pop_up_bg.classList.add("active_pop_up")
   pop_up.classList.add("active2pop_up")
   gmail=input1.value
   nik=input2.value
   text12.innerHTML=`Дорогой ${nik}, Вы успешно подписались на рассылку о новостях в видеоиграх, вся информация будет отправленна на вашу почту:${gmail}`

   })

crest.addEventListener("click", function(event){
   pop_up_bg.classList.remove("active_pop_up")
   pop_up.classList.remove("active2pop_up")
})

