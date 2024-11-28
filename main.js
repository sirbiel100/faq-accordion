/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/script/particles.json', function () {
  console.log('callback - particles-js config loaded');
});

window.addEventListener('resize', () => {
  particlesJS.load('particles-js', 'assets/script/particles.json', function () {
    console.log('callback - particles-js config loaded');
  });
})

const radioButton = document.querySelectorAll('input')


radioButton.forEach(radio => {
  radio.addEventListener('change', inputClick)
})


function inputClick() {
  const audio = new Audio('assets/sounds/wosh.wav')
  audio.play()
}
