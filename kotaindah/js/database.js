const endpoint_url = 'https://51018004.p-web.click/kota/api';

document.addEventListener("DOMContentLoaded", function(){
  getKota();
});

function getKota() {
  fetch(endpoint_url + "/kota/kotadetail")
  .then(status)
  .then(json)
  .then(function(data){
    var kotalistHTML = "";
    data.kotaDetail.forEach(function(kota_indah){
      kotalistHTML += `
        <div class = "col m4 s6">
          <div class = "card">
            <a href="detailkota.html?ID=${kota_indah.ID}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="img/${kota_indah.gambar}"/>
              </div>
            </a>
            <div class="card-content center">
            <a class="data">${kota_indah.judul}</a>
            <hr>
            <p></p>
            <a href="detailkota.html?ID=${kota_indah.ID}" class="waves-effect waves-light btn-small data">View Detail</a>
            </div>
          </div>
        </div>

        `;

        $("#section_title").html( "Special City" );
    });
        document.getElementById("kotalist").innerHTML = kotalistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}



function getKotaDetail(ID) {
  fetch(endpoint_url+ "/kota/kotadetail"+"?ID="+ ID)
  .then(status)
  .then(json)
  .then(function(data){
    var kotalistHTML = "";
    data.kotaDetail.forEach(function(kota_indah){
      kotalistHTML += `
      <div class="center">
      <h3 class="data"><strong>${kota_indah.judul}</strong></h3>
      <hr>
      <img class="gmbr" src="img/${kota_indah.gambar}"/>
      <h5 class="data">Deskripsi</h5>
      <p>${kota_indah.isi}</p>
        `;

        $("#section_title").html( "Special City" );
    });
        document.getElementById("detailkota").innerHTML = kotalistHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}
