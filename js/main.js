new Swiper("#my-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: { el: "#my-swiper .swiper-pagination", clickable: true },
  loop: true,
  lazyLoading: true,
  navigation: {
    nextEl: ".swiper-nav-right",
    prevEl: ".swiper-nav-left",
  },
});
initialize = () => {
  let cartCount = document.cookie
    .split("; ")
    .find((row) => row.startsWith("cartCount="))
    ?.split("=")[1];

  typeof cartCount !== "undefined"
    ? (document.getElementById("cart-count").innerHTML = cartCount)
    : (document.getElementById("cart-count").innerHTML = 0);
};

handleCart = () => {
  e = document.getElementById("cart-count").innerHTML;
  parseInt(e);
  e++;
  document.getElementById("cart-count").innerHTML = e;
  document.cookie = "cartCount=" + e;
};

//fetch json
fetch("../products.json")
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      let title = data[i].title;
      let img = data[i].img;
      let rating = data[i].rating;
      let comment = data[i].comment;
      let code = data[i].code;
      let price = data[i].price;
      let samedayshipping = data[i].samedayshipping;
      document.querySelector(".widget1-content").innerHTML += `
      <div class="product">
        <img
          src="${img}"
          alt="productimage"
          width="100%"
        />
        <div class="rating">
        <i
          class="fa fa-star fa-fw"
          style="font-size: 12px;"
          ></i>${rating} <span>(${comment} Yorum)</span></div>
        <div class="code">${code}</div>
        <div class="title">
        ${title}
        </div>
        <div class="price">₺ ${price}</div>
        <div class="alert">YALNIZCA 2 ÜRÜN KALDI!</div>
        <div class="samedayshipping"${
          samedayshipping ? "" : "style='visibility: hidden'"
        }>BUGÜN KARGODA</div>
        <div class="addtocart" onclick={handleCart()}>
          <div class="cartsvg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="20px"
            >
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                fill="#ffffff"
                d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"
              />
            </svg>
          </div>
          <div class="carttext">SEPETE EKLE</div>
        </div>
      </div>`;

      document.querySelector("#widget2-swiper .swiper-wrapper").innerHTML += `
      <div class="swiper-slide">
        <div class="product">
          <img
            src="${img}"
            alt="productimage"
            width="100%"
          />
          <div class="rating">
          <i
          class="fa fa-star fa-fw"
          style="font-size: 12px;"
          ></i>${rating} <span>(${comment} Yorum)</span></div>
          <div class="code">${code}</div>
          <div class="title">
          ${title}
          </div>
          <div class="price">₺ ${price}</div>
          <div class="alert">YALNIZCA 2 ÜRÜN KALDI!</div>
          <div class="samedayshipping"${
            samedayshipping ? "" : "style='visibility: hidden'"
          }>BUGÜN KARGODA</div>
          <div class="addtocart" onclick={handleCart()}>
            <div class="cartsvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="20px"
              >
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  fill="#ffffff"
                  d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"
                />
              </svg>
            </div>
            <div class="carttext">SEPETE EKLE</div>
          </div>
        </div>
      </div>`;
    }

    new Swiper("#widget2-swiper", {
      slidesPerView: 5,
      spaceBetween: 0,
      loop: true,
      lazyLoading: true,
      navigation: {
        nextEl: ".widget2-swiper-nav-right",
        prevEl: ".widget2-swiper-nav-left",
      },
    });
  });
