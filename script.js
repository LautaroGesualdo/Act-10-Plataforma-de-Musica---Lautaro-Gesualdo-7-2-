// Datos iniciales - canciones precargadas con imagen
const songs = [
    {
        id: 1,
        title: "Shape of You",
        artist: "Ed Sheeran",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1237Wb0G8Cbn226QaJUyShlWKu5EVjO-cw&s"
    },
    {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6j1qr2R-Zn8t0x76AwOPfBBBHUsTJgPj_cw&s"
    },
    {
        id: 3,
        title: "Bad Guy",
        artist: "Billie Eilish",
        image: "https://i.ytimg.com/vi/-G3-86ybXAM/sddefault.jpg"
    },
    {
        id: 4,
        title: "Levitating",
        artist: "Dua Lipa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Lt-4RhWOmELxd5woj9MdrFNPu0X-RdLBMw&s"
    },
    {
        id: 5,
        title: "Paradise City",
        artist: "Guns and Roses",
        image: "https://mty360.net/wp-content/uploads/2016/01/Las-10-de-Guns-N%E2%80%99-Roses-e1451955614515.jpg"
    },
    {
        id: 6,
        title: "Dance Monkey",
        artist: "Tones and I",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCZtXzvnBQuGC8RFSIG-yqrGYEZWrMoKcHw&s"
    },
    {
        id: 7,
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        image: "https://www.diariodecultura.com.ar/wp-content/uploads/2019/11/okis.png"
    },
    {
        id: 8,
        title: "Old Town Road",
        artist: "Lil Nas X",
        image: "https://media.gq.com/photos/5cdeef0e1f8a4e271cddab8d/4:3/w_919,h_689,c_limit/Old-Town-Road-Video-GQ-2019-051719.jpg"
    },
    {
        id: 9,
        title: "Havana",
        artist: "Camila Cabello",
        image: "https://i.scdn.co/image/ab67616d0000b273d93cf4d07ba50d7b32ca7c44"
    },
    {
        id: 10,
        title: "Circles",
        artist: "Post Malone",
        image: "https://i1.sndcdn.com/artworks-9eDXZyDaKdxirdWF-xz4esw-t1080x1080.jpg"
    },
    {
        id: 11,
        title: "Black Sabbath",
        artist: "Paranoid",
        image: "https://icarusmusicstore.com/13490-medium_default/black-sabbath-paranoid-cd-.jpg"
    },
    {
        id: 12,
        title: "Adele",
        artist: "Skyfall",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5S_cInawfYupQEO0-3h-p6PCJ8qnTWXmjQA&s"
    },
    {
        id: 13,
        title: "intoxicados",
        artist: "Quieren Rock",
        image: "https://lastfm.freetls.fastly.net/i/u/500x500/03d4c7efa26b17c572c46a217c8e85d5.jpg"
    },
    {
        id: 14,
        title: "In the shadows",
        artist: "The Rasmus",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/53/a8/47/53a84700-1148-ea61-85c0-7461383d7c2b/cover.jpg/600x600bf-60.jpg"
    },
    {
        id: 15,
        title: "Faint",
        artist: "Linkin Park",
        image: "https://upload.wikimedia.org/wikipedia/en/7/73/Linkin_Park_-_Faint_CD_cover.jpg"
    },
    {
        id: 16,
        title: "Holiday",
        artist: "Green day",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Green_Day_-_Holiday_cover.jpg"
    },
    {
        id: 17,
        title: "Yellow",
        artist: "Coldplay",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSu1JBVb9VX-wAY0AqiCgHBDI7gZ90oUhNrQ&s"
    },
    {
        id: 18,
        title: "Payphone",
        artist: "Maroon 5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLwU0vG_zcbTAkNMNNmU-4ib2rc49y3H8qw&s"
    },
    {
        id: 19,
        title: "Hey Jude",
        artist: "The Beatles",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCGQFY8GxoiuqRzkMaEwrifQwy-pBJdxLHw&s"
    },
    {
        id: 20,
        title: "Paint it Black",
        artist: "Rolling STone",
        image: "https://i1.sndcdn.com/artworks-000557040123-4gtdky-t1080x1080.jpg"
    }
];

let userSongs = []; // Canciones subidas por usuario

let playlists = []; // Playlists guardadas

let currentUser = null;

// Render canciones (Inicio y Playlists)
function renderSongs(list, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (!list.length) {
        container.innerHTML = '<p>No hay canciones para mostrar.</p>';
        return;
    }

    list.forEach(song => {
        const card = document.createElement('div');
        card.className = 'music-card';

        card.innerHTML = `
            <img src="${song.image || 'https://via.placeholder.com/180x120?text=No+Image'}" alt="${song.title}" />
            <div class="music-info">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
            <div class="card-actions">
                <button onclick="addToPlaylistPrompt(${song.id})">Agregar a Playlist</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Mostrar sección y esconder otras
function showSection(sectionName) {
    document.querySelectorAll('section[data-section]').forEach(sec => {
        sec.classList.toggle('active', sec.dataset.section === sectionName);
    });

    // Control de botones y mensajes según sección
    if (sectionName === 'profile') {
        updateProfileSection();
    }
    if (sectionName === 'playlists') {
        renderPlaylists();
    }
    if(sectionName === 'home'){
      renderSongs([...songs, ...userSongs], 'music-grid');
    }
}

// Registro
function handleRegister(e) {
    e.preventDefault();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const pass1 = document.getElementById('register-password').value;
    const pass2 = document.getElementById('register-password2').value;
    const authMsg = document.getElementById('auth-message');

    if (pass1 !== pass2) {
        authMsg.textContent = 'Las contraseñas no coinciden';
        authMsg.style.color = 'red';
        return;
    }

    // Guardar usuario simple en localStorage (no seguro, solo demo)
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.email === email)) {
        authMsg.textContent = 'El usuario ya existe';
        authMsg.style.color = 'red';
        return;
    }

    users.push({ email, password: pass1 });
    localStorage.setItem('users', JSON.stringify(users));

    authMsg.textContent = 'Registro exitoso, ya puedes iniciar sesión';
    authMsg.style.color = 'green';

    document.getElementById('register-form').reset();
}

// Login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const authMsg = document.getElementById('auth-message');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        authMsg.textContent = 'Usuario o contraseña incorrectos';
        authMsg.style.color = 'red';
        return;
    }

    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    authMsg.textContent = '';
    document.getElementById('login-form').reset();
    showSection('profile');
    updateProfileSection();
}

// Actualiza perfil
function updateProfileSection() {
    const profileDiv = document.getElementById('profile-info');
    const logoutBtn = document.getElementById('logout-btn');

    if (currentUser) {
        profileDiv.innerHTML = `<p>Bienvenido, <strong>${currentUser.email}</strong></p>`;
        logoutBtn.style.display = 'inline-block';
    } else {
        profileDiv.innerHTML = '<p>No has iniciado sesión.</p>';
        logoutBtn.style.display = 'none';
    }
}

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateProfileSection();
    showSection('login');
});

// Subir canción
function handleUpload(e) {
    e.preventDefault();

    if (!currentUser) {
        alert('Debes iniciar sesión para subir canciones.');
        showSection('login');
        return;
    }

    const title = document.getElementById('song-title').value.trim();
    const artist = document.getElementById('song-artist').value.trim();
    const image = document.getElementById('song-image').value.trim();
    const fileInput = document.getElementById('song-file');
    const uploadMsg = document.getElementById('upload-message');

    if (!title || !artist || !fileInput.files.length) {
        uploadMsg.textContent = 'Por favor completa todos los campos y selecciona un archivo.';
        uploadMsg.style.color = 'red';
        return;
    }

    // Para demo solo vamos a guardar info y mostrar, no subir realmente
    const newSong = {
        id: Date.now(),
        title,
        artist,
        image: image || 'https://via.placeholder.com/180x120?text=No+Image',
        file: fileInput.files[0]
    };

    userSongs.push(newSong);

    uploadMsg.textContent = 'Canción subida correctamente';
    uploadMsg.style.color = 'green';

    document.getElementById('upload-form').reset();

    // Actualizar listado de canciones en inicio
    renderSongs([...songs, ...userSongs], 'music-grid');
}

// Playlists
function renderPlaylists() {
    const container = document.getElementById('playlists-grid');
    container.innerHTML = '';

    if (!playlists.length) {
        container.innerHTML = '<p>No tienes playlists. Crea una para empezar.</p>';
        return;
    }

    playlists.forEach((pl, index) => {
        const plDiv = document.createElement('div');
        plDiv.className = 'music-card';

        // Lista de canciones en la playlist con título y artista
        let songsListHtml = '';
        pl.songs.forEach(songId => {
            // Buscar canción
            const song = [...songs, ...userSongs].find(s => s.id === songId);
            if (song) {
                songsListHtml += `<li>${song.title} - ${song.artist}</li>`;
            }
        });

        plDiv.innerHTML = `
            <h3 contenteditable="true" data-index="${index}" class="playlist-name">${pl.name}</h3>
            <ul>${songsListHtml || '<li>Sin canciones</li>'}</ul>
            <div class="card-actions">
                <button onclick="deletePlaylist(${index})">Eliminar</button>
                <button onclick="playPlaylist(${index})">Reproducir</button>
            </div>
        `;

        // Permitir editar nombre
        plDiv.querySelector('.playlist-name').addEventListener('blur', (e) => {
            const idx = e.target.dataset.index;
            playlists[idx].name = e.target.textContent.trim() || 'Playlist sin nombre';
            savePlaylists();
        });

        container.appendChild(plDiv);
    });
}

function deletePlaylist(index) {
    if (confirm('¿Seguro quieres eliminar esta playlist?')) {
        playlists.splice(index, 1);
        savePlaylists();
        renderPlaylists();
    }
}

function playPlaylist(index) {
    const playlist = playlists[index];
    if (!playlist || !playlist.songs.length) {
        alert('Esta playlist no tiene canciones para reproducir.');
        return;
    }
    alert(`Reproduciendo playlist: ${playlist.name}\nCanciones: ${playlist.songs.length}`);
    // Aquí podrías implementar reproductor real
}

// Crear nueva playlist
document.getElementById('create-playlist-btn').addEventListener('click', () => {
    if (!currentUser) {
        alert('Debes iniciar sesión para crear playlists.');
        showSection('login');
        return;
    }

    const name = prompt('Nombre de la nueva playlist:');
    if (name) {
        playlists.push({ name: name.trim(), songs: [] });
        savePlaylists();
        renderPlaylists();
    }
});

// Agregar a playlist con prompt de selección
function addToPlaylistPrompt(songId) {
    if (!currentUser) {
        alert('Debes iniciar sesión para agregar canciones a playlists.');
        showSection('login');
        return;
    }

    if (!playlists.length) {
        alert('No tienes playlists. Crea una para agregar canciones.');
        showSection('playlists');
        return;
    }

    const plNames = playlists.map((pl, idx) => `${idx + 1}: ${pl.name}`).join('\n');
    const answer = prompt(`A qué playlist quieres agregar la canción?\n${plNames}\nIngresa el número:`);

    const idx = parseInt(answer, 10) - 1;
    if (idx >= 0 && idx < playlists.length) {
        if (!playlists[idx].songs.includes(songId)) {
            playlists[idx].songs.push(songId);
            savePlaylists();
            alert(`Canción agregada a "${playlists[idx].name}"`);
            renderPlaylists();
        } else {
            alert('La canción ya está en esta playlist.');
        }
    } else {
        alert('Playlist inválida');
    }
}

// Guardar playlists en localStorage
function savePlaylists() {
    localStorage.setItem('playlists', JSON.stringify(playlists));
}

// Cargar playlists de localStorage
function loadPlaylists() {
    const pl = localStorage.getItem('playlists');
    playlists = pl ? JSON.parse(pl) : [];
}

// Buscar canciones en Inicio
document.getElementById('main-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = [...songs, ...userSongs].filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query)
    );
    renderSongs(filtered, 'music-grid');
});

// Cambiar entre secciones desde sidebar
document.querySelectorAll('nav ul.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('nav ul.sidebar li').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        showSection(item.dataset.section);
    });
});

// Manejar eventos
document.getElementById('upload-form').addEventListener('submit', handleUpload);
document.getElementById('login-form').addEventListener('submit', handleLogin);
document.getElementById('register-form').addEventListener('submit', handleRegister);

// Al iniciar cargar datos y mostrar inicio
function init() {
    const userLS = localStorage.getItem('currentUser');
    if (userLS) currentUser = JSON.parse(userLS);
    loadPlaylists();
    renderSongs([...songs, ...userSongs], 'music-grid');
    showSection('home');
    updateProfileSection();
}

init();
