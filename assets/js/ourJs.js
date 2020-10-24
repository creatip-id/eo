// SLICK SLIDER
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


// DYNAMIC DATA
const list = document.querySelector('#list');
list.innerHTML = "";
events.forEach(evnt => {
  list.innerHTML += `
    <div class="slide"><img src="${evnt.image}" onclick="detail('${evnt.title}','${evnt.desc}','${evnt.image}','${evnt.join}')"></div>
  `
})

function detail(nama, desc, imgD) {
  let detail = document.querySelector("#detail");
  detail.querySelector('.eventImg').src = imgD;
  detail.querySelector('.eventTitle').innerHTML = nama;
  detail.querySelector('.eventDesc').innerHTML = desc;
}

document.querySelector(".jmlClient").innerHTML = events.length;
document.querySelector(".jmlEvent").innerHTML = events.length;
