//dark mode
let toggle = document.getElementById("dark-toggle");
toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const icon = toggle.querySelector('ion-icon');
    if (document.documentElement.classList.contains('dark')) {
        icon.setAttribute('name', 'moon');
    } else {
        icon.setAttribute('name', 'sunny');
    }
});

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  speed: 800,
  slidesPerView: 1,
  mousewheel: {
    releaseOnEdges: false,
    forceToAxis: true,
    thresholdDelta: 30,
  },
  keyboard: true,
  touchReleaseOnEdges: true,
  passiveListeners: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function() {
      setTimeout(function () {
        swiper.params.mousewheel.releaseOnEdges = false;
      }, 500);
    },
    reachEnd: function() {
      setTimeout(function () {
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 1700);
    },
    reachBeginning: function () {
      swiper.params.mousewheel.releaseOnEdges = true;
    }
  }
});

