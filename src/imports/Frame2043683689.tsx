import svgPaths from "./svg-3b5pvymkpt";
import imgUntitled91 from "figma:asset/45ee5768b9ddf3bc496575602e1d29ee194ce82b.png";
import imgChatGptImageApr22025092002Pm1 from "figma:asset/648a8ff03017c70c2b6edaa837342b366ecb52e6.png";
import imgSligerCard from "figma:asset/8ac9214e15552b0be17021e6a081a980aaaf287a.png";
import imgImage from "figma:asset/c3848cb41dfdd8d09f5ff182c2f1f286fc63a80f.png";
import imgImage1 from "figma:asset/e2d88820918acf8ba217720274e1c0abe222ac05.png";
import imgImage2 from "figma:asset/e2d88820918acf8ba217720274e1c0abe222ac05.png";
import imgOverlay from "figma:asset/6a83d0e67593951e63cf9a1a70ea83a5e02cdd99.png";
import imgImage3 from "figma:asset/68b99a28d4157ba51d5daac5850cbc6e4e59016d.png";
import imgImage4 from "figma:asset/7913c332518a5cbbfd2fe5f53d66db27588092f9.png";
import imgImage17 from "figma:asset/11374c2aa44e7d63ceeff4477705a7a59260a9ef.png";
import imgImage15 from "figma:asset/408370834492ac6f51cbf6252c37d72dcbe1100c.png";
import imgImage19 from "figma:asset/96f5e7cd954b851189fb977d2dabbcad108e052c.png";

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

function Frame7() {
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
      <Frame7 />
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
        <g clipPath="url(#clip0_82_17023)" id="Go Back">
          <g id="Vector" />
          <path d={svgPaths.pb6cf540} fill="var(--fill-0, #80858A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_17023">
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
        <g clipPath="url(#clip0_82_16828)" id="Go Forward">
          <g id="Vector" />
          <path d={svgPaths.p1f2eb4b0} fill="var(--fill-0, #C8C8C8)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_16828">
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
        <g clipPath="url(#clip0_82_16842)" id="Chrome Tabs">
          <g id="Vector" />
          <path d={svgPaths.p22a95500} fill="var(--fill-0, #80858A)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_82_16842">
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
        <g clipPath="url(#clip0_82_16889)" id="More Menu">
          <g id="Vector" />
          <path d={svgPaths.p273e23e0} fill="var(--fill-0, #80858A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_82_16889">
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

function Tags() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip p-[16px] relative shrink-0" data-name="tags">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap1 />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="details">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar-event">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
                <path d={svgPaths.p398a9780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">04 февраля, 18:00</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon+text">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="user">
          <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-4.17%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 13">
                <path d={svgPaths.p3d2ea600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Иванов А.А.</p>
      </div>
    </div>
  );
}

function ChildrenLoadingWrap() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="ChildrenLoadingWrap">
      <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f7f5fb] text-[14px] whitespace-nowrap">Перейти</p>
    </div>
  );
}

function ButtonWrap() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="ButtonWrap">
      <ChildrenLoadingWrap />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Details />
      <div className="relative rounded-[12px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
          <ButtonWrap />
        </div>
        <div aria-hidden="true" className="absolute border border-[#f7f5fb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:bold',sans-serif] leading-[24px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full">Клинический симпозиум 2024: «Инновации в лечении: от теории к практике. Обсуждение реальных случаев»</p>
      <Frame9 />
    </div>
  );
}

function Title() {
  return (
    <div className="backdrop-blur-[26.4px] bg-[rgba(77,53,139,0.5)] relative rounded-[24px] shrink-0 w-full" data-name="title">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[12px] py-[8px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[4px] px-[8px] py-[24px] right-[4px] top-[calc(50%-29px)]" data-name="slider">
      <div className="bg-[rgba(211,198,234,0.5)] content-center flex flex-wrap gap-y-[10px] items-center p-[10px] relative rounded-[40px] shrink-0" data-name="Navigation">
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

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Body">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end justify-between p-[4px] relative size-full">
          <Tags />
          <Title />
          <Slider />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[16px] shrink-0 w-full">
      <Frame15 />
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
            <img alt="" className="absolute block max-w-none size-full" height="48" src={imgImage1} width="48" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#9c85d8] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[55.952px]" />
      </div>
      <div className="mr-[-26px] relative rounded-[55.952px] shrink-0 size-[48px]" data-name="Chip/Avatar">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[48px] top-1/2" data-name="Image">
            <img alt="" className="absolute block max-w-none size-full" height="48" src={imgImage2} width="48" />
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
            <img alt="" className="absolute block max-w-none size-full" height="48" src={imgImage1} width="48" />
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

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
        <div className="bg-[#4d358b] relative rounded-[32px] shrink-0 w-full" data-name="main card">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[32px] relative w-full">
              <div className="flex flex-col font-['Inter:bold',sans-serif] justify-center leading-[24px] max-w-[750px] not-italic relative shrink-0 text-[16px] text-white w-full">
                <p className="mb-0">Мы расширяем возможности научного сообщества</p>
                <p>и электроникс.</p>
              </div>
              <div className="flex flex-col font-['Inter:regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] max-w-[750px] relative shrink-0 text-[#e9ddf5] text-[14px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                <p className="leading-[20px]">Доступ к лучшим образовательным мероприятиям, полезным материалам и интерактивным инструментам для вашей практики</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[330px] items-end justify-between overflow-clip relative rounded-[28px] shrink-0 w-full" data-name="Sliger_card">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[28px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[28px] size-full" src={imgSligerCard} />
            <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[28px]" />
          </div>
          <div className="absolute inset-[0_0_3.05%_0]" data-name="bg">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgSligerCard} />
              <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute aspect-[489.33331298828125/508] bottom-[3.05%] left-[calc(50%-6.5px)] top-0" data-name="image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[144.49%] left-0 max-w-none top-0 w-full" src={imgImage} />
            </div>
          </div>
          <Body />
        </div>
        <Frame29 />
        <Container1 />
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section">
      <p className="font-['Inter:bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Заголовок</p>
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

function ContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content Section">
      <HeaderSection />
      <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#666] text-[14px] text-ellipsis w-full">Проходите увлекательные интерактивные кейсы и применяйте новые форматы калькуляторов</p>
    </div>
  );
}

function ChildrenWrap2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f5fb] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Интерактивный кейс</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[#8b5fc2] content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap2 />
      </div>
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

function ChildrenWrap3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f5fb] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Калькулятор</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[#8b5fc2] content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap3 />
      </div>
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
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f5fb] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Калькулятор</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[#8b5fc2] content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap4 />
      </div>
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

function ChildrenWrap5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f5fb] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Интерактивный кейс</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[#8b5fc2] content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap5 />
      </div>
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

function ChildrenWrap6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f5fb] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Интерактивный кейс</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[#8b5fc2] content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap6 />
      </div>
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

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="content">
      <div className="bg-[#e9ddf5] content-stretch flex flex-col h-[427px] items-center justify-between overflow-clip p-[24px] relative rounded-[20px] shrink-0 w-[300px]">
        <div className="absolute flex h-[377.121px] items-center justify-center left-[-86px] top-[164px] w-[360.192px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-150">
            <div className="h-[293px] relative w-[246.75px]" data-name="Vector">
              <div className="absolute inset-[-6.83%_-8.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 286.75 333">
                  <g filter="url(#filter0_f_82_16852)" id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p2ffe6080} fill="url(#paint0_linear_82_16852)" fillRule="evenodd" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="333" id="filter0_f_82_16852" width="286.75" x="1.03417e-09" y="-6.56801e-09">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_82_16852" stdDeviation="10" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_82_16852" x1="20" x2="266.75" y1="166.5" y2="166.5">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[14px] tracking-[0.07px] w-[min-content]">
          <p className="leading-[20px]">Оптимизация лечения: выберите свой путь к выздоровлению</p>
        </div>
        <Frame17 />
      </div>
      <div className="bg-[#e9ddf5] content-stretch flex flex-col h-[427px] items-center justify-between overflow-clip p-[24px] relative rounded-[20px] shrink-0 w-[300px]">
        <div className="absolute flex h-[377.121px] items-center justify-center left-[-86px] top-[164px] w-[360.192px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-150">
            <div className="h-[293px] relative w-[246.75px]" data-name="Vector">
              <div className="absolute inset-[-6.83%_-8.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 286.75 333">
                  <g filter="url(#filter0_f_82_16852)" id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p2ffe6080} fill="url(#paint0_linear_82_16852)" fillRule="evenodd" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="333" id="filter0_f_82_16852" width="286.75" x="1.03417e-09" y="-6.56801e-09">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_82_16852" stdDeviation="10" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_82_16852" x1="20" x2="266.75" y1="166.5" y2="166.5">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[14px] tracking-[0.07px] w-[min-content]">
          <p className="leading-[20px]">Калькулятор для анализа скорости фильтрации почек</p>
        </div>
        <Frame18 />
      </div>
      <div className="bg-[#ad7fdb] content-stretch flex flex-col h-[427px] items-center justify-between overflow-clip p-[24px] relative rounded-[20px] shrink-0 w-[300px]">
        <div className="absolute flex h-[377.121px] items-center justify-center left-[-86px] top-[164px] w-[360.192px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-150">
            <div className="h-[293px] relative w-[246.75px]" data-name="Vector">
              <div className="absolute inset-[-6.83%_-8.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 286.75 333">
                  <g filter="url(#filter0_f_82_16852)" id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p2ffe6080} fill="url(#paint0_linear_82_16852)" fillRule="evenodd" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="333" id="filter0_f_82_16852" width="286.75" x="1.03417e-09" y="-6.56801e-09">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_82_16852" stdDeviation="10" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_82_16852" x1="20" x2="266.75" y1="166.5" y2="166.5">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] w-[min-content]">
          <p className="leading-[20px] whitespace-pre-wrap">
            {`Интерактивный калькулятор `}
            <br aria-hidden="true" />
            для оценки здоровья почек
          </p>
        </div>
        <Frame19 />
      </div>
      <div className="bg-[#e9ddf5] content-stretch flex flex-col h-[427px] items-center justify-between overflow-clip p-[24px] relative rounded-[20px] shrink-0 w-[300px]">
        <div className="absolute flex h-[377.121px] items-center justify-center left-[-86px] top-[164px] w-[360.192px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-150">
            <div className="h-[293px] relative w-[246.75px]" data-name="Vector">
              <div className="absolute inset-[-6.83%_-8.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 286.75 333">
                  <g filter="url(#filter0_f_82_16852)" id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p2ffe6080} fill="url(#paint0_linear_82_16852)" fillRule="evenodd" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="333" id="filter0_f_82_16852" width="286.75" x="1.03417e-09" y="-6.56801e-09">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_82_16852" stdDeviation="10" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_82_16852" x1="20" x2="266.75" y1="166.5" y2="166.5">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[14px] tracking-[0.07px] w-[min-content]">
          <p className="leading-[20px]">Индивидуальный план терапии: сделайте правильный выбор</p>
        </div>
        <Frame20 />
      </div>
      <div className="bg-[#e9ddf5] content-stretch flex flex-col h-[427px] items-center justify-between overflow-clip p-[24px] relative rounded-[20px] shrink-0 w-[300px]">
        <div className="absolute flex h-[377.121px] items-center justify-center left-[-86px] top-[164px] w-[360.192px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-150">
            <div className="h-[293px] relative w-[246.75px]" data-name="Vector">
              <div className="absolute inset-[-6.83%_-8.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 286.75 333">
                  <g filter="url(#filter0_f_82_16852)" id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p2ffe6080} fill="url(#paint0_linear_82_16852)" fillRule="evenodd" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="333" id="filter0_f_82_16852" width="286.75" x="1.03417e-09" y="-6.56801e-09">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_82_16852" stdDeviation="10" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_82_16852" x1="20" x2="266.75" y1="166.5" y2="166.5">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[14px] tracking-[0.07px] w-[min-content]">
          <p className="leading-[20px]">Персонализированный подход к лечению: ваш вклад важен</p>
        </div>
        <Frame21 />
      </div>
    </div>
  );
}

function Interaction() {
  return (
    <div className="h-[591px] relative shrink-0 w-full" data-name="Interaction">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
          <ContentSection />
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Button Group">
            <div className="bg-[#4d358b] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
              <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] whitespace-nowrap">
                <p className="leading-[24px]">Показать всё</p>
              </div>
            </div>
            <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
              <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                <p className="leading-[24px]">Интерактивные кейсы</p>
              </div>
            </div>
            <div className="bg-[#e9e2f4] content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Chip">
              <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[16px] whitespace-nowrap">
                <p className="leading-[24px]">Калькуляторы</p>
              </div>
            </div>
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
}

function HeaderSection1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section">
      <p className="font-['Inter:bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Нозологии</p>
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
      <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#666] text-[14px] text-ellipsis w-full">Проходите увлекательные интерактивные кейсы и применяйте новые форматы калькуляторов</p>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[16px]" />
        <div className="absolute backdrop-blur-[1.5px] bg-size-[1024px_1024px] bg-top-left inset-0 opacity-2 rounded-[16px]" style={{ backgroundImage: `url('${imgOverlay}')` }} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.08px] whitespace-nowrap">Общая терапия</p>
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

function Overlay1() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[16px]" />
        <div className="absolute backdrop-blur-[1.5px] bg-size-[1024px_1024px] bg-top-left inset-0 opacity-2 rounded-[16px]" style={{ backgroundImage: `url('${imgOverlay}')` }} />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.08px] whitespace-nowrap">Неврология</p>
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

function Overlay2() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[16px]" />
        <div className="absolute backdrop-blur-[1.5px] bg-size-[1024px_1024px] bg-top-left inset-0 opacity-2 rounded-[16px]" style={{ backgroundImage: `url('${imgOverlay}')` }} />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.08px] whitespace-nowrap">Эндокринология</p>
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

function Overlay3() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[16px]" />
        <div className="absolute backdrop-blur-[1.5px] bg-size-[1024px_1024px] bg-top-left inset-0 opacity-2 rounded-[16px]" style={{ backgroundImage: `url('${imgOverlay}')` }} />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.08px] whitespace-nowrap">Онкология</p>
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

function Overlay4() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[16px]" />
        <div className="absolute backdrop-blur-[1.5px] bg-size-[1024px_1024px] bg-top-left inset-0 opacity-2 rounded-[16px]" style={{ backgroundImage: `url('${imgOverlay}')` }} />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.08px] whitespace-nowrap">Репродуктивное здоровье</p>
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

function Overlay5() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(0,0,0,0.05)] inset-0 rounded-[16px]" />
        <div className="absolute backdrop-blur-[1.5px] bg-size-[1024px_1024px] bg-top-left inset-0 opacity-2 rounded-[16px]" style={{ backgroundImage: `url('${imgOverlay}')` }} />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.08px] whitespace-nowrap">Кардиология</p>
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nosology">
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-end p-[24px] relative w-full">
            <div className="absolute inset-0 overflow-clip rounded-[16px]" data-name="Nosology-card-bg">
              <div className="absolute inset-0" data-name="image" style={{ backgroundImage: "linear-gradient(218.123deg, rgb(255, 175, 88) 22.53%, rgb(232, 75, 16) 123.28%)" }} />
            </div>
            <Overlay />
            <Frame22 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nosology">
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-end p-[24px] relative w-full">
            <div className="absolute inset-0 overflow-clip rounded-[16px]" data-name="Nosology-card-bg">
              <div className="absolute inset-0" data-name="image 50" style={{ backgroundImage: "linear-gradient(52.6704deg, rgb(161, 78, 255) 26.195%, rgb(42, 12, 134) 100%)" }} />
            </div>
            <Overlay1 />
            <Frame23 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nosology">
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-end p-[24px] relative w-full">
            <div className="absolute inset-0 overflow-clip rounded-[16px]" data-name="Nosology-card-bg">
              <div className="absolute inset-0" data-name="image 52" style={{ backgroundImage: "linear-gradient(233.321deg, rgb(255, 175, 88) 2.1922%, rgb(235, 60, 150) 100%)" }} />
            </div>
            <Overlay2 />
            <Frame24 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nosology">
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-end p-[24px] relative w-full">
            <div className="absolute inset-0 overflow-clip rounded-[16px]" data-name="Nosology-card-bg">
              <div className="absolute inset-0" data-name="image 53" style={{ backgroundImage: "linear-gradient(-65.3141deg, rgb(41, 134, 255) 0%, rgb(0, 82, 204) 99.942%)" }} />
            </div>
            <Overlay3 />
            <Frame25 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nosology">
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-end p-[24px] relative w-full">
            <div className="absolute inset-0 overflow-clip rounded-[16px]" data-name="Nosology-card-bg">
              <div className="absolute inset-0" data-name="image" style={{ backgroundImage: "linear-gradient(55.1956deg, rgb(98, 30, 178) 9.3551%, rgb(244, 93, 160) 150.64%)" }} />
            </div>
            <Overlay4 />
            <Frame26 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[16px] shrink-0 w-full" data-name="Nosology">
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-end p-[24px] relative w-full">
            <div className="absolute inset-0 overflow-clip rounded-[16px]" data-name="Nosology-card-bg">
              <div className="absolute inset-0" data-name="image 51" style={{ backgroundImage: "linear-gradient(114.686deg, rgba(13, 189, 176, 0.8) 0%, rgba(0, 104, 183, 0.8) 100%)" }} />
            </div>
            <Overlay5 />
            <Frame27 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Nosology() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nosology">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] relative w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
          <ContentSection1 />
        </div>
        <Frame2 />
      </div>
    </div>
  );
}

function HeaderSection2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section">
      <p className="font-['Inter:bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Календарь мероприятий</p>
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

function Days() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-x-auto overflow-y-clip relative" data-name="Days">
      <div className="content-stretch flex gap-[2px] h-[64px] items-end justify-end px-[2px] py-[4px] relative shrink-0 w-[30px]" data-name="Event Month">
        <div className="flex h-full items-center justify-center relative shrink-0 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none h-full">
            <div className="flex flex-col font-['Inter:regular',sans-serif] h-full justify-center leading-[0] not-italic relative text-[#858585] text-[12px] tracking-[0.12px] w-[56px]">
              <p className="leading-[16px]">Февраль</p>
            </div>
          </div>
        </div>
        <div className="bg-[#858585] h-full shrink-0 w-px" data-name="Vertical Divider" />
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Event Day">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">пн</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">26</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 2">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">вт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">27</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 3">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">28</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[2px] h-[64px] items-end justify-end px-[2px] py-[4px] relative shrink-0 w-[30px]" data-name="Event Month">
        <div className="flex h-full items-center justify-center relative shrink-0 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none h-full">
            <div className="flex flex-col font-['Inter:regular',sans-serif] h-full justify-center leading-[0] not-italic relative text-[#858585] text-[12px] tracking-[0.12px] w-[56px]">
              <p className="leading-[16px]">Мар</p>
            </div>
          </div>
        </div>
        <div className="bg-[#858585] h-full shrink-0 w-px" data-name="Vertical Divider" />
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 5">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">чт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">01</p>
        </div>
      </div>
      <div className="bg-[#e9e2f4] content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 6">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">пт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">02</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 7">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">сб</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">03</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 8">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">вс</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">04</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 9">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">пн</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">05</p>
        </div>
      </div>
      <div className="bg-[#e9e2f4] content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 10">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">вт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">06</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 11">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">07</p>
        </div>
      </div>
      <div className="bg-[#e9e2f4] content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 12">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">чт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">08</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 13">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">пт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">09</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 14">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">сб</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">10</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 15">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">вс</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">11</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 16">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">пн</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">12</p>
        </div>
      </div>
      <div className="bg-[#e9e2f4] content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 17">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">вт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">13</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 18">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">14</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 19">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">чт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">15</p>
        </div>
      </div>
      <div className="bg-[#e9e2f4] content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 20">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">пт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">16</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 21">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">сб</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">17</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 22">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">вс</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">18</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 23">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">пн</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">19</p>
        </div>
      </div>
      <div className="bg-[#e9e2f4] content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 24">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">вт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">20</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 25">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">21</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 28">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">чт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">22</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 29">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">пт</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">23</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 30">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">сб</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">24</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 31">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">21</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 32">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">21</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 33">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">21</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 34">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">21</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 27">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">21</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col font-['Inter:regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-w-[40px] not-italic p-[8px] relative rounded-[12px] shrink-0" data-name="Component 26">
        <div className="flex flex-col justify-center relative shrink-0 text-[#858585] text-[12px] tracking-[0.12px] w-[20px]">
          <p className="leading-[16px]">ср</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">21</p>
        </div>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[64px] items-center min-h-px min-w-px overflow-clip relative" data-name="Calendar">
      <div className="bg-[#f7f5fb] content-stretch flex items-center px-[4px] py-[20px] relative rounded-[12px] shrink-0" data-name="Calendar Button">
        <div aria-hidden="true" className="absolute border border-[#b7abc9] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-left">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
                <path d="M7 1L1 7L7 13" id="Vector" stroke="var(--stroke-0, #B7ABC9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Days />
      <div className="bg-white content-stretch flex items-center px-[4px] py-[20px] relative rounded-[12px] shrink-0" data-name="Calendar Button">
        <div aria-hidden="true" className="absolute border border-[#9c85d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-right">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
                <path d="M1 1L7 7L1 13" id="Vector" stroke="var(--stroke-0, #9C85D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
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
        <p className="leading-[16px]">Симпозиум</p>
      </div>
    </div>
  );
}

function ChildrenWrap8() {
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
        <ChildrenWrap7 />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap8 />
      </div>
    </div>
  );
}

function Info1() {
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
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
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

function Frame10() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Details1 />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Зарегистрироваться</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#fbf9fd] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] px-[24px] relative w-full">
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">РАРЧ 2024: «Между гипер- и гипоответом: Сцилла и Харибда ВРТ. Разбор клинических случаев</p>
        <Frame10 />
      </div>
    </div>
  );
}

function ChildrenWrap9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Симпозиум</p>
      </div>
    </div>
  );
}

function ChildrenWrap10() {
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
        <ChildrenWrap9 />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap10 />
      </div>
    </div>
  );
}

function Info2() {
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
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
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

function Frame11() {
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
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">Семинар 2025: «Этика и право в медицине: вызовы современности»</p>
        <Frame11 />
      </div>
    </div>
  );
}

function ChildrenWrap11() {
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
        <ChildrenWrap11 />
      </div>
    </div>
  );
}

function Info3() {
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
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
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

function Frame12() {
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
        <Frame12 />
      </div>
    </div>
  );
}

function ChildrenWrap12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Конференция</p>
      </div>
    </div>
  );
}

function ChildrenWrap13() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Репродуктивное здоровье</p>
      </div>
    </div>
  );
}

function Chips3() {
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

function Info4() {
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
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          <Info4 />
        </div>
      </div>
    </div>
  );
}

function Details4() {
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

function Frame13() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Details4 />
      <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Button">
        <p className="font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4d358b] text-[14px] tracking-[0.07px] whitespace-nowrap">Зарегистрироваться</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#fbf9fd] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] px-[24px] relative w-full">
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">Медицинская конференция 2025: «Технологии будущего в лечении хронических заболеваний»</p>
        <Frame13 />
      </div>
    </div>
  );
}

function ChildrenWrap14() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Симпозиум</p>
      </div>
    </div>
  );
}

function ChildrenWrap15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Онкология</p>
      </div>
    </div>
  );
}

function Chips4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Chips">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap14 />
      </div>
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap15 />
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="info">
      <Chips4 />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-[#dfe5ec] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[16px] rounded-tr-[16px] w-full" data-name="image">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[118px] items-end px-[24px] py-[16px] relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          <Info5 />
        </div>
      </div>
    </div>
  );
}

function Details5() {
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

function Frame14() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Details5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-[#fbf9fd] relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] px-[24px] relative w-full">
        <p className="font-['Inter:medium',sans-serif] h-[40px] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.07px] w-full">Форум 2025: «Новые горизонты в онкологии: исследования и клинические испытания»</p>
        <Frame14 />
      </div>
    </div>
  );
}

function EventCards() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="event cards">
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image />
        <Content1 />
      </div>
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image1 />
        <Content2 />
      </div>
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image2 />
        <Content3 />
      </div>
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image3 />
        <Content4 />
      </div>
      <div className="content-stretch flex flex-col h-[372px] items-start overflow-clip relative rounded-[24px] shadow-[0px_3px_20px_1px_rgba(156,133,216,0.2)] shrink-0 w-full" data-name="Event card">
        <Image4 />
        <Content5 />
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="h-[2172px] relative shrink-0 w-full" data-name="Events">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
          <ContentSection2 />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="navigation">
            <Calendar />
            <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[20px] relative rounded-[12px] shrink-0" data-name="DatePicker button">
              <div aria-hidden="true" className="absolute border border-[#9c85d8] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar-search">
                <div className="absolute inset-[12.5%_8.33%_8.33%_16.67%]" data-name="Vector">
                  <div className="absolute inset-[-5.26%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                      <path d={svgPaths.p2c6f3e40} id="Vector" stroke="var(--stroke-0, #9C85D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
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

function HeaderSection3() {
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

function ContentSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content Section">
      <HeaderSection3 />
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

function ChildrenWrap16() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Эндокринология</p>
      </div>
    </div>
  );
}

function Info6() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap16 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info6 />
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

function ChildrenWrap17() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Кардиология</p>
      </div>
    </div>
  );
}

function Info7() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap17 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info7 />
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

function ChildrenWrap18() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Кардиология</p>
      </div>
    </div>
  );
}

function Info8() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap18 />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info8 />
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

function ChildrenWrap19() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Неврология</p>
      </div>
    </div>
  );
}

function Info9() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap19 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info9 />
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

function ChildrenWrap20() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Эндокринология</p>
      </div>
    </div>
  );
}

function Info10() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap20 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info10 />
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

function ChildrenWrap21() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="ChildrenWrap">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#27164c] text-[12px] tracking-[0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Памятки для пациентов</p>
      </div>
    </div>
  );
}

function Info11() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0" data-name="info">
      <div className="bg-[#f5f0fa] content-stretch flex items-center justify-center max-h-[32px] min-h-[24px] px-[8px] py-[4px] relative rounded-[20px] shrink-0" data-name="Card tag">
        <ChildrenWrap21 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Info11 />
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
          <Frame30 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Рекомендации по контролю артериального давления</p>
          <Frame32 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Клинические рекомендации по лечению гипертонии</p>
          <Frame33 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Что нужно знать о профилактике инсульта</p>
          <Frame34 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Руководство по применению препарата Инвокана</p>
          <Frame35 />
        </div>
      </div>
      <div className="bg-[#e9ddf5] relative rounded-[16px] shrink-0 w-full" data-name="lib row">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] w-full">Советы по восстановлению после операции</p>
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Library() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[343px]" data-name="Library">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
        <ContentSection3 />
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative shrink-0 w-[185.5px]">
      <div className="h-[61.185px] overflow-clip relative shrink-0 w-full" data-name="Logo">
        <Logo />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full">
      <Frame4 />
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

function Frame3() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <p className="[text-decoration-skip-ink:none] decoration-dotted font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] underline whitespace-nowrap">Пользовательское соглашение</p>
      <Frame1 />
      <p className="[text-decoration-skip-ink:none] decoration-dotted font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#f7f5fb] text-[16px] underline whitespace-nowrap">Политика конфиденциальности</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[59px] items-center px-[16px] relative shrink-0 w-[375px]">
      <Frame5 />
      <Frame3 />
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

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] h-[6037px] items-center left-0 top-[174px] w-[375px]">
      <Frame16 />
      <Interaction />
      <Nosology />
      <Events />
      <Library />
      <div className="bg-[#4d358b] content-stretch flex items-center overflow-clip py-[60px] relative shrink-0 w-full" data-name="footer">
        <Frame6 />
      </div>
      <div className="absolute flex h-[124.476px] items-center justify-center left-[274px] top-[2300px] w-[179.01px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[86.94deg]">
          <div className="h-[173.093px] relative w-[115.396px]" data-name="image 15">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollbarFrame1() {
  return (
    <div className="absolute bottom-0 overflow-clip right-0 top-0 w-[11px]" data-name="Scrollbar Frame">
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[256px] left-[2px] rounded-[3.5px] top-[2px] w-[7px]" data-name="Scrollbar">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[4.5px]" />
      </div>
    </div>
  );
}

function ScrollbarFrame() {
  return (
    <div className="absolute bottom-[5643px] overflow-clip right-0 top-[150px] w-[11px]" data-name="Scrollbar Frame">
      <ScrollbarFrame1 />
    </div>
  );
}

export default function Frame28() {
  return (
    <div className="bg-[#fbf9fd] relative size-full">
      <AddressBarIOsXChrome />
      <div className="absolute left-[294px] size-[121px] top-[1020px]" data-name="Untitled (9) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUntitled91} />
      </div>
      <Menu />
      <TabBarIOsXChrome />
      <div className="absolute flex h-[146.445px] items-center justify-center left-[279px] top-[4512px] w-[163.117px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[119.93deg]">
          <div className="h-[136.014px] relative w-[90.676px]" data-name="ChatGPT Image Apr 2, 2025, 09_20_02 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageApr22025092002Pm1} />
          </div>
        </div>
      </div>
      <Frame31 />
      <div className="absolute flex items-center justify-center left-[-67px] size-[172.305px] top-[1478px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="h-[146.205px] relative w-[97.47px]" data-name="image 19">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage19} />
          </div>
        </div>
      </div>
      <ScrollbarFrame />
    </div>
  );
}