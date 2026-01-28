// Estado global
let animeSeleccionado = null;
let historial = JSON.parse(localStorage.getItem('anime_historial') || '[]');
let vistos = JSON.parse(localStorage.getItem('anime_vistos') || '{}');

// Elementos DOM
const inputBusqueda = document.getElementById('inputBusqueda');
const btnBuscar = document.getElementById('btnBuscar');
const listaResultados = document.getElementById('listaResultados');
const listaEpisodios = document.getElementById('listaEpisodios');
// const listaEnlaces = document.getElementById('listaEnlaces'); // Eliminado
const loading = document.getElementById('loading');
const divHistorial = document.getElementById('historial');
const divAnimeInfo = document.getElementById('animeInfo');

// Modal Elements
const modal = document.getElementById('videoModal');
const serverSelection = document.getElementById('serverSelection');
const serverList = document.getElementById('serverList');
const playerContainer = document.getElementById('playerContainer');
const videoPlayer = document.getElementById('videoPlayer');
const backButton = document.getElementById('backToServerList');
const closeModal = document.querySelector('.close-modal');


// --- Funciones de Historial ---
function cargarHistorial() {
    divHistorial.innerHTML = '';
    historial.forEach(busqueda => {
        const chip = document.createElement('div');

function guardarHistorial(consulta) {
    if (!historial.includes(consulta)) {


// --- Funciones de Vistos ---
function esVisto(animeId, epNum) {
    return vistos[animeId] && vistos[animeId].includes(epNum);
}

function marcarComoVisto(animeId, epNum) {
    if (!vistos[animeId]) vistos[animeId] = [];
    if (!vistos[animeId].includes(epNum)) {
        vistos[animeId].push(epNum);
        localStorage.setItem('anime_vistos', JSON.stringify(vistos));

        // Actualizar UI
        const items = document.querySelectorAll('#listaEpisodios li');
        items.forEach(li => {
            if (li.textContent === `Episodio ${epNum}`) {
                li.classList.add('episodio-visto');
            }
        });
    }
}

// --- Utils UI ---
function mostrarLoading() { loading.classList.add('show'); }
function ocultarLoading() { loading.classList.remove('show'); }

// --- Lógica Principal ---

async function buscar() {
    const consulta = inputBusqueda.value.trim();
    if (!consulta) return;

    guardarHistorial(consulta);
    mostrarLoading();
    listaResultados.innerHTML = '';
    listaEpisodios.innerHTML = '';
        }
    } catch (e) {
        console.error(e);
        listaResultados.innerHTML = '<p>Error al buscar</p>';
    }

    ocultarLoading();
}

async function seleccionarAnime(anime, elemento) {
    animeSeleccionado = anime;

    // UI Selection
    document.querySelectorAll('.anime-card').forEach(c => c.classList.remove('selected'));
    elemento.classList.add('selected');
    
async function seleccionarEpisodio(numEpisodio, elemento) {
    if (!animeSeleccionado) return;

    document.querySelectorAll('#listaEpisodios li').forEach(li => li.classList.remove('selected'));
    elemento.classList.add('selected');

   
function reproducirEnModal(url, animeId, epNum) {
    marcarComoVisto(animeId, epNum);
    serverSelection.style.display = 'none';
    playerContainer.style.display = 'block';
    videoPlayer.src = url;
}

function copiarEnlace(url) {
    navigator.clipboard.writeText(url).then(() => mostrarNotificacion('¡Enlace copiado!'))
        .catch(() => mostrarNotificacion('Error al copiar'));
}


