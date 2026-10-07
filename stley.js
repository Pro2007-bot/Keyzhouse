(function () {
  const mobile = window.matchMedia('(max-width: 828px)');

  function updateLayout() {
    document.body.classList.toggle('is-mobile', mobile.matches);
  }

  updateLayout();

  if (mobile.addEventListener) {
    mobile.addEventListener('change', updateLayout);
  } else {
    mobile.addListener(updateLayout);
  }
})();
