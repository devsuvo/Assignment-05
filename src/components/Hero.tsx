import bannerImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-5 pt-8 pb-12 lg:px-8 lg:pt-24 lg:pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_488px]">
        {/* ===== Bam dik: Text ===== */}
        <div className="text-center lg:text-left">
          {/* Heading: plain text + gradient text */}
          <h1 className="text-3xl leading-tight font-extrabold text-slate-900 lg:text-6xl lg:leading-none">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 lg:mx-0 lg:mt-6 lg:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and
            put together the stack that fits your next project.
          </p>

          {/* Two buttons */}
          <div className="mt-6 flex justify-center gap-3 lg:mt-10 lg:justify-start">
            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 text-xs font-semibold text-white shadow-md shadow-pink-200 transition hover:opacity-90 lg:text-sm"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-700 transition hover:bg-gray-50 lg:text-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ===== Dan dik: Banner image ===== */}
        <div className="relative mx-auto w-72 lg:w-[420px]">
          <div className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-pink-400/30 blur-3xl" />
          <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-purple-400/30 blur-3xl" />
          <img
            src={bannerImg}
            alt="3D illustration of a layered tech stack"
            className="relative w-full"
          />
        </div>
      </div>
    </section>
  );
}