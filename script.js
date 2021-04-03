window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let container = document.getElementById("container")
            let i=0
            container.innerHTML=`<h3>Astronaut Count: ${json.length}</h3>`
            while(i<json.length){
                let formHTML=`\
                  <div class="astronaut"> \
                    <div class="bio"> \
                    <h3>${json[i].firstName} ${json[i].lastName}</h3> \
                    <ul> \
                      <li>Hours in space: ${json[i].hoursInSpace}</li> \
                      <li>Active: ${json[i].active}</li> \
                      <li>Skills: ${json[i].skills}</li> \
                    </ul> \
                    </div> \
                    <img class="avatar" src="${json[i].picture}">\
                  </div>`
                container.innerHTML= container.innerHTML+ formHTML
                i++
            }
            
        })
    })
})