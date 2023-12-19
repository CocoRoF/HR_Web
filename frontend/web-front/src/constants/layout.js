import about from "@/assets/main/img/about.png";
import no_image from "@/assets/main/img/no_image.jpg";

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "About me",
        url: "#aboutme"
    },
    {
        title: "Research & Project",
        url: "#site"
    },
    {
        title: "Awards",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const headerMenu = [
    {
        title: "blog",
        url: "/blog"
    },
    {
        title: "Paper",
        url: "/paper"
    },
    {
        title: "Project",
        url: "/project"
    },
    {
        title: "Application",
        url: "/application"
    },
    {
        title: "Award",
        url: "/award"
    },
    {
        title: "Photo",
        url: "/photo"
    },
];

export const introText = {
    title: "AI Service Engineer",
    desc: ["AI Technique", "To the service", "For the benefit"],
    img: about
}

export const aboutmeText = [
    {
        title: "Education",
        desc: ["Boucher Degree: Psychology (SahmYook Univ. 2016~2020)", "Master Degree: Bigdata Analysis Engeeniring (KyungHee Univ. 2022~2024)",
            "Coursework: Network Analysis, Natural Language Processing, Recommender System"
        ]
    },
    {
        title: "Experience",
        desc: ["Python", "Django", "React"]
    },
    {
        title: "Favourites",
        desc: ["Video Game", "Singing"]
    }
]

// site의 개수 변동시 scss의 변수를 변경해야 함
export const siteText = [
    {
        text: ["Paper", "건강추천시스템(HRS) 연구 동향:", "인용네트워크 분석과 GraphSAGE를 활용하여"],
        title: "지능정보연구(2023)",
        code: "https://github.com/CocoRoF/JIIS2023",
        view: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11447160",
        info: [
            "KCI Paper",
            "Period : 2022. 10 ~ 2023. 02",
            "Field : Health Care, Recommender System, Graph Network Analysis, Deep Learning",
        ],
    },
    {
        text: ["Conference", "라이브커머스 실시간 채팅을 활용한 여행/체험 분야 소비자 행태 분석:", "텍스트마이닝 및 머신러닝을 적용한 탐색적 연구"],
        title: "한국경영정보학회 춘계 학술대회(2023)",
        code: "https://github.com/CocoRoF/KMIS2023",
        view: "https://www.earticle.net/Article/A434351",
        info: [
            "Presentation (장하렴), 대한민국 제주",
            "Period : 2023. 02 ~ 2023. 06",
            "Field : Live Commerse, Tourism, Natural Language Processing, Machine Learning",
        ],
    },
    {
        text: ["Project", "매출목표 이월 자동화시스템을 통한", "사용자 맞춤형 ERP 기능 제안"],
        title: "한국경영정보학회 춘계 학술대회(2023)",
        code: "",
        view: "https://www.earticle.net/Article/A434375",
        info: [
            "Presentation (배환석): Korea Jeju",
            "Period : 2023. 04 ~ 2023. 06",
            "Field : Management Information System, Time Series Forecasting",
        ],
    },
    {
        text: ["Project", "전국 종관기상관측(ASOS)데이터를 활용한", "5분 단위 전력수요 예측 모델 제안"],
        title: "제 11회 산업통산자원부 BI 공모전",
        code: "https://github.com/CocoRoF/BI_Competition11",
        view: "",
        info: [
            "Presentation (김진수): 대한무역투자진흥공사",
            "Period : 2023. 05 ~ 2023. 07",
            "Field : Electron Energy, Time Series Forecasting, Deep Learning",
        ],
    },
    {
        text: ["Project", "재생에너지 발전량 예측 정산금을 높이기 위한", "최적 예측형 집합자원 구성모델 개발"],
        title: "제 11회 산업통산자원부 BI 공모전",
        code: "https://github.com/CocoRoF/BI_Competition11",
        view: "",
        info: [
            "Presentation (장하렴): 대한무역투자진흥공사",
            "Period : 2023. 05 ~ 2023. 07",
            "Field : Electron Energy, Subset Selection",
        ],
    },
];

// port의 개수 변동시 scss의 변수를 변경해야 함
// Image의 크기는 420 * 262
import award01 from "@/assets/award/img/award01.png";

export const portText = [
    {
        num: "01",
        title: "창의혁신 KHU Felloship",
        desc: "2022학년도 2학기 경희대학교 창의혁신 KHU Felloship 장학 \n\n 첫 논문이라는 어려운 출발을 좋은 장학제도와 함께 시작할 수 있었고, 특히 김민경 교수님의 '네트워크 과학 및 응용' 과목 덕분에 더욱 좋은 논문을 쓸 수 있던 좋은 기회였다고 생각한다 \n\n 지금와서 생각하면 많이 부족하고 정리도 잘 되어있지 않은 것이 많이 아쉬운 부분이다.",
        img: award01,
        code: "",
        view: "",
        name: "KHU-Fellowship",
    },
    {
        num: "02",
        title: "춘계통합학술대회 우수논문상",
        desc: "2023 6월 개최된 경영정보관련 춘계통합학술대회에서 우수논문상을 수상하였다. 당시 부상하던 Chat GPT 3.5를 이용하면서도, 아직까지는 태동기인 라이브커머스 분야를 연구해보자는 취지로 시작하게 되었다. 2저자로 참여하여 기술적인 부분에 대하여 기여하였다.",
        img: award01,
        code: "",
        view: "",
        name: "춘계통합학술대회 우수논문상",
    },
    {
        num: "03",
        title: "영림원 ERP 아이디어 공모전 대상",
        desc: "춘계통합학술대회를 후원한 (주)영림원에서 개최한 ERP 관련 아이디어 공모전에서 수상하였다. 당시 자연어처리 분야를 공부하며 배웠던 Transformer모델은 시계열 예측에도 활발하게 응용되고 있던 터라, 이를 이용한 예측 모델을 설계하는 것에 대하여 기여하였다.",
        img: award01,
        code: "",
        view: "",
        name: "영림원 대상",
    },
    {
        num: "04",
        title: "산업통산자원부 BI 공모전 대상",
        desc: "제 11회 산업통산자원부 주최 BI 공모전 빅데이터 분석 부문에서 대상을 수상하였다. 공모 과제는 '재생에너지 발전량 예측제도'를 중심으로 '최적의 집합전력자원'을 구성하는 알고리즘을 설계하는 것이였다. 해당 공모 자체가 상당히 난해한 주제로, 짧은 공모 기간동안 주어진 과제를 명확하게 파악하여 접근한 것이 좋은 평가를 받은 이유라고 생각한다.",
        img: award01,
        code: "",
        view: "",
        name: "산업통산자원부 BI 공모전 대상",
    },
    {
        num: "05",
        title: "BDGSC Best Paper Runner",
        desc: "경희대학교 주관 Big Data Graduate Student Conference(BDGSC)에서 Best Paper Runner로 수상하였다. ",
        img: award01,
        code: "/",
        view: "",
        name: "BDGSC Best Paper Runner",
    },
    {
        num: "06",
        title: "empty",
        desc: "empty",
        img: no_image,
        code: "",
        view: "",
        name: "empty",
    },
    {
        num: "07",
        title: "empty",
        desc: "empty",
        img: no_image,
        code: "/",
        view: "",
        name: "empty",
    },
];

// 현재 링크는 작동안되도록 수정함
export const contactText = [
    {
        link: "",
        title: "mail : gkfua00@gmail.com",
    },
    {
        link: "",
        title: "mail : gkfua00@khu.ac.kr",
    },
];

export const footerText = [
    {
        title: "Naver Blog",
        desc: "일상을 기록하는 공간입니다.",
        link: "https://blog.naver.com/gkfua00",
    },
    {
        title: "github",
        desc: "코드 작업물을 정리하는 공간입니다.",
        link: "https://github.com/CocoRoF",
    },
    {
        title: "Instagram",
        desc: "사진들을 공유하는 공간입니다.",
        link: "https://www.instagram.com/2024_haryumi_letsgo/",
    },
];