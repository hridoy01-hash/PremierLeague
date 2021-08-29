const searchButton = () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = '';
    if(searchText == ''){
      alert('Plsease Write Something')
    }
    else{
      const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}
      `;
      fetch(url)
      .then(response => response.json())
      .then(data => showTeam(data.teams))
    }

}


const showTeam = teams =>{
  
  const searchResults = document.getElementById('search-results')
  searchResults.textContent = '';
  for (const team of teams) {
    console.log(team);
  const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="teamDetails(${team.idTeam})" class="card h-100">
        <img w-50 src="${team.strTeamBadge} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${team.strTeam} </h5>
          <p class="card-title">${team.strCountry}</p>
          <p class="card-text"> ${team.strDescriptionEN.slice(0,200)}</p>
          <button class= "btn btn-primary">Details</button>
        </div>
      </div>
         
        `
        searchResults.appendChild(div);
}

}


//show team details

const teamDetails = teamId =>{
  console.log(teamId);
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
  .then(response => response.json())
  .then(data => showTeamDetails(data))
}

const showTeamDetails = team =>{
  console.log(team)
  const singleTeam = document.getElementById('teamDetails')
  singleTeam.textContent = '';
  const div = document.createElement('div')
   div.classList.add('card')
   div.innerHTML =`
   <img w-50 src="${team.teams[0].strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${team.teams[0].strTeam}</h5>
              <p class="card-text">${team.teams[0].strDescriptionEN.slice(0,150)}</p>
              <a href="${team.teams[0].strYoutube}" class="btn btn-primary">Watch Highlight</a>
            </div>
   
   `
   singleTeam.appendChild(div);

}


