export default function BarberShopDemoSite() {
  const services = [
    {
      name: "Designer Haircuts",
      price: "Call for pricing",
      description: "Custom fades, tapers, and modern styles tailored to your look.",
    },
    {
      name: "Braids & Twists",
      price: "Call for pricing",
      description: "Professional braids, twists, and detailed styling work.",
    },
    {
      name: "Silk Press & Styling",
      price: "Call for pricing",
      description: "Smooth, clean silk press and styling for a polished finish.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-black">Hair Lanes Barber & Beauty Studio</p>
            <p className="text-sm text-white/60">Designer cuts. Braids. Silk press. Full service.</p>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-6xl font-black leading-tight">
          Houston’s go-to spot for cuts, braids, and style.
        </h1>
        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          Professional barber and beauty studio offering designer haircuts, braids, twists, silk press, and more — all in one place.
        </p>
      </section>

      <section className="bg-white text-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-black mb-10">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-neutral-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="text-2xl mt-2">{service.price}</p>
                <p className="mt-3 text-black/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-black mb-6">About</h2>
          <p className="text-lg text-white/70 max-w-2xl">
            Hair Lanes Barber & Beauty Studio is a full-service shop in Houston offering a wide range of services from designer haircuts to braids, twists, silk press, and more. Known for quality work and attention to detail.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-black mb-6">Contact</h2>
          <p>📍 8329 Tidwell Rd, Houston, TX 77028</p>
          <p className="mt-2">📞 (832) 388-3889</p>
          <p className="mt-2">🕒 Opens 9AM</p>
        </div>
      </section>
    </div>
  );
}
