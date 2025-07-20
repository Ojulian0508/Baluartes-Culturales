document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const artistaId = urlParams.get("id");
    const contenedorArte = document.getElementById("contenedor-arte");

    const obrasDeArte = {
        artista1: [
            { type: "image", title: "", src: "img/dilia1.jpeg" },
            { type: "image", title: "", src: "img/dilia2.jpeg" },
            { type: "image", title: "", src: "img/dilia3.jpeg" },
            { type: "image", title: "", src: "img/dilia4.jpeg" }
        ],
        artista2: [
            { type: "video", title: "De amigos nada mas", src: "videos/jorgeluis2.mp4" },
            { type: "video", title: "Deseos", src: "videos/jorgeluis4.mp4" },
            { type: "video", title: "No Sé Pedir Perdón", src: "videos/jorgeluis8.mp4" }
        ],
        artista3: [
            { type: "image", title: "", src: "img/karol2.jpeg" },
            { type: "image", title: "", src: "img/karol3.jpeg"}
        ],
        artista4: [
            { type: "image", title: "", src: "img/diego1.jpeg" },
            { type: "image", title: "", src: "img/Diego2.jpeg" },
            { type: "image", title: "", src: "img/Diego3.jpeg" }
            
        ],
        artista5: [
            { type: "image", title: "", src: "img/sofia2.jpeg" },
            { type: "image", title: "", src: "img/sofia3.jpeg" },
            { type: "image", title: "", src: "img/sofialogo.jpeg"}
        ]
    };

    if (artistaId && obrasDeArte[artistaId]) {
        const obras = obrasDeArte[artistaId];
        obras.forEach(obra => {
            const div = document.createElement("div");
            div.classList.add("arte-item");

            if (obra.type === "image") {
                div.innerHTML = `
                    <img src="${obra.src}" alt="${obra.title}">
                    <h3>${obra.title}</h3>
                `;
            } else if (obra.type === "video") {
                div.innerHTML = `
                    <video controls>
                        <source src="${obra.src}" type="video/mp4">
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <h3>${obra.title}</h3>
                `;
            }
                else if (obra.type === "audio") {
                    div.innerHTML = `
                    <audio controls>
                        <source src="${obra.src}" type="audio/mpeg">
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <h3>${obra.title}</h3>
                `;
            } 


            contenedorArte.appendChild(div);
        });
    } else {
        contenedorArte.innerHTML = "<p>No hay obras disponibles para este artista.</p>";
    }
});
 function toggleMenu(iconDiv) {
    const nav = document.querySelector('.mobile-nav');
    nav.classList.toggle('open');

    const icon = iconDiv.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('active');
  }

  // Opcional: cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.mobile-nav').classList.remove('open');
      const icon = document.querySelector('.menu-icon i');
      icon.classList.remove('fa-times', 'active');
      icon.classList.add('fa-bars');
    });
  });
function scrollToArtistas() {
    const Artistas = document.getElementById("artistas");
    Artistas.scrollIntoView({ behavior: "smooth" });
}


