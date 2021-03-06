const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.getElementById("message-1")
const messageTwo = document.getElementById("message-2")

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const location = search.value

  fetch("/weather?address=" + location).then(
    (response) => {
      if (!location) {
        return console.log("You must provide a location!")
      }

      messageOne.textContent = "Loading..."
      messageTwo.textContent = ""

      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error
        } else {
          messageOne.textContent = data.location
          messageTwo.textContent = data.forecast
        }
      })
    }
  )
})
