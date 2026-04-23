export default function JoelsBarberShopSite() {
  const services = [
    {
      name: "Classic Haircut",
      price: "$30",
      description: "Clean, reliable cuts with attention to detail and a sharp finish.",
    },
    {
      name: "Haircut + Beard",
      price: "$40",
      description: "Full grooming service with haircut, beard shaping, and edge-up.",
    },
    {
      name: "Kids Cut",
      price: "$25",
      description: "Fast, neat cuts in a welcoming neighborhood shop environment.",
    },
  ];

  const reasons = [
    "Convenient Houston location",
    "Straightforward service menu",
    "Built to feel local and trustworthy",
  ];

  const hours = [
    "Mon - Sat: 10:00 AM - 7:00 PM",
    "Sunday: Closed",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-2xl font-black tracking-tight">JOEL&apos;S BARBER SHOP</p>
            <p className="text-sm text-stone-600">Clean cuts. Reliable service. Houston barbers you can trust.</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
            <a href="#services" className="transition hover:text-stone-950">Services</a>
            <a href="#about" className="transition hover:text-stone-950">About</a>
            <a href="#hours" className="transition hover:text-stone-950">Hours</a>
            <a href="#contact" className="transition hover:text-stone-950">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="bg-[linear-gradient(135deg,#f8fafc_0%,#f5f5f4_55%,#e7e5e4_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-stone-600 shadow-sm">
              Houston, Texas
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-none tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Sharp cuts. No wait. No guesswork.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              A modern neighborhood barbershop website built to make Joel&apos;s Barber Shop look established, easy to contact, and ready for business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                Get Directions
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-stone-800">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">Featured</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-stone-950">
                Built for clients who just want a good cut and a clear place to book.
              </h2>
              <p className="mt-5 text-base leading-7 text-stone-600">
                This layout makes the shop feel more professional than relying only on a social page. It highlights the essentials: services, contact info, location, and trust.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-stone-100 p-5">
                  <p className="text-sm text-stone-500">Phone</p>
                  <p className="mt-2 text-lg font-bold text-stone-950">(832) 887-6844</p>
                </div>
                <div className="rounded-2xl bg-stone-100 p-5">
                  <p className="text-sm text-stone-500">Location</p>
                  <p className="mt-2 text-lg font-bold text-stone-950">77032</p>
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
                Straightforward services. Clean presentation.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone-600">
              Simple service cards make it easy for customers to know what the shop offers before they ever walk in.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black tracking-tight text-stone-950">{service.name}</h3>
                  <span className="rounded-full bg-stone-900 px-4 py-2 text-sm font-bold text-white">
                    {service.price}
                  </span>
                </div>
                <p className="mt-5 leading-7 text-stone-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-stone-200 bg-stone-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">About</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">
              A neighborhood barbershop website that feels real, local, and easy to trust.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              Joel&apos;s Barber Shop is a Houston-based shop focused on clean cuts, dependable service, and a no-hassle customer experience. This layout is designed to make the business feel more professional online without losing its local personality.
            </p>
            <p>
              Instead of relying only on social media, this website gives the shop a proper home online where people can quickly find the address, phone number, services, and business hours.
            </p>
          </div>
        </div>
      </section>

      <section id="hours" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">Hours</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">
                Easy to find. Easy to call. Easy to visit.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {hours.map((item) => (
                <div key={item} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-sm">
                  <p className="text-lg font-semibold text-stone-900">{item}</p>
                </div>
              ))}
              <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-sm sm:col-span-2">
                <p className="text-sm text-stone-500">Address</p>
                <p className="mt-2 text-lg font-semibold text-stone-900">1313 Aldine Bender Rd, Houston, TX 77032</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-400">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Ready for your next cut?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              This final section keeps the essentials front and center so customers know exactly how to reach the shop.
            </p>

            <div className="mt-8 space-y-4 text-base text-stone-300">
              <p><span className="font-bold text-white">Phone:</span> (832) 887-6844</p>
              <p><span className="font-bold text-white">Address:</span> 1313 Aldine Bender Rd, Houston, TX 77032</p>
              <p><span className="font-bold text-white">Email:</span> joelsbarbershop2.7@gmail.com</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-black">Request Information</h3>
            <div className="mt-6 grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Your name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Phone number"
              />
              <select className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none">
                <option>Select a service</option>
                <option>Classic Haircut</option>
                <option>Haircut + Beard</option>
                <option>Kids Cut</option>
              </select>
              <textarea
                className="min-h-[130px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Tell us what you need"
              />
              <button className="rounded-full bg-white px-6 py-3 font-bold text-stone-950 transition hover:scale-[1.02]">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
