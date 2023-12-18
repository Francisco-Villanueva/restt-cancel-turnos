import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24  gap-8">
      <h1 className="font-semibold text-3xl">Cancelación de turnos</h1>
      <Image
        src="/images/RESET_C_negro.png"
        alt="reset logo"
        height={40}
        width={300}
        priority={true}
      />
    </main>
  );
}
