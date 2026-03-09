function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-[calc(50%-192px)] not-italic text-[60px] text-white top-[calc(50%-30px)] whitespace-nowrap">Yury Pogodin</p>
    </div>
  );
}

export default function Start() {
  return (
    <div className="bg-[#030712] relative size-full" data-name="Start">
      <Group />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[calc(50%-71px)] not-italic text-[12px] text-white top-[1022px] whitespace-nowrap">{`https://t.me/pogodinyury`}</p>
    </div>
  );
}