document.addEventListener('DOMContentLoader' , () =>{
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 200
    let birdBottom = 100

    function startGame(){
        bird.style.bottom = birdBottom + 'px'
    }
    startGame()
})