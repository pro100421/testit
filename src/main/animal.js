const animalData = {
  cheetah: {
    name: "치타",
    emoji: "🐆",
    img: "../public/cheetah.jpg",
    fat: 3,
    desc: "치타는 지상에서 가장 빠른 동물로 체지방률이 매우 낮아요. <br> 빠른 속도를 유지하기 위해 날씬하고 근육질의 몸을 가지고 있죠."
  },
  deer: {
    name: "사슴",
    emoji: "🦌",
    img: "../public/deer.jpg",
    fat: 9,
    desc: "사슴은 민첩하고 날렵한 초식동물이에요. <br> 가벼운 몸으로 숲속을 누비며 살아가죠. 🌿"
  },
  horse: {
    name: "말",
    emoji: "🐴",
    img: "../public/horse.jpg",
    fat: 10,
    desc: "말은 체력이 좋고 근육질인 동물이에요. <br> 인간과 함께 많은 일을 해온 충직한 친구랍니다!"
  },
  cat: {
    name: "고양이",
    emoji: "🐱",
    img: "../public/cat.jpg",
    fat: 15,
    desc: "고양이는 체지방률이 약 15%입니다. <br> 고양이는 독립적이고, 유연한 몸을 가진 귀여운 동물이에요. <br> 하지만 오늘날 고양이를 포함한 많은 동물들이 지구온난화로 인해 생태계 변화에 어려움을 겪고 있답니다. 🌍"
  },
  wolf: {
    name: "늑대",
    emoji: "🐺",
    img: "../public/wolf.jpg",
    fat: 16,
    desc: "늑대는 야생의 사냥꾼! <br> 날렵한 몸과 강한 무리를 이루며 살아가요. 🌕"
  },
  dog: {
    name: "개",
    emoji: "🐶",
    img: "../public/dog.jpg",
    fat: 18,
    desc: "개는 인간과 가장 가까운 반려동물이죠! <br> 건강한 개는 적당한 체지방률을 유지해요."
  },
  fox: {
    name: "여우",
    emoji: "🦊",
    img: "../public/fox.jpg",
    fat: 20,
    desc: "여우는 체지방률이 약 20%입니다. <br> 영리하고 민첩한 여우는 다양한 환경에 적응하지만, <br> 환경파괴로 서식지가 줄고 있어요."
  },
  pig: {
    name: "돼지",
    emoji: "🐷",
    img: "../public/pig.jpg",
    fat: 24,
    desc: "돼지는 체지방률이 약 24%입니다. <br> 영리한 동물로 알려진 돼지는 자연 환경의 변화에 민감해요."
  },
  panda: {
    name: "판다",
    emoji: "🐼",
    img: "../public/panda.jpg",
    fat: 28,
    desc: "판다는 귀여운 외모와 느긋한 성격으로 사랑받는 동물이에요. <br> 체지방률도 포근한 만큼 높답니다."
  },
  gorilla: {
    name: "고릴라",
    emoji: "🦍",
    img: "../public/gorilla.jpg",
    fat: 30,
    desc: "고릴라는 힘이 센 초식동물이에요! <br> 근육과 지방이 조화를 이루는 멋진 몸을 가지고 있죠."
  },
  elephant: {
    name: "코끼리",
    emoji: "🐘",
    img: "../public/elephant.jpg",
    fat: 35,
    desc: "코끼리는 육지에서 가장 큰 동물이에요! <br> 체지방률도 높은 편이지만 건강한 무게랍니다."
  },
  hippo: {
    name: "하마",
    emoji: "🦛",
    img: "../public/hippo.jpg",
    fat: 45,
    desc: "하마는 물속을 좋아하는 거대한 동물이에요. <br> 두툼한 체형에 높은 체지방률을 가지고 있어요!"
  },
  bear: {
    name: "곰",
    emoji: "🐻",
    img: "../public/bear.jpg",
    fat: 50,
    desc: "곰은 겨울잠을 자기 위해 지방을 비축하는 동물이에요. <br> 체지방률이 매우 높은 편이에요!"
  },
  walrus: {
    name: "바다코끼리",
    emoji: "🦭",
    img: "../public/walrus.jpg",
    fat: 55,
    desc: "바다코끼리는 북극의 추위를 견디기 위해 지방층이 아주 두꺼워요!"
  },
  seal: {
    name: "물개",
    emoji: "🐬",
    img: "../public/seal.jpg",
    fat: 60,
    desc: "물개는 체지방률이 가장 높은 동물 중 하나예요! <br> 차가운 바닷속에서 체온을 유지하기 위해서랍니다."
  }
};

// 쿼리 파라미터 가져오기
const params = new URLSearchParams(window.location.search);
const key = params.get("animal");

if (!key || !animalData[key]) {
    document.body.innerHTML = "<h2>유효하지 않은 동물 정보입니다.</h2><a href='../../index.html'>돌아가기</a>";
} else {
    const animal = animalData[key];
    document.title = `${animal.name}와 비슷한 체지방률`;
    document.getElementById("title").innerText = `당신과 비슷한 동물: ${animal.emoji} ${animal.name}`;
    document.getElementById("animalImg").src = animal.img;
    document.getElementById("emoji").innerText = animal.emoji;
    document.getElementById("animalImg").alt = animal.name;
    document.getElementById("animalDescription").innerHTML = animal.desc;
    document.getElementById("animalName").innerText = animal.name;
}

document.addEventListener("DOMContentLoaded", function() {
    const guideContainer = document.getElementById('guideContent');

    // AJAX를 통해 guide.html을 동적으로 로드
    fetch('guide.html')
        .then(response => response.text())
        .then(data => {
            guideContainer.innerHTML = data; // guide.html의 내용 삽입
            setProductLink(key); // 동물 키에 따라 링크 삽입

        })
        .catch(error => {
            console.error("Error loading guide.html:", error);
        });

    // 부드러운 스크롤을 시작
    setTimeout(function() {
        smoothScrollToBottom();
    }, 4000);  // 딜레이
});

function smoothScrollToBottom() {
    const scrollHeight = document.body.scrollHeight;  // 전체 페이지 높이
    let currentScroll = window.scrollY;  // 현재 스크롤 위치
    const scrollStep = (scrollHeight - currentScroll) / 1000;  // 한 번에 이동할 거리 (50번 나누어 이동)

    const scrollInterval = setInterval(function() {
        if (currentScroll < scrollHeight) {
            window.scrollBy(0, scrollStep);  // 스크롤을 조금씩 내림
            currentScroll += scrollStep;
        } else {
            clearInterval(scrollInterval);  // 목표 위치에 도달하면 타이머 종료
        }
    });
}

function setProductLink(animalKey) {
    const productLinkDiv = document.getElementById("productLink");
    if (!productLinkDiv) return;


    if (animalKey === "horse") {
        productLinkDiv.innerHTML = `<a href="https://link.coupang.com/a/cM17ew" target="_blank" referrerpolicy="unsafe-url">
    <img src="https://img2a.coupangcdn.com/image/affiliate/banner/26473da5dea224a94109c3929a3d9a1e@2x.jpg" alt="순잠 꿈속을 달리는 말 시리즈 인형, 블랙, 1개, 20cm" width="120" height="240"></a>`;
    } else if (animalKey === "cheetah") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjERVN" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "deer") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEXGW" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "cat") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEXIB" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "wolf") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEXJ5" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "dog") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEXLj" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "fox") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEXLU" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "pig") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEX8W" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "panda") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEYab" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "gorilla") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEYbb" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "elephant") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEYbM" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "hippo") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEYcu" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "bear") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEYdp" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "walrus") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEYeZ" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else if (animalKey === "seal") {
        productLinkDiv.innerHTML = `<iframe src="https://coupa.ng/cjEYea" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`;
    } else {
        productLinkDiv.innerHTML = `<a href="https://example.com/multi-use-product" target="_blank">
        <button style="margin-top: 10px;">다용도 상품 보기</button>
    </a>`;
    }
}