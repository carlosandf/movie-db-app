const select = (query) => document.querySelector(query);

const header = select('.header');
const gradientHeader = select('.gradient-header');
const mainTitle = select('.main-title');
const backIcon = select('.back-icon');
const search = select('.search');

export function headerMovieDetail ({ poster }) {
  header?.classList.add('header-movie-details');
  gradientHeader?.classList.remove('inactive');
  mainTitle?.classList.add('inactive');
  backIcon?.classList.remove('inactive');
  search?.classList.add('inactive');

  backIcon.onclick = () => {
    window.location.hash = '';
  };
  header.style.backgroundImage = `url(${poster})`;
}

export function headerHome () {
  header?.classList.remove('header-movie-details');
  gradientHeader?.classList.add('inactive');
  mainTitle?.classList.remove('inactive');
  backIcon?.classList.add('inactive');
  search?.classList.remove('inactive');
  header.style.backgroundImage = 'none';
}
/*
<div class="">
  <nav class="nav" id="nav">
    <h1 class="main-title">
      <a href="/">MovieApp</a>
    </h1>
  </nav>
  <form class="search">
    <input placeholder="Buscar..." type="text" />
    <button>🔍</button>
  </form>
</div>
*/
