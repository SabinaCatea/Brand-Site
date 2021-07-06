const card = document.querySelector('.card');
const container = document.querySelector('.container');
const nav = document.querySelector('.nav');

const brand = document.querySelector('.brand');

container.addEventListener('mousemove', function (e) {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  const yAxis = (window.innerWidth / 2 - e.pageY) / 15;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
// container.addEventListener('mouseenter', function (e) {
//   card.style.transition = ;
// });
//mouse leave
container.addEventListener('mouseleave', function (e) {
  card.style.transition = 'all 0.6s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
console.log(nav);

nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav_link')) {
    const link = e.target;
    const brand = document.querySelector('.brand');
    const siblings = link.closest('.nav').querySelectorAll('.nav_link');
    siblings.forEach(function (e) {
      if (e !== link) e.style.opacity = 0.5;
      brand.style.opacity = 0.5;
    });
  }
});
nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav_link')) {
    const link = e.target;
    const brand = document.querySelector('.brand');
    const siblings = link.closest('.nav').querySelectorAll('.nav_link');
    siblings.forEach(function (e) {
      if (e !== link) e.style.opacity = 1;
      brand.style.opacity = 1;
    });
  }
});

// navigator.geolocation.getCurrentPosition(
//   function (position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(position);
//     console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//     const coords = [latitude, longitude];
//     var map = L.map('map').setView(coords, 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     map.on('click', function (mapEvent) {
//       console.log(mapEvent);
//       const { lat, lng } = mapEvent.latlng;
//       console.log(lat, lng);

//       L.marker([lat, lng])
//         .addTo(map)
//         .bindPopup(
//           L.popup({
//             autoClose: false,
//             closeOnClick: false,
//           }).setContent('workout')
//         )

//         .openPopup();
//     });

// L.marker(coords)
//   .addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();
// },
//   function () {
//     alert('We cannot get your position');
//   }
// );
