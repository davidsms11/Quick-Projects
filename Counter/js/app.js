const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateC = () => {
        const target = +counter.getAttribute('data-target')
       const c = +counter.innerText

       const increment = target /200

       console.log(increment)

       if(c < target){
        counter.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updateC, 1)
       } else{
           counter.innerText = target
       }
    }

    updateC()
})