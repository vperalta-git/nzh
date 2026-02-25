import nzhLogo from './assets/nzhlogo-removebg-preview.png'

const productSeries = [
  {
    model: 'Shacman H3000',
    usage: 'Mostly used in government projects.',
    specs: '6x4, 20CBM, Cummins engine, Euro V emission.',
    usp: 'Meets government requirement with stable heavy-duty performance.',
  },
  {
    model: 'Shacman X5000',
    usage: 'Best for big project operations and large contractors.',
    specs: '6x4, 20CBM, Wechai engine, Euro II emission.',
    usp: 'Good appearance and reasonable operating cost.',
  },
  {
    model: 'Chenglong Little Canon',
    usage: 'Used for load limitation areas and city routes.',
    specs: '6x4, 14CBM, Yuchai engine, Euro II emission, 260HP.',
    usp: 'Strong compliance for 5000×2200×1200 loading dimensions.',
  },
  {
    model: 'Lishun Mini Dump',
    usage: 'Built for hardware, garbage collection, and small projects.',
    specs: '4x2, 6.8CBM, Yunnei engine, 156HP, Euro V emission.',
    usp: 'Good pricing with strong loading capacity.',
  },
  {
    model: 'Dongfeng Mini Dump',
    usage: 'Used in countryside roads and small hardware deliveries.',
    specs: '4x2, 3.5CBM, Yuchai engine, 115HP, Euro IV emission.',
    usp: 'Reliable build quality for daily operations.',
  },
]

const offices = [
  {
    branch: 'Main Office',
    address: '#57 King Center Bldg., Sgt. Rivera St., Brgy. Pag-ibig, Nayon 1115, Quezon City',
  },
  {
    branch: 'Bacolor',
    address: 'Jose Abad Santos Ave., San Vicente, Bacolor, Pampanga',
  },
  {
    branch: 'Montalban',
    address: 'Lot 42, Brgy. Forestry Ville, Corner Dao St., Rodriguez, Rizal',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img src={nzhLogo} alt="NZH logo" className="h-11 w-auto" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">NZH International</p>
              <p className="text-sm font-bold text-slate-100">Vehicle and Machinery Inc.</p>
            </div>
          </div>
          <a
            href="#products"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-100 transition hover:border-nzh-blue hover:text-nzh-blue"
          >
            View Products
          </a>
        </div>
      </header>

      <section className="border-b border-white/10 bg-hero-glow py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
              Best Seller • Dumptrucks
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Dump Truck Series
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200/90 md:text-lg">
              Through rain and sun, it never rests—a trusted partner for every road and every site.
              Built for reliable output, heavy-load work, and practical ownership.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-300">Models</p>
                <p className="mt-1 text-2xl font-black">5</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-300">Categories</p>
                <p className="mt-1 text-2xl font-black">Heavy / Mini</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-300">Use Cases</p>
                <p className="mt-1 text-2xl font-black">Gov't / Project</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-slate-900/50 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-nzh-blue">Featured Note</p>
            <h2 className="mt-2 text-2xl font-extrabold">Engine Options</h2>
            <p className="mt-3 text-slate-300">Can be configured as H3000 or X5000 with Wechai engine or Cummins engine based on project requirements.</p>
            <div className="mt-5 space-y-3 text-sm text-slate-200">
              <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Heavy-duty frame and stable dump performance.</p>
              <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Practical options for city routes, provincial roads, and contract fleets.</p>
              <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">After-sales support from NZH branch network.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-slate-100 py-14 text-slate-900">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-nzh-blue">Product Lineup</p>
              <h2 className="mt-1 text-3xl font-black md:text-4xl">Dump Truck Best Sellers</h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">Brochure details integrated for quick web presentation. Product photos can be mapped immediately once image files are added to the project.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {productSeries.map((item) => (
              <article key={item.model} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-nzh-deep">{item.model}</h3>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-nzh-blue">Dumptruck</span>
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-extrabold uppercase tracking-wider text-slate-500">Using Scenes</dt>
                    <dd className="mt-1 text-slate-700">{item.usage}</dd>
                  </div>
                  <div>
                    <dt className="font-extrabold uppercase tracking-wider text-slate-500">Main Specs</dt>
                    <dd className="mt-1 text-slate-700">{item.specs}</dd>
                  </div>
                  <div>
                    <dt className="font-extrabold uppercase tracking-wider text-slate-500">USP</dt>
                    <dd className="mt-1 text-slate-700">{item.usp}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 py-14">
        <div className="mx-auto w-full max-w-6xl px-5">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Service Coverage</p>
          <h2 className="mt-1 text-3xl font-black">Key Branches</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {offices.map((item) => (
              <article key={item.branch} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-lg font-bold text-slate-100">{item.branch}</p>
                <p className="mt-2 text-sm text-slate-300">{item.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} NZH International Vehicle and Machinery Inc.</p>
          <p>Ready for Vercel deployment.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
