// The page works without this file: photos open as plain links and every
// WhatsApp link already holds its pre-filled message in the HTML.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('#gallery-grid li'));
  var buttons = document.querySelectorAll('.filters button');
  var dialog = document.getElementById('lightbox');
  var image = document.getElementById('lb-image');
  var counter = document.getElementById('lb-counter');
  var waLink = document.getElementById('lb-wa');
  var current = 0;

  function visibleItems() {
    return items.filter(function (li) { return !li.hidden; });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.filter;
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
      items.forEach(function (li) { li.hidden = filter !== 'all' && li.dataset.cat !== filter; });
    });
  });

  function show(index) {
    var list = visibleItems();
    current = (index + list.length) % list.length;
    var link = list[current].querySelector('a');
    var thumb = link.querySelector('img');
    image.src = link.getAttribute('href');
    image.alt = thumb.alt;
    waLink.href = list[current].dataset.wa;
    counter.textContent = (current + 1) + ' из ' + list.length;
  }

  items.forEach(function (li) {
    li.querySelector('a').addEventListener('click', function (event) {
      if (typeof dialog.showModal !== 'function') return;
      event.preventDefault();
      show(visibleItems().indexOf(li));
      dialog.showModal();
    });
  });

  document.getElementById('lb-prev').addEventListener('click', function () { show(current - 1); });
  document.getElementById('lb-next').addEventListener('click', function () { show(current + 1); });
  document.getElementById('lb-close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('close', function () { image.removeAttribute('src'); });

  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });

  // On phones, show the pinned button only once the hero button has scrolled away.
  var sticky = document.querySelector('.sticky-cta');
  var heroButton = document.querySelector('.hero .btn');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      sticky.classList.toggle('is-hidden', entries[0].isIntersecting);
    }).observe(heroButton);
  }

  // Swipe between photos on phones.
  var startX = null;
  image.addEventListener('touchstart', function (event) { startX = event.touches[0].clientX; }, { passive: true });
  image.addEventListener('touchend', function (event) {
    if (startX === null) return;
    var distance = event.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(distance) > 50) show(current + (distance < 0 ? 1 : -1));
  });
})();
