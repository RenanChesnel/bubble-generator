//creation d'un compter de bulle detruite
const counterDisplay = document.querySelector("h3");
// console.log(counterDisplay);
let counter = 0


const bubbleMaker = ()=>{
//création d'un span en js
const bubble = document.createElement("span");
//injection de la class bubble
bubble.classList.add("bubble");
document.body.appendChild(bubble);

//faire unes taille de bulle random
// l'objet Math produit un chiffre aléatoire entre 100 et 300
// console.log(Math.random()*100+100);
const size = Math.random()*100+100+"px";
console.log(size);
bubble.style.height=size;
bubble.style.width=size;

//faire apparaitre les bulle position random
bubble.style.top=Math.random()*100+50+"%";
bubble.style.left=Math.random()*100+"%";

//faire en sorte que --left soit negatif et positf en random
//si Math>0.5 alors renvoyer 1, sinon -1
const plusMinus =  Math.random() > 0.5?1:-1;

//faire aller la bulle vers la gauche
bubble.style.setProperty('--left',Math.random()*100*plusMinus+"%");

//cibler les bulle au clique
bubble.addEventListener('click',()=>{
    bubble.remove();
    counter++
    console.log(counter);
    // counterDisplay.textContent=counter
    counterDisplay.innerHTML="<h3>KILL : " + counter + "</h3>"
})

// destruction des bulles au bout de 8s
setTimeout(() => {
    bubble.remove();
}, 8000);

};

//creer des bulles à interval
setInterval(bubbleMaker, 3000);


