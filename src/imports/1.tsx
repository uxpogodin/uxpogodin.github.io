import svgPaths from "./svg-3axy642eh7";
import imgEhutiroksTab50MkgN100489281 from "figma:asset/e72952800ea2ba619508df10587b5d3401130a1f.png";
import imgEhutiroksTab50MkgN100489282 from "figma:asset/16c694e1fc1dfd81c7d8334ac6540a8d5e65f98e.png";
import imgImage from "figma:asset/7913c332518a5cbbfd2fe5f53d66db27588092f9.png";
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
    <div className="absolute inset-[31.82%_80.37%_27.27%_5.31%] overflow-clip" data-name="Action">
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
          <path d={svgPaths.p22c70c80} fill="var(--fill-0, black)" id="Combined Shape" />
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
        <g clipPath="url(#clip0_82_18651)" id="Go Back">
          <g id="Vector" />
          <path d={svgPaths.p3578fe00} fill="var(--fill-0, #80858A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_18651">
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
        <g clipPath="url(#clip0_82_18641)" id="Go Forward">
          <g id="Vector" />
          <path d={svgPaths.p3490b580} fill="var(--fill-0, #C8C8C8)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_18641">
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
            <path d={svgPaths.p29ee6100} fill="var(--fill-0, #80858A)" id="Vector_2" />
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
        <g clipPath="url(#clip0_82_18635)" id="Chrome Tabs">
          <g id="Vector" />
          <path d={svgPaths.p5945e00} fill="var(--fill-0, #80858A)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_82_18635">
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
        <g clipPath="url(#clip0_82_18623)" id="More Menu">
          <g id="Vector" />
          <path d={svgPaths.p45664f1} fill="var(--fill-0, #80858A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_18623">
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

function Frame22() {
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
        <p className="leading-[28px]">Онкология</p>
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
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] max-w-[750px] min-w-full not-italic relative shrink-0 text-[#666] text-[16px] text-center w-[min-content]">
        <p className="leading-[24px]">Изучите раздел, чтобы узнать о современных методах лечения и препаратах в области онкологии.</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106px]">
      <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.07px] w-full">Жизней спасено</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106px]">
      <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.07px] w-full">Лет дистрибуции</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106px]">
      <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.07px] w-full">Продлено лет жизни</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[16px] relative w-full">
            <p className="font-['Merck_Web:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#ad7fdb] text-[24px] whitespace-nowrap">5 000 000</p>
            <Frame14 />
            <div className="absolute h-[184px] left-0 opacity-10 top-0 w-[444px]" data-name="image" />
          </div>
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[16px] relative w-full">
            <p className="font-['Merck_Web:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#ad7fdb] text-[24px] whitespace-nowrap">10</p>
            <Frame16 />
            <div className="absolute h-[184px] left-0 opacity-10 top-0 w-[444px]" data-name="image" />
          </div>
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[16px] relative w-full">
            <p className="font-['Merck_Web:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#ad7fdb] text-[24px] whitespace-nowrap">10 295 000</p>
            <Frame17 />
            <div className="absolute h-[184px] left-0 opacity-10 top-0 w-[444px]" data-name="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Nosology() {
  return (
    <div className="bg-[#f5f0fa] relative rounded-[16px] shrink-0 w-full" data-name="Nosology">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative w-full">
        <Title />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame22 />
      <Nosology />
    </div>
  );
}

function HeaderSection1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section">
      <p className="font-['Inter:bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Препараты</p>
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Перейти</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-narrow-right">
          <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                <path d="M1 5H15M15 5L11 9M15 5L11 1" id="Vector" stroke="var(--stroke-0, #4D358B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content Section">
      <HeaderSection1 />
      <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#666] text-[14px] text-ellipsis w-full">Текст под заголовком, который может быть в две строки максимум, чтобы не скрывать контент на мобайле</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px min-w-px not-italic relative text-[#1e1e1e]" data-name="text">
      <p className="font-['Inter:bold',sans-serif] leading-[26px] relative shrink-0 text-[18px] w-full">Бавенсио® (Авелумаб)</p>
      <p className="font-['Inter:regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] w-full">Действующее вещество</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="title">
      <Text />
      <div className="bg-[#f5f0fa] content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Vector">
            <div className="absolute inset-[-11.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                <path d={svgPaths.p18030d10} id="Vector" stroke="var(--stroke-0, #4D358B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Онкология</p>
      </div>
    </div>
  );
}

function ChildrenWrap1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Кардиология</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px min-w-px not-italic relative text-[#1e1e1e]" data-name="text">
      <p className="font-['Inter:bold',sans-serif] leading-[26px] relative shrink-0 text-[18px] w-full">Бавенсио® (Авелумаб)</p>
      <p className="font-['Inter:regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] w-full">Действующее вещество</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="title">
      <Text1 />
      <div className="bg-[#f5f0fa] content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Vector">
            <div className="absolute inset-[-11.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                <path d={svgPaths.p18030d10} id="Vector" stroke="var(--stroke-0, #4D358B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Онкология</p>
      </div>
    </div>
  );
}

function ChildrenWrap3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Кардиология</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap2 />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap3 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px min-w-px not-italic relative text-[#1e1e1e]" data-name="text">
      <p className="font-['Inter:bold',sans-serif] leading-[26px] relative shrink-0 text-[18px] w-full">Бавенсио® (Авелумаб)</p>
      <p className="font-['Inter:regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] w-full">Действующее вещество</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="title">
      <Text2 />
      <div className="bg-[#f5f0fa] content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Vector">
            <div className="absolute inset-[-11.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                <path d={svgPaths.p18030d10} id="Vector" stroke="var(--stroke-0, #4D358B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Онкология</p>
      </div>
    </div>
  );
}

function ChildrenWrap5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Кардиология</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap4 />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap5 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-white relative rounded-[20px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="product">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
            <Title1 />
            <div className="h-[195px] relative shrink-0 w-full" data-name="ehutiroks-tab-50mkg-N100-48928 1">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgEhutiroksTab50MkgN100489281} />
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgEhutiroksTab50MkgN100489282} />
              </div>
            </div>
            <Frame10 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[20px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="product">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
            <Title2 />
            <div className="h-[195px] relative shrink-0 w-full" data-name="ehutiroks-tab-50mkg-N100-48928 1">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgEhutiroksTab50MkgN100489281} />
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgEhutiroksTab50MkgN100489282} />
              </div>
            </div>
            <Frame11 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[20px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="product">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
            <Title3 />
            <div className="h-[195px] relative shrink-0 w-full" data-name="ehutiroks-tab-50mkg-N100-48928 1">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgEhutiroksTab50MkgN100489281} />
                <img alt="" className="absolute max-w-none object-cover size-full" src={imgEhutiroksTab50MkgN100489282} />
              </div>
            </div>
            <Frame12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="relative shrink-0 w-full" data-name="products">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[16px] relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
            <ContentSection1 />
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Button Group">
              <div className="bg-[#4d358b] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
                <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Показать всё</p>
                </div>
              </div>
              <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
                <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Почечно-клеточный рак</p>
                </div>
              </div>
              <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
                <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Рак головы и шеи</p>
                </div>
              </div>
              <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
                <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Колоректальный рак</p>
                </div>
              </div>
              <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
                <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Уротелиальный рак</p>
                </div>
              </div>
            </div>
          </div>
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function HeaderSection2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section">
      <p className="font-['Inter:bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Библиотека</p>
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Перейти</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-narrow-right">
          <div className="absolute inset-[33.33%_20.83%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                <path d="M1 5H15M15 5L11 9M15 5L11 1" id="Vector" stroke="var(--stroke-0, #4D358B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content Section">
      <HeaderSection2 />
      <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#666] text-[14px] text-ellipsis w-full">Проходите увлекательные интерактивные кейсы и применяйте новые форматы калькуляторов</p>
    </div>
  );
}

function TextHolder() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text holder">
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#858585] text-[16px] whitespace-nowrap">Введите текст</p>
    </div>
  );
}

function ChildrenWrap6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Эндокринология</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap6 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Cкачать</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pdf">
          <div className="absolute inset-[10.42%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p1d496400} fill="var(--fill-0, #E72A2A)" fillRule="evenodd" />
                <path d={svgPaths.p2a7aed00} fill="var(--fill-0, #E72A2A)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Кардиология</p>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap7 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info1 />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Cкачать</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="txt">
          <div className="absolute inset-[10.42%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p1d496400} fill="var(--fill-0, #3F82EF)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2b906700} fill="var(--fill-0, #3F82EF)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Кардиология</p>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap8 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info2 />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Cкачать</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pdf">
          <div className="absolute inset-[10.42%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p1d496400} fill="var(--fill-0, #E72A2A)" fillRule="evenodd" />
                <path d={svgPaths.p2a7aed00} fill="var(--fill-0, #E72A2A)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Неврология</p>
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap9 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info3 />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Cкачать</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="xls">
          <div className="absolute inset-[10.42%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p1d496400} fill="var(--fill-0, #299438)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p34bd9000} fill="var(--fill-0, #299438)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Эндокринология</p>
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap10 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info4 />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Cкачать</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="txt">
          <div className="absolute inset-[10.42%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p1d496400} fill="var(--fill-0, #3F82EF)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2b906700} fill="var(--fill-0, #3F82EF)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Памятки для пациентов</p>
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap11 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info5 />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Cкачать</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pdf">
          <div className="absolute inset-[10.42%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p1d496400} fill="var(--fill-0, #E72A2A)" fillRule="evenodd" />
                <path d={svgPaths.p2a7aed00} fill="var(--fill-0, #E72A2A)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lib() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[24px] shrink-0 w-full" data-name="lib">
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Правила питания при сахарном диабете</p>
          <Frame18 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Рекомендации по контролю артериального давления</p>
          <Frame19 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Клинические рекомендации по лечению гипертонии</p>
          <Frame23 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Что нужно знать о профилактике инсульта</p>
          <Frame24 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Руководство по применению препарата Инвокана</p>
          <Frame25 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Советы по восстановлению после операции</p>
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Library() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[343px]" data-name="Library">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
        <ContentSection2 />
        <div className="bg-white h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="search">
          <div aria-hidden="true" className="absolute border border-[#9c85d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[8px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search">
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p23b4c780} id="Vector" stroke="var(--stroke-0, #858585)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <TextHolder />
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
              <p className="leading-[24px]">Общая терапия</p>
            </div>
          </div>
          <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
            <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Памятки для пациентов</p>
            </div>
          </div>
          <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
            <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Эндокринология</p>
            </div>
          </div>
          <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
            <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Кардиология</p>
            </div>
          </div>
          <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
            <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Неврология</p>
            </div>
          </div>
          <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
            <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Онкология</p>
            </div>
          </div>
          <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
            <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Репродуктивное здоровье</p>
            </div>
          </div>
        </div>
      </div>
      <Lib />
    </div>
  );
}

function HeaderSection3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section">
      <p className="font-['Inter:bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Прошедшие мероприятия</p>
    </div>
  );
}

function ContentSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content Section">
      <HeaderSection3 />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic overflow-hidden relative shrink-0 text-[16px] text-black text-center text-ellipsis w-full">Проходите увлекательные интерактивные кейсы и применяйте новые форматы калькуляторов</p>
    </div>
  );
}

function Slider1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="slider">
      <div className="bg-[#9c85d8] content-center flex flex-wrap gap-y-[10px] items-center p-[10px] relative rounded-[40px] shrink-0" data-name="Navigation">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-left">
          <div className="absolute bottom-1/4 left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                <path d="M1 7H15M1 7L7 13M1 7L7 1" id="Vector" stroke="var(--stroke-0, #F7F5FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#9c85d8] content-center flex flex-wrap gap-y-[10px] items-center p-[10px] relative rounded-[40px] shrink-0" data-name="Navigation">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right">
          <div className="absolute bottom-1/4 left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                <path d="M1 7H15M15 7L9 13M15 7L9 1" id="Vector" stroke="var(--stroke-0, #F7F5FB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChildrenWrap12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Симпозиум</p>
      </div>
    </div>
  );
}

function ChildrenWrap13() {
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
        <ChildrenWrap12 />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap13 />
      </div>
    </div>
  );
}

function Info6() {
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
          <Info6 />
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
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#fbf9fd] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] px-[24px] relative w-full">
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">Семинар 2025: «Этика и право в медицине: вызовы современности»</p>
        <Frame7 />
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full" data-name="slider">
      <Slider1 />
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image />
        <Content />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[16px] relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
            <ContentSection3 />
          </div>
          <Slider />
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

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] items-center left-0 top-[174px] w-[375px]">
      <Frame21 />
      <Products />
      <Library />
      <Frame8 />
      <div className="bg-[#4d358b] content-stretch flex items-center overflow-clip py-[60px] relative shrink-0 w-full" data-name="footer">
        <Frame5 />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fbf9fd] relative size-full" data-name="1">
      <AddressBarIOsXChrome />
      <Menu />
      <TabBarIOsXChrome />
      <Frame20 />
    </div>
  );
}