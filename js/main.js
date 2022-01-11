/* Milestone 1 */

/* creo un array di oggetti che andrà a racchiudere la struttura dei vari post */
const postsArray = [
  {
    idPost: 1,
    nomeAutore: "Samuel Scozzari",
    fotoAutore: "https://data.whicdn.com/images/337883524/original.jpg",
    data: new Date().toLocaleDateString(),
    testo: "Ha aggiornato la sua foto profilo:",
    immagine: "https://data.whicdn.com/images/337883524/original.jpg",
    likes: 23,
  },

  {
    idPost: 2,
    nomeAutore: "user074859203",
    fotoAutore:
      "https://static.nanopress.it/nanopress/fotogallery/780X0/240679/super-mario.jpg",
    data: new Date().toLocaleDateString(),
    testo: "Ho appena creato il mio profilo, come faccio a seguire le persone?",
    immagine: "",
    likes: 2,
  },

  {
    idPost: 3,
    nomeAutore: "Boolean",
    fotoAutore:
      "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/681/original/Pittogramma-RGB-1080-BLUE-circle.png",
    data: new Date().toLocaleDateString(),
    testo: "Iscriviti al corso!",
    immagine:
      "https://stack-vod-learnn-source-9043g70p82tj.s3.eu-west-3.amazonaws.com/large_i_cover_boolean_01_a0978d807b.jpg",
    likes: 217,
  },
];

console.log(postsArray);

/* Milestone 2 */
//partendo dal layout di riferimento presente dall'HTML, ricreo il post con i dati che ho inserito nell'array
const postsContainer = document.querySelector(".posts-list");

for (let i = 0; i < postsArray.length; i++) {
  const post = postsArray[i];
  postsContainer.innerHTML += ` 
<div class="post">
  <div class="post__header">
    <div class="post-meta">
      <div class="post-meta__icon">
        <img
          class="profile-pic"
          src="${post.fotoAutore}"
        />
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${post.nomeAutore}</div>
        <div class="post-meta__time">${post.data}</div>
      </div>
    </div>
  </div>
  <div class="post__text">
    ${post.testo}
  </div>
  <div class="post__image">
    <img src="${post.immagine}" alt="" />
  </div>
  <div class="post__footer">
    <div class="likes js-likes">
      <div class="likes__cta">
        <a class="like-button js-like-button" href="#" data-postid="1">
          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
          <span class="like-button__label">Mi Piace</span>
        </a>
      </div>
      <div class="likes__counter">
        Piace a
        <b id="like-counter-1" class="js-likes-counter">
        ${post.likes}
        </b>
        persone
      </div>
    </div>
  </div>
</div>
`;
}
