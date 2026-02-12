// Import project images
import stoovImg from "figma:asset/bda78b7a67d657c4a4b78b9bb41b49f386b2b5b0.png";
import budgetBuddyImg from "figma:asset/821290e0d4f89f331618cea95b6f79608d1fe02b.png";
import locallinkImg from "figma:asset/6b3719e3ad756a18db670818d9f9ec38067e1d1d.png";

// STOOV project detail images
import stoovImg5 from "figma:asset/1d230276e6ab7b21773d9a6702fe26f9ef4f1be7.png";
import stoovImg6 from "figma:asset/7f67ebc434ffd61993b9a164ab0e64568c9aa45b.png";
import stoovImg7 from "figma:asset/8f12dd41b8e0caf8d491ae73866801e057135e16.png";
import stoovImg9 from "figma:asset/eaa8c72d8fe4a393f7467dbf2acb1d30f2df0594.png";
import stoovImg10 from "figma:asset/6350da9949bed4c365b960e252c65bbbaf61cf39.png";
import stoovImg11 from "figma:asset/0c90efa24e0a261050d1b9e8502030d0cf3f8069.png";

// Budget Buddy project detail images
import budgetBuddyImg1 from "figma:asset/1b838e0549972a49cd494f4b3938da2792c2b488.png";
import budgetBuddyImg2 from "figma:asset/d0949f56c364639123f79c40dc49138a3eee672b.png";
import budgetBuddyImg3 from "figma:asset/f066d207275473939cf26f68e8fa4b3385be23a0.png";
import budgetBuddyImg4 from "figma:asset/44f444626ffbdec9b2d8e7b004b0c394891dcc41.png";
import budgetBuddyImg5 from "figma:asset/95dcd1267a199b30ab46fe1834084c47c7503015.png";
import budgetBuddyImg6 from "figma:asset/8940849a2e64c1144b1cd8f41843f62257a241b4.png";
import budgetBuddyImg7 from "figma:asset/690e1da67d021076c8d84992caca7957f6134be6.png";
import budgetBuddyImg8 from "figma:asset/0e7921638305716c639b55c4e0381909ae341fce.png";
import budgetBuddyImg9 from "figma:asset/6ad1016367bb9255bd8769f412b6abc6276a3bec.png";
import budgetBuddyImg10 from "figma:asset/065c730ad9ec39f954bbdfeea851ae69add7391e.png";
import budgetBuddyImg11 from "figma:asset/cee1e0805414d0b0eda4ff526cd28d6d3c7f733a.png";

// LocalLink project detail images
import locallinkImg1 from "figma:asset/82322f488c8dc4320b34d957c75f6c151c06e133.png";
import locallinkImg2 from "figma:asset/ba03b16ac668735baa78e4c37fd59f8736d4ba56.png";
import locallinkImg3 from "figma:asset/3bdaec16a5e25fb5d13a78d2dfef5461c3c840ce.png";
import locallinkImg4 from "figma:asset/c2f8c584359a2cc0a9a308acb5c81b206865188f.png";
import locallinkImg5 from "figma:asset/a54a4dd32af681a6e2646af247e4c60377f46a7b.png";
import locallinkImg6 from "figma:asset/64e9dfd8913762bcd2ccaa8e8bdad6f804e77f77.png";
import locallinkImg7 from "figma:asset/c5e5b32a9b387a457ef7f1569e7c317af889113e.png";
import locallinkImg8 from "figma:asset/551efbd12847c8f14318f1fecc2cdc1db554db0c.png";
import locallinkImg9 from "figma:asset/534566d18a8171f9cb66d63b658a781ddfa97f4c.png";
import locallinkImg10 from "figma:asset/7b68453f899a68e0eec46047cc45224b20bd326d.png";
import locallinkImg11 from "figma:asset/607024d9336c5b48d415ce081b166ca2843985b9.png";
import locallinkImg12 from "figma:asset/7b75e9887a59fb93cb160244d0fe9901faa88d61.png";

export interface Project {
  id: string;
  category: 'service' | 'uxui' | 'product';
  title: string;
  period: string;
  description: string;
  thumbnail: string;
  tags: string[];
  role: string;
  tools: string[];
  overview: string;
  problem: string;
  solution: string;
  result: string;
  images: string[];
  problemImages?: string[];  // Problem 섹션 이미지 (선택사항)
  solutionImages?: string[];  // Solution 섹션 이미지 (선택사항)
  resultImages?: string[];  // Result 섹션 이미지 (선택사항)
  pdfUrl?: string;  // PDF 파일 링크 (선택사항)
  prototypeUrl?: string;  // 프로토타입 링크 (선택사항)
  designSystemUrl?: string;  // 디자인시스템 링크 (선택사항)
  videoUrl?: string;  // 비디오 링크 (선택사항)
}

export const projects: Project[] = [
  {
    id: 'stoov',
    category: 'service',
    title: 'STOOV',
    period: '2025.10 ~ 2026.01',
    description: '버스킹 공연 장소를 탐색하고, 예약 사이트로 바로 이동이 가능한 지도형 플랫폼',
    thumbnail: stoovImg,
    tags: ['Service Design', 'Map Platform', 'Busking', '모바일 웹'],
    role: '70% / UX 리서치 및 구조 설계, IA·플로우 차트 작성, UI 디자인 및 컴포넌트 제작, 디자인 시스템 구축, 디자인 QA 관리, UT 기획',
    tools: ['Figma', 'Ps', 'Ai', 'Notion', 'Excel', 'Perplexity', 'ChatGPT', 'Maze', 'Krea.ai'],
    overview: 'STOOV는 지도 기반으로 버스킹 공연 장소를 탐색하고, 운영시간·위치·예약 조건 등 상세 정보를 한곳에서 확인하며, 예약 사이트로 바로 이동할 수 있는 통합 플랫폼입니다.',
    problem: '버스킹 아티스트들은 공연 장소 정보가 파편화되어 있어 운영 시간, 위치 조건, 예약 필요 여부를 각각 다른 곳에서 확인해야 했습니다. 장소 탐색부터 예약까지 비체계적이고 비효율적인 과정으로 인해 시간이 많이 소요되었습니다.',
    solution: '지도 중심의 직관적인 UI로 장소를 한눈에 파악하고, 마커 클릭 시 버텀시트 팝업으로 상세 정보를 제공합니다. 운영 시간부터 위치 조건, 예약 필요 정보를 한 흐름으로 빠르게 확인할 수 있도록 설계했으며, 연락처와 지도 위치를 통해 실제 예약까지 원활하게 진행할 수 있습니다.',
    result: 'UT를 통해 장소 탐색부터 선택, 예약 과정의 가설을 검증했습니다. 100% \"기존 방식보다 탐색이 쉽다\" 응답, 75% \"꼭 사용해보고 싶다\" 응답, 83% \"비체계적 장소 탐색\" 경험을 확인했습니다. 사용자들은 공연 장소 정보의 통합 자체를 큰 가치로 인식하며, 기존의 파편화된 장소 탐색 및 예약 경험을 대체할 수 있는 인식 개선을 확인했습니다.',
    images: [
      stoovImg,
      stoovImg5,
      stoovImg6,
      stoovImg7,
      stoovImg9,
      stoovImg10,
      stoovImg11,
    ],
    designSystemUrl: 'https://www.figma.com/design/LpVuBa7LizDnO3FiEraXcP/%F0%9F%8E%B8-STOOV-Design-System-Library?node-id=0-1&t=6J9JS1WHDbFsu5nL-1',
    prototypeUrl: 'https://www.figma.com/proto/HciHfbMaqayfYbIFdPJVOa/STOOV-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85?node-id=79-4327&t=ykIDW28rKHXH0Asq-1',
  },
  {
    id: 'budgetBuddy',
    category: 'product',
    title: 'Budget Buddy',
    period: '2024.05 ~ 06',
    description: 'Samsung Pay 기반 e-Wallet 소비습관에 새로운 가치를 제공하는 제품',
    thumbnail: budgetBuddyImg,
    tags: ['Product Design', 'e-Wallet', 'Samsung Pay', 'Concept Design'],
    role: '80% / 제품 기획 및 리서치, 모델링, 렌더링, 디자인 전반',
    tools: ['Keyshot', 'Autodesk Fusion', 'Figma', 'Photoshop'],
    overview: 'Budget Buddy는 Samsung Pay를 기반으로 한 e-Wallet 컨셉 디자인입니다. "Spend less, Earn more"라는 슬로건 아래, 충동구매 습관을 개선하고 더 나은 소비 패턴을 만들 수 있도록 돕는 제품 디자인 프로젝트입니다.',
    problem: '충동구매는 현대인의 만연한 소비 습관 문제입니다. 충동구매를 하고 후회하는 성인이 84.6%에 달합니다. 구매 충동을 느낄 때마다 그 즉시 소비하게 되면, 구매 이후 느끼는 순간적인 스트레스 해소감 때문에 충동구매 습관을 끊기가 매우 어렵습니다.',
    solution: 'Budget Buddy는 충동구매를 하려는 순간, 경험을 바꾸어 새로운 방식으로 지출 습관을 관리하도록 제안합니다. e-Wallet을 사용하여 "내가 소비하려는 대신 투자하면 어떨까?"라는 질문을 던지며, 지출을 재고할 수 있는 기회를 제공합니다. 또한 카드를 디지털화하여, 사람들이 지갑 대신 카드 한 장과 휴대폰만 가지고 다닐 수 있도록 미래지향적인 사고에서 시작했습니다.',
    result: 'Samsung Pay 기반의 e-Wallet 컨셉 디자인을 완성했습니다. 3D 모델링과 렌더링을 통해 실제 제품처럼 시각화했으며, 디자인 시스템을 구축하여 일관된 UI/UX를 제공할 수 있는 프로토타입을 개발했습니다. 사용자들이 충동구매 습관을 긍정적으로 전환할 수 있는 제품 경험을 설계했습니다.',
    images: [
      budgetBuddyImg,
      budgetBuddyImg1,
      budgetBuddyImg2,
      budgetBuddyImg3,
      budgetBuddyImg4,
      budgetBuddyImg5,
      budgetBuddyImg6,
      budgetBuddyImg7,
      budgetBuddyImg8,
      budgetBuddyImg9,
      budgetBuddyImg10,
      budgetBuddyImg11,
    ],
    problemImages: [budgetBuddyImg2, budgetBuddyImg3],
    solutionImages: [budgetBuddyImg4, budgetBuddyImg6, budgetBuddyImg7, budgetBuddyImg8],
    resultImages: [budgetBuddyImg9, budgetBuddyImg10, budgetBuddyImg11],
  },
  {
    id: 'locallink',
    category: 'uxui',
    title: 'LocalLink',
    period: '2024.03 ~ 11',
    description: '소외 지역 활성화를 위한 현지인의 여행 코스 제공과 게스트의 코스 소비 서비스',
    thumbnail: locallinkImg,
    tags: ['Travel', 'Local Tourism', 'Community Platform', '모바일 앱'],
    role: '70% / UX 리서치 및 기획, 핵심 영역 설계, UI 디자인 전반, 프로토타입',
    tools: ['Figma', 'Ps', 'Ai', 'Protopie', 'ChatGPT', 'Krea.ai'],
    overview: '로컬링크는 현지인의 데이터와 시간을 바탕으로 한 소외 지역의 정보를 여행 코스로 제공하고, 스스로에게 알맞은 코스를 소비함으로써 소외된 지역의 활성화에 기여하는 서비스입니다.',
    problem: '극한의 효율주의와 생성형 AI를 통한 대량생산으로 검증되지 않은 양산형 콘텐츠가 증가했습니다. 과잉 콘텐츠로 인해 불편한 경험을 한 적이 있는 사람이 68%였고, 이를 피하기 위한 방법으로 차단 및 제한 응답이 85%에 달했습니다. 개인마다 생각하고 판단하는 경계가 다른데, 경계가 모호한 것에 불편함을 느끼는 점을 발견했습니다.',
    solution: '비슷한 경계의 같이를 가진 사람들과 어울리게 유도함으로써 사용자들에게 자신의 경계를 더욱 확장시킬 수 있는 기회를 제공합니다. 로컬 컨시어지(현지인)는 손님이 필요한 정보 및 모든 서비스를 총괄적으로 제공하는 관리인이며, 게스트는 로컬 컨시어지에 대응되는 단어로 현지인의 안내를 받아 소외 지역을 방문하는 손님입니다. 특정 지역의 현지인이 자체적 관련된 정보와 서비스를 제공하기 때문에 Local이라는 단어를 추가했습니다.',
    result: '로컬링크는 서비스를 통해 사람과 사람간의 경계를 파악하고 이어줍니다. 현지인과 여행객의 니즈를 모두 충족시키고, 소외 지역을 배경으로 사람들이 연결되며 지역 활성화를 도모할 수 있는 Social Innovation 서비스를 완성했습니다.',
    images: [
      locallinkImg,
      locallinkImg1,
      locallinkImg2,
      locallinkImg3,
      locallinkImg4,
      locallinkImg5,
      locallinkImg6,
      locallinkImg7,
      locallinkImg8,
      locallinkImg9,
      locallinkImg10,
      locallinkImg11,
      locallinkImg12,
    ],
    problemImages: [locallinkImg1, locallinkImg2, locallinkImg3],
    solutionImages: [locallinkImg4, locallinkImg5, locallinkImg6, locallinkImg7, locallinkImg8],
    resultImages: [locallinkImg9, locallinkImg10, locallinkImg11, locallinkImg12],
    videoUrl: 'https://youtu.be/ZQV03sSPcF0?si=YyVDkvDiywQfQdjQ',
    prototypeUrl: 'https://cloud.protopie.io/p/c167fabdc95f35146e96a8ad?ui=true&scaleToFit=true&enableHotspotHints=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&bgImage=undefined&playSpeed=1',
  },
];