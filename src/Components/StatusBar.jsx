
function StatusBar({ time, iconSrc }) {
  return (
    <header
      className="flex overflow-hidden gap-10 justify-between items-end px-6 pt-6 pb-2.5 w-full text-sm font-medium tracking-normal leading-none whitespace-nowrap bg-white min-h-[52px] text-stone-900">
      <time>{time}</time>
      <img
        src={iconSrc}
        className="object-contain shrink-0 aspect-[2.7] w-[46px]"
        alt="Status icons"
      />
    </header>
  );
}

export default StatusBar;
