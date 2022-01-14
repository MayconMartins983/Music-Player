const music = document.querySelector('audio')
const buttonPlay = document.querySelector('.button-play')
const buttonPause = document.querySelector('.button-pause')
const progress = document.querySelector('progress')
const bar = document.querySelector('.barra')
const timeStart = document.querySelector('.inicio')
const duracaoTotal = document.querySelector('.fim')
const img = document.querySelector('img')
const nomeMusic = document.querySelector('.descricao h2')
const nomeArtist = document.querySelector('.descricao i')
let indexMusic = 0


//array
const arrayMusic = [
    {
        titulo: 'Piano',
        nome: 'João Guilherme',
        src: 'musics/A Brand New Start - TrackTribe (1).mp3',
        img: 'imgs/piano.jpg'
    },
    {
        titulo: 'GuitarSolo',
        nome: 'Slash',
        src: 'musics/We Ride! - Reed Mathis.mp3',
        img: 'imgs/rock.jpg'
    },
    {
        titulo: 'Samba',
        nome: 'Martinho da Villa',
        src: 'musics/projeto_spotify_parte_1_musicas_Ella Vater - The Mini Vandals.mp3',
        img: 'imgs/samba.jpg'
    }
]




//events
buttonPlay.addEventListener('click', tocarMusic)

buttonPause.addEventListener('click', pausarMusic)

music.addEventListener('timeupdate', attBar)

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusic--
    if (indexMusic < 0) {
        indexMusic = 2
    }
    renderizarMusic(indexMusic)
music.play() 
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusic++
    if (indexMusic > 2) {
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
    const valueBar = Math.floor((music.currentTime/ music.duration) * 100) +'%'
    progress.style.width = valueBar
    
}

function attTime() {
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


