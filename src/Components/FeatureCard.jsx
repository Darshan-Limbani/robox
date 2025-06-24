function FeatureCard({ iconSrc, title, description, onClick, href }) {
  
  return (
    <a
      href={href}
      // onClick={onClick}
      className="gap-5 flex overflow-hidden flex-col items-start self-stretch px-6 py-3.5 my-auto rounded-3xl bg-zinc-100 h-[156px] w-[156px] w-full cursor-pointer">
      <img
        src={iconSrc}
        alt="Feature icon"
        width={40}
        height={40}
        className="object-contain w-10 aspect-square rounded-[100px]"
      />
      <div className="flex flex-col gap-4">
        <div style={{
          fontFamily: 'Roboto',
          fontWeight: 600,
          fontSize: '14px',
          leadingTrim: 'cap-height',
          lineHeight: '100%',
          letterSpacing: '0%',
          verticalAlign: 'middle',
          fontVariantNumeric: 'lining-nums proportional-nums'
        }}>
          {title}

        </div>
        <div style={{
          
          fontFamily: 'Roboto',
          fontWeight: 400,
          opacity:0.5,
          fontSize: '10px',
          leadingTrim: 'cap-height',
          lineHeight: '100%',
          letterSpacing: '0%',
          verticalAlign: 'middle',
          fontVariantNumeric: 'lining-nums proportional-nums'
        }}>
          {description}
        </div>
      </div>
    </a>
  );
}

export default FeatureCard;