import Image from "next/image";

export default function Title({ text }) {
  return (
    <>
      <div className="hidden sm:block">
        <Image
          src="/images/logo_cenugui_Branco.svg"
          alt="SEI Logo"
          width="192"
          height="75"
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src="/images/logo_cenugui_branco.svg"
          alt="SEI Logo"
          width="270"
          height="141"
        />
      </div>
      <p className="font-terminal-uppercase my-8 text-center text-4xl text-quinary sm:text-5xl">
        {text}
      </p>
    </>
  );
}
