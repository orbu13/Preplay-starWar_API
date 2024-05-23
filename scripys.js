fetch ('https://swapi.dev/api/planets/')
  .then(function(response){
    return response.json()
  
  })
  .then(function(data){
    console.log(data);
    displayDate(data)
  })

  function displayDate(obj){
    const movie_container = document.querySelector(".movie-container")

    obj.results.forEach(element =>{
      if(element.residents[0]){
        fetch (element.residents[0])
        .then(function(response){
          return response.json()
        })
        .then(function(data){
          console.log(data);
          const card = document.createElement("div")
          card.classList.add("card")
          const planetName = document.createElement("h2")
          planetName.classList.add("planetName")
          const climate = document.createElement("p")
          climate.classList.add("climate")
          const terrain = document.createElement("p")
          terrain.classList.add("terrain")
          const population = document.createElement("p")
          population.classList.add("population")
          const residents = document.createElement("p")
          residents.classList.add("residents")

      
          planetName.innerText = "Planet name: " + element.name
          climate.innerText = "Climate: " + element.climate
          terrain.innerText = "Terrain: " + element.terrain
          population.innerText = "Population: " + element.population
          residents.innerText =  "Resident: " + data.name 
    
          const button = document.createElement("button")
          button.innerText = "Add to WishList"
          button.classList.add("button")
          button.id = element.name
          button.addEventListener("click", moveToWishListPage)

          movie_container.appendChild(card)
          card.appendChild(planetName)
          card.appendChild(climate)
          card.appendChild(terrain)
          card.appendChild(population)
          card.appendChild(residents)
          card.appendChild(button)

        })

      }else{

        const card = document.createElement("div")
        card.classList.add("card")
        const planetName = document.createElement("h2")
        planetName.classList.add("planetName")
        const climate = document.createElement("p")
        climate.classList.add("climate")
        const terrain = document.createElement("p")
        terrain.classList.add("terrain")
        const population = document.createElement("p")
        population.classList.add("population")
        const residents = document.createElement("p")
        residents.classList.add("residents")

    
        planetName.innerText = "Planet name: " + element.name
        climate.innerText = "Climate: " + element.climate
        terrain.innerText = "Terrain: " + element.terrain
        population.innerText = "Population: " + element.population
        residents.innerText = "no residents" 
  
        const button = document.createElement("button")
        button.innerText = "Add to WishList"
        button.classList.add("button")
        button.id = element.name
        button.addEventListener("click", moveToWishListPage)

        movie_container.appendChild(card)
        card.appendChild(planetName)
        card.appendChild(climate)
        card.appendChild(terrain)
        card.appendChild(population)
        card.appendChild(residents)
        card.appendChild(button)

      }

    })
  }    

  let array = []
  function moveToWishListPage(e){
    if(array.includes(e.target.id)){
      array.splice(array.indexOf(e.target.id), 1)
    }else{
      e.target.innerText = "Remove from WishList"
      array.push(e.target.id)
    }
    localStorage.setItem("array", JSON.stringify(array))
  }

