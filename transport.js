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
        
        
        return;
    } 
    
}

var cartBoxContent =` <img src="${productImg}" class="cart-img">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">
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
    speak("welcome to syed ammal transport system");
    speak("you can get your transport details here");
    var delayInMilliseconds = 1700; 
   
    setTimeout(function() {
       
        
    }, delayInMilliseconds); 
    
   
   
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}


btn1.addEventListener('click', ()=>{

    var delayInMilliseconds = 1700; 
    speak("please tell me your bus number");
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



    else if(message.includes('name')) {
        const finalText = "My name is stand alone machine";
        speech.text = finalText;
    }
    else if(message.includes('incharge')|| message.includes('in charge')) {
        const finalText = " Doctor N Keerubananthaa sarathy Professor Department of ECE is the incharge of Transport department";
        document.getElementById("cart-icon").click();
        speech.text = finalText;
    }

    else if(message.includes('twentyone')|| message.includes('21')){
       
        const finalText = "your destination is through Surankottai, Neelakandi Oorani, Yanaikkal, Scan, Devan Mahal, Periyar Nagar, Kooriyur";
        const link = document.getElementById('p21');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }
    else if(message.includes('twelve')|| message.includes('12'))  {
       
        const finalText = "your destination is through Nambuthalai, Manakudi, Uppoor, Thiruppalaikudi, Devipattinam, Elanthai Koottam, Pappakudi, A.Vayal, Sethupathi";
        const link = document.getElementById('p12');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }
    else if(message.includes('thirteen')|| message.includes('13'))  {
       
        const finalText = "your destination is through Maninagar, GH, Muthaiyakoil, Ottapalam, LIC, Lenamahal, PMK BS ";
        const link = document.getElementById('p13');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }

    else if(message.includes('fourteen')|| message.includes('14'))  {
       
        const finalText = "your destination is through Nehru Nagar, Bharathi Nagar, Kumaraiyakoil";
        const link = document.getElementById('p14');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }

    else if(message.includes('fifteen')|| message.includes('15'))  {
       
        const finalText = "your destination is through Naral, Mathavanur, Kalanikudi, Gokul Nagar, Peravur, Matric School, Jegan Theatre, Aishwarya ";
        const link = document.getElementById('p15');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }

    else if(message.includes('seventeen')|| message.includes('17'))  {
       
        const finalText = "your destination is through SIPCOT, Manamadurai, Parthibanur, Kamuthakudi, Ariyanendal, Pottithatti, Manjur, Mavilangai, Muthuvatyal Jn, Sathirakudi, L.Karunkulam ";
        const link = document.getElementById('p17');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }
    else if(message.includes('one')|| message.includes('1'))  {
       
        const finalText = "your destination is through Ervadi, Mayakulam Kilakarai, Kalari, Puthendal ";
        const link = document.getElementById('p1');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }
    else if(message.includes('two')|| message.includes('2'))  {
       
        const finalText = "your destination is through Jeeva Nagar, Andakudi, Nainarkoil, Pandiyur, Thethangal, Kulathur, Thurathiyendal, Muthunal ";
      
        const link = document.getElementById('p2');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }
    else if(message.includes('three')|| message.includes('3'))  {
       
        const finalText = "your destination is through Rettaiyurani, Regunathapuram, Valuthur Jn, Valantharavai, Kuyavankudi, Vani BS, TNSTC Nagar, Subbaiah Nagar, Ramnagar, Pa.Kathan, Kannan Koil, Old Check Post, Collectorate, D-Block ";
        const link = document.getElementById('p3');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }
  
    else if(message.includes('four')|| message.includes('4'))  {
       
        const finalText = "your destination is through Muthupettai, Nainamaraikkan, Nambiyanvalasai, Patharatharavai, Vannangundu, Thiruppullani, Palkarai, Therkkutharavai, Sakkarakottai, RailwayGate, Valampurimahal, Church, Pillaiyarkoil, MPTC ";
        const link = document.getElementById('p4');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }
    else if(message.includes('five')|| message.includes('5'))  {
       
        const finalText = "your destination is through Elayankudi BS, Manjapattinam, Throupathi Amman Koil, Police Station, 5Jn RoadAV School, Bharathiyar School, Krishna Theatre, Saraswathi Nagar ";
        const link = document.getElementById('p5');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }
    else if(message.includes('six')|| message.includes('6'))  {
       
        const finalText = "your destination is through Omsakthinagar, Vasanthanagar, AVMS, DD Vinayagar ";
        const link = document.getElementById('p6');
        window.location = link.href;
        window.location.href = link.href;
        speech.text = finalText;
    }


    else {
       
        const finalText = "I cannot find information for " + message ;
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}