// Hàm tạo Sản Phẩm
const renderProducts = (products) => {
  let html = '';
  
  if (products.length === 0) {
    html = `
      <div class="no-result">
        <div class="no-result-h">Tìm kiếm không có kết quả</div>
        <div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div>
        <div class="no-result-i"><i class="fa-solid fa-face-sad-cry"></i></div>
      </div>
    `;
  } else {
    html += `<div class="grid__row">`;
    
    products.forEach(product => {
      html += `
        <div class="grid_colum-2-4">
          <a class="home-product-item" href="#">
            <div class="home-product-item__img" style="background-image: url('assets/img/products/${product.image}');">
              <h4 class="home-product-item__name">${product.name}</h4>
              <div class="home-product-item__price">
                <span class="home-product-item__price-old">${product.priceOld}</span>
                <span class="home-product-item__price-current">${product.priceCurrent}</span>
              </div>
              <div class="home-product-item__action">
                <span class="home-product-item__like home-product-item__like--liked">
                  <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                  <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                </span>
                <div class="home-product-item__rating">
                  <i class="home-product-item__star--gold fa-solid fa-star"></i>
                  <i class="home-product-item__star--gold fa-solid fa-star"></i>
                  <i class="home-product-item__star--gold fa-solid fa-star"></i>
                  <i class="home-product-item__star--gold fa-solid fa-star"></i>
                  <i class="home-product-item__star--gold fa-solid fa-star"></i>
                </div>
                <span class="home-product-item__sold">${product.sold} đã bán</span>
              </div>
              <div class="home-product-item__origin">
                <span class="home-product-item__brand">${product.brand}</span>
                <span class="home-product-item__origin-name">${product.origin}</span>
              </div>

              <div class="home-product-item__sale-off">
                <span class="home-product-item__sale-off-percent">${product.saleOff}</span>
                <span class="home-product-item__sale-off-label">GIẢM</span>
              </div>
            </div>
          </a>
        </div>
      `;
    });
    
    html += `</div>`;
  }
  
  document.getElementById('home-product').innerHTML = html;
};
// 
const getProducts = () => {
  return JSON.parse(localStorage.getItem('products')) || [];
};
// Test 
let products = getProducts();
console.log(products[1].image);
renderProducts(products);

// Hàm học theo danh mục sản phẩm
const filterProducts = (category) => {
  let products = getProducts();

  if (category !== "all") {
      products = products.filter(product => product.type === category);
  }
  renderProducts(products);
};

document.querySelectorAll(".category-item").forEach(item => {
  item.addEventListener("click", function () {

      document.querySelectorAll(".category-item").forEach(el => el.classList.remove("category-item--active"));

      this.classList.add("category-item--active");

      let selectedCategory = this.getAttribute("data-category");
      console.log(selectedCategory);

      filterProducts(selectedCategory);
  });
});

filterProducts("all");
// Tìm kiếm sản phẩm theo từ khóa truyền vào
const searchProducts = (query) =>{
  const products = getProducts();
  if (!query) return products;

  const keyQuery = query.trim().toLowerCase();

  return products.filter(product =>{
    return product.name.toLowerCase().includes(keyQuery) ||
          product.type.toLowerCase().includes(keyQuery) ||
          product.brand.toLowerCase().includes(keyQuery);
  })


};

document.getElementById('search-input').addEventListener('input', function(e){
  const query = e.target.value;
  const filterProducts = searchProducts(query);
  renderProducts(filterProducts);
});

// Sắp xếp theo 3 tiêu chí
const filterProductsBySortType = (sortType) => {
  const products = getProducts();
  let sortedProducts = [...products];

  switch (sortType) {
    case 'popular':
      sortedProducts.sort((a, b) =>{
        if(b.rating === a.rating) {
          return b.sold - a.sold;
        }
        return b.rating - a.rating;
      });
      break;
    case 'newest':
      sortedProducts.sort((a, b) =>{
        return b.id - a.id;
      });
      break;
    case 'best-selling':
      sortedProducts.sort((a, b) =>{
       return b.sold - a.sold;
      });
      break;
    default:
      break;
  }
  renderProducts(sortedProducts);
}

document.querySelectorAll(".home-filter__btn").forEach(item => {
  item.addEventListener("click", (e) => {
      document.querySelectorAll(".home-filter__btn").forEach(el => el.classList.remove("btn--primary"));
      e.currentTarget.classList.add("btn--primary");
      const sortType = e.currentTarget.getAttribute("data-sort");
      filterProductsBySortType(sortType);
  });
});

document.querySelectorAll('.select-input__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    const sortOrder = e.currentTarget.getAttribute('data-sort'); 
    const products = getProducts();
  
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = parseFloat(a.priceCurrent.replace(/[^\d]/g, ''));
      const priceB = parseFloat(b.priceCurrent.replace(/[^\d]/g, ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });
    renderProducts(sortedProducts);
  });
});






