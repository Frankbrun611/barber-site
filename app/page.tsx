export default function BarberShopDemoSite() {
  const services = [
    {
      name: "Designer Haircuts",
      price: "Call for pricing",
      description: "Custom fades, tapers, and polished modern styles tailored to your look.",
    },
    {
      name: "Braids & Twists",
      price: "Call for pricing",
      description: "Protective styles, clean parting, and detailed braid and twist work.",
    },
    {
      name: "Silk Press & Styling",
      price: "Call for pricing",
      description: "Smooth, clean silk press and styling for a polished finish.",
    },
  ];

  const highlights = [
    { label: "Houston Location", value: "77028" },
    { label: "Full Service", value: "Cuts + Beauty" },
    { label: "Booking", value: "Call Today" },
  ];

  const gallery = [
    {
      title: "Designer Cuts",
      subtitle: "Feature a clean fade or taper photo here",
    },
    {
      title: "Braids & Twists",
      subtitle: "Feature a braid or twist style photo here",
    },
    {
      title: "Beauty Styling",
      subtitle: "Feature a silk press or finishing style here",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="sticky top-0 z-30 border-b border-stone-300/80 bg-stone-100/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-xl font-black tracking-tight text-stone-900">Razor Arte Barber Studio</p>
            <p className="text-sm text-stone-600">Designer haircuts, braids, twists, silk press, and more.</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
            <a href="#services" className="transition hover:text-stone-950">Services</a>
            <a href="#gallery" className="transition hover:text-stone-950">Gallery</a>
            <a href="#about" className="transition hover:text-stone-950">About</a>
            <a href="#contact" className="transition hover:text-stone-950">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-100 transition hover:scale-[1.02]"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-stone-300/70 bg-gradient-to-br from-stone-200 via-amber-50 to-stone-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(180,83,9,0.10),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-stone-400/40 bg-white/50 px-4 py-2 text-sm text-stone-700 shadow-sm backdrop-blur-sm">
              Houston beauty and barber services in one place
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-none tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              A polished studio presence with a warmer, more elevated feel.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              Clean presentation, neutral tones, service clarity, and a modern layout that makes the business feel established, welcoming, and premium.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-stone-100 transition hover:scale-[1.02]"
              >
                Call to Book
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-stone-400/40 bg-white/50 px-6 py-3 font-semibold text-stone-900 transition hover:bg-white/80"
              >
                View Work
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-stone-300 bg-white/60 p-4 shadow-sm backdrop-blur-sm">
                  <p className="text-2xl font-black text-stone-950">{item.value}</p>
                  <p className="mt-1 text-sm text-stone-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 hidden h-36 w-36 rounded-full bg-amber-200/40 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-8 hidden h-40 w-40 rounded-full bg-stone-300/50 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-stone-300 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-5">
                <div className="rounded-[1.5rem] border border-stone-300 bg-stone-900 p-6 text-stone-100">
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Featured Service</p>
                  <p className="mt-3 text-3xl font-black">Designer Haircuts & Protective Styles</p>
                  <p className="mt-3 text-stone-300">
                    Precision cuts, braids, twists, and beauty styling presented in a clean, client-friendly format.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-stone-300 bg-stone-50 p-5">
                    <p className="text-sm text-stone-500">Atmosphere</p>
                    <p className="mt-2 text-lg font-bold text-stone-950">Warm, modern, welcoming</p>
                    <p className="text-stone-600">Professional and approachable</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-stone-300 bg-stone-50 p-5">
                    <p className="text-sm text-stone-500">Location</p>
                    <p className="mt-2 text-lg font-bold text-stone-950">Houston, TX</p>
                    <p className="text-stone-600">Easy to call and find</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5 text-stone-900">
                  <p className="text-sm font-medium text-stone-500">Photo-ready layout</p>
                  <p className="mt-2 text-lg font-bold">
                    Drop in three real shop photos here and the whole website instantly feels custom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">Services</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">
                More polished than a social profile alone.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone-600">
              A clean service menu helps clients understand what the studio offers without digging through social posts.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-[2rem] border border-stone-300 bg-stone-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black tracking-tight text-stone-950">{service.name}</h3>
                  <span className="rounded-full bg-stone-900 px-4 py-2 text-sm font-bold text-stone-100">
                    {service.price}
                  </span>
                </div>
                <p className="mt-5 leading-7 text-stone-600">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-full border border-stone-300 bg-white px-5 py-3 font-semibold text-stone-900 transition group-hover:bg-stone-900 group-hover:text-stone-100"
                >
                  Ask About This Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="border-y border-stone-300/70 bg-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">Gallery</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">
              Add real business photos here.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
              These cards are ready to be replaced with real photos from the business once you have the images saved locally.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-stone-300 bg-white shadow-sm">
                <div className="flex aspect-[4/5] items-end bg-gradient-to-br from-stone-300 via-amber-100 to-stone-200 p-6">
                  <div className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                    <p className="text-lg font-black text-stone-950">{item.title}</p>
                    <p className="mt-1 text-sm text-stone-600">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-stone-900 text-stone-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-400">About</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              A warmer palette gives the studio more personality.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300">
            <p>
              Instead of the usual black-and-white barber look, this design leans into stone, cream, and soft amber tones to feel more inviting and more beauty-forward while still looking premium.
            </p>
            <p>
              It gives the business room to showcase cuts, braids, twists, and styling work without feeling too cold or too generic.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">
              Ready to book or ask about services?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              This section can be connected to real booking links, Instagram, additional hours, and real business photos once you gather the final assets.
            </p>

            <div className="mt-8 space-y-4 text-base text-stone-700">
              <p><span className="font-bold text-stone-950">Phone:</span> (832) 388-3889</p>
              <p><span className="font-bold text-stone-950">Address:</span> 8329 Tidwell Rd, Houston, TX 77028</p>
              <p><span className="font-bold text-stone-950">Hours:</span> Opens at 9:00 AM</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-300 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-stone-950">Request an Appointment</h3>
            <div className="mt-6 grid gap-4">
              <input
                className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none placeholder:text-stone-400"
                placeholder="Your name"
              />
              <input
                className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none placeholder:text-stone-400"
                placeholder="Phone number"
              />
              <select className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none">
                <option>Select a service</option>
                <option>Designer Haircuts</option>
                <option>Braids & Twists</option>
                <option>Silk Press & Styling</option>
              </select>
              <textarea
                className="min-h-[130px] rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none placeholder:text-stone-400"
                placeholder="Tell us what you want"
              />
              <button className="rounded-full bg-stone-900 px-6 py-3 font-bold text-stone-100 transition hover:scale-[1.02]">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
