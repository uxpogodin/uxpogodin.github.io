import svgPaths from "./svg-pgqgoa8ysu";
import imgSligerCard from "figma:asset/45a8c97f3ce3afec7d8036fe263270aff9608505.png";
import imgImage from "figma:asset/e2d88820918acf8ba217720274e1c0abe222ac05.png";
import imgImage1 from "figma:asset/e2d88820918acf8ba217720274e1c0abe222ac05.png";
import imgImage17 from "figma:asset/11374c2aa44e7d63ceeff4477705a7a59260a9ef.png";

function IOsSeparator() {
  return (
    <div className="relative size-full" data-name="iOS / Separator">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
        <g id="iOS / Separator">
          <line id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.2" strokeWidth="0.5" transform="matrix(1 0 0 -1 0 0)" x2="375" y1="-0.25" y2="-0.25" />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="absolute inset-[31.82%_80.37%_27.27%_5.3%] overflow-clip" data-name="Action">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-9px)] tracking-[-0.165px] w-[54px]">9:41</p>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute h-[14px] overflow-clip right-[14px] top-[calc(50%+1px)] w-[68px]" data-name="Container">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[41px] not-italic text-[17px] text-black top-[-3px] whitespace-nowrap">􀛨</p>
      <div className="absolute inset-[11.43%_74.12%_12.15%_0.74%]" data-name="Combined Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0996 10.7002">
          <path d={svgPaths.p354dc000} fill="var(--fill-0, black)" id="Combined Shape" />
        </svg>
      </div>
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21px] not-italic text-[14px] text-black top-[-1px] whitespace-nowrap">􀙇</p>
    </div>
  );
}

function IOsStatusBarXDefault() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-0" data-name="iOS / Status Bar / X / Default">
      <Action />
      <Container />
    </div>
  );
}

function IOsChromeAddress() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+1px)] top-[calc(50%+0.5px)]" data-name="iOS / Chrome / Address">
      <div className="h-[10px] relative shrink-0 w-[8px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <path d={svgPaths.p220fde80} fill="var(--fill-0, black)" id="Union" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">figma.com</p>
    </div>
  );
}

function IOsChromeAddressBar() {
  return (
    <div className="absolute bottom-[10px] h-[36px] left-[10px] right-[10px]" data-name="iOS / Chrome / Address Bar">
      <div className="absolute bg-[#e8eaed] inset-0 rounded-[30px]" data-name="bar-input" />
      <IOsChromeAddress />
      <div className="-translate-y-1/2 absolute h-[18px] right-[17px] top-1/2 w-[14px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
          <path d={svgPaths.p3d2b1280} fill="var(--fill-0, #9AA0A6)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function AddressBarIOsXChrome() {
  return (
    <div className="-translate-x-1/2 absolute h-[94px] left-1/2 top-0 w-[375px]" data-name="Address Bar iOS / X Chrome">
      <div className="absolute backdrop-blur-[13.591px] bg-white inset-0" data-name="Background" />
      <div className="absolute bottom-0 flex h-px items-center justify-center left-0 right-0">
        <div className="-scale-y-100 flex-none h-px w-[375px]">
          <IOsSeparator />
        </div>
      </div>
      <IOsStatusBarXDefault />
      <IOsChromeAddressBar />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute inset-[2.99%_0.22%_0.34%_0]" data-name="Page-1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.3867 15.4667">
        <g id="Page-1">
          <path d={svgPaths.p31f82300} fill="var(--fill-0, #EB3C96)" id="logo" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[97.6px]" data-name="Frame">
      <Page />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Menu_mobile">
        <div className="absolute bottom-1/2 left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.5px_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
              <path d="M0.5 0.5H18.5" id="Vector" stroke="var(--stroke-0, #4D358B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-0.5px_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
              <path d="M0.5 0.5H18.5" id="Vector" stroke="var(--stroke-0, #4D358B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.5px_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
              <path d="M0.5 0.5H18.5" id="Vector" stroke="var(--stroke-0, #4D358B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute bg-[#fbf9fd] content-stretch flex items-center justify-between left-0 px-[20px] py-[16px] shadow-[0px_1px_8px_0px_#e9ddf5] top-[94px] w-[375px]" data-name="Menu">
      <div className="content-stretch flex flex-col h-[16px] items-center justify-center overflow-clip relative shrink-0" data-name="logo">
        <Frame />
      </div>
      <Frame6 />
    </div>
  );
}

function IOsSeparatorTop() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="iOS / Separator Top">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
        <g id="iOS / Separator Top">
          <line id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.2" strokeWidth="0.3" transform="matrix(1 0 0 -1 0 0)" x2="375" y1="-0.15" y2="-0.15" />
        </g>
      </svg>
    </div>
  );
}

function GoBack() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Go Back">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_82_17513)" id="Go Back">
          <g id="Vector" />
          <path d={svgPaths.pb6cf540} fill="var(--fill-0, #80858A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_17513">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GoForward() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Go Forward">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_82_17500)" id="Go Forward">
          <g id="Vector" />
          <path d={svgPaths.p1f2eb4b0} fill="var(--fill-0, #C8C8C8)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_17500">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AddNewTab() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Add New Tab">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Add New Tab">
          <circle cx="20" cy="20" fill="var(--fill-0, #E8EAED)" id="Ellipse 1" r="18" />
          <g id="rounded/content/add">
            <g id="Vector" />
            <path d={svgPaths.p36859f80} fill="var(--fill-0, #80858A)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChromeTabs() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Chrome Tabs">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_82_17449)" id="Chrome Tabs">
          <g id="Vector" />
          <path d={svgPaths.p22a95500} fill="var(--fill-0, #80858A)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_82_17449">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MoreMenu() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="More Menu">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_82_17437)" id="More Menu">
          <g id="Vector" />
          <path d={svgPaths.p273e23e0} fill="var(--fill-0, #80858A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_17437">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IOsChromeTabs() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14px] right-[13px] top-[2.3px]" data-name="iOS / Chrome / Tabs">
      <GoBack />
      <GoForward />
      <AddNewTab />
      <ChromeTabs />
      <MoreMenu />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-[0.3px] h-[34px] left-0 right-0" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[135px]" data-name="Line" />
    </div>
  );
}

function TabBarIOsXChrome() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-0.3px] h-[78.3px] left-1/2 w-[375px]" data-name="Tab Bar iOS / X Chrome">
      <div className="absolute backdrop-blur-[13.591px] bg-white inset-0" data-name="Background" />
      <IOsSeparatorTop />
      <IOsChromeTabs />
      <HomeIndicator />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="breadcrumbs">
        <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
          <p className="leading-[20px]">Home</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-12.5%_-25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
                <path d="M1 1L5 5L1 9" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f45da0] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">О компании</p>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Body">
      <div className="flex flex-col items-end size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function SligerCard() {
  return (
    <div className="content-stretch flex flex-col h-[356px] items-end justify-between overflow-clip relative rounded-[32px] shrink-0 w-full" data-name="Sliger_card">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgSligerCard} />
      <Body />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame11 />
      <SligerCard />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#4d358b] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic px-[12px] py-[16px] relative text-white w-full">
          <p className="font-['Merck_Web:Regular',sans-serif] leading-[1.93] relative shrink-0 text-[40px] whitespace-nowrap">28</p>
          <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[14px] text-center w-[min-content]">
            <p className="leading-[20px]">Калькуляторов для расчета точных дозировок и показателей</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="bg-[#eb3c96] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="info">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic px-[12px] py-[16px] relative size-full text-white">
          <p className="font-['Merck_Web:Regular',sans-serif] leading-[1.93] relative shrink-0 text-[40px] whitespace-nowrap">200+</p>
          <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[20px] min-w-full relative shrink-0 text-[14px] text-center w-[min-content] whitespace-pre-wrap">
            <p className="mb-0">{`Мероприятий в год `}</p>
            <p>для врачей всех специальностей</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[16px] shrink-0 w-full">
      <Frame7 />
      <Info />
    </div>
  );
}

function DoctorAvatars() {
  return (
    <div className="content-stretch flex h-[48px] items-center pr-[26px] relative shrink-0" data-name="doctor avatars">
      <div className="mr-[-26px] relative rounded-[55.952px] shrink-0 size-[48px]" data-name="Chip/Avatar">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[48px] top-1/2" data-name="Image">
            <img alt="" className="absolute block max-w-none size-full" height="48" src={imgImage} width="48" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#9c85d8] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[55.952px]" />
      </div>
      <div className="mr-[-26px] relative rounded-[55.952px] shrink-0 size-[48px]" data-name="Chip/Avatar">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[48px] top-1/2" data-name="Image">
            <img alt="" className="absolute block max-w-none size-full" height="48" src={imgImage1} width="48" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#9c85d8] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[55.952px]" />
      </div>
      <div className="mr-[-26px] relative rounded-[55.952px] shrink-0 size-[48px]" data-name="Chip/Avatar">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[48px] top-1/2" data-name="Image">
            <img alt="" className="absolute block max-w-none size-full" height="48" src={imgImage} width="48" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#9c85d8] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[55.952px]" />
      </div>
      <div className="mr-[-26px] relative rounded-[55.952px] shrink-0 size-[48px]" data-name="Chip/Avatar">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[48px] top-1/2" data-name="Image">
            <img alt="" className="absolute block max-w-none size-full" height="48" src={imgImage} width="48" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#9c85d8] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[55.952px]" />
      </div>
    </div>
  );
}

function Textholder() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[290px]" data-name="textholder">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Более 100 ведущих экспертов и лекторов</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#9c85d8] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative w-full">
          <DoctorAvatars />
          <Textholder />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Container1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
        <Frame10 />
        <Frame14 />
        <div className="bg-[#4d358b] relative rounded-[32px] shrink-0 w-full" data-name="main card">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[32px] relative w-full whitespace-pre-wrap">
              <div className="flex flex-col font-['Inter:bold',sans-serif] justify-center leading-[24px] max-w-[750px] not-italic relative shrink-0 text-[16px] text-white w-full">
                <p className="mb-0">{`«Мерк» - одна из ведущих научно-технологических компаний в области здравоохранения, лайф сайнс `}</p>
                <p>и электроникс.</p>
              </div>
              <div className="flex flex-col font-['Inter:regular','Noto_Sans:Regular',sans-serif] justify-center leading-[20px] max-w-[750px] relative shrink-0 text-[#e9ddf5] text-[14px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                <p className="mb-0">{`Мы стремимся к прогрессу везде и для всех. Именно поэтому мы проводим тщательные исследования, задаем вопросы и думаем о будущем. `}</p>
                <p className="mb-0">{` `}</p>
                <p className="mb-0">{`Наша компания существует порядка 350 лет, тем не менее, основными собственниками по-прежнему остается семья Мерк - потомки Фридриха Якоба Мерка (Friedrich Jacob Merck), основавшего нашу компанию в г. Дармштадт (Германия) в 1668 году. `}</p>
                <p className="mb-0">{` `}</p>
                <p>{`Мы превратились в международную компанию, 62 770 сотрудников которой работают в 66 странах мира над разработкой революционных решений и технологий. `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute inset-[3%_0.22%_0.33%_0]" data-name="Page-1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.979 23.978">
        <g id="Page-1">
          <path d={svgPaths.p1bb0e800} fill="var(--fill-0, white)" id="logo" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[24.805px] left-[9.1px] overflow-clip top-[18.19px] w-[151.31px]" data-name="Logo">
      <Page1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative shrink-0 w-[185.5px]">
      <div className="h-[61.185px] overflow-clip relative shrink-0 w-full" data-name="Logo">
        <Logo />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full">
      <Frame3 />
      <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Header_menu">
        <div className="content-stretch flex gap-[4px] items-start justify-center p-[8px] relative shrink-0" data-name="Menu_item">
          <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] whitespace-nowrap">Мероприятия</p>
        </div>
        <div className="content-stretch flex gap-[4px] items-start justify-center p-[8px] relative shrink-0" data-name="Menu_item">
          <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] whitespace-nowrap">Нозологии</p>
        </div>
        <div className="content-stretch flex gap-[4px] items-start justify-center p-[8px] relative shrink-0" data-name="Menu_item">
          <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] whitespace-nowrap">Интерактивный контент</p>
        </div>
        <div className="content-stretch flex gap-[4px] items-start justify-center p-[8px] relative shrink-0" data-name="Menu_item">
          <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] whitespace-nowrap">Библиотека</p>
        </div>
        <div className="content-stretch flex gap-[4px] items-start justify-center p-[8px] relative shrink-0" data-name="Menu_item">
          <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] whitespace-nowrap">Эксперты</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-dotted font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] underline whitespace-nowrap">О компании</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <p className="[text-decoration-skip-ink:none] decoration-dotted font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] underline whitespace-nowrap">Пользовательское соглашение</p>
      <Frame1 />
      <p className="[text-decoration-skip-ink:none] decoration-dotted font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] underline whitespace-nowrap">Политика конфиденциальности</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[59px] items-center px-[16px] relative shrink-0 w-[375px]">
      <Frame4 />
      <Frame2 />
      <div className="absolute flex items-center justify-center left-[-405px] size-[614.304px] top-[-147px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-27.29deg]">
          <div className="relative size-[456px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] items-center left-0 top-[174px] w-[375px]">
      <Frame13 />
      <div className="bg-[#4d358b] content-stretch flex items-center overflow-clip py-[60px] relative shrink-0 w-full" data-name="footer">
        <Frame5 />
      </div>
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="bg-[#fbf9fd] relative size-full">
      <AddressBarIOsXChrome />
      <Menu />
      <TabBarIOsXChrome />
      <Frame9 />
    </div>
  );
}