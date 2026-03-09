import { useState } from "react";
import { useId } from "react";
import { motion } from "motion/react";
import { preset, weight, leading, tracking, textColor, colors } from "../styles/typography";

// ─── Canva ────────────────────────────────────────────────────────────────────

function CanvaIcon({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  const id = "canva-grad";
  return (
    <svg viewBox="0 0 90 90" width={size} height={size} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transition: "opacity 0.25s", flexShrink: 0, borderRadius: "50%" }}>
      <defs>
        <radialGradient id={`${id}-a`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-49.416 92.712 15.727) scale(61.8733)">
          <stop stopColor="#6420FF" /><stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-b`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(54.703 -.534 32.352) scale(69.7735)">
          <stop stopColor="#00C4CC" /><stop offset="1" stopColor="#00C4CC" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-c`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(43.07399 -43.36818 19.94558 19.81028 20.452 75.905)">
          <stop stopColor="#6420FF" /><stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-d`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(66.52 6.829 36.642) scale(62.9836 105.512)">
          <stop stopColor="#00C4CC" stopOpacity="0.726" />
          <stop offset="0" stopColor="#00C4CC" />
          <stop offset="1" stopColor="#00C4CC" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M45 85c22.091 0 40-17.909 40-40S67.091 5 45 5 5 22.909 5 45s17.909 40 40 40Z" fill="#7D2AE7" />
      <path d="M45 85c22.091 0 40-17.909 40-40S67.091 5 45 5 5 22.909 5 45s17.909 40 40 40Z" fill={`url(#${id}-a)`} />
      <path d="M45 85c22.091 0 40-17.909 40-40S67.091 5 45 5 5 22.909 5 45s17.909 40 40 40Z" fill={`url(#${id}-b)`} />
      <path d="M45 85c22.091 0 40-17.909 40-40S67.091 5 45 5 5 22.909 5 45s17.909 40 40 40Z" fill={`url(#${id}-c)`} />
      <path d="M45 85c22.091 0 40-17.909 40-40S67.091 5 45 5 5 22.909 5 45s17.909 40 40 40Z" fill={`url(#${id}-d)`} />
      <path d="M62.269 53.206c-.33 0-.621.278-.923.887-3.414 6.923-9.31 11.82-16.134 11.82-7.89 0-12.776-7.121-12.776-16.96 0-16.667 9.287-26.303 17.443-26.303 3.812 0 6.14 2.395 6.14 6.206 0 4.524-2.571 6.92-2.571 8.515 0 .716.446 1.15 1.329 1.15 3.549 0 7.714-4.079 7.714-9.84 0-5.586-4.861-9.692-13.018-9.692-13.48 0-25.46 12.497-25.46 29.789 0 13.384 7.644 22.229 19.436 22.229 12.517 0 19.755-12.454 19.755-16.496 0-.895-.458-1.305-.935-1.305Z" fill="#FFFFFF" />
    </svg>
  );
}

// ─── Mobbin ───────────────────────────────────────────────────────────────────

function MobbinIcon({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  const w = Math.round(size * (139 / 64));
  return (
    <svg viewBox="0 0 139 64" width={w} height={size} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transition: "opacity 0.25s", flexShrink: 0 }}>
      <path d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z" fill="white" />
    </svg>
  );
}

// ─── Lottie ───────────────────────────────────────────────────────────────────

function LottieIcon({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 81 81" width={size} height={size} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transition: "opacity 0.25s", flexShrink: 0 }}>
      <path d="M60.072 0.259H20.556C9.377 0.259 0.314 9.321 0.314 20.5V60.017C0.314 71.196 9.377 80.259 20.556 80.259H60.072C71.251 80.259 80.314 71.196 80.314 60.017V20.5C80.314 9.321 71.251 0.259 60.072 0.259Z" fill="#00DDB3" />
      <path d="M61.116 18.177C47.345 18.177 42.242 28.009 38.138 35.908L35.458 40.962C31.113 49.338 27.867 54.43 19.501 54.43C18.982 54.43 18.467 54.533 17.987 54.731C17.508 54.93 17.072 55.222 16.704 55.589C16.337 55.956 16.046 56.392 15.847 56.872C15.648 57.352 15.546 57.866 15.546 58.386V58.386C15.547 59.434 15.964 60.439 16.706 61.18C17.447 61.922 18.452 62.339 19.501 62.34V62.34C33.277 62.34 38.38 52.508 42.484 44.609L45.159 39.556C49.509 31.179 52.755 26.087 61.116 26.087C61.636 26.087 62.15 25.986 62.631 25.787C63.111 25.589 63.548 25.298 63.916 24.93C64.284 24.563 64.576 24.127 64.775 23.647C64.974 23.166 65.076 22.652 65.076 22.132V22.132C65.075 21.082 64.657 20.076 63.914 19.335C63.172 18.593 62.165 18.177 61.116 18.177V18.177Z" fill="white" />
    </svg>
  );
}

// ─── Figma ────────────────────────────────────────────────────────────────────

function FigmaIcon({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  const w = Math.round(size * (288 / 432));
  return (
    <svg viewBox="0 0 288 432" width={w} height={size} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transition: "opacity 0.25s", flexShrink: 0 }}>
      <path d="M144 216C144 176.641 175.907 144.733 215.267 144.733C254.626 144.733 286.534 176.641 286.534 216C286.534 255.36 254.626 287.267 215.267 287.267C175.907 287.267 144 255.36 144 216Z" fill="#1ABCFE" />
      <path d="M1.466 358.534C1.466 319.175 33.373 287.267 72.733 287.267H144V358.534C144 397.894 112.093 429.801 72.733 429.801C33.373 429.801 1.466 397.894 1.466 358.534Z" fill="#0ACF83" />
      <path d="M144 2.199V144.733H215.267C254.627 144.733 286.534 112.826 286.534 73.466C286.534 34.107 254.627 2.199 215.267 2.199L144 2.199Z" fill="#FF7262" />
      <path d="M1.466 73.466C1.466 112.826 33.373 144.733 72.733 144.733L144 144.733L144 2.199L72.733 2.199C33.373 2.199 1.466 34.107 1.466 73.466Z" fill="#F24E1E" />
      <path d="M1.466 216C1.466 255.36 33.373 287.267 72.733 287.267H144L144 144.733L72.733 144.733C33.373 144.733 1.466 176.641 1.466 216Z" fill="#A259FF" />
    </svg>
  );
}

// ─── Miro ─────────────────────────────────────────────────────────────────────

function MiroIcon({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 400 400" width={size} height={size} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transition: "opacity 0.25s", flexShrink: 0 }}>
      <path d="M3 100.754C3 46.26 47.244 2 101.754 2H299.246C353.756 2 398 46.244 398 100.754V298.246C398 352.756 353.756 397 299.246 397H101.754C47.244 397 3 352.756 3 298.246V100.754Z" fill="#FFDD33" />
      <path fillRule="evenodd" clipRule="evenodd" d="M265.573 77.349H229.74L259.629 129.85L193.906 77.349H158.072L190.934 141.468L122.238 77.349H86.404L122.238 159.031L86.404 322.377H122.238L190.934 147.396L158.072 322.377H193.906L259.629 135.693L229.74 322.377H265.573L331.297 118.232L265.573 77.434V77.349Z" fill="#1C1C1E" />
    </svg>
  );
}

// ─── Яндекс Метрика ───────────────────────────────────────────────────────────

function YaMetrikaIcon({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  const uid      = useId();
  const clipId   = `ym-clip-${uid}`;
  const bgId     = `ym-bg-${uid}`;
  const redId    = `ym-red-${uid}`;
  const blue2Id  = `ym-blue2-${uid}`;
  const yellowId = `ym-yellow-${uid}`;

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transition: "opacity 0.25s", flexShrink: 0 }}>
      <defs>
        <clipPath id={clipId}><circle cx="50" cy="50" r="50" /></clipPath>
        <linearGradient id={bgId} x1="67.8" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4643B9" /><stop offset="1" stopColor="#1E8AFF" />
        </linearGradient>
        <linearGradient id={redId} x1="0" y1="62.5" x2="31.25" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF002E" /><stop offset="1" stopColor="#FFADA1" />
        </linearGradient>
        <linearGradient id={blue2Id} x1="31.25" y1="32" x2="55" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3C3BA0" />
          <stop offset="0.49" stopColor="#1E8AFF" />
          <stop offset="1" stopColor="#00B2FF" />
        </linearGradient>
        <linearGradient id={yellowId} x1="68.75" y1="0" x2="100" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA1A" /><stop offset="1" stopColor="#FFB800" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="100" height="100" fill={`url(#${bgId})`} />
        <rect x="0" y="62.5" width="31.25" height="37.5" fill={`url(#${redId})`} />
        <path
          d="M31.25 51.25c0-7.001 0-10.501 1.362-13.174 1.198-2.352 3.108-4.262 5.46-5.46C40.745 31.25 44.245 31.25 51.246 31.25H68.75V100H31.25V51.25Z"
          fill={`url(#${blue2Id})`}
        />
        <rect x="68.75" y="0" width="31.25" height="100" fill={`url(#${yellowId})`} />
      </g>
    </svg>
  );
}

// ─── Claude ───────────────────────────────────────────────────────────────────

function ClaudeIcon({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 1200 1200" width={size} height={size} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transition: "opacity 0.25s", flexShrink: 0 }}>
      <path fill="#d97757" d="M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 Z" />
    </svg>
  );
}

// ─── Magic Patterns ───────────────────────────────────────────────────────────

function MagicPatternsIcon({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  const w = Math.round(size * (193 / 141));
  return (
    <svg viewBox="0 0 193 141" width={w} height={size} fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, transition: "opacity 0.25s", flexShrink: 0 }}>
      <defs>
        <linearGradient id="mp-grad" x1="178.242" y1="10.759" x2="-16.5115" y2="101.898" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFFFA2" />
          <stop offset="0.274" stopColor="#7CD27F" />
          <stop offset="0.788" stopColor="#ABCBE0" />
          <stop offset="0.894" stopColor="#CBABCE" />
          <stop offset="0.971" stopColor="#A390CB" />
        </linearGradient>
        <clipPath id="mp-clip"><rect width="193" height="141" fill="white" /></clipPath>
      </defs>
      <g clipPath="url(#mp-clip)">
        <path d="M190.138 68.3793C190.034 68.3793 189.827 68.3793 189.724 68.3793L176.586 70.4483C176.483 70.4483 176.379 70.4483 176.276 70.4483C174.827 70.4483 173.69 69.3104 173.69 67.8621C173.69 67.7586 173.69 67.5517 173.69 67.4483L183.517 20.069C183.621 19.7586 183.621 19.3448 183.621 19.0345C183.621 16.2414 181.345 14.069 178.655 14.069C178.345 14.069 178.034 14.069 177.827 14.1724L133.552 21.3104C133.241 21.3104 133.034 21.4138 132.724 21.4138C129.931 21.4138 127.759 19.1379 127.759 16.4483C127.759 16.138 127.759 15.8276 127.862 15.5172L129.828 6.00005C129.828 6.00005 129.931 5.27591 129.931 4.96557C129.931 2.17246 127.655 0 124.965 0C124.655 0 124.345 3.79e-05 124.138 0.103486L32.1724 14.7931C27.8276 15.5173 24.3103 18.8276 23.3793 23.069L0.103423 135C0.103423 135 0 135.724 0 136.034C0 138.828 2.27585 141 4.9655 141C5.79309 141 6.51724 140.793 7.24138 140.483L63.4138 111.828C64.0344 111.517 64.7586 111.31 65.5861 111.31C68.3792 111.31 70.5517 113.586 70.5517 116.276C70.5517 116.586 70.5517 116.897 70.4482 117.207L66.8275 134.793C66.7241 135.207 66.7241 135.621 66.7241 136.034C66.7241 138.828 69 141 71.6896 141C72.5172 141 73.2413 140.793 73.9655 140.483L137.69 107.897C138 107.69 138.414 107.586 138.828 107.586C140.276 107.586 141.414 108.724 141.414 110.172C141.414 110.379 141.414 110.483 141.414 110.69L138.724 123.828C138.724 124.034 138.621 124.241 138.621 124.345C138.621 125.793 139.759 126.931 141.207 126.931C141.621 126.931 142.034 126.828 142.448 126.621L182.483 106.241C184.655 105.103 186.31 103.034 186.724 100.655L192.724 71.4828C192.724 71.2759 192.827 71.0689 192.827 70.862C192.724 69.5172 191.586 68.3793 190.138 68.3793Z" fill="url(#mp-grad)" />
      </g>
    </svg>
  );
}

// ─── SVG paths from simple-icons (CC0) ────────────────────────────────────────

const PATHS: Record<string, { path: string; hex: string }> = {
  figma:       { hex: "F24E1E", path: "" }, // rendered via FigmaIcon
  framer:      { hex: "0055FF", path: "M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" },
  canva:       { hex: "00C4CC", path: "" }, // rendered via CanvaIcon
  lottie:      { hex: "00DDB3", path: "" }, // rendered via LottieIcon
  miro:        { hex: "FFD02F", path: "" }, // rendered via MiroIcon
  mobbin:      { hex: "E2E8F0", path: "" }, // rendered via MobbinIcon
  yametrika:   { hex: "FC3F1D", path: "" }, // rendered via YaMetrikaIcon
  jira:        { hex: "0A7BFF", path: "M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.757a5.215 5.215 0 0 0 5.214 5.214h2.13v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.002-1.001zM23.013 0H11.475a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24.018 12.49V1.005A1.001 1.001 0 0 0 23.013 0Z" },
  confluence:  { hex: "2684FF", path: "M.98 17.785c-.24.387-.504.838-.744 1.193a.773.773 0 0 0 .255 1.063l4.763 2.913a.773.773 0 0 0 1.068-.271c.213-.348.504-.803.818-1.303 2.19-3.432 4.394-3.013 8.363-1.217l4.733 2.158a.773.773 0 0 0 1.003-.386l2.124-4.943a.775.775 0 0 0-.391-1.011c-1.455-.66-4.334-1.979-6.989-3.277-6.53-3.128-11.935-2.678-15.003 3.08zM23.021 6.215c.24-.388.504-.84.744-1.193a.773.773 0 0 0-.255-1.064L18.747 1.04a.778.778 0 0 0-1.07.271c-.213.349-.503.804-.817 1.304-2.19 3.43-4.394 3.012-8.363 1.216L3.764 1.673a.773.773 0 0 0-1.004.386L.637 7.002a.775.775 0 0 0 .39 1.011c1.456.659 4.335 1.979 6.99 3.277 6.524 3.123 11.93 2.672 15.004-3.075z" },
  github:      { hex: "E2E8F0", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
  trello:      { hex: "0079BF", path: "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.656 1.343 3 3 3h18c1.656 0 3-1.344 3-3V3c0-1.657-1.344-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44zm10.44-6c0 .794-.645 1.44-1.44 1.44H15c-.795 0-1.44-.646-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44z" },
  openai:      { hex: "74AA9C", path: "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.3 14.13A4.501 4.501 0 0 1 2.34 7.894zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.516 2.61a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.393-.686zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.516-2.604a4.495 4.495 0 0 1 6.663 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.496 4.496 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" },
  anthropic:   { hex: "D97757", path: "M17.332 4.8h-3.27L24 24h3.268zm-10.664 0L0 24h3.334l1.334-3.2h6.432l1.334 3.2h3.334zm-.667 13.6 2.334-5.6 2.333 5.6z" },
  claude:        { hex: "D97757", path: "" }, // rendered via ClaudeIcon
  magicpatterns: { hex: "A390CB", path: "" }, // rendered via MagicPatternsIcon
  googleforms: { hex: "673AB8", path: "M17.996 0H6.004C4.3 0 3 1.3 3 3.003v17.994C3 22.7 4.3 24 6.004 24h11.992C19.7 24 21 22.7 21 20.997V3.003C21 1.3 19.7 0 17.996 0zM9.5 19h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm7.5 8h-6v-2H17zm0-4h-6v-2H17zm0-4h-6V9H17zM8.5 7V4.5l3.5-3.5 3.5 3.5V7z" },
};

// ─── Touch detection (once, module-level) ────────────────────────────────────

const IS_TOUCH =
  typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

// ─── Types ────────────────────────────────────────────────────────────────────

interface SITool { type: "si"; slug: string; name: string; hex: string; }
interface CustomTool { type: "custom"; name: string; initials: string; hex: string; }
type ToolDef = SITool | CustomTool;
interface CategoryDef { label: { en: string; ru: string }; tools: ToolDef[]; }

// ─── Data ─────────────────────────────────────────────────────────────────────

const si = (slug: string, name: string): SITool => ({
  type: "si", slug, name, hex: PATHS[slug]?.hex ?? "94A3B8",
});
const custom = (name: string, initials: string, hex: string): CustomTool => ({
  type: "custom", name, initials, hex,
});

const CATEGORIES: CategoryDef[] = [
  {
    label: { en: "Design & Prototype", ru: "Дизайн и прототипы" },
    tools: [
      si("figma",  "Figma"),
      si("framer", "Framer"),
      si("canva",  "Canva"),
      si("lottie", "Lottie"),
    ],
  },
  {
    label: { en: "Research & Inspiration", ru: "Исследования" },
    tools: [
      si("miro",      "Miro"),
      si("mobbin",    "Mobbin"),
      si("yametrika", "Я.Метрика"),
    ],
  },
  {
    label: { en: "PM & Collaboration", ru: "Менеджмент" },
    tools: [
      si("jira",       "Jira"),
      si("confluence", "Confluence"),
      si("trello",     "Trello"),
      si("github",     "GitHub"),
    ],
  },
  {
    label: { en: "AI Assistants", ru: "AI-ассистенты" },
    tools: [
      si("openai",    "ChatGPT"),
      si("claude",    "Claude"),
      si("magicpatterns", "MagicP"),
    ],
  },
];

const CONTENT = {
  en: { label: "Tools", sub: "Instruments I reach for across design, research, planning, and AI." },
  ru: { label: "Инструменты", sub: "Инструменты, которые я использую в дизайне, исследованиях, планировании и работе с AI." },
};

// ─── hexToRgb ─────────────────────────────────────────────────────────────────

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

// ─── Icon renderer ────────────────────────────────────────────────────────────

// Icons with own full-color branding — vary only opacity
const RICH_ICONS: Record<string, (op: number) => React.ReactNode> = {
  figma:     (op) => <FigmaIcon     size={26} opacity={op} />,
  canva:     (op) => <CanvaIcon     size={26} opacity={op} />,
  lottie:    (op) => <LottieIcon    size={26} opacity={op} />,
  miro:      (op) => <MiroIcon      size={26} opacity={op} />,
  yametrika: (op) => <YaMetrikaIcon size={26} opacity={op} />,
  mobbin:    (op) => <MobbinIcon    size={16} opacity={op} />,
  claude:        (op) => <ClaudeIcon        size={26} opacity={op} />,
  magicpatterns: (op) => <MagicPatternsIcon size={20} opacity={op} />,
};

// ─── ToolCard ───────────────────────────────────────────────────────���─────────

function ToolCard({ tool, delay }: { tool: ToolDef; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const hex = tool.hex;
  const rgb = hexToRgb(hex);
  // На тач-устройствах hover не работает — иконки всегда на полной яркости
  const active = IS_TOUCH || hovered;
  const op  = active ? 1 : 0.65;

  const renderIcon = () => {
    if (tool.type === "si") {
      const rich = RICH_ICONS[tool.slug];
      if (rich) return rich(op);
      // Plain simple-icon with brand fill
      return (
        <svg role="img" viewBox="0 0 24 24" width="26" height="26"
          style={{ fill: `#${hex}`, opacity: op, transition: "opacity 0.25s", flexShrink: 0 }}>
          <path d={PATHS[tool.slug]?.path ?? ""} />
        </svg>
      );
    }
    // Custom initials badge
    return (
      <div style={{
        width: "26px", height: "26px", borderRadius: "7px",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hovered ? `#${hex}` : `rgba(${rgb}, 0.55)`,
        transition: "background 0.25s",
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontSize: "9px",
          fontWeight: weight.semibold, letterSpacing: tracking.wide,
          color: textColor.primary, lineHeight: leading.tight,
        }}>
          {tool.initials}
        </span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.93 }}
      className="tool-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "10px", padding: "18px 14px",
        borderRadius: "14px", width: "88px",
        border: active ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.07)",
        background: active ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
        cursor: "default", transition: "border 0.25s, background 0.25s", flexShrink: 0,
      }}
    >
      {renderIcon()}
      <span style={{
        ...preset.micro, fontWeight: weight.regular,
        color: active ? textColor.secondary : textColor.muted,
        textAlign: "center", whiteSpace: "nowrap", transition: "color 0.25s",
      }}>
        {tool.name}
      </span>
    </motion.div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────

export function ToolsSection({ lang }: { lang: "en" | "ru" }) {
  const t = CONTENT[lang];

  const categoriesWithIdx = CATEGORIES.map((cat, ci) => {
    const startIdx = CATEGORIES.slice(0, ci).reduce((acc, c) => acc + c.tools.length, 0);
    return { ...cat, startIdx };
  });

  return (
    <section id="tools" style={{ background: colors.bg, padding: "100px 0 120px", overflowX: "hidden" }}>
      <div className="section-inner">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}
        >
          <span style={{ display: "block", width: "24px", height: "1px", background: textColor.accent, opacity: 0.7, flexShrink: 0 }} />
          <span style={{ ...preset.micro, fontWeight: weight.regular, letterSpacing: tracking.wider, textTransform: "uppercase", color: textColor.muted }}>
            {t.label}
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ ...preset.h2, fontWeight: weight.light, color: textColor.secondary, margin: "0 0 56px", maxWidth: "600px" }}
        >
          {t.sub}
        </motion.h2>

        {/* Category rows — desktop */}
        <div className="tools-desktop" style={{ flexDirection: "column" }}>
          {categoriesWithIdx.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="tools-row"
              style={{ display: "flex", alignItems: "flex-start", gap: "32px", padding: "24px 0" }}
            >
              <span className="tools-cat-label" style={{
                ...preset.small, fontWeight: weight.regular, color: textColor.muted,
                flexShrink: 0, width: "160px", paddingTop: "20px",
              }}>
                {cat.label[lang]}
              </span>
              <div className="tools-list-wrap" style={{ flex: 1, minWidth: 0 }}>
                <div className="tools-list" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.tools.map((tool, ti) => (
                    <ToolCard key={tool.name} tool={tool} delay={(cat.startIdx + ti) * 0.04} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile flat grid */}
        <div className="tools-mobile-grid">
          {CATEGORIES.flatMap((cat, ci) =>
            cat.tools.map((tool, ti) => {
              const globalIdx = CATEGORIES.slice(0, ci).reduce((a, c) => a + c.tools.length, 0) + ti;
              return <ToolCard key={tool.name} tool={tool} delay={globalIdx * 0.03} />;
            })
          )}
        </div>
      </div>

      <style>{`
        .tools-desktop { display: flex; }
        .tools-mobile-grid { display: none; }

        @media (max-width: 640px) {
          .tools-desktop { display: none !important; }
          .tools-mobile-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }
          .tools-mobile-grid .tool-card {
            width: 100% !important;
            min-width: 0 !important;
            padding: 14px 8px !important;
          }
        }
        @media (max-width: 600px) {
          .header-telegram { display: none !important; }
          .header-cv { display: none !important; }
        }
      `}</style>
    </section>
  );
}