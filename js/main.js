/* Milestone 1 */

/* creo un array di oggetti che andrà a racchiudere la struttura dei vari post */
const postsArray = [
  {
    idPost: 1,
    nomeAutore: "Samuel Scozzari",
    fotoAutore: "https://data.whicdn.com/images/337883524/original.jpg",
    data: new Date().toLocaleDateString(),
    testo: "<strong>Ha aggiornato la sua foto profilo:</strong>",
    immagine: "https://data.whicdn.com/images/337883524/original.jpg",
    likeOnPost: 23,
  },

  {
    idPost: 2,
    nomeAutore: "user074859203",
    fotoAutore:
      "https://static.nanopress.it/nanopress/fotogallery/780X0/240679/super-mario.jpg",
    data: new Date().toLocaleDateString(),
    testo: "Ho appena creato il mio profilo, come faccio a seguire le persone?",
    immagine: "",
    likeOnPost: 2,
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
    likeOnPost: 217,
  },

  {
    idPost: 4,
    nomeAutore: "Spider-Man",
    fotoAutore:
      "https://images.everyeye.it/img-articoli/spider-man-4-amazing-spider-man-3-storia-sequel-maledetti-speciale-v11-54450-900x900.webp",
    data: new Date().toLocaleDateString(),
    testo:
      "Oggi ho visitato <strong><u>Brescia</u></strong>, molto più tranquilla della Grande Mela!",
    immagine:
      "https://www.bresciatoday.it/~media/horizontal-hi/33738095209915/spidermanbrescia-piazza-vittoria-2.jpg",
    likeOnPost: 312117,
  },
];

const postsCont = document.querySelector(".posts-list");

/* Milestone 2 - 3 */

//partendo dal layout di riferimento presente dall'HTML, ricreo il post con i dati che ho inserito nell'array
const numberOfLikes = [];

for (let i = 0; i < postsArray.length; i++) {
  let singlePost = postsArray[i];
  numberOfLikes[i] = postsArray[i].likeOnPost;

  postsCont.innerHTML += ` 
<div class="post">
  <div class="post__header">
    <div class="post-meta">
      <div class="post-meta__icon">
        <img
          class="profile-pic"
          src="${singlePost.fotoAutore}"
        />
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${singlePost.nomeAutore}</div>
        <div class="post-meta__time">${singlePost.data}</div>
      </div>
    </div>
  </div>
  <div class="post__text">
    ${singlePost.testo}
  </div>
  <div class="post__image">
    <img src="${singlePost.immagine}" alt="" />
  </div>
  <div class="post__footer">
    <div class="likes js-likes">
      <div class="likes__cta">
        <a class="like-button js-like-button" href="#/" data-postid="${singlePost.idPost}">
          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
          <span class="like-button__label">Mi Piace</span>
        </a>
      </div>
      <div class="likes__counter">
        Piace a
        <b id="like-counter-${singlePost.idPost}" class="js-likes-counter">
        ${singlePost.likeOnPost}
        </b>
        persone
      </div>
    </div>
  </div>
</div>
`;
}
let idArray = [];
let likeButton = document.querySelectorAll(".like-button");

for (let i = 0; i < likeButton.length; i++) {
  let x = 0;

  likeButton[i].addEventListener("click", function () {
    const id = i + 1;
    idArray.push(id);
    console.log(idArray);

    this.classList.toggle("like-button--liked");
    x++;
    if (x % 2 !== 0) {
      numberOfLikes[i]++;
      console.log(x);
    } else {
      numberOfLikes[i]--;
    }

    document.getElementById(`like-counter-${postsArray[i].idPost}`).innerHTML =
      numberOfLikes[i];
  });
}
