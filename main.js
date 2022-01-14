const music = document.querySelector('audio')
const buttonPlay = document.querySelector('.button-play')
const buttonPause = document.querySelector('.button-pause')
const bar = document.querySelector('.barra')
const duracaoTotal = document.querySelector('.fim')
let indexMusic = 0


//array
const arrayMusic = [
    {
        titulo: 'Um dia a gente se encontra',
        nome: 'Charlie Brown',
        src: 'musics/charlie brown.mp3',
        img: 'imgs/charlie.jpg'
    },
    {
        titulo: 'Tempo Perdido',
        nome: 'Legião Urbana',
        src: 'musics/tempo perdido.mp3',
        img: 'imgs/legiao.jpg'
    },
    {
        titulo: 'Let Go',
        nome: 'Ark Patrol',
        src: 'musics/ArkPartrol.mp3',
        img: 'imgs/ark.jpg'
    },
    {
        titulo: 'Ainda gosto dela',
        nome: 'Skank',
        src: 'musics/ainda gosto dela.mp3',
        img: 'imgs/ainda.jpg'
    }
]




//events
buttonPlay.addEventListener('click', tocarMusic)

buttonPause.addEventListener('click', pausarMusic)

music.addEventListener('timeupdate', attBar)

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusic--
    if (indexMusic < 0) {
        indexMusic = 3
    }
    renderizarMusic(indexMusic)
music.play() 
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusic++
    if (indexMusic > 3) {
        indexMusic = 0
    }
    renderizarMusic(indexMusic)
    music.play()
})

addEventListener ('load', () => { duracaoTotal.textContent = convert(Math.floor(music.duration))
renderizarMusic(indexMusic)
})


// functions

function renderizarMusic(index) {
    const nomeMusic = document.querySelector('.descricao h2')
    const img = document.querySelector('img')
    const nomeArtist = document.querySelector('.descricao i')
    music.setAttribute('src', arrayMusic[index].src)
    music.addEventListener('loadeddata', () => {
        nomeMusic.textContent = arrayMusic[index].titulo
        nomeArtist.textContent = arrayMusic[index].nome
        img.src = arrayMusic[index].img
        duracaoTotal.textContent = convert(Math.floor(music.duration))
    })
}


function tocarMusic() {
    music.play()
    buttonPause.style.display = 'inline'
    buttonPlay.style.display = 'none'
    setInterval (attTime, 1000)
}

function pausarMusic() {
    music.pause()
    buttonPause.style.display = 'none'
    buttonPlay.style.display = 'inline'
}

function attBar() {
    const progress = document.querySelector('progress')
    const valueBar = Math.floor((music.currentTime/ music.duration) * 100) +'%'
    progress.style.width = valueBar
    
}

function attTime() {
    const timeStart = document.querySelector('.inicio')
    const showTime = Math.floor(music.currentTime)
    timeStart.innerHTML = convert(showTime)
    
    
}

function convert(segundos) {
    let minutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
        if (campoSegundos<10) {
            campoSegundos = '0' + campoSegundos
        }
    return minutos + ":" + campoSegundos
   
}


