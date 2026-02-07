import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  name: string;
  imageUrl: string;
  href: string;
}

export default function GameCard({ name, imageUrl, href }: GameCardProps) {
  return (
    <Link href={href}>
      <div className="bg-theme-card rounded-xl border border-theme-bg overflow-hidden cursor-pointer transform hover:scale-[1.02] hover:border-theme-accent/50 transition-all duration-200 w-36 md:w-44">
        <div className="relative w-full h-28">
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-xl"
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="text-sm font-semibold text-white line-clamp-2">{name}</h3>
        </div>
      </div>
    </Link>
  );
}
