const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");
//img 라는 Element를 새로 만들고 그 아이에게 bgImage라는 변수를 선언
bgImage.src = `img/${chosenImage}`;
// bgImage.src라는 소스를 만든다. img/ <<-img 폴더 경로 설정을 위해

bgImage.classList.add("BackImage");
document.body.appendChild(bgImage);
