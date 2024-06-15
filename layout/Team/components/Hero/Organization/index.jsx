import Image from "next/image";
import Link from "next/link";

export default function Organization() {
  return (
    <div className="absolute right-0 grid grid-rows-2">
      <h5 className="font-terminal-uppercase text-sm text-white">
        Organização:
      </h5>
      <Link href="https://cenaculo.escutismo.pt/" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/LogoNucleoGuimarães.svg"
            width="240"
            height="82"
            alt="Guimarães"
          />
        </a>
      </Link>
    </div>
  );
}
