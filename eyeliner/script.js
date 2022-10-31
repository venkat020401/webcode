async function foo(){
    var a = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner");
    var data1 = await a.json();
    console.log(data1);
    var div1 = document.createElement("div");
    div1.setAttribute("class", "outer");
    var div2 = document.createElement("div");
    div2.setAttribute("class", "inner");
    var div3 = document.createElement("div");
    div3.setAttribute("class", "heading");
    var h1 = document.createElement("h1");
    h1.innerHTML ="Lising the products type : Eyeliner";
    var hr = document.createElement("hr");
    var br = document.createElement("br");
    var div4 = document.createElement("div");
    div4.setAttribute("class", "row row-cols-1 row-cols-md-2");
    for (var i = 0; i < data1.length; i++) {
      div4.innerHTML += `
      <div class="col mb-4">
        <div class="card">
          <img src="${data1[i].api_featured_image}">
          <div class="card-body">
            <h4 class="card-title">${data1[i].brand} </h4>
            <h6 class="card-title">${data1[i].name} </h6>
            <h6 class="card-title">${data1[i].price_sign} ${data1[i].price} </h6>
            <p><b>Description :</b> ${data1[i].description}</p>
            <p><b>Product Link :</b> ${data1[i].product_link}</p>
          </div>
        </div>
      </div>
      `;
  
      div3.append(h1);
      div2.append(hr, br, div3, div4);
      div1.append(div3, div2);
      document.body.append(div1);
    }
  }
  foo();