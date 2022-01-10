setInterval(() => {
  const now = new Date()
  const currentYear = now.getFullYear()
  const goal = new Date(currentYear, 11, 25)
  const totalSeconds = goal - now

  function prettier(id) {
    if (id.textContent.length == 1) {
      const array = Array.from(id.textContent)
      array.unshift('0')
      id.textContent = array.join('')
    }
  }
  
  days.children[0].textContent = Math.floor((totalSeconds / 1000 / 60 / 60 / 24))
  hours.children[0].textContent = Math.floor(((totalSeconds / 1000 / 60 / 60) % 24))
  minutes.children[0].textContent = Math.floor(((totalSeconds / 1000 / 60) % 60))
  seconds.children[0].textContent = Math.floor(((totalSeconds / 1000) % 60))

  prettier(days.children[0])
  prettier(hours.children[0])
  prettier(minutes.children[0])
  prettier(seconds.children[0])

  console.log((totalSeconds / 1000) % 60)
}, 1000)