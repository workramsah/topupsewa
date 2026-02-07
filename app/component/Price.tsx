interface PriceProps {
  price: string;
  diamond: string;
  selected?: boolean;
}

export default function Price(props: PriceProps) {
  const isSelected = props.selected === true;
  return (
    <div className={`w-full p-3 text-center flex flex-col justify-center gap-0.5 rounded-xl transition-all duration-200 border-2 ${
      isSelected
        ? "border-theme-accent bg-theme-accent/15 shadow-md shadow-theme-accent/30"
        : "border-theme-bg bg-theme-card group-hover:border-theme-accent group-hover:bg-theme-accent/10 group-hover:shadow-md group-hover:shadow-theme-accent/20"
    }`}>
      <span className="text-theme-accent font-bold text-sm">Rs {props.price}</span>
      <span className="text-white text-xs">{props.diamond}</span>
    </div>
  );
}
