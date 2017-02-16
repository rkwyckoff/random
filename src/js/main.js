
import $ from 'jquery';

function makeRequest(apples) {

    $.ajax({
      url: 'https://randomuser.me/api/?results=12',
      dataType: 'json',
      success: apples
    });
  }
    makeRequest(placeBox);

    function placeBox(data) {
        for (var i =0; i < 12; i++) {
          var product = data.results[i];
          var html = boxTemplate(product);
          $('.container').append(html);

     function boxTemplate(product) {
          return `  <div class="personBox">
                    <img src= "${product.picture.large}">
                    <div class="name"> ${product.name.first} ${product.name.last}</div>
                    <div class="email"> ${product.email}</div>
                    <div class="street"> ${product.location.street}</div>
                    <div class="csp"> ${product.location.city}, ${product.location.state}  ${product.location.postcode}</div>
                    <div class="phone"> ${product.phone}</div>
                    </div>
                `
              }
      }
    }
 // function placeBox() {
 //
 //    for (var i =0; i < 16; i++) {
 //      var product = etsyData.results[i];
 //      var etsyBoxes = boxTemplate(product);
 //      // console.log(etsyBoxes);
 //       $(".container").append(etsyBoxes)
 //  }
 //
 //  function boxTemplate(product) {
 //
 //      return `
 //      <div class="productBox"><div class="imageBox">
 //      <img src="${product.Images[0].url_170x135}"</</div>
 //      <p>${product.title}</p>
 //      <p>${product.Shop.shop_name}
 //      ${product.price}</p>
 //      </div>`
 //   }
 //  }
 //   placeBox();

 // import $ from 'jquery';
 //
 // function makeRequest(apples) {
 //
 //     $.ajax({
 //       url: 'https://randomuser.me/api/',
 //       dataType: 'json',
 //       success: apples
 //     });
 //
 //     makeRequest(placeBox);
 //
 //     function placeBox(data) {
 //
 //        for (var i =0; i < 12; i++) {
 //          var product = data.results[i];
 //          var html = boxTemplate(product);
 //          // console.log(etsyBoxes);
 //           $(".personBox").append(html)
 //      }
 //    }
 //      function boxTemplate(product) {
 // console.log(product)
 //          return `
 //          <img src= "${data.results[0].picture.large}">
 //                      <div> ${data.results[0].name.first} ${data.results[0].name.last}</div>
 //                      <div> ${data.results[0].email}</div>
 //                      <div> ${data.results[0].location.street}</div>
 //                      <div> ${data.results[0].location.city}, ${data.results[0].location.state}  ${data.results[0].location.postcode}</div>
 //                      <div> ${data.results[0].phone}</div>
 //                     `
 //       }
 // placeBox();

 ///////////////////////
 // import $ from 'jquery';
 //
 // function makeRequest(apples) {
 //
 //     $.ajax({
 //       url: 'https://randomuser.me/api/',
 //       dataType: 'json',
 //       success: apples
 //     });
 //   }
 //     makeRequest(fillHtml);
 //
 //     function fillHtml(data) {
 //
 //               var html = `<img src= "${data.results[0].picture.large}">
 //                     <div> ${data.results[0].name.first} ${data.results[0].name.last}</div>
 //                     <div> ${data.results[0].email}</div>
 //                     <div> ${data.results[0].location.street}</div>
 //                     <div> ${data.results[0].location.city}, ${data.results[0].location.state}  ${data.results[0].location.postcode}</div>
 //                     <div> ${data.results[0].phone}</div>
 //                   `
 //       $('.personBox').append(html);
 //
 //   }
