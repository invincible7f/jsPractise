
// ------------------------------------------------------------------Header----------------------------------------------------------------------

const nav = document.createElement('nav');
nav.classList.add('navigation');
nav.innerHTML= "<ul><li class ='nav'><a href=''>Головна</a ></li><li class ='nav'><a href=''>Про нас</a></li><li class ='nav'><a href=''>Контакти</a></li></ul>";
document.querySelector("body").append(nav)



nav.style.display = "flex";

nav.style.justifyContent= "right";
nav.style.height = "60px";
nav.style.width = "100%"
nav.style.backgroundColor = " rgb(244, 249, 247)";


nav.firstChild.style.display = "flex";
nav.firstChild.style.flexWraping = "wrap"
nav.firstChild.style.justifyContent = "center";
nav.firstChild.style.marginRight="100px" 

const li = document.querySelectorAll(".nav");

for( let i = 0; i < li.length; i++){

 li[i].style.textDecoration = 'none';
 li[i].style.listStyle = "none";
 li[i].style.margin = "20px";
 li[i].style.marginTop = "20px"
 li[i].style.cursor = "default"
 li[i].firstChild.style.textDecoration = 'none';
 li[i].firstChild.style.color = "black"
}


// -------mouseEvents------------
for( let i = 0; i < li.length; i++){

    li[i].onmouseover = function(){
     
     li[i].style.fontSize = "18px";
     
 
    }

    li[i].onmouseleave  = function(){
     
        li[i].style.fontSize = "";
        
    
       }
}


// ------------------------------------------------------------------Main----------------------------------------------------------------------



const main = document.createElement("main");
document.querySelector(".navigation").after(main)

// ------------------------------------------------------------------Section1----------------------------------------------------------------------

const sectionMainPage = document.createElement("section")
sectionMainPage.classList.add("mainPage")
document.querySelector('main').append(sectionMainPage)






const h1 = document.createElement("h1") ;
h1.classList.add("title")
h1.innerHTML = "Онлайн-університет <br>затребуваних професій"
document.querySelector(".mainPage").append(h1);



const shadowDiv = document.createElement("div");
shadowDiv.classList.add("shadowDiv");
document.querySelector(".title").before(shadowDiv)

shadowDiv.style.position ="absolute";
shadowDiv.style.backgroundColor = "black";
shadowDiv.style.width = "100%";
shadowDiv.style.height = "902px";
shadowDiv.style.opacity = 0.4;
shadowDiv.style.zIndex = 0;



const buttonBox = document.createElement("div");
 buttonBox.classList.add("buttonBox");
 document.querySelector(".mainPage").append(buttonBox);
  
 const p = document.createElement("p")
 p.textContent = "Наші судження";
 document.querySelector(".buttonBox").before(p)


 for(let i =0; i<4;i++){

  
       switch(i){

        case 0:
     
        const designButton = document.createElement("div");
        designButton.classList.add("mainPageButton");
        designButton.innerHTML ="<a href=''>Дизайн</a>"
        document.querySelector(".buttonBox").append(designButton)
        
        designButton.addEventListener("mouseover", function(){
            this.style.backgroundColor ="white";
        })
            
        
        designButton.addEventListener("mouseout", function(){
                this.style.backgroundColor ="";
    
        })



           break
     
         
     
         case 1:
            const programButton = document.createElement("div");
            programButton.classList.add("mainPageButton");
            programButton.classList.add("programmingButton");
            programButton.innerHTML ="<a href=''>Програмування</a>"
            document.querySelector(".buttonBox").append(programButton)
            
            programButton.addEventListener("mouseover", function(){
                this.style.backgroundColor ="white";
    
    
            });


            programButton.addEventListener("mouseout", function(){
                this.style.backgroundColor ="";
    
        });
               break
      
     
     
     
     
         case 2:
     
         const marketingButton = document.createElement("div");
         marketingButton.classList.add("mainPageButton");
         marketingButton.innerHTML ="<a href=''>Маркетинг</a>"
         document.querySelector(".buttonBox").append(marketingButton) 
         
         marketingButton.addEventListener("mouseover", function(){
            this.style.backgroundColor ="white";

        });    
        
        
        marketingButton.addEventListener("mouseout", function(){
            this.style.backgroundColor ="";

        });
         break
     
         case 3:
     
         const bisnesButton= document.createElement("div");
         bisnesButton.classList.add("mainPageButton");
         bisnesButton.innerHTML ="<a href=''>Бізнес</a>"
         document.querySelector(".buttonBox").append(bisnesButton)   
         
         bisnesButton.addEventListener("mouseover", function() {
            this.style.backgroundColor ="white";

        });      


        bisnesButton.addEventListener("mouseout", function(){
            this.style.backgroundColor ="";

        });
         break
     
        
     
       }

 }



// ---------------------------------------------------------------Section2----------------------------------------------

const page2 = document.createElement("section");
page2.classList.add("page2");
document.querySelector(".mainPage").after(page2);

for(let i = 0; i < 2;i++ ){
switch(i){

  case 0:
    let page2Block1 = document.createElement('div')
        page2Block1.classList.add("page2Block")
        page2Block1.classList.add("page2Block1")
        document.querySelector(".page2").append(page2Block1)
        break


        case 1:
            let page2Block2 = document.createElement('div')
                page2Block2.classList.add("page2Block")
                page2Block2.classList.add("page2Block2")
                document.querySelector(".page2").append(page2Block2)
                break

}

}


const h2 = document.createElement("h2")
h2.textContent = "Десять найпопулярніших курсів для іноземних студентів"
document.querySelector(".page2").firstChild.append(h2);

let blockImg = document.createElement('div')
blockImg.classList.add("blockImg")
document.querySelector(".page2").firstChild.append(blockImg)


let paragraf = document.createElement('p');
paragraf.textContent ="Sample text. Click to select the text box. Click again or double click to start editing the text."
document.querySelector('.page2').firstChild.append(paragraf)


for(let i = 0;i<10; i++){

switch(i){

 case 0:
    const h3 =document.createElement("h3");
    h3.classList.add("courses");
    h3.classList.add("course1");
    h3.textContent = "Бізнес-дослідження"
    document.querySelector(".page2").lastChild.append(h3)
 break

 case 1:
    const h31 =document.createElement("h3");
    h31.classList.add("courses");
    h31.textContent = "Загальний Бізнес"
    document.querySelector(".page2").lastChild.append(h31)
 break

 case 2:
    const h32 =document.createElement("h3");
    h32.classList.add("courses");
    h32.textContent = "Фінанси"
    document.querySelector(".page2").lastChild.append(h32)
 break

 case 3:
    const h33 =document.createElement("h3");
    h33.classList.add("courses");
    h33.textContent = "Менеджмент"
    document.querySelector(".page2").lastChild.append(h33)
 break

 case 4:
    const h34 =document.createElement("h3");
    h34.classList.add("courses");
    h34.textContent = "Право"
    document.querySelector(".page2").lastChild.append(h34)
 break

 case 5:
    const h35 =document.createElement("h3");
    h35.classList.add("courses");
    h35.textContent = "Комп'ютерні науки"
    document.querySelector(".page2").lastChild.append(h35)
 break

 case 6:
    const h36 =document.createElement("h3");
    h36.classList.add("courses");
    h36.textContent = "Економіка"
    document.querySelector(".page2").lastChild.append(h36)
 break


 case 7:
    const h37 =document.createElement("h3");
    h37.classList.add("courses");
    h37.textContent = "Маркетинг"
    document.querySelector(".page2").lastChild.append(h37)
 break

 case 8:
    const h38 =document.createElement("h3");
    h38.classList.add("courses");
    h38.textContent = "Бухгалтерський облік"
    document.querySelector(".page2").lastChild.append(h38)
 break

 case 9:
    const h39 =document.createElement("h3");
    h39.classList.add("courses");
    h39.textContent = "Дизайн"
    document.querySelector(".page2").lastChild.append(h39)
 break


}





}

let arrow = document.createElement('img');
arrow.classList.add("arrowImage");
arrow.setAttribute("src","arrow_next_right_icon.png");
document.querySelector(".page2").lastChild.append(arrow);






// -----------------------------------------------------------Section3--------------------------------------------


let elementHTML = null;
createHtmlElement(elementHTML,"section","main","page3");


 for(let i = 0; i < 2;i++ ){
   switch(i){
   
     case 0:
      createHtmlElement(elementHTML,"div",".page3","page3_Block1")
           break
   
   
           case 1:
            createHtmlElement(elementHTML,"div",".page3","page3_Block2")

   
   }
   
   }

   elementHTML = null;
   for(let i = 0; i < 4;i++ ){
      switch(i){
      
        case 0:
         createHtmlElement(elementHTML,"div",".page3_Block1","page3Image")
          
         break
      
      
              case 1:
               createHtmlElement(elementHTML,"div",".page3_Block1","page3Image")
            
               break

               case 2:
               createHtmlElement(elementHTML,"div",".page3_Block1","page3Image")
             
               break
               case 3:
                  createHtmlElement(elementHTML,"div",".page3_Block1","page3Image")
                
                  break
      
      
      }
   }
   elementHTML=null;
   elementHTML = document.querySelectorAll(".page3Image")
   
   for(let i = 0; i < elementHTML.length;i++ ){
      switch(i){
      
        case 0:
         elementHTML[i].style.backgroundImage= "url('student-posing-group-study-session-with-colleagues.jpg')"
         giveAtribute(elementHTML[i],"class", "page3Img1")
         elementHTML[i].style.marginTop="70px"
         break
      
      
              case 1:
               elementHTML[i].style.backgroundImage= "url('young-students-watching-laptop.jpg')"
               elementHTML[i].style.marginTop="170px"
               break

               case 2:
                  elementHTML[i].style.backgroundImage= "url('front-view-smiley-student-learning.jpg')"
                  elementHTML[i].style.marginTop="70px"
               break

               case 3:
                  elementHTML[i].style.backgroundImage= "url('happy-students-with-laptop-library.jpg')"
                  elementHTML[i].style.marginTop="170px"

               break


      
      
      }
   }




   for(let i = 0; i < 4;i++ ){
      switch(i){
      
        case 0:
         createHtmlElement(elementHTML,"div",".page3_Block2","page3_BlockInfo",
            "<img src='idea-4046911.png'</img><h3>Як ми вчимо</h3><p>Duis aute irure dolor в репрезендерите в сладострастном velit esse cillum dolore eu fugiat nulla pariatur</p><a href=''>Більше</a>")
           
         break
      
      
              case 1:
               createHtmlElement(elementHTML,"div",".page3_Block2","page3_BlockInfo",
                    "<img src='rezult.png'</img><h3>Отримані результати</h3><p>Duis aute irure dolor в репрезендерите в сладострастном velit esse cillum dolore eu fugiat nulla pariatur</p><a href=''>Більше</a>"
               )
            
               break

               case 2:
               createHtmlElement(elementHTML,"div",".page3_Block2","page3_BlockInfo",
                  "<img src='kyrsu.png'</img><h3>Найкращі курси</h3><p>Duis aute irure dolor в репрезендерите в сладострастном velit esse cillum dolore eu fugiat nulla pariatur</p><a href=''>Більше</a>"

               )
             
               break
               case 3:
                  createHtmlElement(elementHTML,"div",".page3_Block2","page3_BlockInfo",
                     "<img src='support-8345931.png'</img><h3>Служба підтримки</h3><p>Duis aute irure dolor в репрезендерите в сладострастном velit esse cillum dolore eu fugiat nulla pariatur</p><a href=''>Більше</a>"

                  )
                
                  break
      
      
      }
   }

// -------------------------------------------------Section4------------------------------------


createHtmlElement(elementHTML,"section","main","page4");
createHtmlElement(elementHTML,"div",".page4","page4_img");
createHtmlElement(elementHTML,"div",".page4","page4_CheckMark");
createHtmlElement(elementHTML,"div",".page4","page4_TextBlock");



for(let i = 0; i < 4;i++ ){
   switch(i){
   
     case 0:
      createHtmlElement(elementHTML,"p",".page4_CheckMark",null,"🗸");

        
      break
   
   
           case 1:
            createHtmlElement(elementHTML,"p",".page4_CheckMark",null,"🗸");
         
         
            break

            case 2:
               createHtmlElement(elementHTML,"p",".page4_CheckMark",null,"🗸");

            
          
            break
            case 3:
               createHtmlElement(elementHTML,"p",".page4_CheckMark",null,"🗸");

               
             
               break
   
   
   }
}


for(let i = 0; i < 4;i++ ){
   switch(i){
   
     case 0:
      createHtmlElement(elementHTML,"p",".page4_TextBlock",null,
         "Більшість овочів від природи містять мало жирів та калорій. Клацніть ще раз або двічі клацніть, щоб розпочати редагування тексту. Duis aute irure dolor у репрехендериті в хтивому велете.");

        
      break
   
   
           case 1:
            createHtmlElement(elementHTML,"p",".page4_TextBlock",null,
               "Овочі є важливим джерелом багатьох поживних речовин, у тому числі калію, харчових волокон, фолієвої кислоти (фолієвої кислоти), вітаміну А і вітаміну С.");
         
         
            break

            case 2:
               createHtmlElement(elementHTML,"p",".page4_TextBlock",null,
                  "Диета, богатая калием, может помочь поддерживать нормальное кровяное давление. Duis aute irure dolor в репрехендерит в сладострастном velit esse cillum dolore eu fugiat nulla pariatur.");

            
          
            break
            case 3:
               createHtmlElement(elementHTML,"p",".page4_TextBlock",null,
                  "Диета, богатая калием, может помочь поддерживать нормальное кровяное давление. Duis aute irure dolor в репрехендерит в сладострастном velit esse cillum dolore eu fugiat nulla pariatur.");

               
             
               break
   
   
   }
}

const h2_1 = document.createElement("h2");
h2_1.classList.add("infoTitle");
h2_1.innerHTML="Що таке лайф-коуч"
document.querySelector(".page4_img").before(h2_1) 

// --------------------------------------------------section5-------------------------------


createHtmlElement(elementHTML,"section","main","page5");
createHtmlElement(elementHTML,"div",".page5","page5_BLock1");
createHtmlElement(elementHTML,"div",".page5","page5_imgBlock");
createHtmlElement(elementHTML,"div",".page5","page5_textBlock",
"<h2>Лидер в образовании для руководителей</h2><p>Duis aute irure dolor в репрехендерит в сладострастном velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, загорелся in culpa qui officia deserunt mollit anim id est Laborum.</p><div class='page5_textBlockButton'><a href=''>ПОДРОБНЕЕ</a></div>");
createHtmlElement(elementHTML,"div",".page5","page5_imgBlock2");



// ----------------------------------------------------section6-----------------------



createHtmlElement(elementHTML,"section","main","page6");
createHtmlElement(elementHTML,"div",".page6","page6_BLockBackground1B");
createHtmlElement(elementHTML,"div",".page6","page6_BLockBackground2Y");
createHtmlElement(elementHTML,"div",".page6","page6_BLockImg");
createHtmlElement(elementHTML,"div",".page6","page6_BLockWithVarBlock");

for (let i = 0; i<3;i++ ){

switch(i){

   case 0:
      createHtmlElement(elementHTML,"div",".page6_BLockWithVarBlock","varBlock","<div class='varImg'></div><h2>Компьютери та ІТ</h2> ");

   break

   case 1:
      createHtmlElement(elementHTML,"div",".page6_BLockWithVarBlock","varBlock","<div class='varImg'></div><h2>Аналітика Данних</h2> ");

   break

   case 2:
      createHtmlElement(elementHTML,"div",".page6_BLockWithVarBlock","varBlock","<div class='varImg'></div><h2>Розробка</h2> ");

   break





}



}