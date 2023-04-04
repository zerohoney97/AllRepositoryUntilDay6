// 프로젝트 하나를 가리키는 변수
let projectItem = document.querySelectorAll(".project-item");
// fade-in을 해야하는 변수
let projectItemHover = document.querySelectorAll(".project-item-hover");
// fade-out을 해야하는 변수
let projectItemImg = document.querySelectorAll(".project-item-img");
const options1 = {
  threshold: 0.1, // target이 화면에서 50% 이상 보일 때 애니메이션 적용
};
const options2 = {
  threshold: 1, // target이 화면에서 50% 이상 보일 때 애니메이션 적용
};
const fadeOutPromise = (index) => {
  return new Promise((resolve, reject) => {
    projectItemImg[index].classList.add("fade-out");

    resolve();
  });
};

const fadeInPromise = (index) => {
  return new Promise((resolve, reject) => {
    projectItemHover[index].classList.remove("fade-in");
    resolve();
  });
};

projectItem.forEach((a, index) => {
  a.addEventListener("mouseenter", () => {
    fadeOutPromise(index).then(() => {
      projectItemHover[index].classList.add("fade-in");
    });
  });
});

projectItem.forEach((a, index) => {
  a.addEventListener("mouseleave", () => {
    fadeInPromise(index).then(() => {
      projectItemImg[index].classList.remove("fade-out");
    });
  });
});

// -------------------header -------------------

let header = document.querySelector(".header");
let forObserveHeader = document.querySelector(".for-observe-header");

const observerHeader = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // target이 화면에 보일 때 실행할 애니메이션 적용
      header.classList.add("show-in-header");
    } else {
      header.classList.remove("show-in-header");
    }
  });
}, options2);

observerHeader.observe(forObserveHeader);
// -------------------about------------------------
let container2Text1 = document.querySelector(".container2-text-1");
let container2Text2 = document.querySelector(".container2-text-2");
let skillContainer = document.querySelector(".skil-container");
let skillContinerObserver = document.querySelector(
  ".for-observe-skill-container"
);

//   관찰하는 타겟

// 처음 about소개 문구(promise사용)
const observerContainer2Text1 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // target이 화면에 보일 때 실행할 애니메이션 적용
        fadeInText1().then(() => {
          container2Text1.classList.add("fade-in-text");
        });
        observerContainer2Text1.disconnect()
      }
    });
  },
  options1
);

observerContainer2Text1.observe(container2Text1);

// 스킬컨테이너 나오는 옵저버
const observerSkillContainer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // target이 화면에 보일 때 실행할 애니메이션 적용
      skillContainer.classList.add("skil-container-up");
      observerSkillContainer.disconnect()
    }
  });
}, options2);

observerSkillContainer.observe(skillContinerObserver);

const fadeInText1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      container2Text2.classList.add("fade-in-text");
    }, 200);
    resolve();
  });
};

// window.onscroll = () => {
//   let container2Text1Top = container2Text1.getBoundingClientRect().top;
//   console.log(container2Text1Top);
//   if (container2Text1Top < 750) {
//     fadeInText1().then(() => {
//       container2Text1.classList.add("fade-in-text");
//     });
//   }
//   if (container2Text1Top < 500) {
//     skillContainer.classList.add("skil-container-up");
//   }
// };

// --------------------my recent project animation---------------------
let projectContainerTitle = document.querySelector(
  ".for-observe-project-container"
);
let projectItemArr = document.querySelectorAll(".project-item");

//my recent project가 화면에 나왔을 때 실행
const observerProjectItem = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let i = 0;
      // target이 화면에 보일 때 실행할 애니메이션 적용
      // 순서대로 클래스를 붙여줌
      const timer = setInterval(() => {
        projectItemArr[i].classList.add("project-item-fade-in");
        i++;
        if (i > projectItemArr.length - 1) {
          clearInterval(timer);
        }
        // 본 인터벌 실행 간격은 .project-list .project-item 에서의 애니메이션과 동일하게 적용한다.
      }, 200);
      //   실행
      //   전체 아이템 길이보다 크면 종료
      projedtDetailContainer.onwheel = "";
    }
  });
}, options2);

observerProjectItem.observe(projectContainerTitle);

//------------------------------project-detail//------------------------------//

let projedtDetailContainer = document.querySelector(
  ".project-detail-container"
);

let ProjectDetail = document.querySelector(".for-observe-project-detail");

const observeProjectDetail = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      projedtDetailContainer.onwheel = function (event) {
        var delta = Math.max(
          -1,
          Math.min(1, event.wheelDelta || -event.detail)
        );
        console.log(delta);
        projedtDetailContainer.scrollLeft -= delta * 30; // scroll horizontally
        if (projedtDetailContainer.scrollLeft > 0) {
          event.preventDefault(); // prevent vertical scroll
        }
      };
    }
  });
}, options2);
observeProjectDetail.observe(ProjectDetail);
// console.log(projedtDetailContainer.getBoundingClientRect().top);

// projedtDetailContainer.addEventListener("wheel", function (event) {
//   var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
//   console.log(delta);
//   projedtDetailContainer.scrollLeft -= delta * 40; // scroll horizontally
//   if (projedtDetailContainer.scrollLeft > 0) {
//     event.preventDefault(); // prevent vertical scroll
//   }
// });
