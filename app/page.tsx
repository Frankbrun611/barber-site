export default function BarberShopDemoSite() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-bold">Northside Barber Studio</p>
            <p className="text-sm text-zinc-500">Clean cuts. Sharp fades.</p>
          </div>
          <a
            href="#contact"
            className="rounded-xl bg-black px-4 py-2 text-white"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-black">
          Houston cuts that actually look expensive.
        </h1>
        <p className="mt-6 text-lg text-zinc-600">
          Fades, tapers, beard work, and clean styling done right.
        </p>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold">Haircut</h3>
              <p className="text-3xl">$35</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold">Haircut + Beard</h3>
              <p className="text-3xl">$50</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold">Kids Cut</h3>
              <p className="text-3xl">$25</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-lg text-zinc-600">
            Local barber shop focused on clean fades, good service, and fast
            appointments. This is a demo section you can replace with the real
            business story.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>(713) 555-0188</p>
          <p>Houston, TX</p>
        </div>
      </section>
    </div>
  );
}