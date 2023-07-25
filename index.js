const banner = document.getElementById("banner");
const banners = ['./img/lebronBanner1.jpg','./img/lebronBanner0.jpg','./img/lebronBanner2.jpg'];
const MAX = banners.length;
let i = 0;

window.onload = function constructor()
                {
                    for(let i=0;i<8;i++){
                        let str = 'products' + i;
                        const products = document.getElementById(str);
                        products.style.backgroundImage = `url(${productsImage[i]})`;
                        const phrase = document.createElement('p');
                        phrase.textContent = productsDescription[i];
                        products.appendChild(phrase);
                    }
                }

banner.addEventListener('mousedown', (event)=>{
    const mouseX = event.clientX;
    const bannerRect = banner.getBoundingClientRect();
    const bannerCenterX = bannerRect.left + bannerRect.width / 2;
    if(mouseX < bannerCenterX){
        i = (i - 1 + MAX) % MAX;
        banner.style.backgroundImage = `url(${banners[i]})`;
    }else{
        i = (i + 1) % MAX
        banner.style.backgroundImage = `url(${banners[i]})`;
    }
})

const productsImage = [
    './img/shoesDesign/lebron9LowSide.jpg',
    './img/shoesDesign/lebronWitness6Side.jpg',
    './img/shoesDesign/lebronZoom2Side.jpg',
    './img/shoesDesign/lebronIXSide.jpg',
    './img/clothes/jordanTshirtFront.jpg',
    './img/clothes/lukaHoodieFront.jpg',
    './img/clothes/madridJacketFront.jpg',
    './img/clothes/swooshTshirtFront.jpg'
];

const productsDescription = [
    'Nike Lebron 9 Low',
    'Nike Lebron Witness 6',
    'Nike Lebron Zoom 2',
    'Nike Lebron IX',
    'Jordan Tshirt',
    'Luka Hoodie',
    'Madrid Jacket',
    'Swoosh Tshirt'
];




const productsDif = [
    './img/shoesDesign/lebron9LowDiagonal.jpg',
    './img/shoesDesign/lebronWitness6Diagonal.jpg',
    './img/shoesDesign/lebronZoom2Diagonal.jpg',
    './img/shoesDesign/lebronIXDiagonal.jpg',
    './img/clothes/jordanTshirtBack.jpg',
    './img/clothes/lukaHoodieBack.jpg',
    './img/clothes/madridJacketBack.jpg',
    './img/clothes/swooshTshirtBack.jpg'
];

function hoverEffect(X,Y){
    for(let i=0;i<8;i++){
        let str = 'products' + i;
        const panel = document.getElementById(str);
        const panelRect = panel.getBoundingClientRect();
        if(panelRect.x<=X && X<=(panelRect.x + panelRect.width) && panelRect.y<=Y && Y<=(panelRect.y+ panelRect.height+document.documentElement.scrollTop)){
            panel.style.backgroundImage = `url(${productsDif[i]})`;
            panel.addEventListener('mouseleave', (event)=>{
                for(let i=0;i<8;i++){
                    let str = 'products' + i;
                    const products = document.getElementById(str);
                    products.style.backgroundImage = `url(${productsImage[i]})`;
                }
            }); 
            break;
        }
    }
}

const main = document.getElementById('main');

main.addEventListener('mousemove', (event)=>{
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    hoverEffect(mouseX, mouseY);
})