const header = document.getElementById('header')
const title = document.getElementById('title')
const expert = document.getElementById('expert')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"alt="" />'
    title.innerHTML = 'equatur id laudantium comm'
    expert.innerHTML ='Lorem ipsum dolor situs aliquid magni labore veritatis, a atque ex.'
    profile_img.innerHTML=' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML =' >Petter Johnson'
    date.innerHTML ='Oct 08, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}