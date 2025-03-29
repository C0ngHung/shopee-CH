var products = [];

function createProduct() {
  if (products.length === 0) {
    products = [
      {
        id: 1,
        name: "Tai nghe HP HYPERX Cloud Earbuds II",
        image: "tainghe1.webp",
        priceOld: "1.090.000đ",
        priceCurrent: "890.000đ",
        rating: 5,
        sold: 543,
        brand: "HP",
        origin: "USA",
        saleOff: "10%",
        type: "headphone"
      },
      {
        id: 2,
        name: "Màn hình LG 24GS65F-B/ 24GS60F 24",
        image: "manhinh1.webp",
        priceOld: "4.900.000đ",
        priceCurrent: "3.900.000đ",
        rating: 5,
        sold: 642,
        brand: "LG",
        origin: "Korea",
        saleOff: "20%",
        type: "monitor"
      },
      {
        id: 3,
        name: "Laptop Dell Inspiron 3501",
        image: "laptop1.webp",
        priceOld: "15.000.000đ",
        priceCurrent: "13.500.000đ",
        rating: 5,
        sold: 543,
        brand: "Dell",
        origin: "USA",
        saleOff: "10%",
        type: "laptop"
      },
      {
        id: 4,
        name: "Chuột không dây Logitech MX Master 3",
        image: "chuot1.webp",
        priceOld: "2.500.000đ",
        priceCurrent: "1.900.000đ",
        rating: 5,
        sold: 432,
        brand: "Logitech",
        origin: "China",
        saleOff: "24%",
        type: "mouse"
      },
      {
        id: 5,
        name: "Bàn phím cơ Razer BlackWidow V3",
        image: "banphim1.webp",
        priceOld: "3.200.000đ",
        priceCurrent: "2.500.000đ",
        rating: 5,
        sold: 321,
        brand: "Razer",
        origin: "USA",
        saleOff: "22%",
        type: "keyboard"
      },
      {
        id: 6,
        name: "Tai nghe Sony WF-1000XM4",
        image: "tainghe2.webp",
        priceOld: "7.990.000đ",
        priceCurrent: "6.990.000đ",
        rating: 5,
        sold: 321,
        brand: "Sony",
        origin: "Japan",
        saleOff: "12%",
        type: "headphone"
      },
      {
        id: 7,
        name: "Chuột gaming Razer DeathAdder V2",
        image: "chuot2.webp",
        priceOld: "2.200.000đ",
        priceCurrent: "1.800.000đ",
        rating: 5,
        sold: 550,
        brand: "Razer",
        origin: "USA",
        saleOff: "18%",
        type: "mouse"
      },
      {
        id: 8,
        name: "Màn hình Dell S2421HGF",
        image: "manhinh2.webp",
        priceOld: "5.500.000đ",
        priceCurrent: "4.800.000đ",
        rating: 5,
        sold: 300,
        brand: "Dell",
        origin: "USA",
        saleOff: "15%",
        type: "monitor"
      },
      {
        id: 9,
        name: "Laptop HP Pavilion 15",
        image: "laptop2.webp",
        priceOld: "18.000.000đ",
        priceCurrent: "16.200.000đ",
        rating: 4,
        sold: 420,
        brand: "HP",
        origin: "USA",
        saleOff: "10%",
        type: "laptop"
      },
      {
        id: 10,
        name: "Bàn phím cơ Corsair K70",
        image: "banphim2.webp",
        priceOld: "4.000.000đ",
        priceCurrent: "3.500.000đ",
        rating: 5,
        sold: 290,
        brand: "Corsair",
        origin: "USA",
        saleOff: "20%",
        type: "keyboard"
      },
      {
        id: 11,
        name: "Màn hình ASUS VG248QE",
        image: "manhinh3.webp",
        priceOld: "6.000.000đ",
        priceCurrent: "5.300.000đ",
        rating: 4,
        sold: 280,
        brand: "ASUS",
        origin: "Taiwan",
        saleOff: "10%",
        type: "monitor"
      },
      {
        id: 12,
        name: "Chuột không dây Microsoft Sculpt",
        image: "chuot3.webp",
        priceOld: "1.800.000đ",
        priceCurrent: "1.600.000đ",
        rating: 4,
        sold: 330,
        brand: "Microsoft",
        origin: "USA",
        saleOff: "10%",
        type: "mouse"
      },
      {
        id: 13,
        name: "Laptop ASUS VivoBook S14",
        image: "laptop3.webp",
        priceOld: "17.000.000đ",
        priceCurrent: "15.300.000đ",
        rating: 5,
        sold: 390,
        brand: "ASUS",
        origin: "Taiwan",
        saleOff: "10%",
        type: "laptop"
      },
      {
        id: 14,
        name: "Bàn phím cơ Logitech G Pro",
        image: "banphim3.webp",
        priceOld: "3.500.000đ",
        priceCurrent: "3.000.000đ",
        rating: 5,
        sold: 310,
        brand: "Logitech",
        origin: "China",
        saleOff: "15%",
        type: "keyboard"
      },
      {
        id: 15,
        name: "Màn hình Samsung Odyssey G5",
        image: "manhinh4.webp",
        priceOld: "7.000.000đ",
        priceCurrent: "6.200.000đ",
        rating: 5,
        sold: 150,
        brand: "Samsung",
        origin: "Korea",
        saleOff: "12%",
        type: "monitor"
      },
      {
        id: 16,
        name: "Bàn phím cơ SteelSeries Apex Pro",
        image: "banphim4.webp",
        priceOld: "4.500.000đ",
        priceCurrent: "3.800.000đ",
        rating: 5,
        sold: 270,
        brand: "SteelSeries",
        origin: "USA",
        saleOff: "18%",
        type: "keyboard"
      },
      {
        id: 17,
        name: "Chuột Logitech G502 HERO",
        image: "chuot4.webp",
        priceOld: "2.800.000đ",
        priceCurrent: "2.400.000đ",
        rating: 5,
        sold: 400,
        brand: "Logitech",
        origin: "China",
        saleOff: "15%",
        type: "mouse"
      },
      {
        id: 18,
        name: "Laptop ASUS VivoBook S14",
        image: "laptop3.webp",
        priceOld: "17.000.000đ",
        priceCurrent: "15.300.000đ",
        rating: 5,
        sold: 390,
        brand: "ASUS",
        origin: "Taiwan",
        saleOff: "10%",
        type: "laptop"
      },
      {
        id: 19,
        name: "Màn hình Samsung Odyssey G5",
        image: "manhinh4.webp",
        priceOld: "7.000.000đ",
        priceCurrent: "6.200.000đ",
        rating: 5,
        sold: 150,
        brand: "Samsung",
        origin: "Korea",
        saleOff: "12%",
        type: "monitor"
      },
      {
        id: 20,
        name: "Tai nghe Sennheiser Momentum True Wireless 2",
        image: "tainghe5.webp",
        priceOld: "9.000.000đ",
        priceCurrent: "8.000.000đ",
        rating: 5,
        sold: 400,
        brand: "Sennheiser",
        origin: "Germany",
        saleOff: "15%",
        type: "headphone"
      },
      {
        id: 21,
        name: "Bàn phím cơ Logitech G Pro",
        image: "banphim5.webp",
        priceOld: "3.500.000đ",
        priceCurrent: "3.000.000đ",
        rating: 5,
        sold: 270,
        brand: "Logitech",
        origin: "China",
        saleOff: "5%",
        type: "keyboard"
      },
      {
        id: 22,
        name: "Tai nghe Sony WH-1000XM4",
        image: "tainghe5.webp",
        priceOld: "8.000.000đ",
        priceCurrent: "7.000.000đ",
        rating: 5,
        sold: 20,
        brand: "Sony",
        origin: "Japan",
        saleOff: "12%",
        type: "headphone"
      },
      {
        id: 23,
        name: "Lenovo ThinkPad X1 Extreme GEN 5",
        image: "laptop5.webp",
        priceOld: "30.000.000đ",
        priceCurrent: "15.000.000đ",
        rating: 5,
        sold: 300,
        brand: "Lenovo",
        origin: "USA",
        saleOff: "50%",
        type: "laptop"
      },
      {
        id: 24,
        name: "Tai nghe AirPods Pro",
        image: "tainghe3.webp",
        priceOld: "7.490.000đ",
        priceCurrent: "5.000.000đ",
        rating: 5,
        sold: 999,
        brand: "Apple",
        origin: "USA",
        saleOff: "25%",
        type: "headphone"
      },
      {
        id: 25,
        name: "Chuột không dây DAREU RBB 8 Màu",
        image: "chuot1.webp",
        priceOld: "849.000đ",
        priceCurrent: "600.00đ",
        rating: 5,
        sold: 686,
        brand: "Dareu",
        origin: "China",
        saleOff: "8%",
        type: "mouse"
      }
    ];
  }
};

function getProducts() {
  return products;
};

function renderProducts(productArray) {
  var html = "";
  if (productArray.length === 0) {
    html = '<div class="no-result">' +
             '<div class="no-result-h">Tìm kiếm không có kết quả</div>' +
             '<div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div>' +
             '<div class="no-result-i"><i class="fa-solid fa-face-sad-cry"></i></div>' +
           '</div>';
  } else {
    html += '<div class="grid__row">';
    for (var i = 0; i < productArray.length; i++) {
      var p = productArray[i];
      html += '<div class="grid_colum-2-4">' +
                '<a class="home-product-item" href="#">' +
                  '<div class="home-product-item__img" style="background-image: url(\'assets/img/products/' + p.image + '\');">' +
                    '<h4 class="home-product-item__name">' + p.name + '</h4>' +
                    '<div class="home-product-item__price">' +
                      '<span class="home-product-item__price-old">' + p.priceOld + '</span>' +
                      '<span class="home-product-item__price-current">' + p.priceCurrent + '</span>' +
                    '</div>' +
                    '<div class="home-product-item__action">' +
                      '<span class="home-product-item__like home-product-item__like--liked">' +
                        '<i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>' +
                        '<i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>' +
                      '</span>' +
                      '<div class="home-product-item__rating">' +
                        '<i class="home-product-item__star--gold fa-solid fa-star"></i>' +
                        '<i class="home-product-item__star--gold fa-solid fa-star"></i>' +
                        '<i class="home-product-item__star--gold fa-solid fa-star"></i>' +
                        '<i class="home-product-item__star--gold fa-solid fa-star"></i>' +
                        '<i class="home-product-item__star--gold fa-solid fa-star"></i>' +
                      '</div>' +
                      '<span class="home-product-item__sold">' + p.sold + ' đã bán</span>' +
                    '</div>' +
                    '<div class="home-product-item__origin">' +
                      '<span class="home-product-item__brand">' + p.brand + '</span>' +
                      '<span class="home-product-item__origin-name">' + p.origin + '</span>' +
                    '</div>' +
                    '<div class="home-product-item__sale-off">' +
                      '<span class="home-product-item__sale-off-percent">' + p.saleOff + '</span>' +
                      '<span class="home-product-item__sale-off-label">GIẢM</span>' +
                    '</div>' +
                  '</div>' +
                '</a>' +
              '</div>';
    }
    html += '</div>';
  }
  document.getElementById("home-product").innerHTML = html;
};

function filterProducts(category) {
  var allProducts = getProducts();
  var result = [];
  if (category === "all") {
    result = allProducts;
  } else {
    for (var i = 0; i < allProducts.length; i++) {
      if (allProducts[i].type === category) {
        result.push(allProducts[i]);
      }
    }
  }
  renderProducts(result);
};

function searchProducts(query) {
  var allProducts = getProducts();
  if (query.trim() === "") {
    return allProducts;
  }
  var keyQuery = query.trim().toLowerCase();
  var result = [];
  for (var i = 0; i < allProducts.length; i++) {
    var p = allProducts[i];
    if (p.name.toLowerCase().indexOf(keyQuery) !== -1 ||
        p.type.toLowerCase().indexOf(keyQuery) !== -1 ||
        p.brand.toLowerCase().indexOf(keyQuery) !== -1) {
      result.push(p);
    }
  }
  return result;
};

function filterProductsBySortType(sortType) {
  var allProducts = getProducts();
  var sorted = allProducts.slice();
  if (sortType === "popular") {
    sorted.sort(function(a, b) {
      if (b.rating === a.rating) {
        return b.sold - a.sold;
      }
      return b.rating - a.rating;
    });
  } else if (sortType === "newest") {
    sorted.sort(function(a, b) {
      return b.id - a.id;
    });
  } else if (sortType === "best-selling") {
    sorted.sort(function(a, b) {
      return b.sold - a.sold;
    });
  }
  renderProducts(sorted);
};

var categoryItems = document.querySelectorAll(".category-item");
for (var i = 0; i < categoryItems.length; i++) {
  categoryItems[i].addEventListener("click", function() {
    var items = document.querySelectorAll(".category-item");
    for (var j = 0; j < items.length; j++) {
      items[j].classList.remove("category-item--active");
    }
    this.classList.add("category-item--active");
    var selectedCategory = this.getAttribute("data-category");
    filterProducts(selectedCategory);
  });
};
filterProducts("all");


document.getElementById("search-input").addEventListener("input", function(e) {
  var query = e.target.value;
  var result = searchProducts(query);
  renderProducts(result);
});


var filterBtns = document.querySelectorAll(".home-filter__btn");
for (var i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function() {
    var btns = document.querySelectorAll(".home-filter__btn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.remove("btn--primary");
    }
    this.classList.add("btn--primary");
    var sortType = this.getAttribute("data-sort");
    filterProductsBySortType(sortType);
  });
};


window.onload = function() {
  createProduct();
  renderProducts(getProducts());
};



function bubbleSortByPrice(arr, order) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      var priceA = parseFloat(arr[j].priceCurrent.replace(/[^\d]/g, ''));
      var priceB = parseFloat(arr[j + 1].priceCurrent.replace(/[^\d]/g, ''));
      if (order === 'asc') {
        if (priceA > priceB) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      } else {
        if (priceA < priceB) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
};

document.querySelectorAll('.select-input__link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var sortOrder = e.currentTarget.getAttribute('data-sort');
    var products = getProducts();

    var productsCopy = products.slice();
    var sortedProducts = bubbleSortByPrice(productsCopy, sortOrder);
    renderProducts(sortedProducts);
  });
});