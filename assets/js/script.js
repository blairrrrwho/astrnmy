function getspacedata(){


  fetch('https://go-apod.herokuapp.com/apod',)
      .then(response => response.json())
      .then(data => data)
    .then (data => {
      document.getElementById("info1").innerHTML = JSON.stringify(data.copyright);
      document.getElementById("info2").innerHTML = JSON.stringify(data.date);
      document.getElementById("info3").innerHTML = JSON.stringify(data.explanation);
      // document.getElementById("info4").innerHTML = JSON.stringify(data.media_type);
      // document.getElementById("info5").innerHTML = JSON.stringify(data.service_version);
      document.getElementById("info6").innerHTML = JSON.stringify(data.title);
      document.getElementById("pic").src = data.url;
      console.log(data)
    })
    .catch(err => console.error(err));

}

getspacedata();

function cha(){


   var i = Math.floor(Math.random() * 19);


   fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(ctrinfo => ctrinfo)
    .then(ctrinfo => {
      document.getElementById("info11").innerHTML = JSON.stringify(ctrinfo.results[i].name);
      document.getElementById("info12").src = (ctrinfo.results[i].image);
      document.getElementById("info13").innerHTML = JSON.stringify(ctrinfo.results[i].gender);
      document.getElementById("info14").innerHTML = JSON.stringify(ctrinfo.results[i].location.name);
      document.getElementById("info15").innerHTML = JSON.stringify(ctrinfo.results[i].origin.name);
      document.getElementById("info16").innerHTML = JSON.stringify(ctrinfo.results[i].species
        );
        document.getElementById("info17").innerHTML = JSON.stringify(ctrinfo.results[i].status
        )
    })
      .catch(err => console.error(err));
      }
  

cha();

var count = 0;
var btn = document.getElementById("pickle");
  
btn.onclick = function () {
    count++;
   localStorage.setItem("times pressed", count);
}


var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}