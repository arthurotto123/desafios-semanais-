const quadro =[...document.getElementsByClassName('quadros')]
const heart = [...document.getElementsByClassName('fa-heart')]

 quadro.forEach((el)=>{
    el.addEventListener('click', ()=>{
 
       el.classList.contains("destaque")?
        el.classList.remove("destaque") :
        el.classList.add("destaque")

    })
})



heart.forEach((el)=>{
    el.addEventListener('click',()=>{
        if(el.classList.contains('fa-regular')){
            el.classList.remove("fa-regular")
            el.classList.add("fa-solid")

        } else{
             el.classList.remove("fa-solid")
             el.classList.add("fa-regular")

        }
        
    })
})

