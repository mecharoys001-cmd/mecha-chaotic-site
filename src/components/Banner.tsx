import Image from 'next/image';

export default function Banner() {
  return (
    <div className="w-full">
      <Image
        src="/images/banner.png"
        alt="Mecha Chaotic Banner"
        width={1500}
        height={500}
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}
