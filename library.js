let cartIcon =document.querySelector("#cart-icon");
let cart =document.querySelector(".cart");
let closecart =document.querySelector("#close-cart");

cartIcon.onclick=() =>{
    cart.classList.add("active")
};
closecart.onclick=() =>{
    cart.classList.remove("active")
};
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded",  ready);
} else {
    ready();
}
 

function ready() {
    var reomveCartButtons =document.getElementsByClassName('cart-remove');
    console.log(reomveCartButtons);
    for( var i = 0; i < reomveCartButtons.length; i++){
        var button = reomveCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }









    var quantityInputs =document.getElementsByClassName("cart-quantity");
    for(var i=0; i < quantityInputs.length; i++){
        var input =  quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    var addCart =document.getElementsByClassName('add-cart');
    for(var i=0; i < addCart.length; i++){
    var button =  addCart[i];
    button.addEventListener("click", addCartClicked);
    }

    document.getElementsByClassName('btn-buy')[0]
    .addEventListener('click', buyButtonClicked)

}
function buyButtonClicked() {
    alert("Your Books has been registered");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    
    updatetotal();
}




function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}















function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value =1;
    }
    updatetotal();
}

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();

}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems .getElementsByClassName("cart-product-title");
    for(var i=0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
        alert("Your order has been added to cart");
        
        return;
    } 
    
}

var cartBoxContent =` <img src="${productImg}" class="cart-img">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <hr ="number" value="1" class="cart-quantity">
</div>

<i class='bx bxs-trash-alt cart-remove'></i>`;

cartShopBox.innerHTML =cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeCartItem);
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change', quantityChanged);
}

function updatetotal() {
    var cartContent =document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i=0; i < cartBoxes.length; i++){
        var cartBox =cartBoxes[i];
        var priceElement =cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement =cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity =quantityElement.value;
        total=total + price * quantity;
    }
        document.getElementsByClassName("total-price")[0].innerText =  total;
        
    
}



 




const btn1 = document.querySelector('.talk');
const content = document.querySelector('.content');
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}
function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning ");
    }

    else if(hr == 12) {
        speak("Good noon ");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening ");
    }
}

window.addEventListener('load', ()=>{
    speak("welcome to syed ammal library ");
    speak("you can Register your books now");
   
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
    speakThis(transcript.toLowerCase());
}

btn1.addEventListener('click', ()=>{

        var delayInMilliseconds = 1700; 
    speak("please tell the book to register");
    setTimeout(function() {
        recognition.start();
        
    }, delayInMilliseconds); 
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello";
        speech.text = finalText;
    }
    else if(message.includes('who is your boss')) {
        const finalText = "my boss name is seeni ameenullah whos is  m d of seeni tech private limited";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is stand alone machine";
        speech.text = finalText;
    }


    else if(message.includes('The Road to React')||message.includes('the road to react')) {
        const finalText = "The Road to React has been Registered";
        document.getElementById("a2").click();

        speech.text = finalText;

    }
    else if(message.includes('Pro HTML5 Programming')||message.includes('Pro HTML five Programming')||message.includes('pro hastimal 5 programming')||message.includes('pro html5 programming')) {
        const finalText = "pro html5 programming has been Registered";
        document.getElementById("a1").click();

        speech.text = finalText;

    }
    

  
    else if(message.includes('HTML CSS')||message.includes('html css')||message.includes('html, css.')) {
        const finalText = "HTML CSS has been registered";
        document.getElementById("a3").click();
       
        speech.text = finalText;

    }
    else if(message.includes('html css and Javascript')||message.includes('hasti amal css and javascript')) {
        const finalText = "html,css,and Javascript has been add to Registered";
        document.getElementById("a4").click();

        speech.text = finalText;

    }
  


    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }


    else {
        
        const finalText = "sorry i can't understand please come again";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}