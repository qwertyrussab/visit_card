
const name1 = document.querySelector(".name")
name1.innerHTML = name1.textContent.split("").map(char=>`<span>${char}</span>`).join("")

anime({
    targets: ".name span",
    translateY: [
    { value: -50, easing: 'easeoutExpo', duration: 600 },
    { value: 0, easing: 'easeoutBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: "-1turn",
  delay: anime.stagger(50),
//   easing: 'inOutCirc',
  loop: true
})