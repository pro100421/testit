const animals = [
    { name: "치타", bodyFat: 3, page: "src/cheetah.html" },
    { name: "사슴", bodyFat: 9, page: "src/deer.html" },
    { name: "말", bodyFat: 10, page: "src/horse.html" },
    { name: "고양이", bodyFat: 15, page: "src/cat.html" },
    { name: "늑대", bodyFat: 16, page: "src/wolf.html" },
    { name: "개", bodyFat: 18, page: "src/dog.html" },
    { name: "여우", bodyFat: 20, page: "src/fox.html" },
    { name: "돼지", bodyFat: 24, page: "src/pig.html" },
    { name: "판다", bodyFat: 28, page: "src/panda.html" },
    { name: "고릴라", bodyFat: 30, page: "src/gorilla.html" },
    { name: "코끼리", bodyFat: 35, page: "src/elephant.html" },
    { name: "하마", bodyFat: 45, page: "src/hippo.html" },
    { name: "곰", bodyFat: 50, page: "src/bear.html" },
    { name: "바다코끼리", bodyFat: 55, page: "src/walrus.html" },
    { name: "물개", bodyFat: 60, page: "src/seal.html" }
];


function findAnimal() {
    let inputFat = parseInt(document.getElementById("bodyFat").value);
    if (isNaN(inputFat) || inputFat < 1 || inputFat > 60) {
        document.getElementById("result").innerText = "올바른 체지방률을 입력해주세요 (1~60%)";
        return;
    }

    let closestAnimal = animals.reduce((prev, curr) =>
        Math.abs(curr.bodyFat - inputFat) < Math.abs(prev.bodyFat - inputFat) ? curr : prev
    );

    window.location.href = closestAnimal.page;  // 해당 동물 페이지로 이동
}