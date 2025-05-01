// 각 동물의 평균 체지방률과 해당 동물 소개 페이지 경로를 담은 배열
const animals = [
    { name: "치타", bodyFat: 3, page: "src/cheetah.html" },
    // { name: "사슴", bodyFat: 9, page: "src/deer.html" }, // 현재 주석 처리된 동물들
    { name: "말", bodyFat: 10, page: "src/horse.html" },
    { name: "고양이", bodyFat: 15, page: "src/cat.html" },
    // { name: "늑대", bodyFat: 16, page: "src/wolf.html" },
    // { name: "개", bodyFat: 18, page: "src/dog.html" },
    { name: "여우", bodyFat: 20, page: "src/fox.html" },
    { name: "돼지", bodyFat: 24, page: "src/pig.html" },
    // { name: "판다", bodyFat: 28, page: "src/panda.html" },
    { name: "고릴라", bodyFat: 30, page: "src/gorilla.html" },
    { name: "코끼리", bodyFat: 35, page: "src/elephant.html" },
    { name: "하마", bodyFat: 45, page: "src/hippo.html" },
    { name: "곰", bodyFat: 50, page: "src/bear.html" },
    { name: "바다코끼리", bodyFat: 55, page: "src/walrus.html" },
    // { name: "물개", bodyFat: 60, page: "src/seal.html" }
];

// 엔터 키 누르면 findAnimal() 함수 실행
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("bodyFat");
    input.focus(); // 이 부분은 포커스 기능도 함께

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            findAnimal();
        }
    });
});

// 체지방률을 기준으로 가장 가까운 동물을 찾아 해당 페이지로 이동하는 함수
function findAnimal() {
    // 사용자가 입력한 체지방률 값을 숫자로 가져옴
    let inputFat = parseInt(document.getElementById("bodyFat").value);

    // 입력값이 유효한지 확인 (1~60 사이의 숫자)
    if (isNaN(inputFat) || inputFat < 1 || inputFat > 60) {
        // 잘못된 입력일 경우 오류 메시지 출력
        document.getElementById("result").innerText = "올바른 체지방률을 입력해주세요 (1~60%)";
        return;
    }

    // 입력한 체지방률과 가장 가까운 값을 가진 동물을 찾음
    let closestAnimal = animals.reduce((prev, curr) =>
        Math.abs(curr.bodyFat - inputFat) < Math.abs(prev.bodyFat - inputFat) ? curr : prev
    );

    // 해당 동물의 페이지로 이동
    window.location.href = closestAnimal.page;
}
