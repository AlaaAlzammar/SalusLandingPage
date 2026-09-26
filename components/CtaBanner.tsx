import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="bg-[#FAF8F3] py-10 sm:px-8 lg:px-16">
      <div
        dir="rtl"
        className="relative isolate mx-auto max-w-10xl overflow-hidden rounded-[28px]"
      >
        {/* Background photo */}
        <Image
          src="/images/cta.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />

        {/* Gradient: photo stays clear on the left, deep green solid behind the copy on the right */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#0f2b20]/75 to-[#0f2b20]" />

        <div className="relative ml-auto flex min-h-[420px] w-full flex-col justify-center gap-6 px-10 py-14 text-right sm:px-12 md:w-3/5 md:px-10 lg:w-1/2">
          <p className="text-sm text-[#E7ECE7]">
            ابدأ رحلتك مع سالوس اليوم
          </p>
          <h2 className="text-9xl font-black leading-relaxed text-white sm:text-4xl">
            صحتك أصبحت أقرب
            <br />
            من أي وقت مضى
          </h2>

          <div className="mt-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#C7A15A] px-7 py-3.5 text-sm font-bold text-[#16241D] transition-colors hover:bg-[#d4b06f]">
              حمّل التطبيق الآن
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4 -scale-x-100"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex gap-3">
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3 20.5V3.5c0-.6.3-1.1.8-1.4l10 9.9-10 9.9c-.5-.3-.8-.8-.8-1.4zM16.5 12l3-3 2.5 1.4c.7.4.7 1.4 0 1.8L19.5 13.6l-3-3zm-1.2-1.2L5.5 2 15 7.3l.3.2.9.9zM5.5 22l9.8-9.2-.9.9-.3.2L5.5 22z" />
              </svg>
              <span className="text-right leading-tight">
                <span className="block text-[10px] text-white/70">
                  GET IT ON
                </span>
                <span className="block text-sm font-semibold">
                  Google Play
                </span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.05 12.5c0-2.4 2-3.6 2.1-3.7-1.1-1.6-2.9-1.8-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1.9-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.7c1.3 0 2.2-1.2 3-2.4.6-.9.9-1.4 1.4-2.5-3.7-1.4-3.7-4.1-3.7-4.1zM14.8 5.4c.7-.8 1.2-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 2.9-1.3z" />
              </svg>
              <span className="text-right leading-tight">
                <span className="block text-[10px] text-white/70">
                  Download on the
                </span>
                <span className="block text-sm font-semibold">
                  App Store
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
