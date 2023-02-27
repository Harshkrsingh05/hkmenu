const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 49,
    img: "images/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 150,
    img: "images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 79,
    img: "images/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 60,
    img: "images/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 49,
    img: "images/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 50,
    img: "images/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 89,
    img: "images/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 170,
    img: "images/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 99,
    img: "images/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Donut",
    category: "breakfast",
    price: 29,
    img: "images/Donut.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 11,
    title: "butter roll",
    category: "breakfast",
    price: 50,
    img: "images/butter_roll.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },{
    id: 12,
    title: "cheese burger",
    category: "breakfast",
    price: 50,
    img: "images/cheese_burger.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },{
    id: 13,
    title: "cheese sandwich",
    category: "breakfast",
    price: 30,
    img: "images/cheese_sandwich.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },{
    id: 14,
    title: "kadai chicken",
    category: "lunch",
    price: 150,
    img: "images/kadai_chicken.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },{
    id: 15,
    title: "pancake",
    category: "breakfast",
    price: 40,
    img: "images/pancake.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector('.btn-container');

window.addEventListener("DOMContentLoaded", function (){
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    
    return ` <article class="menu-item">
      <img src=${item.img} alt=${item.title}>
      <div class="item-info">
        <header class="info">
          <h4>${item.title}</h4>
          <h4 class="price">Rs ${item.price}</h4>
        </header>
        <hr>
        <p class="item-text">${item.desc}</p>
      </div>
    </article>`;
  });
  displayMenu= displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
  const categories = menu.reduce(function (values,item){
    if (!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },['all']);
  const categoryBtns= categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function (e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem){
        if (menuItem.category === category){
          return menuItem;
        }
      });
      if (category === 'all'){
        displayMenuItems(menu);
      }
      else{
        displayMenuItems(menuCategory);
      }
    });
  });
}
