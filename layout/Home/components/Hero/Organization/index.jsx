import Image from "next/image";

export default function Organization() {
  return (
  <div className="flex flex-col items-center space-y-2">
  <h5 className="font-medium text-sm text-white">Cenáculo Nacional:</h5>
  <a target="_blank" rel="noopener noreferrer" href="https://cenaculo.escutismo.pt/">
    <Image
      src="/images/logo_cenaculo_branco.svg"
      width="70"
      height="70"
      alt="cenaculo"
      className="select-none"
    />
  </a>
</div>


  );
}
