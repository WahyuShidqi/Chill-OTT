const heroSlidesDB = [
  {
    image: "/assets/movieImages/avatar.png",
    poster: "/assets/movieImages/avatar-poster.png",
    title: "Avatar",
    description:
      "A former marine, paralyzed from the waist down, is given a second chance through an avatar body on the alien world of Pandora. As he becomes connected to the Na'vi people, he must choose between following orders from the humans who sent him, or protecting the new world and family he has grown to love.",
    ageRating: "13+",
    rating: "4.7",
  },
  {
    image: "/assets/movieImages/BlueLock-ThePowerPoint.png",
    poster: "/assets/movieImages/BlueLock-ThePowerPoint-poster.png",
    title: "Blue Lock",
    description:
      "After Japan suffers a humiliating loss at the World Cup, a controversial and intense program called Blue Lock is created to forge the ultimate striker. Hundreds of young talents are pushed to their limits, competing against each other in a harsh psychological and physical battle to determine who has the ego and skill to become the best in the world.",
    ageRating: "16+",
    rating: "4.2",
  },
  {
    image: "/assets/movieImages/devil-all-time.png",
    poster: "/assets/movieImages/devil-all-time-poster.png",
    title: "The Devil All the Time",
    description:
      "Set in post-war Ohio, several troubled characters struggle with trauma, religion, and desperation. Their fates eventually intertwine through acts of violence, corruption, and sacrifice. It is a dark and haunting story about how far people will go when trapped in a world shaped by their past sins.",
    ageRating: "18+",
    rating: "3.9",
  },
  {
    image: "/assets/movieImages/dilan.png",
    poster: "/assets/movieImages/dilan-poster.png",
    title: "Dilan 1990",
    description:
      "In 1990s Bandung, a mysterious and poetic high-school boy named Dilan falls for Milea, a new student with a gentle heart. Their relationship grows through handwritten letters, teasing affection, and the charm of teenage romance. It is a nostalgic story about young love, innocence, and memories that last a lifetime.",
    ageRating: "13+",
    rating: "4.0",
  },
  {
    image: "/assets/movieImages/dont-look-up.png",
    poster: "/assets/movieImages/dont-look-up-poster.png",
    title: "Don't Look Up",
    description:
      "When two scientists discover a massive comet hurtling toward Earth, they desperately try to warn the world. But their message gets lost in politics, media chaos, and public denial. As time runs out, the film delivers a sharp satire about humanity's tendency to ignore truth even when it's staring them in the face.",
    ageRating: "18+",
    rating: "3.7",
  },
  {
    image: "/assets/movieImages/tomorrow-war.png",
    poster: "/assets/movieImages/tomorrow-war-poster.png",
    title: "Tomorrow War",
    description:
      "A seasoned warrior, burdened by the mistakes of his past, crosses paths with a young girl who becomes the key to his redemption. As enemies close in from every direction, he must confront old wounds and rediscover his own purpose. It is a story about loyalty, sacrifice, and the courage to fight for someone else.",
    ageRating: "16+",
    rating: "4.4",
  },
  {
    image: "/assets/movieImages/MHA.png",
    poster: "/assets/movieImages/MHA-poster.png",
    title: "My Hero Academia",
    description:
      "In a world where nearly everyone is born with superpowers called Quirks, a powerless boy named Midoriya dreams of becoming a hero. After a fateful encounter with the legendary All Might, he receives a chance to enter the top hero academy. His journey becomes a test of heart, courage, and the true meaning of heroism.",
    ageRating: "13+",
    rating: "4.6",
  },
  {
    image: "/assets/movieImages/sonic2.png",
    poster: "/assets/movieImages/sonic2-poster.png",
    title: "Sonic the Hedgehog 2",
    description:
      "Sonic settles into life on Earth but longs to prove he is a true hero. His peace is shattered when Dr. Robotnik returns with a powerful new partner, Knuckles. Sonic teams up with Tails on a high-speed adventure to protect an ancient emerald that can reshape the world. It is exciting, energetic, and full of heart.",
    ageRating: "7+",
    rating: "4.1",
  },
  {
    image: "/assets/movieImages/suzume.png",
    poster: "/assets/movieImages/suzume-poster.png",
    title: "Suzume",
    description:
      "A young girl named Suzume encounters a mysterious traveler searching for doors linked to natural disasters. When one of the doors threatens to unleash catastrophe, she is drawn into a journey across Japan to close them. Along the way, she confronts memories of loss, healing, and the invisible bonds that shape our lives.",
    ageRating: "13+",
    rating: "4.5",
  },
];

// Top Rating Movie Sorter
let [...topRatedMovie] = heroSlidesDB;
topRatedMovie.sort((a, b) => Number(a.rating) - Number(b.rating)).reverse();
// Top Rating Sorter ends here

function slideUpdater(container, slidesDB) {
  let swiperContainer = document.querySelector(container);
  console.log("hero slide is running...");

  //   terminate the function if container value not found
  if (!swiperContainer) {
    return console.log("no container found");
  }

  //  Data mapping starts

  swiperContainer.innerHTML = slidesDB
    .map((slide) => {
      if (swiperContainer.classList.contains("hero-swiper-wrapper")) {
        return `
       <div class="swiper-slide hero-slide">
              <img
                class="hero-images"
                src="${slide.image}"
                alt="${slide.title}"
                loading="lazy" 
              />
              <div class="swiper-lazy-preloader"></div>
              <div class="layout content-padding-lr">
                <h1 class="font-bold text-xxl" data-swiper-parallax="-300">${slide.title}</h1>
                <p class="hero-title-desc text-cut" data-swiper-parallax="-300">
                    ${slide.description}
                </p>
                <div class="hero-buttons" data-swiper-parallax="-300">
                  <a class="blue-btn font-bold text-sm centralize" href=""
                    >Mulai</a
                  >
                  <a class="gray-btn font-bold text-sm centralize" href="">
                    <img
                      class="info-outline-icon"
                      src="assets/information-outline.png"
                      alt="information-outline.png"
                    />
                    Selengkapnya</a
                  >
                  <a class="gray-btn font-bold text-sm centralize" href=""
                    >${slide.ageRating}</a
                  >
                  <span class="volume-btn font-bold text-sm centralize" href=""
                    ><img
                      class="volume-off-icon"
                      src="assets/volume-off.png"
                      alt="volume-off.png"
                    /></span>
                  
                
                </div>
              </div>
            </div>
        
    `;
      } else if (
        swiperContainer.classList.contains("continue-watch-swiper-wrapper")
      ) {
        return `
           <div class="swiper-slide hor-card continue-watch-slide">
            <a href="">
              <img src="${slide.image}" alt="${slide.title}" />

              <div class="swiper-lazy-preloader"></div>

              <div class="continue-watch-section-layout">
                <h3 class="text-md text-wrap">${slide.title}</h3>

                <div class="movie-rating">
                  <img
                    class="rating-icon"
                    src="assets/stars.png"
                    alt="stars.png"
                    lazy-loading="true"
                  />
                  
                  <span class="text-xsm">${slide.rating}/5</span>
                </div>
              </div>
            </a>
            </div>
        `;
      } else if (
        swiperContainer.classList.contains("top-rating-swiper-wrapper") ||
        swiperContainer.classList.contains("trending-swiper-wrapper") ||
        swiperContainer.classList.contains("rilisbaru-swiper-wrapper")
      ) {
        return `
            <div class="swiper-slide ver-card ver-slide">
              <a href="">
                <img
                  src="${slide.poster}"
                  alt="${slide.title}"
                  lazyload="true"
                />
                <div class="swiper-lazy-preloader"></div>
              <div class="ver-card-text-layout">

                <div class="movie-rating">
                  <img
                    class="rating-icon"
                    src="assets/stars.png"
                    alt="stars.png"
                    lazy-loading="true"
                  />
                  
                  <span class="text-xsm">${slide.rating}/5</span>
                </div>
              </div>
              </a>
            </div>  
        `;
      } else {
        console.log("no container with matching class found...");
        return `<div>"Nothing here is but us chickens!</div>`;
      }
    })
    .join("");
}

slideUpdater(".hero-swiper-wrapper", heroSlidesDB);
slideUpdater(".continue-watch-swiper-wrapper", heroSlidesDB);
slideUpdater(".top-rating-swiper-wrapper", topRatedMovie);
slideUpdater(".trending-swiper-wrapper", topRatedMovie);
slideUpdater(".rilisbaru-swiper-wrapper", topRatedMovie);

console.log("top rated:", topRatedMovie);

// let description = document.querySelector(".hero-title-desc").innerText;

// function descShortener(str) {
//   console.log("ehehehehehe", str.length);
//   let splittedStr = str.split("");
//   console.log("splitted", splittedStr);
//   console.log("splitted", splittedStr);

//   if (splittedStr.length > 6) {
//     splittedStr.splice(5);
//   }

//   console.log("sliced", splittedStr);
// }

// descShortener(description);
