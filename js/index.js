/// <reference types="../@types/jquery" />

var svg=document.querySelector('.svg')


///////////////////////////////////////// side bar/////////////////////////////////////
let infoWidth=$('.info').outerWidth()
$('.info').animate({marginLeft:`-${infoWidth}px`},500)
$('#openIcon').on('click',function(){
           
    let left= $('.info').css('marginLeft')
    if(left==='0px')
    {
        $('#openIcon').removeClass('fa-x')
        $('#openIcon').addClass('fa-align-justify')
     $('.info').animate({marginLeft:`-${infoWidth}px`},500)
    }
    else
    {
       $('#openIcon').removeClass('fa-align-justify')
        $('#openIcon').addClass('fa-x')
     $('.info').animate({marginLeft:`0px`},500)

    }
 })
//////////////////////////////////////////////////////home///////////////////////////////

async function get()
{
    svg.style.display = 'flex'; // Show loading indicator
    let respons= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let data=await respons.json()
    svg.style.display = 'none'; // Hide loading indicator
    display(data.meals,'rowhome')
    
}
get()

function display(list,row)
{
    let container=``
    for(let i=0;i<list.length;i++)
    {
        container+=`  <div class="col-md-3 meal" id="${list[i].strMeal}">
                    <figure class="inner position-relative" id="${list[i].strMeal}">
                        <img src="${list[i].strMealThumb}" class="w-100"id="${list[i].strMeal}" >
                        <figcaption class="layer  bg-white d-flex align-items-center p-2"  id="${list[i].strMeal}">
                            <h3 class="text-black" id="${list[i].strMeal}">${list[i].strMeal}</h3>
                        </figcaption>
                    </figure>
                </div>`

    }
    document.querySelector(`.${row}`).innerHTML=container
}

//////////////////////////////detatlislayer//////////////////
$(document).on('click','.meal',function(e){
    $('.detaliesLayer').removeClass('d-none')
    $('.areadetalies').addClass('d-none')
    $('.arealayer').addClass('d-none')
    $('.categorydetalies').addClass('d-none')
    $('.searchlayer').addClass('d-none')
    $('.categorylayer').addClass('d-none')
    $('.ingredientslayer').addClass('d-none')
    $('.ingredientsdetalies').addClass('d-none')
    $('.contactlayer').addClass('d-none')
    $('body').css('overflow','hidden')
    let name=e.target.getAttribute('id') 
    async function getdetalies(){
        svg.style.display = 'flex'; // Show loading indicator
        let respons=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        let data=await respons.json()
        svg.style.display = 'none'; // Hide loading indicator
       console.log(data.meals)
       
       let container=`<div class="col-md-4">
                <img src="${data.meals[0].strMealThumb}" class="w-100">
                <h2 class="text-white">${data.meals[0].strMeal}</h2>
            </div>
            <div class="col-md-8 text-white">
                <h2>Instructions</h2>
                <p>${data.meals[0].strInstructions}</p>
                    <h2>Area : ${data.meals[0].strArea}</h2>
                    <h2>Category : ${data.meals[0].strCategory}</h2>
                    <h2>Recipes :</h2>
                    <div>
                    <span class="1">${data.meals[0].strMeasure1}${data.meals[0].strIngredient1}</span>
                    <span class="2">${data.meals[0].strMeasure2}${data.meals[0].strIngredient2}</span>
                    <span class="3">${data.meals[0].strMeasure3}${data.meals[0].strIngredient3}</span>
                    <span class="4">${data.meals[0].strMeasure4}${data.meals[0].strIngredient4}</span>
                    <span class="5">${data.meals[0].strMeasure5}${data.meals[0].strIngredient5}</span>
                    </div>
                    <br/>
                    <div>
                    <span class="6">${data.meals[0].strMeasure6}${data.meals[0].strIngredient6}</span>
                    <span class="7">${data.meals[0].strMeasure7}${data.meals[0].strIngredient7}</span>
                    <span class="8">${data.meals[0].strMeasure8}${data.meals[0].strIngredient8}</span>
                    <span class="9">${data.meals[0].strMeasure9}${data.meals[0].strIngredient9}</span>
                    <span class="10">${data.meals[0].strMeasure10}${data.meals[0].strIngredient10}</span>
                    </div>
                    <br/>
                    <div>
                    <span class="11">${data.meals[0].strMeasure11}${data.meals[0].strIngredient11}</span>
                    <span class="12">${data.meals[0].strMeasure12}${data.meals[0].strIngredient12}</span>
                    <span class="13" >${data.meals[0].strMeasure13}${data.meals[0].strIngredient13}</span>
                    </div>
                    <h2 class="mt-2 mb-3">Tags :</h2>
                    <spna class="sapnTag">${data.meals[0].strTags}</spna>
                    <div>
                   <a href="${data.meals[0].strSource}" class="text-decoration-none "><button class="source p-2">Source</button></a>
                    <a href="${data.meals[0].strYoutube}" class="text-decoration-none"><button class="youtube p-2">Youtube</button></a>
                    </div>

            </div>`
            
                
            document.querySelector('.rowlayer').innerHTML=container
             
            if(data.meals[0].strTags==null)
            {
                $('.sapnTag').addClass('d-none')
            }
          
                if(data.meals[0].strMeasure13==""||data.meals[0].strMeasure13==" ")
                {
                    $('.13').addClass('d-none')
                }
                if(data.meals[0].strMeasure12==""||data.meals[0].strMeasure12==" ")
                {
                    $('.12').addClass('d-none')
                }
                if(data.meals[0].strMeasure11==""||data.meals[0].strMeasure11==" ")
                {
                    $('.11').addClass('d-none')
                }
                if(data.meals[0].strMeasure10==""||data.meals[0].strMeasure10==" ")
                {
                    $('.10').addClass('d-none')
                }
                if(data.meals[0].strMeasure9==""||data.meals[0].strMeasure9==" ")
                {
                    $('.9').addClass('d-none')
                }
                if(data.meals[0].strMeasure8==""||data.meals[0].strMeasure8==" ")
                {
                    $('.8').addClass('d-none')
                }
                if(data.meals[0].strMeasure7==""||data.meals[0].strMeasure7==" ")
                {
                    $('.7').addClass('d-none')
                }
                if(data.meals[0].strMeasure6==""||data.meals[0].strMeasure6==" ")
                {
                    $('.6').addClass('d-none')
                }
                if(data.meals[0].strMeasure5==""||data.meals[0].strMeasure5==" ")
                {
                    $('.5').addClass('d-none')
                }
                if(data.meals[0].strMeasure4==""||data.meals[0].strMeasure4==" ")
                {
                    $('.4').addClass('d-none')
                }
                if(data.meals[0].strMeasure3==""||data.meals[0].strMeasure3==" ")
                {
                    $('.3').addClass('d-none')
                }
                if(data.meals[0].strMeasure2==""||data.meals[0].strMeasure2==" ")
                {
                    $('.2').addClass('d-none')
                }
                if(data.meals[0].strMeasure1==""||data.meals[0].strMeasure1==" ")
                {
                    $('.1').addClass('d-none')
                }
           
    }
    getdetalies()  
})
$('.xmark').on('click',function(){
    $('.detaliesLayer').addClass('d-none')
    $('body').css('overflow','scroll')

})

/////////////////////////////////searchlayer////////////////////////

$('.search').on('click',function(){
    $('body').css('overflow','hidden')
    $('.searchlayer').removeClass('d-none')
    $('.categorylayer').addClass('d-none')
    $('.categorydetalies').addClass('d-none')
    $('.arealayer').addClass('d-none')
    $('.areadetalies').addClass('d-none')
    $('.ingredientslayer').addClass('d-none')
    $('.detaliesLayer').addClass('d-none')
    $('.ingredientsdetalies').addClass('d-none')
    $('.contactlayer').addClass('d-none')

})
$('.back').on('click',function()
{
    $('.searchlayer').addClass('d-none')
    $('body').css('overflow','scroll')
})

async function searchbyname(value)
{
    svg.style.display = 'flex'; // Show loading indicator
    let respons=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    let data=await respons.json()
    svg.style.display = 'none'; // Hide loading indicator
    display(data.meals,'rowsearch')

   
}
async function searchbyletter(value)
{

    let respons=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
    let data=await respons.json()

    display(data.meals,'rowsearch')
}

/////////////////////////////////////categoryy/////////////////////
$('.categories').on('click',function(){
    $('.searchlayer').addClass('d-none')
   $('.categorylayer').removeClass('d-none')
   $('.categorydetalies').addClass('d-none')
   $('.arealayer').addClass('d-none')
   $('.areadetalies').addClass('d-none')
   $('.ingredientslayer').addClass('d-none')
   $('.detaliesLayer').addClass('d-none')
   $('.ingredientsdetalies').addClass('d-none')
   $('.contactlayer').addClass('d-none')
    getcategories()
})
async function getcategories(){
    svg.style.display = 'flex'; // Show loading indicator
    let respons=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let data=await respons.json()
    svg.style.display = 'none'; // Hide loading indicator
    displaycategories(data.categories)
}

function displaycategories(list){
    let container=``;
    for(let i=0;i<list.length;i++){
        container+=` <div class="col-md-3 mealcategory" id="${list[i].strCategory}">
                <figure class="inner position-relative" id="${list[i].strCategory}">
                    <img src="${list[i].strCategoryThumb}" class="w-100 " id="${list[i].strCategory}">
                    <figcaption class="layer  bg-white text-center overflow-hidden" id="${list[i].strCategory}">
                        <h3 class="text-black" id="${list[i].strCategory}">${list[i].strCategory}</h3>
                        <p class="text-black overflow-hidden" id="${list[i].strCategory}">${list[i].strCategoryDescription}</p>
                    </figcaption>
                </figure>
            </div>`
    }
            document.querySelector('.rowcategory').innerHTML=container
}

$(document).on('click','.mealcategory',function(e){
    $('.categorydetalies').removeClass('d-none')
    $('.searchlayer').addClass('d-none')
    $('.categorylayer').addClass('d-none')
    $('.arealayer').addClass('d-none')
    $('.areadetalies').addClass('d-none')
    $('.ingredientslayer').addClass('d-none')
    $('.detaliesLayer').addClass('d-none')
    $('.ingredientsdetalies').addClass('d-none')
    $('.contactlayer').addClass('d-none')

    let id=e.target.getAttribute('id')
    async function getdetaliesCategory(){
        svg.style.display = 'flex'; // Show loading indicator
        let respons= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        let data=await respons.json()
        svg.style.display = 'none'; // Hide loading indicator
        display(data.meals,'rowcategorydetalies')
    }
    getdetaliesCategory()
    

})

////////////////////////////Area////////////////////////////////

$('.area').on('click',function(){
    $('.arealayer').removeClass('d-none')
    $('.categorydetalies').addClass('d-none')
    $('.searchlayer').addClass('d-none')
    $('.categorylayer').addClass('d-none')
    $('.areadetalies').addClass('d-none')
    $('.ingredientslayer').addClass('d-none')
    $('.detaliesLayer').addClass('d-none')
    $('.ingredientsdetalies').addClass('d-none')
    $('.contactlayer').addClass('d-none')
    getarea()
})
async function getarea()
{
    svg.style.display = 'flex'; // Show loading indicator
    let respons=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let data=await respons.json()
    svg.style.display = 'none'; // Hide loading indicator
    let container=``;
    for(let i=0;i<data.meals.length;i++)
    {
        container+=`  <div class="col-md-3 mt-2 mealarea">
                <div onclick="getAreaMeals('${data.meals[i].strArea}')" class="rounded-2 text-center cursor-pointer text-white">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${data.meals[i].strArea}</h3>
               </div>
            </div>`
    }
    document.querySelector('.rowarea').innerHTML=container
}
async function getAreaMeals(value)
{
    $('.areadetalies').removeClass('d-none')
    $('.arealayer').addClass('d-none')
    $('.categorydetalies').addClass('d-none')
    $('.searchlayer').addClass('d-none')
    $('.categorylayer').addClass('d-none')
    $('.ingredientslayer').addClass('d-none')
    $('.detaliesLayer').addClass('d-none')
    $('.ingredientsdetalies').addClass('d-none')
    $('.contactlayer').addClass('d-none')
    svg.style.display = 'flex'; // Show loading indicator
    let respons=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`)
    let data=await respons.json()
    svg.style.display = 'none'; // Hide loading indicator
    display(data.meals,'rowareadetalies')
    console.log(data.meals)
    
}
///////////////////////ingredients/////////////////////////
$('.ingredients').on('click',function(){
   getingredients()
})
async function getingredients()
{
    $('.ingredientslayer').removeClass('d-none')
    $('.areadetalies').addClass('d-none')
    $('.arealayer').addClass('d-none')
    $('.categorydetalies').addClass('d-none')
    $('.searchlayer').addClass('d-none')
    $('.categorylayer').addClass('d-none')
    $('.detaliesLayer').addClass('d-none')
    $('.ingredientsdetalies').addClass('d-none')
    $('.contactlayer').addClass('d-none')
    svg.style.display = 'flex'; // Show loading indicator
    let respon=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let data=await respon.json()
    svg.style.display = 'none'; // Hide loading indicator
    let container=``;
    for(let i=0;i<20;i++)
    {
        container+=` <div class="col-md-3 mt-2 overflow-hidden h-208 ">
            <div onclick="getIngredientsMeals('${data.meals[i].strIngredient}')" class="rounded-2 ingediensmeal text-center cursor-pointer text-white overflow-hidden">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3>${data.meals[i].strIngredient}</h3>
                <p>${data.meals[i].strDescription}</p>
        </div>

          </div>`
    }
    document.querySelector('.rowngredients').innerHTML=container

}

async function getIngredientsMeals(value){
    $('.ingredientsdetalies').removeClass('d-none')
    $('.ingredientslayer').addClass('d-none')
    $('.areadetalies').addClass('d-none')
    $('.arealayer').addClass('d-none')
    $('.categorydetalies').addClass('d-none')
    $('.searchlayer').addClass('d-none')
    $('.categorylayer').addClass('d-none')
    $('.detaliesLayer').addClass('d-none')
    $('.contactlayer').addClass('d-none')
    svg.style.display = 'flex'; // Show loading indicator
    let respon=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`)
    let data= await respon.json()
    svg.style.display = 'none'; // Hide loading indicator
    display(data.meals,'rowingredientsdetalies')

}

/////////////////////////////////contact-us//////////////
/////////////////////////////////contact-us//////////////
$('.contact').on('click',function(){
    $('.contactlayer').removeClass('d-none')
    $('.ingredientslayer').addClass('d-none')
    $('.areadetalies').addClass('d-none')
    $('.arealayer').addClass('d-none')
    $('.categorydetalies').addClass('d-none')
    $('.searchlayer').addClass('d-none')
    $('.categorylayer').addClass('d-none')
    $('.detaliesLayer').addClass('d-none')
    $('.ingredientsdetalies').addClass('d-none')

})


// Get elements
let Name = document.getElementById('name');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let repass = document.getElementById('Repassword');
let phone = document.getElementById('phone');
let age = document.getElementById('age');
let inputs = document.querySelectorAll('input');
let alertName = document.querySelector('.alertname');
let alertEmail = document.querySelector('.alertemail');
let alertPhone = document.querySelector('.alertphone');
let alertAge = document.querySelector('.alertage');
let alertPass = document.querySelector('.alertpass');
let alertRepass = document.querySelector('.alertrepass');
const formBtn = document.querySelector(".form-btn");


// Regular expressions
let regularName = /^[a-zA-Zأ-ي]+$/;
let regularEmail = /^[a-z]{3,}@(yahoo|gmail)\.com$/i;
let regularPhone = /^01[0125][0-9]{8}$/;
let regularAge = /^(0?[1-9]|[1-9][0-9]|[1-3][0-9]{2}|400)$/;
let regularPass = /^[a-zA-Z0-9]{8,}/;

let E;
let N;
let P;
let A;
let PA;
let RPA;
email.addEventListener('keyup',function(){
    if(regularEmail.test(email.value))
        {
          alertEmail.classList.replace('d-block', 'd-none')
          E=true;
          valid()
        }
    else
    {
       alertEmail.classList.replace('d-none', 'd-block')
       E=false
       valid()

    }
})
Name.addEventListener('keyup',function(){
    if(regularName.test(Name.value))
        {
          alertName.classList.replace('d-block', 'd-none')
          N=true;
          valid()
        }
    else
    {
       alertName.classList.replace('d-none', 'd-block')
       N=false;
       valid()

    }
})
phone.addEventListener('keyup',function(){
    if(regularPhone.test(phone.value))
        {
          alertPhone.classList.replace('d-block', 'd-none')
          P=true;
          valid()
        }
    else
    {
       alertPhone.classList.replace('d-none', 'd-block')
       P=false;
       valid()

    }
})
age.addEventListener('keyup',function(){
    if(regularAge.test(age.value))
        {
          alertAge.classList.replace('d-block', 'd-none')
          A=true;
          valid()
        }
    else
    {
       alertAge.classList.replace('d-none', 'd-block')
       A=false;
       valid()

    }
})
pass.addEventListener('keyup',function(){
    if(regularPass.test(pass.value))
        {
          alertPass.classList.replace('d-block', 'd-none')
          PA=true;
          valid()
        }
    else
    {
       alertPass.classList.replace('d-none', 'd-block')
       PA=false;
       valid()

    }
})
repass.addEventListener('keyup',function(){
    if(pass.value==repass.value)
        {
          alertRepass.classList.replace('d-block', 'd-none')
          RPA=true;
          valid()
        }
    else
    {
       alertRepass.classList.replace('d-none', 'd-block')
       RPA=false;
       valid()

    }
})

function valid(){


if(N&&P&&A&&PA&&RPA&&E==true)
{
    console.log('VA')
       formBtn.removeAttribute("disabled");


}
else{
console.log("un")
            formBtn.setAttribute("disabled", "");

}
}




