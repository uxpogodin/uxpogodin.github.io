import svgPaths from "./svg-u6sx90rbsf";
import imgUntitled91 from "figma:asset/45ee5768b9ddf3bc496575602e1d29ee194ce82b.png";
import imgImage from "figma:asset/68b99a28d4157ba51d5daac5850cbc6e4e59016d.png";
import imgImage1 from "figma:asset/7913c332518a5cbbfd2fe5f53d66db27588092f9.png";
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
        <g clipPath="url(#clip0_82_17365)" id="Go Back">
          <g id="Vector" />
          <path d={svgPaths.pb6cf540} fill="var(--fill-0, #80858A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_17365">
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
        <g clipPath="url(#clip0_82_17350)" id="Go Forward">
          <g id="Vector" />
          <path d={svgPaths.p1f2eb4b0} fill="var(--fill-0, #C8C8C8)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_17350">
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
        <g clipPath="url(#clip0_82_17328)" id="Chrome Tabs">
          <g id="Vector" />
          <path d={svgPaths.p22a95500} fill="var(--fill-0, #80858A)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_82_17328">
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
        <g clipPath="url(#clip0_82_17311)" id="More Menu">
          <g id="Vector" />
          <path d={svgPaths.p273e23e0} fill="var(--fill-0, #80858A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_17311">
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

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
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
          <p className="leading-[20px]">Нозологии</p>
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header Section">
      <div className="flex flex-col font-['Inter:bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Календарь мероприятий</p>
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Content Section">
      <HeaderSection />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end overflow-clip relative shrink-0 w-full" data-name="title">
      <ContentSection />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] max-w-[750px] min-w-full not-italic relative shrink-0 text-[#666] text-[0px] text-[18px] text-center w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Присоединяйтесь к конференциям и вебинарам с участием российских `}</p>
        <p className="mb-0">{`и международных спикеров или посмотрите наши `}</p>
        <p className="[text-decoration-skip-ink:none] decoration-solid text-[#4d358b] underline">записи проведенных вебинаров</p>
      </div>
    </div>
  );
}

function Nosology() {
  return (
    <div className="bg-[#f5f0fa] relative rounded-[32px] shrink-0 w-full" data-name="Nosology">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
        <Title />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame14 />
      <Nosology />
    </div>
  );
}

function ChildrenWrap() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Симпозиум</p>
      </div>
    </div>
  );
}

function ChildrenWrap1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Онкология</p>
      </div>
    </div>
  );
}

function Chips() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Chips">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap1 />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="info">
      <Chips />
    </div>
  );
}

function Image() {
  return (
    <div className="bg-[#dfe5ec] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[16px] rounded-tr-[16px] w-full" data-name="image">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[118px] items-end px-[24px] py-[16px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
          <Info />
        </div>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="details">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar-event">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
                <path d={svgPaths.p398a9780} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] whitespace-nowrap">04 февраля, 18:00</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user">
          <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 13">
                <path d={svgPaths.p3d2ea600} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] whitespace-nowrap">Иванов А.А.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Details />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Зарегистрироваться</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#fbf9fd] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] px-[24px] relative w-full">
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">РАРЧ 2024: «Между гипер- и гипоответом: Сцилла и Харибда ВРТ. Разбор клинических случаев</p>
        <Frame7 />
      </div>
    </div>
  );
}

function ChildrenWrap2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Симпозиум</p>
      </div>
    </div>
  );
}

function ChildrenWrap3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Онкология</p>
      </div>
    </div>
  );
}

function Chips1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Chips">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap2 />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap3 />
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="info">
      <Chips1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#dfe5ec] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[16px] rounded-tr-[16px] w-full" data-name="image">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[118px] items-end px-[24px] py-[16px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          <Info1 />
        </div>
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="details">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar-event">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
                <path d={svgPaths.p398a9780} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] whitespace-nowrap">04 февраля, 18:00</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user">
          <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 13">
                <path d={svgPaths.p3d2ea600} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] whitespace-nowrap">Иванов А.А.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Details1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#fbf9fd] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] px-[24px] relative w-full">
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">Семинар 2025: «Этика и право в медицине: вызовы современности»</p>
        <Frame8 />
      </div>
    </div>
  );
}

function ChildrenWrap4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Симпозиум</p>
      </div>
    </div>
  );
}

function Chips2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Chips">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap4 />
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="info">
      <Chips2 />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#dfe5ec] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[16px] rounded-tr-[16px] w-full" data-name="image">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[118px] items-end px-[24px] py-[16px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          <Info2 />
        </div>
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="details">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar-event">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
                <path d={svgPaths.p398a9780} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] whitespace-nowrap">04 февраля, 18:00</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user">
          <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 13">
                <path d={svgPaths.p3d2ea600} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] whitespace-nowrap">Иванов А.А.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Details2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#fbf9fd] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] px-[24px] relative w-full">
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">Конгресс 2025: «Психическое здоровье: современные подходы и решения»</p>
        <Frame9 />
      </div>
    </div>
  );
}

function ChildrenWrap5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Симпозиум</p>
      </div>
    </div>
  );
}

function Chips3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Chips">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap5 />
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="info">
      <Chips3 />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#dfe5ec] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[16px] rounded-tr-[16px] w-full" data-name="image">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[118px] items-end px-[24px] py-[16px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          <Info3 />
        </div>
      </div>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="details">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar-event">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
                <path d={svgPaths.p398a9780} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] whitespace-nowrap">04 февраля, 18:00</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user">
          <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 13">
                <path d={svgPaths.p3d2ea600} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] whitespace-nowrap">Иванов А.А.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Details3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#fbf9fd] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] px-[24px] relative w-full">
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">Конгресс 2025: «Психическое здоровье: современные подходы и решения»</p>
        <Frame10 />
      </div>
    </div>
  );
}

function EventCards() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="event cards">
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image />
        <Content />
      </div>
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image1 />
        <Content1 />
      </div>
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image2 />
        <Content2 />
      </div>
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image3 />
        <Content3 />
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="relative shrink-0 w-full" data-name="Events">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] relative w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="navigation">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="DatePicker button">
              <div aria-hidden="true" className="absolute border border-[#9c85d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center p-[20px] relative w-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar-search">
                    <div className="absolute inset-[12.5%_8.33%_8.33%_16.67%]" data-name="Vector">
                      <div className="absolute inset-[-5.26%_-5.56%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                          <path d={svgPaths.p2c6f3e40} id="Vector" stroke="var(--stroke-0, #9C85D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#9c85d8] text-[14px] whitespace-nowrap">14.02.2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Button Group">
            <div className="bg-[#4d358b] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
              <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] whitespace-nowrap">
                <p className="leading-[24px]">Показать всё</p>
              </div>
            </div>
            <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
              <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                <p className="leading-[24px]">Нозологии</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-down">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                      <path d="M1 1L7 7L13 1" id="Vector" stroke="var(--stroke-0, #1C0F38)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
              <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                <p className="leading-[24px]">Вебинары</p>
              </div>
            </div>
            <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
              <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                <p className="leading-[24px]">Конференции</p>
              </div>
            </div>
            <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
              <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                <p className="leading-[24px]">Симпозиумы</p>
              </div>
            </div>
          </div>
        </div>
        <EventCards />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Events />
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

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] items-center left-0 top-[174px] w-[375px]">
      <Frame15 />
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
      <div className="absolute left-[294px] size-[121px] top-[778px]" data-name="Untitled (9) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUntitled91} />
      </div>
      <Menu />
      <TabBarIOsXChrome />
      <Frame11 />
    </div>
  );
}