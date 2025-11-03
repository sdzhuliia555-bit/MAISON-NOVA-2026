const collection = [
  {id:1, category:'clothing', img:'img2.jpg'},
  {id:2, category:'clothing', img:'img3.jpg'},
  {id:3, category:'clothing', img:'img4.jpg'},
  {id:4, category:'clothing', img:'img5.jpg'},
  {id:5, category:'clothing', img:'img6.jpg'},
  {id:6, category:'shoes', img:'img7.jpg'},
  {id:7, category:'bags', img:'img8.jpg'},
  {id:8, category:'accessories', img:'img9.jpg'}
];

const carousel = document.getElementById('collectionCarousel');

function renderCarousel(filter = 'all') {
  carousel.innerHTML = '';
  const filtered = (filter === 'all') ? collection : collection.filter(item => item.category === filter);
  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `<img src="${item.img}" alt="Item ${item.id}">`;
    carousel.appendChild(div);
  });
}

renderCarousel();

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    renderCarousel(filter);
  });
});

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cardWidth = 220;

prev.addEventListener('click', () => {
  carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

next.addEventListener('click', () => {
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

const form = document.getElementById('subscribeForm');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (email) {
    message.textContent = `Thanks for subscribing, ${email}!`;
    form.reset();
  } else {
    message.textContent = 'Please enter a valid email.';
  }
});

document.querySelector('.btn').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#collection').scrollIntoView({ behavior: 'smooth' });
});
