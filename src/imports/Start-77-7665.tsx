import svgPaths from "./svg-hdma7jwfgo";
import imgStart from "figma:asset/b528d02b9c12cfaed07a4cd9f2616db8b6145150.png";

function Text() {
  return (
    <div className="content-stretch flex gap-[1.749px] items-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.487px] not-italic relative shrink-0 text-[#101828] text-[12.24px] whitespace-nowrap">Token</p>
    </div>
  );
}

function TetherUsdtLogo() {
  return (
    <div className="absolute inset-[22.5%_17.5%_24.32%_17.5%]" data-name="tether-usdt-logo 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0501 13.9506">
        <g id="tether-usdt-logo 1">
          <path clipRule="evenodd" d={svgPaths.p9e9ef00} fill="var(--fill-0, #50AF95)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p47ab800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#f9fafb] h-[45.467px] relative rounded-[10.492px] shrink-0 w-full" data-name="Input field">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[10.492px] shadow-[0px_0.874px_0.437px_0px_rgba(29,41,61,0.02)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6.995px] items-center px-[13.99px] py-[12.241px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[26.231px]" data-name="Crypto">
            <TetherUsdtLogo />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101828] text-[13.99px]">
            <p className="leading-[20.985px]">USDT</p>
          </div>
          <div className="relative shrink-0 size-[13.99px]" data-name="close">
            <div className="absolute inset-[20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16068 8.16068">
                <path clipRule="evenodd" d={svgPaths.pbf4f480} fill="var(--fill-0, #101828)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputForm1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8.744px] items-start min-h-px min-w-px relative" data-name="Input form">
      <div className="content-stretch flex gap-[3.497px] items-center relative shrink-0" data-name="Label">
        <Text />
        <div className="relative shrink-0 size-[12.241px]" data-name="question-circle">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2009 10.2009">
              <path clipRule="evenodd" d={svgPaths.p1149d200} fill="var(--fill-0, #6A7282)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <InputField />
    </div>
  );
}

function ProtocolIcon() {
  return (
    <div className="absolute inset-[20%]" data-name="Protocol Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7385 15.7385">
        <g id="Protocol Icon">
          <circle cx="7.86923" cy="7.86923" fill="var(--fill-0, #F60102)" id="Base" r="7.86923" />
          <path d={svgPaths.p34ef6150} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[#f9fafb] h-[45.467px] relative rounded-[10.492px] shrink-0 w-full" data-name="Input field">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[10.492px] shadow-[0px_0.874px_0.437px_0px_rgba(29,41,61,0.02)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6.995px] items-center px-[13.99px] py-[12.241px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[26.231px]" data-name="Crypto">
            <ProtocolIcon />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101828] text-[13.99px]">
            <p className="leading-[20.985px]">TRC-20</p>
          </div>
          <div className="relative shrink-0 size-[13.99px]" data-name="close">
            <div className="absolute inset-[20.83%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16068 8.16068">
                <path clipRule="evenodd" d={svgPaths.pbf4f480} fill="var(--fill-0, #101828)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputForm2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8.744px] items-start min-h-px min-w-px relative" data-name="Input form">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.487px] not-italic relative shrink-0 text-[#101828] text-[12.24px] whitespace-nowrap">Chain</p>
      </div>
      <InputField1 />
    </div>
  );
}

function InputForm() {
  return (
    <div className="content-stretch flex gap-[13.99px] items-start relative shrink-0 w-full" data-name="Input form">
      <InputForm1 />
      <InputForm2 />
    </div>
  );
}

function ClipPathBackgroundColor() {
  return (
    <div className="absolute inset-[4.7%_4.71%_4.71%_4.71%]" data-name="clip-path-background-color-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.889 110.889">
        <g id="clip-path-background-color-2">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathDotColor() {
  return (
    <div className="absolute inset-[4.7%_4.99%_4.99%_4.71%]" data-name="clip-path-dot-color-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.544 110.546">
        <g id="clip-path-dot-color-2">
          <path d={svgPaths.p31207d00} fill="var(--fill-0, #FEFEFE)" id="Vector" />
          <path d={svgPaths.pa715580} fill="var(--fill-0, #FEFEFE)" id="Vector_2" />
          <path d={svgPaths.p3f0cfc40} fill="var(--fill-0, #FEFEFE)" id="Vector_3" />
          <path d={svgPaths.p38f4e080} fill="var(--fill-0, #FEFEFE)" id="Vector_4" />
          <path d={svgPaths.pb7f5ac0} fill="var(--fill-0, #FEFEFE)" id="Vector_5" />
          <path d={svgPaths.p178a7940} fill="var(--fill-0, #FEFEFE)" id="Vector_6" />
          <path d={svgPaths.p2e937980} fill="var(--fill-0, #FEFEFE)" id="Vector_7" />
          <path d={svgPaths.p2794c900} fill="var(--fill-0, #FEFEFE)" id="Vector_8" />
          <path d={svgPaths.p35580300} fill="var(--fill-0, #FEFEFE)" id="Vector_9" />
          <path d={svgPaths.p34842e00} fill="var(--fill-0, #FEFEFE)" id="Vector_10" />
          <path d={svgPaths.p1f97e280} fill="var(--fill-0, #FEFEFE)" id="Vector_11" />
          <path d={svgPaths.p29de6940} fill="var(--fill-0, #FEFEFE)" id="Vector_12" />
          <path d={svgPaths.p36219080} fill="var(--fill-0, #FEFEFE)" id="Vector_13" />
          <path d={svgPaths.p26e48e00} fill="var(--fill-0, #FEFEFE)" id="Vector_14" />
          <path d={svgPaths.p7a0480} fill="var(--fill-0, #FEFEFE)" id="Vector_15" />
          <path d={svgPaths.p1565a300} fill="var(--fill-0, #FEFEFE)" id="Vector_16" />
          <path d={svgPaths.p1bd24300} fill="var(--fill-0, #FEFEFE)" id="Vector_17" />
          <path d={svgPaths.p8c8be70} fill="var(--fill-0, #FEFEFE)" id="Vector_18" />
          <path d={svgPaths.p1c863a00} fill="var(--fill-0, #FEFEFE)" id="Vector_19" />
          <path d={svgPaths.p31056500} fill="var(--fill-0, #FEFEFE)" id="Vector_20" />
          <path d={svgPaths.p120d0a80} fill="var(--fill-0, #FEFEFE)" id="Vector_21" />
          <path d={svgPaths.pc62c380} fill="var(--fill-0, #FEFEFE)" id="Vector_22" />
          <path d={svgPaths.p1e319600} fill="var(--fill-0, #FEFEFE)" id="Vector_23" />
          <path d={svgPaths.p2c48f7f0} fill="var(--fill-0, #FEFEFE)" id="Vector_24" />
          <path d={svgPaths.p2be89180} fill="var(--fill-0, #FEFEFE)" id="Vector_25" />
          <path d={svgPaths.p16cdf80} fill="var(--fill-0, #FEFEFE)" id="Vector_26" />
          <path d={svgPaths.p22d68500} fill="var(--fill-0, #FEFEFE)" id="Vector_27" />
          <path d={svgPaths.p2a7aa00} fill="var(--fill-0, #FEFEFE)" id="Vector_28" />
          <path d={svgPaths.p1511a980} fill="var(--fill-0, #FEFEFE)" id="Vector_29" />
          <path d={svgPaths.p253816f0} fill="var(--fill-0, #FEFEFE)" id="Vector_30" />
          <path d={svgPaths.p3d1c6630} fill="var(--fill-0, #FEFEFE)" id="Vector_31" />
          <path d={svgPaths.p27d62e00} fill="var(--fill-0, #FEFEFE)" id="Vector_32" />
          <path d={svgPaths.pd8aacc0} fill="var(--fill-0, #FEFEFE)" id="Vector_33" />
          <path d={svgPaths.p3a741f80} fill="var(--fill-0, #FEFEFE)" id="Vector_34" />
          <path d={svgPaths.p25d1c00} fill="var(--fill-0, #FEFEFE)" id="Vector_35" />
          <path d={svgPaths.p12a64000} fill="var(--fill-0, #FEFEFE)" id="Vector_36" />
          <path d={svgPaths.p2f0ac800} fill="var(--fill-0, #FEFEFE)" id="Vector_37" />
          <path d={svgPaths.p22b73180} fill="var(--fill-0, #FEFEFE)" id="Vector_38" />
          <path d={svgPaths.p2ccaf280} fill="var(--fill-0, #FEFEFE)" id="Vector_39" />
          <path d={svgPaths.p34644800} fill="var(--fill-0, #FEFEFE)" id="Vector_40" />
          <path d={svgPaths.p31e58080} fill="var(--fill-0, #FEFEFE)" id="Vector_41" />
          <path d={svgPaths.p1a5e49f0} fill="var(--fill-0, #FEFEFE)" id="Vector_42" />
          <path d={svgPaths.pee7e800} fill="var(--fill-0, #FEFEFE)" id="Vector_43" />
          <path d={svgPaths.p1d928000} fill="var(--fill-0, #FEFEFE)" id="Vector_44" />
          <path d={svgPaths.pc7e6c00} fill="var(--fill-0, #FEFEFE)" id="Vector_45" />
          <path d={svgPaths.p37d471f0} fill="var(--fill-0, #FEFEFE)" id="Vector_46" />
          <path d={svgPaths.p1f4b6f00} fill="var(--fill-0, #FEFEFE)" id="Vector_47" />
          <path d={svgPaths.p23b33200} fill="var(--fill-0, #FEFEFE)" id="Vector_48" />
          <path d={svgPaths.p1aecc900} fill="var(--fill-0, #FEFEFE)" id="Vector_49" />
          <path d={svgPaths.p3232b800} fill="var(--fill-0, #FEFEFE)" id="Vector_50" />
          <path d={svgPaths.p22687000} fill="var(--fill-0, #FEFEFE)" id="Vector_51" />
          <path d={svgPaths.p35c10200} fill="var(--fill-0, #FEFEFE)" id="Vector_52" />
          <path d={svgPaths.p35e63d00} fill="var(--fill-0, #FEFEFE)" id="Vector_53" />
          <path d={svgPaths.p1cfd1380} fill="var(--fill-0, #FEFEFE)" id="Vector_54" />
          <path d={svgPaths.p1fe4e80} fill="var(--fill-0, #FEFEFE)" id="Vector_55" />
          <path d={svgPaths.p25b1d80} fill="var(--fill-0, #FEFEFE)" id="Vector_56" />
          <path d={svgPaths.p3e0cb0f0} fill="var(--fill-0, #FEFEFE)" id="Vector_57" />
          <path d={svgPaths.p57b5300} fill="var(--fill-0, #FEFEFE)" id="Vector_58" />
          <path d={svgPaths.p1df0eba0} fill="var(--fill-0, #FEFEFE)" id="Vector_59" />
          <path d={svgPaths.p16710620} fill="var(--fill-0, #FEFEFE)" id="Vector_60" />
          <path d={svgPaths.p20f8ad00} fill="var(--fill-0, #FEFEFE)" id="Vector_61" />
          <path d={svgPaths.p2cbdaf00} fill="var(--fill-0, #FEFEFE)" id="Vector_62" />
          <path d={svgPaths.p17182d00} fill="var(--fill-0, #FEFEFE)" id="Vector_63" />
          <path d={svgPaths.p21326000} fill="var(--fill-0, #FEFEFE)" id="Vector_64" />
          <path d={svgPaths.p32392170} fill="var(--fill-0, #FEFEFE)" id="Vector_65" />
          <path d={svgPaths.p3350c980} fill="var(--fill-0, #FEFEFE)" id="Vector_66" />
          <path d={svgPaths.p36af4c00} fill="var(--fill-0, #FEFEFE)" id="Vector_67" />
          <path d={svgPaths.p29751c80} fill="var(--fill-0, #FEFEFE)" id="Vector_68" />
          <path d={svgPaths.p3a2c6370} fill="var(--fill-0, #FEFEFE)" id="Vector_69" />
          <path d={svgPaths.p23bd500} fill="var(--fill-0, #FEFEFE)" id="Vector_70" />
          <path d={svgPaths.p2c5dcf00} fill="var(--fill-0, #FEFEFE)" id="Vector_71" />
          <path d={svgPaths.p1e767100} fill="var(--fill-0, #FEFEFE)" id="Vector_72" />
          <path d={svgPaths.p250e0500} fill="var(--fill-0, #FEFEFE)" id="Vector_73" />
          <path d={svgPaths.p2267b180} fill="var(--fill-0, #FEFEFE)" id="Vector_74" />
          <path d={svgPaths.pe1fb800} fill="var(--fill-0, #FEFEFE)" id="Vector_75" />
          <path d={svgPaths.p38c48280} fill="var(--fill-0, #FEFEFE)" id="Vector_76" />
          <path d={svgPaths.p2ce3aa00} fill="var(--fill-0, #FEFEFE)" id="Vector_77" />
          <path d={svgPaths.p227b6b00} fill="var(--fill-0, #FEFEFE)" id="Vector_78" />
          <path d={svgPaths.p2789bbc0} fill="var(--fill-0, #FEFEFE)" id="Vector_79" />
          <path d={svgPaths.p14c0e340} fill="var(--fill-0, #FEFEFE)" id="Vector_80" />
          <path d={svgPaths.pda0e300} fill="var(--fill-0, #FEFEFE)" id="Vector_81" />
          <path d={svgPaths.p223b7980} fill="var(--fill-0, #FEFEFE)" id="Vector_82" />
          <path d={svgPaths.p2f68a4c0} fill="var(--fill-0, #FEFEFE)" id="Vector_83" />
          <path d={svgPaths.p2fe6bb71} fill="var(--fill-0, #FEFEFE)" id="Vector_84" />
          <path d={svgPaths.p7658e00} fill="var(--fill-0, #FEFEFE)" id="Vector_85" />
          <path d={svgPaths.p26884f80} fill="var(--fill-0, #FEFEFE)" id="Vector_86" />
          <path d={svgPaths.p2866c080} fill="var(--fill-0, #FEFEFE)" id="Vector_87" />
          <path d={svgPaths.p18fa0600} fill="var(--fill-0, #FEFEFE)" id="Vector_88" />
          <path d={svgPaths.p1ec69b80} fill="var(--fill-0, #FEFEFE)" id="Vector_89" />
          <path d={svgPaths.p210aee80} fill="var(--fill-0, #FEFEFE)" id="Vector_90" />
          <path d={svgPaths.p81da100} fill="var(--fill-0, #FEFEFE)" id="Vector_91" />
          <path d={svgPaths.p3463e670} fill="var(--fill-0, #FEFEFE)" id="Vector_92" />
          <path d={svgPaths.p25644400} fill="var(--fill-0, #FEFEFE)" id="Vector_93" />
          <path d={svgPaths.p912ce00} fill="var(--fill-0, #FEFEFE)" id="Vector_94" />
          <path d={svgPaths.p28b71c00} fill="var(--fill-0, #FEFEFE)" id="Vector_95" />
          <path d={svgPaths.pc7db000} fill="var(--fill-0, #FEFEFE)" id="Vector_96" />
          <path d={svgPaths.p1f5e3c70} fill="var(--fill-0, #FEFEFE)" id="Vector_97" />
          <path d={svgPaths.p394c3cc0} fill="var(--fill-0, #FEFEFE)" id="Vector_98" />
          <path d={svgPaths.p38966400} fill="var(--fill-0, #FEFEFE)" id="Vector_99" />
          <path d={svgPaths.p1111fa30} fill="var(--fill-0, #FEFEFE)" id="Vector_100" />
          <path d={svgPaths.p1752ee80} fill="var(--fill-0, #FEFEFE)" id="Vector_101" />
          <path d={svgPaths.p7931c00} fill="var(--fill-0, #FEFEFE)" id="Vector_102" />
          <path d={svgPaths.p234c3080} fill="var(--fill-0, #FEFEFE)" id="Vector_103" />
          <path d={svgPaths.p20122af0} fill="var(--fill-0, #FEFEFE)" id="Vector_104" />
          <path d={svgPaths.p1f5e11b0} fill="var(--fill-0, #FEFEFE)" id="Vector_105" />
          <path d={svgPaths.p6e39780} fill="var(--fill-0, #FEFEFE)" id="Vector_106" />
          <path d={svgPaths.pb919800} fill="var(--fill-0, #FEFEFE)" id="Vector_107" />
          <path d={svgPaths.p2a46d00} fill="var(--fill-0, #FEFEFE)" id="Vector_108" />
          <path d={svgPaths.p237e9c00} fill="var(--fill-0, #FEFEFE)" id="Vector_109" />
          <path d={svgPaths.p10102b00} fill="var(--fill-0, #FEFEFE)" id="Vector_110" />
          <path d={svgPaths.p3f881300} fill="var(--fill-0, #FEFEFE)" id="Vector_111" />
          <path d={svgPaths.p14c4600} fill="var(--fill-0, #FEFEFE)" id="Vector_112" />
          <path d={svgPaths.p37bab200} fill="var(--fill-0, #FEFEFE)" id="Vector_113" />
          <path d={svgPaths.pe056000} fill="var(--fill-0, #FEFEFE)" id="Vector_114" />
          <path d={svgPaths.p26a8bd80} fill="var(--fill-0, #FEFEFE)" id="Vector_115" />
          <path d={svgPaths.p7dbc680} fill="var(--fill-0, #FEFEFE)" id="Vector_116" />
          <path d={svgPaths.p118d36c0} fill="var(--fill-0, #FEFEFE)" id="Vector_117" />
          <path d={svgPaths.p2081ad80} fill="var(--fill-0, #FEFEFE)" id="Vector_118" />
          <path d={svgPaths.p32cd6e80} fill="var(--fill-0, #FEFEFE)" id="Vector_119" />
          <path d={svgPaths.p18901800} fill="var(--fill-0, #FEFEFE)" id="Vector_120" />
          <path d={svgPaths.p3f301080} fill="var(--fill-0, #FEFEFE)" id="Vector_121" />
          <path d={svgPaths.p1ab5b100} fill="var(--fill-0, #FEFEFE)" id="Vector_122" />
          <path d={svgPaths.pc1b3280} fill="var(--fill-0, #FEFEFE)" id="Vector_123" />
          <path d={svgPaths.pf1e11f0} fill="var(--fill-0, #FEFEFE)" id="Vector_124" />
          <path d={svgPaths.p16e48f00} fill="var(--fill-0, #FEFEFE)" id="Vector_125" />
          <path d={svgPaths.paee9500} fill="var(--fill-0, #FEFEFE)" id="Vector_126" />
          <path d={svgPaths.p26923800} fill="var(--fill-0, #FEFEFE)" id="Vector_127" />
          <path d={svgPaths.p33916980} fill="var(--fill-0, #FEFEFE)" id="Vector_128" />
          <path d={svgPaths.p299baf00} fill="var(--fill-0, #FEFEFE)" id="Vector_129" />
          <path d={svgPaths.p21ddd800} fill="var(--fill-0, #FEFEFE)" id="Vector_130" />
          <path d={svgPaths.p376f2b70} fill="var(--fill-0, #FEFEFE)" id="Vector_131" />
          <path d={svgPaths.p911eb00} fill="var(--fill-0, #FEFEFE)" id="Vector_132" />
          <path d={svgPaths.p2cbc89b0} fill="var(--fill-0, #FEFEFE)" id="Vector_133" />
          <path d={svgPaths.p25e5100} fill="var(--fill-0, #FEFEFE)" id="Vector_134" />
          <path d={svgPaths.p22e1a080} fill="var(--fill-0, #FEFEFE)" id="Vector_135" />
          <path d={svgPaths.p298cdd00} fill="var(--fill-0, #FEFEFE)" id="Vector_136" />
          <path d={svgPaths.p1b229880} fill="var(--fill-0, #FEFEFE)" id="Vector_137" />
          <path d={svgPaths.p3088ec00} fill="var(--fill-0, #FEFEFE)" id="Vector_138" />
          <path d={svgPaths.pc37e080} fill="var(--fill-0, #FEFEFE)" id="Vector_139" />
          <path d={svgPaths.p3715200} fill="var(--fill-0, #FEFEFE)" id="Vector_140" />
          <path d={svgPaths.p25b94800} fill="var(--fill-0, #FEFEFE)" id="Vector_141" />
          <path d={svgPaths.p176acc80} fill="var(--fill-0, #FEFEFE)" id="Vector_142" />
          <path d={svgPaths.p2309ee00} fill="var(--fill-0, #FEFEFE)" id="Vector_143" />
          <path d={svgPaths.p6786600} fill="var(--fill-0, #FEFEFE)" id="Vector_144" />
          <path d={svgPaths.p37b21a00} fill="var(--fill-0, #FEFEFE)" id="Vector_145" />
          <path d={svgPaths.p26ef9a00} fill="var(--fill-0, #FEFEFE)" id="Vector_146" />
          <path d={svgPaths.p38d11d00} fill="var(--fill-0, #FEFEFE)" id="Vector_147" />
          <path d={svgPaths.p3d7e5500} fill="var(--fill-0, #FEFEFE)" id="Vector_148" />
          <path d={svgPaths.p1f51dc80} fill="var(--fill-0, #FEFEFE)" id="Vector_149" />
          <path d={svgPaths.p365d8d00} fill="var(--fill-0, #FEFEFE)" id="Vector_150" />
          <path d={svgPaths.p1d4d7700} fill="var(--fill-0, #FEFEFE)" id="Vector_151" />
          <path d={svgPaths.pb18f300} fill="var(--fill-0, #FEFEFE)" id="Vector_152" />
          <path d={svgPaths.p1fdd1700} fill="var(--fill-0, #FEFEFE)" id="Vector_153" />
          <path d={svgPaths.p1d333700} fill="var(--fill-0, #FEFEFE)" id="Vector_154" />
          <path d={svgPaths.p738aa00} fill="var(--fill-0, #FEFEFE)" id="Vector_155" />
          <path d={svgPaths.p2d46a900} fill="var(--fill-0, #FEFEFE)" id="Vector_156" />
          <path d={svgPaths.p1780fc00} fill="var(--fill-0, #FEFEFE)" id="Vector_157" />
          <path d={svgPaths.p32d93800} fill="var(--fill-0, #FEFEFE)" id="Vector_158" />
          <path d={svgPaths.p4fe66b0} fill="var(--fill-0, #FEFEFE)" id="Vector_159" />
          <path d={svgPaths.p2db79f00} fill="var(--fill-0, #FEFEFE)" id="Vector_160" />
          <path d={svgPaths.p72b2800} fill="var(--fill-0, #FEFEFE)" id="Vector_161" />
          <path d={svgPaths.p209a6000} fill="var(--fill-0, #FEFEFE)" id="Vector_162" />
          <path d={svgPaths.p34967c00} fill="var(--fill-0, #FEFEFE)" id="Vector_163" />
          <path d={svgPaths.p1f70a680} fill="var(--fill-0, #FEFEFE)" id="Vector_164" />
          <path d={svgPaths.p32365e00} fill="var(--fill-0, #FEFEFE)" id="Vector_165" />
          <path d={svgPaths.p2792fd00} fill="var(--fill-0, #FEFEFE)" id="Vector_166" />
          <path d={svgPaths.p365af80} fill="var(--fill-0, #FEFEFE)" id="Vector_167" />
          <path d={svgPaths.p2428cb80} fill="var(--fill-0, #FEFEFE)" id="Vector_168" />
          <path d={svgPaths.pe455600} fill="var(--fill-0, #FEFEFE)" id="Vector_169" />
          <path d={svgPaths.p11bf500} fill="var(--fill-0, #FEFEFE)" id="Vector_170" />
          <path d={svgPaths.p1fe6c400} fill="var(--fill-0, #FEFEFE)" id="Vector_171" />
          <path d={svgPaths.p1ab30000} fill="var(--fill-0, #FEFEFE)" id="Vector_172" />
          <path d={svgPaths.p378ab300} fill="var(--fill-0, #FEFEFE)" id="Vector_173" />
          <path d={svgPaths.p5e867c0} fill="var(--fill-0, #FEFEFE)" id="Vector_174" />
          <path d={svgPaths.p1a70bb00} fill="var(--fill-0, #FEFEFE)" id="Vector_175" />
          <path d={svgPaths.p3e39c700} fill="var(--fill-0, #FEFEFE)" id="Vector_176" />
          <path d={svgPaths.p1e4f700} fill="var(--fill-0, #FEFEFE)" id="Vector_177" />
          <path d={svgPaths.p1ae85c80} fill="var(--fill-0, #FEFEFE)" id="Vector_178" />
          <path d={svgPaths.p25814c80} fill="var(--fill-0, #FEFEFE)" id="Vector_179" />
          <path d={svgPaths.p1ddb140} fill="var(--fill-0, #FEFEFE)" id="Vector_180" />
          <path d={svgPaths.pb0a1500} fill="var(--fill-0, #FEFEFE)" id="Vector_181" />
          <path d={svgPaths.p3a45a080} fill="var(--fill-0, #FEFEFE)" id="Vector_182" />
          <path d={svgPaths.p36770d80} fill="var(--fill-0, #FEFEFE)" id="Vector_183" />
          <path d={svgPaths.pe270c40} fill="var(--fill-0, #FEFEFE)" id="Vector_184" />
          <path d={svgPaths.p2f11e100} fill="var(--fill-0, #FEFEFE)" id="Vector_185" />
          <path d={svgPaths.p3042580} fill="var(--fill-0, #FEFEFE)" id="Vector_186" />
          <path d={svgPaths.p2fca35f0} fill="var(--fill-0, #FEFEFE)" id="Vector_187" />
          <path d={svgPaths.p37b030f2} fill="var(--fill-0, #FEFEFE)" id="Vector_188" />
          <path d={svgPaths.p2b2a2300} fill="var(--fill-0, #FEFEFE)" id="Vector_189" />
          <path d={svgPaths.p11719100} fill="var(--fill-0, #FEFEFE)" id="Vector_190" />
          <path d={svgPaths.p12a73300} fill="var(--fill-0, #FEFEFE)" id="Vector_191" />
          <path d={svgPaths.p3cdf9900} fill="var(--fill-0, #FEFEFE)" id="Vector_192" />
          <path d={svgPaths.p182b1600} fill="var(--fill-0, #FEFEFE)" id="Vector_193" />
          <path d={svgPaths.p18f5bc00} fill="var(--fill-0, #FEFEFE)" id="Vector_194" />
          <path d={svgPaths.p30262700} fill="var(--fill-0, #FEFEFE)" id="Vector_195" />
          <path d={svgPaths.p30f2ec80} fill="var(--fill-0, #FEFEFE)" id="Vector_196" />
          <path d={svgPaths.pcb5ef00} fill="var(--fill-0, #FEFEFE)" id="Vector_197" />
          <path d={svgPaths.p8ac200} fill="var(--fill-0, #FEFEFE)" id="Vector_198" />
          <path d={svgPaths.p36c22680} fill="var(--fill-0, #FEFEFE)" id="Vector_199" />
          <path d={svgPaths.p2371b800} fill="var(--fill-0, #FEFEFE)" id="Vector_200" />
          <path d={svgPaths.p5c7fc80} fill="var(--fill-0, #FEFEFE)" id="Vector_201" />
          <path d={svgPaths.p329cf300} fill="var(--fill-0, #FEFEFE)" id="Vector_202" />
          <path d={svgPaths.p22d2b300} fill="var(--fill-0, #FEFEFE)" id="Vector_203" />
          <path d={svgPaths.pb9c4b00} fill="var(--fill-0, #FEFEFE)" id="Vector_204" />
          <path d={svgPaths.p33782e80} fill="var(--fill-0, #FEFEFE)" id="Vector_205" />
          <path d={svgPaths.p1c10c380} fill="var(--fill-0, #FEFEFE)" id="Vector_206" />
          <path d={svgPaths.p17f9c000} fill="var(--fill-0, #FEFEFE)" id="Vector_207" />
          <path d={svgPaths.p10fc7800} fill="var(--fill-0, #FEFEFE)" id="Vector_208" />
          <path d={svgPaths.p25eed00} fill="var(--fill-0, #FEFEFE)" id="Vector_209" />
          <path d={svgPaths.p2e8300} fill="var(--fill-0, #FEFEFE)" id="Vector_210" />
          <path d={svgPaths.p3543ef00} fill="var(--fill-0, #FEFEFE)" id="Vector_211" />
          <path d={svgPaths.p21e87700} fill="var(--fill-0, #FEFEFE)" id="Vector_212" />
          <path d={svgPaths.p2ef97500} fill="var(--fill-0, #FEFEFE)" id="Vector_213" />
          <path d={svgPaths.p34d2680} fill="var(--fill-0, #FEFEFE)" id="Vector_214" />
          <path d={svgPaths.p16281b00} fill="var(--fill-0, #FEFEFE)" id="Vector_215" />
          <path d={svgPaths.p1a489b00} fill="var(--fill-0, #FEFEFE)" id="Vector_216" />
          <path d={svgPaths.p1c76ce00} fill="var(--fill-0, #FEFEFE)" id="Vector_217" />
          <path d={svgPaths.p170e6780} fill="var(--fill-0, #FEFEFE)" id="Vector_218" />
          <path d={svgPaths.p263fb200} fill="var(--fill-0, #FEFEFE)" id="Vector_219" />
          <path d={svgPaths.p2b111a00} fill="var(--fill-0, #FEFEFE)" id="Vector_220" />
          <path d={svgPaths.p7850840} fill="var(--fill-0, #FEFEFE)" id="Vector_221" />
          <path d={svgPaths.pcca7280} fill="var(--fill-0, #FEFEFE)" id="Vector_222" />
          <path d={svgPaths.p30159000} fill="var(--fill-0, #FEFEFE)" id="Vector_223" />
          <path d={svgPaths.p457a200} fill="var(--fill-0, #FEFEFE)" id="Vector_224" />
          <path d={svgPaths.p277a4880} fill="var(--fill-0, #FEFEFE)" id="Vector_225" />
          <path d={svgPaths.p15700a00} fill="var(--fill-0, #FEFEFE)" id="Vector_226" />
          <path d={svgPaths.p1d534b70} fill="var(--fill-0, #FEFEFE)" id="Vector_227" />
          <path d={svgPaths.p10cae100} fill="var(--fill-0, #FEFEFE)" id="Vector_228" />
          <path d={svgPaths.p14c28e00} fill="var(--fill-0, #FEFEFE)" id="Vector_229" />
          <path d={svgPaths.p36facc00} fill="var(--fill-0, #FEFEFE)" id="Vector_230" />
          <path d={svgPaths.p3ec36700} fill="var(--fill-0, #FEFEFE)" id="Vector_231" />
          <path d={svgPaths.p1562e400} fill="var(--fill-0, #FEFEFE)" id="Vector_232" />
          <path d={svgPaths.p210efb80} fill="var(--fill-0, #FEFEFE)" id="Vector_233" />
          <path d={svgPaths.p39478580} fill="var(--fill-0, #FEFEFE)" id="Vector_234" />
          <path d={svgPaths.p39430e00} fill="var(--fill-0, #FEFEFE)" id="Vector_235" />
          <path d={svgPaths.p2a5ae700} fill="var(--fill-0, #FEFEFE)" id="Vector_236" />
          <path d={svgPaths.p2d278880} fill="var(--fill-0, #FEFEFE)" id="Vector_237" />
          <path d={svgPaths.pd101d80} fill="var(--fill-0, #FEFEFE)" id="Vector_238" />
          <path d={svgPaths.p22729d00} fill="var(--fill-0, #FEFEFE)" id="Vector_239" />
          <path d={svgPaths.p355d5270} fill="var(--fill-0, #FEFEFE)" id="Vector_240" />
          <path d={svgPaths.p2567ef32} fill="var(--fill-0, #FEFEFE)" id="Vector_241" />
          <path d={svgPaths.pab2f9c0} fill="var(--fill-0, #FEFEFE)" id="Vector_242" />
          <path d={svgPaths.p28441680} fill="var(--fill-0, #FEFEFE)" id="Vector_243" />
          <path d={svgPaths.p6802b30} fill="var(--fill-0, #FEFEFE)" id="Vector_244" />
          <path d={svgPaths.p3671980} fill="var(--fill-0, #FEFEFE)" id="Vector_245" />
          <path d={svgPaths.pf75a900} fill="var(--fill-0, #FEFEFE)" id="Vector_246" />
          <path d={svgPaths.p1cf90080} fill="var(--fill-0, #FEFEFE)" id="Vector_247" />
          <path d={svgPaths.p19daf100} fill="var(--fill-0, #FEFEFE)" id="Vector_248" />
          <path d={svgPaths.p2c94b980} fill="var(--fill-0, #FEFEFE)" id="Vector_249" />
          <path d={svgPaths.p2e8cc600} fill="var(--fill-0, #FEFEFE)" id="Vector_250" />
          <path d={svgPaths.p3f085a80} fill="var(--fill-0, #FEFEFE)" id="Vector_251" />
          <path d={svgPaths.p2beea7c0} fill="var(--fill-0, #FEFEFE)" id="Vector_252" />
          <path d={svgPaths.p271d7680} fill="var(--fill-0, #FEFEFE)" id="Vector_253" />
          <path d={svgPaths.pd6d3980} fill="var(--fill-0, #FEFEFE)" id="Vector_254" />
          <path d={svgPaths.p3c2dfe00} fill="var(--fill-0, #FEFEFE)" id="Vector_255" />
          <path d={svgPaths.pe90dd80} fill="var(--fill-0, #FEFEFE)" id="Vector_256" />
          <path d={svgPaths.p1671ae00} fill="var(--fill-0, #FEFEFE)" id="Vector_257" />
          <path d={svgPaths.p3692a070} fill="var(--fill-0, #FEFEFE)" id="Vector_258" />
          <path d={svgPaths.p3fee5100} fill="var(--fill-0, #FEFEFE)" id="Vector_259" />
          <path d={svgPaths.p336f5100} fill="var(--fill-0, #FEFEFE)" id="Vector_260" />
          <path d={svgPaths.p90bec00} fill="var(--fill-0, #FEFEFE)" id="Vector_261" />
          <path d={svgPaths.p25394e80} fill="var(--fill-0, #FEFEFE)" id="Vector_262" />
          <path d={svgPaths.p25b45a00} fill="var(--fill-0, #FEFEFE)" id="Vector_263" />
          <path d={svgPaths.p282dcc60} fill="var(--fill-0, #FEFEFE)" id="Vector_264" />
          <path d={svgPaths.p3dc43c00} fill="var(--fill-0, #FEFEFE)" id="Vector_265" />
          <path d={svgPaths.pa767700} fill="var(--fill-0, #FEFEFE)" id="Vector_266" />
          <path d={svgPaths.p52b7c80} fill="var(--fill-0, #FEFEFE)" id="Vector_267" />
          <path d={svgPaths.p33d0b880} fill="var(--fill-0, #FEFEFE)" id="Vector_268" />
          <path d={svgPaths.p1df11f80} fill="var(--fill-0, #FEFEFE)" id="Vector_269" />
          <path d={svgPaths.p9c6fbb0} fill="var(--fill-0, #FEFEFE)" id="Vector_270" />
          <path d={svgPaths.p282ad100} fill="var(--fill-0, #FEFEFE)" id="Vector_271" />
          <path d={svgPaths.p6bccf30} fill="var(--fill-0, #FEFEFE)" id="Vector_272" />
          <path d={svgPaths.p119d4500} fill="var(--fill-0, #FEFEFE)" id="Vector_273" />
          <path d={svgPaths.p3ec3ec80} fill="var(--fill-0, #FEFEFE)" id="Vector_274" />
          <path d={svgPaths.p3b57d500} fill="var(--fill-0, #FEFEFE)" id="Vector_275" />
          <path d={svgPaths.p3a45d800} fill="var(--fill-0, #FEFEFE)" id="Vector_276" />
          <path d={svgPaths.pf12afa0} fill="var(--fill-0, #FEFEFE)" id="Vector_277" />
          <path d={svgPaths.p24273200} fill="var(--fill-0, #FEFEFE)" id="Vector_278" />
          <path d={svgPaths.p38a2c100} fill="var(--fill-0, #FEFEFE)" id="Vector_279" />
          <path d={svgPaths.p1b9b4b80} fill="var(--fill-0, #FEFEFE)" id="Vector_280" />
          <path d={svgPaths.p6cd9b00} fill="var(--fill-0, #FEFEFE)" id="Vector_281" />
          <path d={svgPaths.p24270d00} fill="var(--fill-0, #FEFEFE)" id="Vector_282" />
          <path d={svgPaths.p18909e80} fill="var(--fill-0, #FEFEFE)" id="Vector_283" />
          <path d={svgPaths.p3153ff00} fill="var(--fill-0, #FEFEFE)" id="Vector_284" />
          <path d={svgPaths.p20540300} fill="var(--fill-0, #FEFEFE)" id="Vector_285" />
          <path d={svgPaths.p1b30bd00} fill="var(--fill-0, #FEFEFE)" id="Vector_286" />
          <path d={svgPaths.pa25dc80} fill="var(--fill-0, #FEFEFE)" id="Vector_287" />
          <path d={svgPaths.pba99900} fill="var(--fill-0, #FEFEFE)" id="Vector_288" />
          <path d={svgPaths.p3786b200} fill="var(--fill-0, #FEFEFE)" id="Vector_289" />
          <path d={svgPaths.p803a800} fill="var(--fill-0, #FEFEFE)" id="Vector_290" />
          <path d={svgPaths.p6c86580} fill="var(--fill-0, #FEFEFE)" id="Vector_291" />
          <path d={svgPaths.p1bb715c0} fill="var(--fill-0, #FEFEFE)" id="Vector_292" />
          <path d={svgPaths.p3c740a80} fill="var(--fill-0, #FEFEFE)" id="Vector_293" />
          <path d={svgPaths.pfa0f480} fill="var(--fill-0, #FEFEFE)" id="Vector_294" />
          <path d={svgPaths.p12326100} fill="var(--fill-0, #FEFEFE)" id="Vector_295" />
          <path d={svgPaths.p37253e30} fill="var(--fill-0, #FEFEFE)" id="Vector_296" />
          <path d={svgPaths.p2eec08f0} fill="var(--fill-0, #FEFEFE)" id="Vector_297" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathCornersSquareColor() {
  return (
    <div className="absolute inset-[4.7%_73.5%_73.5%_4.71%]" data-name="clip-path-corners-square-color-0-0-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6828 26.6828">
        <g id="clip-path-corners-square-color-0-0-2">
          <path d={svgPaths.p3d5c1430} fill="var(--fill-0, #FEFEFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathCornersDotColor() {
  return (
    <div className="absolute inset-[10.93%_79.73%_79.73%_10.93%]" data-name="clip-path-corners-dot-color-0-0-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4355 11.4355">
        <g id="clip-path-corners-dot-color-0-0-2">
          <path d={svgPaths.p29b84c0} fill="var(--fill-0, #FEFEFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathCornersSquareColor2() {
  return (
    <div className="absolute inset-[4.7%_4.99%_73.5%_73.21%]" data-name="clip-path-corners-square-color-1-0-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6828 26.6828">
        <g id="clip-path-corners-square-color-1-0-2">
          <path d={svgPaths.p2eea2200} fill="var(--fill-0, #FEFEFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathCornersDotColor2() {
  return (
    <div className="absolute inset-[10.93%_11.22%_79.73%_79.44%]" data-name="clip-path-corners-dot-color-1-0-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4355 11.4355">
        <g id="clip-path-corners-dot-color-1-0-2">
          <path d={svgPaths.p478f900} fill="var(--fill-0, #FEFEFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathCornersSquareColor1() {
  return (
    <div className="absolute inset-[73.21%_73.5%_4.99%_4.71%]" data-name="clip-path-corners-square-color-0-1-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6828 26.6828">
        <g id="clip-path-corners-square-color-0-1-2">
          <path d={svgPaths.p248bac80} fill="var(--fill-0, #FEFEFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathCornersDotColor1() {
  return (
    <div className="absolute inset-[79.44%_79.73%_11.22%_10.93%]" data-name="clip-path-corners-dot-color-0-1-2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4355 11.4355">
        <g id="clip-path-corners-dot-color-0-1-2">
          <path d={svgPaths.p3a653d00} fill="var(--fill-0, #FEFEFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[4.7%_4.71%_4.71%_4.71%]" data-name="Group">
      <ClipPathBackgroundColor />
      <ClipPathDotColor />
      <ClipPathCornersSquareColor />
      <ClipPathCornersDotColor />
      <ClipPathCornersSquareColor2 />
      <ClipPathCornersDotColor2 />
      <ClipPathCornersSquareColor1 />
      <ClipPathCornersDotColor1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[4.7%_4.71%_4.71%_4.71%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function ProtocolIcon1() {
  return (
    <div className="absolute inset-[20%]" data-name="Protocol Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4549 22.4549">
        <g id="Protocol Icon">
          <circle cx="11.2274" cy="11.2274" fill="var(--fill-0, #F60102)" id="Base" r="11.2274" />
          <path d={svgPaths.p1784b080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component954029B6489B4D789Ed85C6D0031F9Ee() {
  return (
    <div className="overflow-clip relative shrink-0 size-[122.41px]" data-name="954029b6-489b-4d78-9ed8-5c6d0031f9ee 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" />
      </svg>
      <Group />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[37.425px] top-[calc(50%-0.39px)]" data-name="Crypto">
        <ProtocolIcon1 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6.995px] items-center relative shrink-0">
      <Component954029B6489B4D789Ed85C6D0031F9Ee />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.487px] not-italic relative shrink-0 text-[12.241px] text-white whitespace-nowrap">Minimum deposit: 5 USDT</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[6.995px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[15.29px] min-h-px min-w-px not-italic relative text-[#1c398e] text-[10.7px]">Please check the network and minimum amount before sending funds.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12.241px] text-center text-white whitespace-nowrap">
        <span className="leading-[17.487px]">TPSN</span>
        <span className="leading-[17.487px] text-[#99a1af]">AuYkC2ksRnojD7R3aLjrwyG9yX</span>
        <span className="leading-[17.487px]">S9w9</span>
      </p>
    </div>
  );
}

function Cost() {
  return (
    <div className="content-stretch flex gap-[3.497px] items-baseline relative shrink-0 w-full" data-name="Cost">
      <Frame />
    </div>
  );
}

function Bill() {
  return (
    <div className="content-stretch flex flex-col gap-[10.492px] items-start relative shrink-0 w-[251px]" data-name="Bill">
      <Cost />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[10.492px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#f9fafb] content-stretch flex gap-[5.246px] items-center justify-center px-[10.492px] py-[5.246px] relative rounded-[10.492px] shrink-0 w-[137.274px]" data-name="Button">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[10.492px] shadow-[0px_0.874px_0.437px_0px_rgba(29,41,61,0.02)]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.487px] not-italic relative shrink-0 text-[#4a5565] text-[10.49px] whitespace-nowrap">Download QR</p>
      </div>
      <div className="bg-[#1447e6] content-stretch flex gap-[5.246px] items-center justify-center px-[10.492px] py-[5.246px] relative rounded-[10.492px] shadow-[0px_0.874px_0.437px_0px_rgba(29,41,61,0.02)] shrink-0 w-[137.274px]" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.487px] not-italic relative shrink-0 text-[10.49px] text-white whitespace-nowrap">Copy address</p>
      </div>
    </div>
  );
}

function Bonus() {
  return (
    <div className="bg-[#101828] relative rounded-[6.995px] shrink-0 w-full" data-name="Bonus">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.683px] border-solid inset-0 pointer-events-none rounded-[6.995px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10.492px] items-center p-[13.99px] relative w-full">
          <Bill />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function IconHeading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Icon & Heading">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.487px] not-italic relative shrink-0 text-[12.24px] text-center text-white whitespace-nowrap">{`Price impact: < 0.25%`}</p>
    </div>
  );
}

function AccordionButton() {
  return (
    <div className="bg-[#1e2939] relative shrink-0 w-full" data-name="Accordion Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.874px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20.985px] items-center px-[13.99px] py-[12.241px] relative w-full">
          <IconHeading />
          <div className="relative shrink-0 size-[17.487px]" data-name="angle-down">
            <div className="absolute flex inset-[33.33%_16.67%_29.17%_16.67%] items-center justify-center">
              <div className="-scale-y-100 flex-none h-[7.869px] w-[13.99px]">
                <div className="relative size-full" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6581 6.55769">
                    <path clipRule="evenodd" d={svgPaths.p2d61800} fill="var(--fill-0, #4A5565)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6.995px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[13.99px]" data-name="Icons">
        <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2009 12.5344">
              <path d={svgPaths.p3fe09471} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.874359" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-18.75%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.37179 3.20598">
              <path d={svgPaths.p10870a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.874359" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.487px] not-italic relative shrink-0 text-[#99a1af] text-[10.492px] text-center whitespace-nowrap">All transactions are secure and encrypted</p>
    </div>
  );
}

function DepositModal() {
  return (
    <div className="relative shrink-0 w-full" data-name="DepositModal">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20.985px] items-center justify-center pt-[15.738px] px-[13.99px] relative w-full">
          <InputForm />
          <Frame3 />
          <div className="bg-[#eef6ff] content-stretch flex flex-col items-start px-[13.99px] py-[10.492px] relative rounded-[10.492px] shrink-0 w-[313.021px]" data-name="Alert">
            <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.874px] border-solid inset-[-0.437px] pointer-events-none rounded-[10.929px]" />
            <Title />
          </div>
          <Bonus />
          <button className="cursor-pointer h-[41.969px] relative rounded-[10.492px] shrink-0 w-[313.021px]" data-name="Accordion">
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <AccordionButton />
            </div>
            <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.874px] border-solid inset-0 pointer-events-none rounded-[10.492px] shadow-[0px_0.874px_0.437px_0.05px_rgba(29,41,61,0.02)]" />
          </button>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function ModalStart() {
  return (
    <div className="absolute bg-[#101828] bottom-0 left-0 rounded-[13.99px] w-[341px]" data-name="Modal_start">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[48.964px] relative rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col gap-[5.246px] items-center pb-[15.738px] pt-[20.985px] relative shrink-0 w-[341px]" data-name="Header">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.482px] not-italic relative shrink-0 text-[17.49px] text-center text-white whitespace-nowrap">Deposit</p>
          <div className="absolute content-stretch flex items-center justify-center left-[295.53px] rounded-[10.492px] size-[31.477px] top-[13.99px]" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[17.487px]" data-name="Property 1=close">
              <div className="absolute inset-1/4" data-name="Vector">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61795 9.61795">
                    <g id="Vector">
                      <path d={svgPaths.p7c67600} fill="var(--fill-0, #101828)" />
                      <path d={svgPaths.p1b6cd800} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.874359" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-1/4" data-name="Vector">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61795 9.61795">
                    <path d={svgPaths.p18bc4800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.874359" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DepositModal />
        <div className="absolute h-[253.564px] left-0 top-0 w-[341px]" data-name="gradient">
          <div className="absolute h-[139.897px] left-[-13.99px] top-[-13.99px] w-[166.128px]">
            <div className="absolute inset-[-156.25%_-131.58%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 603.308 577.077">
                <g filter="url(#filter0_f_75_7452)" id="Ellipse 97">
                  <ellipse cx="301.654" cy="288.538" fill="var(--fill-0, #155DFC)" fillOpacity="0.6" rx="83.0641" ry="69.9487" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="577.077" id="filter0_f_75_7452" width="603.308" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_75_7452" stdDeviation="109.295" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 size-[122.41px]">
            <div className="absolute inset-[-142.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472.154 472.154">
                <g filter="url(#filter0_f_75_7422)" id="Ellipse 98">
                  <circle cx="236.077" cy="236.077" fill="var(--fill-0, #1C398E)" fillOpacity="0.5" r="61.2051" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="472.154" id="filter0_f_75_7422" width="472.154" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_75_7422" stdDeviation="87.4359" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.749px] border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none rounded-[13.99px]" />
    </div>
  );
}

export default function Start() {
  return (
    <div className="relative size-full" data-name="Start">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgStart} />
        <div className="absolute bg-[rgba(3,7,18,0.9)] inset-0" />
      </div>
      <div className="absolute bg-[#030b1a] h-[28.854px] left-0 top-[41.1px] w-[125.908px]" />
      <ModalStart />
    </div>
  );
}