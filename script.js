const collection = [
  // Clothing (10)
  {id:1, category:'clothing', img:'images/img2.jpg'},
  {id:2, category:'clothing', img:'images/img3.jpg'},
  {id:3, category:'clothing', img:'images/img4.jpg'},
  {id:4, category:'clothing', img:'images/img5.jpg'},
  {id:5, category:'clothing', img:'images/img6.jpg'},
  {id:6, category:'clothing', img:'images/img7.jpg'},
  {id:7, category:'clothing', img:'images/img8.jpg'},
  {id:8, category:'clothing', img:'images/img9.jpg'},
  {id:9, category:'clothing', img:'images/img10.jpg'},
  {id:10, category:'clothing', img:'images/img11.jpg'},
  // Shoes (10)
  {id:11, category:'shoes', img:'images/img12.jpg'},
  {id:12, category:'shoes', img:'images/img13.jpg'},
  {id:13, category:'shoes', img:'images/img14.jpg'},
  {id:14, category:'shoes', img:'images/img15.jpg'},
  {id:15, category:'shoes', img:'images/img16.jpg'},
  {id:16, category:'shoes', img:'images/img17.jpg'},
  {id:17, category:'shoes', img:'images/img18.jpg'},
  {id:18, category:'shoes', img:'images/img19.jpg'},
  {id:19, category:'shoes', img:'images/img20.jpg'},
  {id:20, category:'shoes', img:'images/img21.jpg'},
  // Bags (10)
  {id:21, category:'bags', img:'images/img22.jpg'},
  {id:22, category:'bags', img:'images/img23.jpg'},
  {id:23, category:'bags', img:'images/img24.jpg'},
  {id:24, category:'bags', img:'images/img25.jpg'},
  {id:25, category:'bags', img:'images/img26.jpg'},
  {id:26, category:'bags', img:'images/img27.jpg'},
  {id:27, category:'bags', img:'images/img28.jpg'},
  {id:28, category:'bags', img:'images/img29.jpg'},
  {id:29, category:'bags', img:'images/img30.jpg'},
  {id:30, category:'bags', img:'images/img31.jpg'},
  // Accessories (10)
  {id:31, category:'accessories', img:'images/img32.jpg'},
  {id:32, category:'accessories', img:'images/img33.jpg'},
  {id:33, category:'accessories', img:'images/img34.jpg'},
  {id:34, category:'accessories', img:'images/img35.jpg'},
  {id:35, category:'accessories', img:'images/img36.jpg'},
  {id:36, category:'accessories', img:'images/img37.jpg'},
  {id:37, category:'accessories', img:'images/img38.jpg'},
  {id:38, category:'accessories', img:'images/img39.jpg'},
  {id:39, category:'accessories', img:'images/img40.jpg'},
  {id:40, category:'accessories', img:'images/img41.jpg'}
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

