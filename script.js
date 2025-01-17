const links = {
  "국어(허)": "5377141697&pwd=dimigo",
  "수학(류)": "6838770867&pwd=dimigo",
  "수학(김)":
    "https://teams.microsoft.com/l/team/19%3a3bc99faef2654410ba199d1d143b200c%40thread.tacv2/conversations?groupId=5eb418d5-652a-473d-b11d-6981e06a2203&tenantId=b6d94080-6cb3-403b-8a0f-5c44c2448089",
  "영어(양)": "7654919677&pwd=dimigo",
  "진로(공)": "4700404365&pwd=dimigo",
  "사회(이)": "https://bit.ly/34rBBfM",
  "한국사(박)": "3955689232&pwd=dimigo",
  "과학(김)": "4361766687&pwd=dimigo",
  "체육(김)": "7760965125&pwd=dimigo",
  "진로(상)": "3490119479&pwd=dimigo",
  "미술(전)": "5135798594&pwd=dimigo",
  "음악(이)": "https://bit.ly/34rBBfM",
  "진로(택)": "https://bit.ly/34rBBfM",
  "상경(김)": "8402132429&pwd=dimigo",
  "플밍(김)": "6471668401&pwd=dimigo",
  "IOT(하)": "https://whaleon.naver.com/on/2107509260",
  "컴일(조)": "3650046422&pwd=dimigo",
  "진로(오)": "3853069417&pwd=dimigo",
  "정통(박)": "3335559622&pwd=dimigo",
  "빅데(하)": "https://whaleon.naver.com/on/2107509260",
  "영어(이)": "7126847915&pwd=dimigo",
  "마광(정)": "3154650453&pwd=dimigo",
  "중국어(정)": "7722593481&pwd=dimigo",
  "진로(정)": "7722593481&pwd=dimigo",
  "한국사(박)": "3955689232&pwd=dimigo",
  "공수(이)": "8792076928&pwd=dimigo",
  "수학(이)": "8792076928&pwd=dimigo",
  "문학(김)": "8134411742&pwd=dimigo",
  "정처(이)": "5363759347&pwd=dimigo",
  "플밍(임)": "4679526373&pwd=py2020",
  "수학(장)": "7965443330&pwd=dimigo",
  "진로(전)": "5135798594&pwd=dimigo",
  "정보관(이)": "9044839453&pwd=dimigo",
  "성직(이)": "9044839453&pwd=dimigo",
  "광고(정)": "97538693028&pwd=dimigo",
  "운동(이)": "3490119479&pwd=dimigo",
  "응화(마)": "2121961647&pwd=dimigo",
  "회계(최)": "5379758850&pwd=dimigo",
};

const teachers = {
  "1-1": {
    영어: "영어(양)",
    "애니메이션 콘텐츠 제작": "애니(정)",
    한국사: "한국사(박)",
    과학: "과학(김)",
    음악: "음악(이)",
    자율: "진로(전)",
    국어: "국어(허)",
    사회: "사회(이)",
    체육: "체육(김)",
    상경: "상경(김)",
    진로: "진로(전)",
    동아리: "CA",
    수학: "수학(류)",
    자율: "HR",
  },
  "1-2": {
    영어: "영어(양)",
    "애니메이션 콘텐츠 제작": "애니(정)",
    한국사: "한국사(박)",
    과학: "과학(김)",
    미술: "미술(전)",
    자율: "진로(상)",
    국어: "국어(허)",
    사회: "사회(이)",
    체육: "체육(김)",
    상경: "상경(김)",
    진로: "진로(전)",
    동아리: "CA",
    수학: "수학(김)",
    자율: "HR",
  },
  "1-3": {
    영어: "영어(양)",
    컴일: "컴일(조)",
    플밍: "플밍(김)",
    과학: "과학(김)",
    음악: "음악(이)",
    자율: "HR",
    국어: "국어(허)",
    사회: "사회(이)",
    체육: "체육(김)",
    진로: "진로(택)",
    "사물 인터넷 서비스기획": "IOT(하)",
    사물: "IOT(하)",
    수학: "수학(류)",
  },
  "1-4": {
    영어: "영어(양)",
    컴일: "컴일(조)",
    플밍: "플밍(김)",
    과학: "과학(김)",
    음악: "음악(이)",
    자율: "HR",
    진로: "진로(전)",
    동아리: "CA",
    국어: "국어(허)",
    사회: "사회(이)",
    체육: "체육(김)",
    "사물 인터넷 서비스기획": "IOT(하)",
    사물: "IOT(하)",
    수학: "수학(류)",
  },
  "1-5": {
    영어: "영어(양)",
    컴일: "컴일(조)",
    플밍: "플밍(김)",
    과학: "과학(김)",
    음악: "음악(이)",
    자율: "HR",
    동아리: "CA",
    국어: "국어(허)",
    사회: "사회(이)",
    체육: "체육(김)",
    진로: "진로(공)",
    "사물 인터넷 서비스기획": "IOT(하)",
    수학: "수학(류)",
  },
  "1-6": {
    영어: "영어(양)",
    컴일: "컴일(조)",
    플밍: "플밍(김)",
    과학: "과학(김)",
    음악: "음악(이)",
    자율: "HR",
    진로: "진로(전)",
    동아리: "CA",
    국어: "국어(허)",
    사회: "사회(이)",
    체육: "체육(김)",
    "사물 인터넷 서비스기획": "IOT(하)",
    수학: "수학(류)",
  },
  "2-1": {
    광고: "광고(정)",
    음콘: "음악(이)",
    영어Ⅰ: "영어(이)",
    중국어: "중국어(정)",
    마케팅: "마광(정)",
    플밍: "플밍(임)",
    회계: "회계(최)",
    정처: "정처(이)",
    문학: "문학(김)",
    체육: "운동(이)",
    수학Ⅰ: "수학(이)",
    진로: "진로(공)",
    동아리: "CA",
    자율: "HR",
  },
  "2-2": {
    광고: "광고(정)",
    음콘: "음악(이)",
    마케팅: "마광(정)",
    중국어: "중국어(정)",
    회계: "회계(최)",
    문학: "문학(김)",
    체육: "운동(이)",
    수학Ⅰ: "수학(장)",
    영어Ⅰ: "영어(이)",
    진로: "진로(정)",
    동아리: "CA",
    자율: "HR",
  },
  "2-3": {
    물리: "물리(전)",
    공수: "공수(이)",
    빅데: "빅데(하)",
    "UI 테스트": "응화(마)",
    성직: "성직(이)",
    중국어: "중국어(정)",
    문학: "문학(김)",
    체육: "운동(이)",
    수학Ⅰ: "수학(장)",
    영어Ⅰ: "영어(이)",
    진로: "진로(오)",
    한국사: "한국사(박)",
    동아리: "CA",
    자율: "HR",
  },
  "2-4": {
    물리: "물리(전)",
    공수: "공수(이)",
    빅데: "빅데(하)",
    "UI 테스트": "응화(마)",
    성직: "성직(이)",
    중국어: "중국어(정)",
    문학: "문학(김)",
    체육: "운동(이)",
    수학Ⅰ: "수학(장)",
    영어Ⅰ: "영어(이)",
    진로: "진로(오)",
    한국사: "한국사(박)",
    동아리: "CA",
    자율: "HR",
  },
  "2-5": {
    물리: "물리(전)",
    공수: "공수(이)",
    정보보호: "정보관(이)",
    정통: "정통(박)",
    성직: "성직(이)",
    중국어: "중국어(정)",
    문학: "문학(김)",
    체육: "운동(이)",
    수학Ⅰ: "수학(장)",
    영어Ⅰ: "영어(이)",
    진로: "운동(이)",
    한국사: "한국사(박)",
    동아리: "CA",
    자율: "HR",
  },
  "2-6": {
    물리: "물리(전)",
    공수: "공수(이)",
    정보보호: "정보관(이)",
    정통: "정통(박)",
    성직: "성직(이)",
    중국어: "중국어(정)",
    문학: "문학(김)",
    체육: "운동(이)",
    수학Ⅰ: "수학(장)",
    영어Ⅰ: "영어(이)",
    진로: "운동(이)",
    한국사: "한국사(박)",
    동아리: "CA",
    자율: "HR",
  },
};

let todaySchedule = [];
const scheduleFunction = () => {
  if (new Date().getDay() >= 5 || new Date().getDay() == 0) {
    todaySchedule = ["No Schedule"];
    return;
  }
  let classData = localStorage.getItem("class").split("-");
  fetch(`https://api.dimigo.in/timetable/weekly/grade/${classData[0]}/class/${classData[1]}`, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((data) => {
      todaySchedule = data.timetable[new Date().getDay() - 1].sequence;
      if (todaySchedule[0] == "쉬는 날") {
        todaySchedule = ["No Schedule"];
      } else {
        for (let i = 0; i <= 6; i++) {
          if (todaySchedule[i] == undefined) {
            todaySchedule[i] = "";
          } else if (todaySchedule[i][0] == "*") {
            //변동 시간표는 앞에 *이 붙음. 그걸 제거해줌
            todaySchedule[i] = todaySchedule[i].substr(2);
          } else if (todaySchedule[i]) {
            todaySchedule[i] = teachers[localStorage.getItem("class")][todaySchedule[i]];
          }
        }
      }
    });
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let className = "";
let recentName = "";

let scheduleInterval;

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});

const isMobile = () => {
  let UserAgent = navigator.userAgent;
  if (
    UserAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null ||
    UserAgent.match(/LG|SAMSUNG|Samsung/) != null
  ) {
    return true;
  } else {
    return false;
  }
};

const initialize = (updateOnly) => {
  localStorage.setItem("APIenable", true);
  if (localStorage.getItem("class") == null) {
    document.getElementById("explanation").innerHTML = "반을 선택해주세요.";
    return;
  }
  className = localStorage.getItem("class");
  let elements = document.getElementsByTagName("option");
  if (elements[0].value == "선택해주세요") {
    classSelector.remove(0);
  }
  for (let i = 0; i < elements.length; i++) {
    if (className == elements[i].value) {
      classSelector.selectedIndex = i;
    }
  }
  switchExplanation.textContent = "디미고인 시간표 사용중";
  scheduleFunction();
  if (!updateOnly) {
    scheduleInterval = setInterval(scheduleFunction, 3600000);
    loop();
  }
};

const loop = () => {
  setTimeout(loop, 1000);
  if (className == "1-1") {
    links["CA"] = links["상경(김)"];
    links["HR"] = links["상경(김)"];
  } else if (className == "1-2") {
    links["CA"] = links["영어(양)"];
    links["HR"] = links["영어(양)"];
  } else if (className == "1-3") {
    links["CA"] = links["음악(이)"];
    links["HR"] = links["음악(이)"];
  } else if (className == "1-4") {
    links["CA"] = links["과학(전)"];
    links["HR"] = links["과학(전)"];
  } else if (className == "1-5") {
    links["CA"] = links["국어(허)"];
    links["HR"] = links["국어(허)"];
  } else if (className == "1-6") {
    links["CA"] = links["사회(이)"];
    links["HR"] = links["사회(이)"];
  } else if (className == "2-1") {
    links["CA"] = links["마광(정)"];
    links["HR"] = links["마광(정)"];
  } else if (className == "2-2") {
    links["CA"] = links["중국어(정)"];
    links["HR"] = links["중국어(정)"];
  } else if (className == "2-3") {
    links["CA"] = links["한국사(박)"];
    links["HR"] = links["한국사(박)"];
  } else if (className == "2-4") {
    links["CA"] = links["공수(이)"];
    links["HR"] = links["공수(이)"];
  } else if (className == "2-5") {
    links["CA"] = links["문학(김)"];
    links["HR"] = links["문학(김)"];
  } else if (className == "2-6") {
    links["CA"] = links["과학(김)"];
    links["HR"] = links["과학(김)"];
  }
  const d = new Date();
  if (todaySchedule[0] == "No Schedule") {
    noSchedule();
    return;
  }
  if (!todaySchedule.length) {
    explanation.textContent = "로딩중..";
    return;
  }
  let hour = d.getHours();
  let min = d.getMinutes();
  if ((19 <= hour && 40 <= min) || hour == 20 || (hour == 21 && min < 50)) {
    //저녁이후
  } else if (hour == 17 || (hour == 18 && min < 35)) {
    //방과후
    day = d.getDay();
    switch (day) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
    }
    // todaySchedule[4] = "";
    // todaySchedule[5] = "";
    // todaySchedule[6] = "";
  }
  let elements = document.getElementsByClassName("schedule");
  for (let i = 0; i < 7; i++) {
    let inner = "";
    if (todaySchedule[i] == "정처(이)" || todaySchedule[i] == "광고(정)") {
      elements[i].style.cursor = "default";
      inner = `<span class="classSelect ${localStorage.getItem("1-a-1") == "true"}" onclick="classClicked('1-a-1', true, ${i})">정처(이)</span> | <span class="classSelect ${
        localStorage.getItem("1-a-1") != "true"
      }" onclick="classClicked('1-a-1', false, ${i})">광고(정)</span>`;
      if (localStorage.getItem("1-a-1")) {
        todaySchedule[i] = localStorage.getItem("1-a-1") == "true" ? "정처(이)" : "광고(정)";
      }
    } else if (todaySchedule[i] == "플밍(임)" || todaySchedule[i] == "음악(이)") {
      elements[i].style.cursor = "default";
      inner = `<span class="classSelect ${localStorage.getItem("1-a-2") == "true"}" onclick="classClicked('1-a-2', true, ${i})">플밍(임)</span> | <span class="classSelect ${
        localStorage.getItem("1-a-2") != "true"
      }" onclick="classClicked('1-a-2', false, ${i})">음악(이)</span>`;
      if (localStorage.getItem("1-a-2")) {
        todaySchedule[i] = localStorage.getItem("1-a-2") == "true" ? "플밍(임)" : "음악(이)";
      }
    } else if (todaySchedule[i] == "응화(마)" || todaySchedule[i] == "정보관(이)") {
      elements[i].style.cursor = "default";
      inner = `<span class="classSelect ${localStorage.getItem("1-b") == "true"}" onclick="classClicked('1-b', true, ${i})">응화(마)</span> | <span class="classSelect ${
        localStorage.getItem("1-b") != "true"
      }" onclick="classClicked('1-b', false, ${i})">정보관(이)</span>`;
      if (localStorage.getItem("1-b")) {
        todaySchedule[i] = localStorage.getItem("1-b") == "true" ? "응화(마)" : "정보관(이)";
      }
    } else if (todaySchedule[i] == "빅데(하)" || todaySchedule[i] == "정통(박)") {
      elements[i].style.cursor = "default";
      inner = `<span class="classSelect ${localStorage.getItem("2") == "true"}" onclick="classClicked('2', true, ${i})">빅데(하)</span> | <span class="classSelect ${
        localStorage.getItem("2") != "true"
      }" onclick="classClicked('2', false, ${i})">정통(박)</span>`;
      if (localStorage.getItem("2")) {
        todaySchedule[i] = localStorage.getItem("2") == "true" ? "빅데(하)" : "정통(박)";
      }
    } else {
      inner = todaySchedule[i];
    }
    elements[i].innerHTML = inner;
    elements[i].classList.remove("selected");
  }
  if (hour < 8) {
    document.getElementById("explanation").innerHTML = "아직 리잠 잘 시간이야..";
  } else if (hour <= 8 && min < 45) {
    updateH2("조례", links.HR, true);
    redirect(links.HR, "조례");
  } else if (hour == 8 && min < 58) {
    updateH2("조례", links.HR, false);
    redirect(links.HR, "조례");
  } else if (hour == 8) {
    elements[0].classList.add("selected");
    updateH2(todaySchedule[0], links[todaySchedule[0]], true);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if (hour <= 9 && min < 50) {
    elements[0].classList.add("selected");
    updateH2(todaySchedule[0], links[todaySchedule[0]], false);
    redirect(links[todaySchedule[0]], todaySchedule[0]);
  } else if (hour == 9) {
    elements[1].classList.add("selected");
    updateH2(todaySchedule[1], links[todaySchedule[1]], true);
    if (min >= 55) {
      redirect(links[todaySchedule[1]], todaySchedule[1]);
    }
  } else if (hour <= 10 && min < 50) {
    elements[1].classList.add("selected");
    updateH2(todaySchedule[1], links[todaySchedule[1]], false);
    redirect(links[todaySchedule[1]], todaySchedule[1]);
  } else if (hour == 10) {
    elements[2].classList.add("selected");
    updateH2(todaySchedule[2], links[todaySchedule[2]], true);
    if (min >= 55) {
      redirect(links[todaySchedule[2]], todaySchedule[2]);
    }
  } else if (hour <= 11 && min < 50) {
    elements[2].classList.add("selected");
    updateH2(todaySchedule[2], links[todaySchedule[2]], false);
    redirect(links[todaySchedule[2]], todaySchedule[2]);
  } else if (hour == 11) {
    elements[3].classList.add("selected");
    updateH2(todaySchedule[3], links[todaySchedule[3]], true);
    if (min >= 55) {
      redirect(links[todaySchedule[3]], todaySchedule[3]);
    }
  } else if (hour <= 12 && min < 50) {
    elements[3].classList.add("selected");
    updateH2(todaySchedule[3], links[todaySchedule[3]], false);
    redirect(links[todaySchedule[3]], todaySchedule[3]);
  } else if (hour == 12 || (hour == 13 && min < 40)) {
    document.getElementsByTagName("h2")[0].innerHTML = "점심시간 !";
  } else if (hour == 13 && min < 50) {
    elements[4].classList.add("selected");
    updateH2(todaySchedule[4], links[todaySchedule[4]], true);
    if (min >= 45) {
      redirect(links[todaySchedule[4]], todaySchedule[4]);
    }
  } else if (hour == 13 || (hour <= 14 && min < 40)) {
    elements[4].classList.add("selected");
    updateH2(todaySchedule[4], links[todaySchedule[4]], false);
    redirect(links[todaySchedule[4]], todaySchedule[4]);
  } else if (hour == 14 && min < 50) {
    elements[5].classList.add("selected");
    updateH2(todaySchedule[5], links[todaySchedule[5]], true);
    if (min >= 45) {
      redirect(links[todaySchedule[5]], todaySchedule[5]);
    }
  } else if (hour == 14 || (hour <= 15 && min < 40)) {
    elements[5].classList.add("selected");
    updateH2(todaySchedule[5], links[todaySchedule[5]], false);
    redirect(links[todaySchedule[5]], todaySchedule[5]);
  } else if (hour == 15 && min < 50) {
    if (todaySchedule[6] != "") {
      elements[6].classList.add("selected");
      updateH2(todaySchedule[6], links[todaySchedule[6]], true);
      if (min >= 45) {
        redirect(links[todaySchedule[6]], todaySchedule[6]);
      }
    } else {
      updateH2("종례", links.HR, true);
    }
  } else if (hour == 15 || (hour <= 16 && min < 40)) {
    if (todaySchedule[6] != "") {
      elements[6].classList.add("selected");
      updateH2(todaySchedule[6], links[todaySchedule[6]], false);
      redirect(links[todaySchedule[6]], todaySchedule[6]);
    } else {
      updateH2("종례", links.HR, true);
    }
  } else if (hour == 16 && min < 45) {
    updateH2("종례", links.HR, true);
    redirect(links.HR, "종례");
  } else if (hour == 16) {
    updateH2("종례", links.HR, false);
    redirect(links.HR, "종례");
  } else if (hour == 17 || (hour == 18 && min < 35)) {
    // document.getElementById("explanation").innerHTML = "아래에서 수강중인 강좌를 선택해주세요.";
    document.getElementById("explanation").innerHTML = "수업끝 !!";
  } else if (hour == 18 || (hour == 19 && min < 40)) {
    document.getElementById("explanation").innerHTML = "수업끝 !!";
    recentName = "";
  } else if (hour < 21 || (hour == 21 && min < 50)) {
    // document.getElementById("explanation").innerHTML = "아래에서 수강중인 강좌를 선택해주세요.";
    document.getElementById("explanation").innerHTML = "수업끝 !!";
  } else {
    document.getElementById("explanation").innerHTML = "수업끝 !!";
    recentName = "";
  }
};

const classSelected = (e) => {
  localStorage.setItem("class", e.value);
  if (className) {
    initialize(true);
  } else {
    initialize();
  }
  document.getElementById("explanation").innerHTML = "반영 중..";
};

const updateH2 = (className, classLink, isReady) => {
  if (classLink.indexOf("pwd") != -1) {
    if (isMobile()) {
      classLink = `zoomus://zoom.us/join?confno=${classLink}`.replace("&", "?");
    } else {
      classLink = `zoommtg://zoom.us/join?action=join&confno=${classLink}`;
    }
  }
  document.getElementById("explanation").innerHTML = `${isReady ? "다음 수업 준비" : "지금 수업중"} : <span>${className}</span>, <a href="${classLink}" target="_blank">여기</a>를 눌러 수동접속`;
};

const noSchedule = () => {
  explanation.textContent = "오늘은 수업이 없는 날입니다!";
};

const classClicked = (n, b, m) => {
  if (localStorage.getItem(n) == `${b}`) {
    explanation.textContent = "링크를 실행하는 중..";
    call(links[document.getElementsByClassName("schedule")[m].getElementsByClassName("true")[0].textContent]);
  } else {
    explanation.textContent = "반영 중..";
    localStorage.setItem(n, b);
  }
};

const scheduleClicked = (n) => {
  if (!document.getElementsByClassName("schedule")[n].getElementsByTagName("span").length) {
    explanation.textContent = "링크를 실행하는 중..";
    call(links[todaySchedule[n]]);
  }
};

const redirect = (link, name) => {
  if (recentName == name) return;
  call(link);
  recentName = name;
};

const call = (link) => {
  let a = document.createElement("a");
  if (isMobile()) {
    a.target = "_blank";
    a.href = `zoomus://zoom.us/join?confno=${link}`.replace("&", "?");
  } else {
    a.href = `zoommtg://zoom.us/join?confno=${link}`;
  }
  if (link.indexOf("pwd") == -1) {
    a.target = "_blank";
    a.href = link;
  }
  a.click();
};
