import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-12 w-full max-w-6xl mx-auto">
      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h1 className="text-4xl sm:text-5xl font-bold">Growly Suite</h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Streamline on-chain and off-chain data to your Web3.0 applications
          with a few lines of code.
        </p>
        <a
          href="#features"
          className="mt-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-primary/80 transition"
        >
          Learn More
        </a>
      </div>
      {/* Hero Image */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <Image
          src="/hero-placeholder.jpeg"
          alt="SaaS dashboard preview"
          width={400}
          height={320}
          className="rounded-xl shadow-lg object-cover w-full max-w-xs md:max-w-md"
          priority
        />
      </div>
    </section>
  );
}
