// declarations the vars
const navLink = document.querySelectorAll('.nav-link')
const navMenu = document.getElementById('nav-menu')
navLink.forEach (n => n.addEventListener ('click', linkAction))
const cardSection=document.querySelector('.card-countries')

const createCard=(data)=>{
    data.forEach(ele=>{

        const card =document.createElement('section')
        card.className='card-content'
        cardSection.appendChild(card)
        const imagDiv=document.createElement('div')
        imagDiv.className='div-img'
        card.appendChild(imagDiv)
        const imag=document.createElement('img')
        imag.className='card-img'
        imag.src=ele.coatOfArms.png
        imagDiv.appendChild(imag)
        const cardFooter=document.createElement('div')
        cardFooter.className='details'
        card.appendChild(cardFooter)
        const title=document.createElement('h2')
        title.className='card-name'
        title.textContent=ele.altSpellings[1]
        cardFooter.appendChild(title)
        const anchor=document.createElement('a')
        anchor.className='button card-button'
        anchor.href="#"
        cardFooter.appendChild(anchor)
        const i=document.createElement('i')
        i.className='ri-arrow-right-line'
        anchor.appendChild(i)
    })
}
fetch('https://restcountries.com/v3.1/all',createCard)
