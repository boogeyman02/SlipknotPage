// Objeto con el contenido completo de las noticias
const newsContent = {
    'noticia1': {
        title: 'El ritual fue consumado: Slipknot reinó en Paraguay',
        image: '../Img/concert3.jpg',
        imageClass: 'modal-thumbnail',
        content: `
            <div class="modal-content-wrapper">
                <img src="../Img/concert3.jpg" class="modal-thumbnail" alt="Slipknot en Paraguay">
                <p>Miles de almas trascendieron gracias a la música de Slipknot en Paraguay. 
                La banda de metal estadounidense ofreció un espectáculo inolvidable que dejó sin aliento 
                a los más de 20,000 fanáticos que se reunieron en el Estadio Jockey Club.</p>
                
                <p>Durante más de dos horas, la banda liderada por Corey Taylor desplegó un setlist 
                que incluyó clásicos como "Wait and Bleed", "Psychosocial" y "Duality", además de 
                temas de su más reciente álbum "The End, So Far".</p>
                
                <p>El show contó con toda la pirotecnia y efectos visuales característicos de la banda, 
                creando una atmósfera única que los fans paraguayos pudieron experimentar por primera vez.</p>
            </div>`
    },
    'noticia2': {
        title: 'Histórica noche metal con Slipknot',
        image: '../Img/concer2.jpg',
        imageClass: 'modal-thumbnail',
        content: `
            <div class="modal-content-wrapper">
                <img src="../Img/concer2.jpg" class="modal-thumbnail" alt="Slipknot en concierto">
                <p>La banda estadounidense Slipknot se presentó ante miles de fanáticos en el Jockey Club del Paraguay. 
                El grupo, conformado por sus nueve integrantes, actuó en Paraguay por primera vez y en el marco del 
                aniversario número 25 de su álbum debut homónimo.</p>
                
                <p>Los portones abrieron a las 17:30 y los fanáticos, casi todos con el clásico atuendo de remeras 
                negras y muchos también con máscaras, comenzaron a ingresar. La banda local Kuazar fue la encargada 
                de abrir el show, mezclando temas en inglés, español y guaraní.</p>
                
                <p>Puntualmente a las 21:30, Slipknot subió al escenario con sus característicos enterizos rojos y 
                máscaras, incluyendo la nueva máscara de Corey Taylor con luces LED en los ojos. El setlist incluyó 
                clásicos como "(sic)", "Eyeless", y "Wait and Bleed".</p>
            </div>`
    },
    'noticia3': {
        title: 'Nueva gira Nuevas Máscaras',
        image: '../Img/mask2.jpg',
        imageClass: 'modal-thumbnail',
        content: `
            <div class="modal-content-wrapper">
                <img src="../Img/mask2.jpg" class="modal-thumbnail" alt="Nuevas máscaras de Slipknot">
                <p>Como es tradición, Slipknot ha renovado su imagen para la gira actual. Cada miembro ha revelado 
                nuevas máscaras que reflejan la evolución de sus personajes y el nuevo capítulo de la banda.</p>
                
                <p>Corey Taylor sorprendió con una máscara que incorpora elementos LED, mientras que Mick Thomson 
                mantiene la esencia de su icónico diseño pero con modificaciones sutiles. Jim Root y Sid Wilson 
                también presentaron versiones actualizadas que mantienen sus elementos característicos.</p>
            </div>`
    },
    'novedad1': {
        title: 'Michael Pfaff confirma oficialmente ser "Tortilla Man"',
        image: '../Img/Tortillaman.jpg',
        imageClass: 'modal-thumbnail',
        content: `
            <div class="modal-content-wrapper">
                <img src="../Img/Tortillaman.jpg" class="modal-thumbnail" alt="Tortilla Man">
                <p>Michael Pfaff finalmente confirmó su identidad como el misterioso 'Tortilla Man' de Slipknot. 
                Después de años de especulación por parte de los fans, Pfaff reveló oficialmente que él es quien 
                está detrás de la máscara.</p>
                
                <p>"Ha sido un viaje increíble mantener el misterio durante tanto tiempo", comentó Pfaff. 
                "Los fans de Slipknot son increíblemente dedicados y perspicaces, y fue divertido ver todas 
                sus teorías a lo largo de los años".</p>
            </div>`
    },
    'novedad2': {
        title: 'Slipknot anuncia colaboración con marcas independientes',
        image: '../Img/adidas.jpeg',
        imageClass: 'modal-thumbnail',
        content: `
            <div class="modal-content-wrapper">
                <img src="../Img/adidas.jpeg" class="modal-thumbnail" alt="Colaboración Slipknot">
                <p>Slipknot ha anunciado colaboraciones exclusivas con varias marcas independientes de ropa y 
                calzado. La colección incluirá diversos productos inspirados en la estética única de la banda 
                y sus icónicas máscaras.</p>
                
                <p>Los diseños incorporarán elementos distintivos de Slipknot, incluyendo sus logotipos 
                característicos y patrones inspirados en sus máscaras más emblemáticas. Las colecciones 
                estarán disponibles en tiendas seleccionadas y en línea.</p>
            </div>`
    },
    'rumor1': {
        title: 'Nuevo álbum en proceso de grabación',
        image: '../Img/mask.jpg',
        imageClass: 'modal-thumbnail',
        content: `
            <div class="modal-content-wrapper">
                <img src="../Img/mask.jpg" class="modal-thumbnail" alt="Nuevo Álbum">
                <p>Varios medios especializados y fuentes cercanas a la banda han reportado que Slipknot 
                estaría trabajando en material nuevo para su próximo álbum. Este sería el sucesor de 
                "The End, So Far" lanzado en 2022.</p>
                
                <p>Corey Taylor, en recientes entrevistas, ha mencionado que la banda tiene "material 
                interesante" en desarrollo, aunque no ha confirmado oficialmente el inicio de las 
                grabaciones. Jim Root también ha compartido en redes sociales imágenes desde su estudio 
                personal, alimentando las especulaciones.</p>
                
                <p>Se espera que el nuevo material mantenga la evolución sonora de la banda mientras 
                retorna a sus raíces más agresivas, según han sugerido diferentes miembros en entrevistas 
                recientes.</p>
            </div>`
    },
    'rumor2': {
        title: 'Show especial por 25° aniversario',
        image: '../Img/exmiembros.jpg',
        imageClass: 'modal-thumbnail',
        content: `
            <div class="modal-content-wrapper">
                <img src="../Img/exmiembros.jpg" class="modal-thumbnail" alt="Show Especial">
                <p>Con motivo del 25° aniversario del lanzamiento de su álbum debut, diferentes fuentes 
                sugieren que Slipknot podría estar planificando un show especial que incluiría 
                apariciones de ex-miembros de la banda.</p>
                
                <p>Joey Jordison, antes de su fallecimiento, había expresado su deseo de tocar nuevamente 
                con la banda, y Chris Fehn ha mantenido un perfil más amigable con sus ex-compañeros 
                en los últimos años tras resolver sus diferencias legales.</p>
                
                <p>Los fans especulan sobre la posibilidad de un evento único que celebre la historia 
                completa de la banda, aunque no hay confirmación oficial por parte de management o 
                miembros actuales.</p>
            </div>`
    },
    'rumor3': {
        title: 'Knotfest 2024: Expansión Global',
        image: '../Img/knotfest.jpg',
        imageClass: 'modal-thumbnail',
        content: `
            <div class="modal-content-wrapper">
                <img src="../Img/knotfest.jpg" class="modal-thumbnail" alt="Knotfest 2024">
                <p>El festival itinerante Knotfest podría expandirse significativamente en 2024, con planes 
                para realizar primeras ediciones en varios países de Sudamérica y Asia, según reportes 
                de medios locales y promotores internacionales.</p>
                
                <p>Desde su inicio en 2012, Knotfest se ha convertido en un fenómeno global, realizándose 
                exitosamente en Estados Unidos, Japón, México, Colombia, Francia, Alemania y otros países. 
                La expansión incluiría nuevos territorios donde la banda tiene una base de fans significativa.</p>
                
                <p>Los rumores sugieren negociaciones avanzadas para ediciones en Brasil, Chile y 
                Filipinas, aunque las fechas y lineup permanecen en desarrollo.</p>
            </div>`
    }
};

// Elementos del DOM
const modal = document.getElementById('newsModal');
const modalTitle = modal.querySelector('h3');
const modalBody = modal.querySelector('.modal-body');
const closeButton = modal.querySelector('.close-button');
const overlay = document.getElementById('overlay');

// Función para abrir el modal con el contenido correspondiente
function openModal(newsId) {
    const news = newsContent[newsId];
    if (news) {
        modalTitle.textContent = news.title;
        modalBody.innerHTML = news.content;
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Event listeners para las cards de noticias
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
        const newsId = card.getAttribute('data-news-id');
        openModal(newsId);
    });
});

// Event listeners para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Agregar estilos dinámicamente para las imágenes en el modal
const style = document.createElement('style');
style.textContent = `
    .modal-thumbnail {
        max-width: 300px;
        max-height: 200px;
        object-fit: cover;
        border-radius: 8px;
        margin: 10px 0;
        display: block;
    }
    
    .modal-content-wrapper {
        padding: 15px;
    }
    
    .modal-content-wrapper p {
        margin: 15px 0;
        line-height: 1.6;
    }
`;
document.head.appendChild(style);