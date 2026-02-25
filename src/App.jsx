import nzhLogo from './assets/nzhlogo-removebg-preview.png'

const dumpTruckSeries = [
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

const tractorHeadSeries = [
  {
    model: 'Shacman H3000 Tractor Head',
    usage: 'Used for distance deliveries and heavy cargo transport.',
    specs: '6x4, Wechai engine, 420HP, Euro II emission.',
    usp: 'Good price, strong power, and easy maintenance.',
  },
  {
    model: 'Shacman H3000 (Cummins)',
    usage: 'Ideal for long-distance travel and better fuel usage.',
    specs: '6x4, Cummins engine, 420HP, Euro II emission.',
    usp: 'Balanced fuel consumption and durable drivetrain.',
  },
  {
    model: 'Shacman X5000 Tractor Head',
    usage: 'High-end option for long-distance operations.',
    specs: '6x4, Cummins engine, 420HP, Euro V emission.',
    usp: 'Premium appearance with fuel-saving performance.',
  },
  {
    model: 'Shacman X5000 (4x2)',
    usage: 'Best for port area and short route customer usage.',
    specs: '4x2, Cummins engine, 385HP, Euro II emission.',
    usp: 'Good appearance and fuel efficiency in urban routes.',
  },
]

const modernJeepneySeries = [
  {
    model: 'Dongfeng Class II',
    usage: 'For province and inner-city passenger transport.',
    specs: 'Yuchai engine, Euro IV emission, 2 long-bench design.',
    usp: 'Good quality and reasonable price.',
  },
  {
    model: 'Dongfeng Class III',
    usage: 'For inner-city and inter-city passenger operations.',
    specs: 'Yuchai engine, Euro IV emission, 24+1 seat layout.',
    usp: 'Comfortable interior and reasonable pricing.',
  },
]

const specialPurposeSeries = [
  {
    model: 'Mixer Truck',
    usage: 'Batching plant and concrete mixer deliveries.',
    specs: '10CBM, Wechai engine, 385HP, CIMC body.',
    usp: 'Good build quality and practical pricing.',
  },
  {
    model: 'Liugong Forklift',
    usage: 'Warehouse and loading operations.',
    specs: '3 tons, pneumatic tire, diesel fuel.',
    usp: 'Reliable operation and good value.',
  },
  {
    model: 'Oil Tanker',
    usage: 'Fuel and liquid delivery such as gasoline station supply.',
    specs: 'H3000 6x4 20KL/24KL, 340HP, Euro II emission, 6/7 compartment.',
    usp: 'Good quality with efficient route performance.',
  },
  {
    model: 'Zoomlion Crawler',
    usage: 'For small projects and countryside applications.',
    specs: 'Crawler type, 0.55CBM capacity.',
    usp: 'Strong utility and competitive pricing.',
  },
  {
    model: 'Self Loading Truck',
    usage: 'For equipment carrying and recovery transport.',
    specs: 'H3000 6x4 20 tons, front high lifting leg.',
    usp: 'Good quality and reasonable price.',
  },
  {
    model: 'Trailer',
    usage: 'For container carriage and rice/cement delivery.',
    specs: 'CIMC flat bed trailer, 3-axis axle, 40ft.',
    usp: 'Good quality and cost-efficient for logistics.',
  },
]

const milestones = [
  { year: '2018.5', event: 'NZH registered with SEC in the Philippines.' },
  { year: '2018.7', event: 'Set up Marilao warehouse and built up Sales Team.' },
  { year: '2018.9', event: 'Set up Quezon City Office.' },
  { year: '2018.12', event: 'Set up Bacolor Service Center.' },
  { year: '2019.10', event: 'Opened Montalban Service Center.' },
  { year: '2021.12', event: 'Opened A. Bonifacio Retail Store.' },
  { year: '2023.9', event: 'Hand-over ceremony at Bacolor Branch.' },
]

const logoMeaning = [
  'Blue is the color of sky, symbolizing rationality, objective thinking, and ambition.',
  'Yellow represents nobility and value, aiming to be respectful and prosperous.',
  'The gears represent machinery; rotating arrows symbolize growth from reason to brilliance.',
]

const brandMeaning = [
  'No excuse, with full accountability and transparent action.',
  'Zero complaint mindset with quick issue resolution for customer satisfaction.',
  'High quality and high responsibility, backed by reliable after-sales support.',
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

function ProductSection({ id, eyebrow, title, subtitle, items }) {
  return (
    <section id={id} className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-nzh-blue">{eyebrow}</p>
            <h2 className="mt-1 text-3xl font-black text-slate-900 md:text-4xl">{title}</h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">{subtitle}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.model} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold text-nzh-deep md:text-xl">{item.model}</h3>
                <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-700">
                  NZH
                </span>
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
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img src={nzhLogo} alt="NZH logo" className="h-11 w-auto" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">NZH International</p>
              <p className="text-sm font-bold text-slate-800">Vehicle and Machinery Inc.</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#portfolio"
              className="rounded-full bg-nzh-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-nzh-deep"
            >
              View Products
            </a>
            <a
              href="#company-profile"
              className="rounded-full border border-yellow-400 bg-yellow-300/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-900 transition hover:bg-yellow-300"
            >
              Company Details
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-nzh-deep via-nzh-blue to-blue-500 py-14 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-200">
              NZH Product Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">Formal Product Catalog and Company Profile</h1>
            <p className="mt-4 max-w-2xl text-slate-100">
              A clean and presentable overview of our key vehicle categories, supported by clear specifications,
              use cases, and company identity details for clients and partners.
            </p>
          </div>

          <div className="rounded-2xl border border-white/25 bg-white/10 p-6">
            <h2 className="text-2xl font-extrabold">Catalog Coverage</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                <p className="text-xs uppercase tracking-wider text-yellow-200">Categories</p>
                <p className="mt-1 text-2xl font-black">4</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                <p className="text-xs uppercase tracking-wider text-yellow-200">Products Listed</p>
                <p className="mt-1 text-2xl font-black">17</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                <p className="text-xs uppercase tracking-wider text-yellow-200">Branches</p>
                <p className="mt-1 text-2xl font-black">3+</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 p-3">
                <p className="text-xs uppercase tracking-wider text-yellow-200">Core Promise</p>
                <p className="mt-1 text-base font-black">Quality + Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="portfolio">
        <ProductSection
          id="dump-trucks"
          eyebrow="Best Seller"
          title="Dump Truck Series"
          subtitle="Trusted for government projects, infrastructure works, and heavy-load operations."
          items={dumpTruckSeries}
        />

        <ProductSection
          id="tractor-head"
          eyebrow="Long-Haul"
          title="Tractor Head Series"
          subtitle="Built for distance delivery, fuel efficiency, and reliable high-power operations."
          items={tractorHeadSeries}
        />

        <ProductSection
          id="modern-jeepney"
          eyebrow="Modern Innovation"
          title="Modern Jeepney"
          subtitle="Passenger-ready public transport models designed for comfort, safety, and compliance."
          items={modernJeepneySeries}
        />

        <ProductSection
          id="special-purpose"
          eyebrow="Customized Units"
          title="Special Purpose Vehicle"
          subtitle="Customized machinery and logistics units for concrete, fuel, lifting, and hauling operations."
          items={specialPurposeSeries}
        />
      </main>

      <section id="company-profile" className="border-t border-slate-200 bg-slate-100 py-14">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-nzh-blue">Company Profile</p>
            <h2 className="mt-1 text-3xl font-black text-slate-900 md:text-4xl">Mission, Vision, Identity and Timeline</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-extrabold text-slate-900">Company Vision</h3>
              <p className="mt-3 text-slate-700">
                To be the reliable assistant of successful companies in purchasing and using trucks,
                heavy equipment, and related machinery.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-extrabold text-slate-900">Company Mission</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>Choose high-quality products with prompt service at reasonable price.</li>
                <li>Cultivate a workplace where every employee feels valued and empowered.</li>
                <li>Create a sustainable and stable investment return for shareholders.</li>
              </ul>
            </article>
          </div>

          <article className="rounded-2xl border border-yellow-300 bg-yellow-50 p-6">
            <h3 className="text-2xl font-extrabold text-slate-900">Company Slogan</h3>
            <p className="mt-3 text-xl font-bold text-nzh-deep">Assist you to be even more successful!</p>
          </article>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-extrabold text-slate-900">Meaning of NZH Logo</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {logoMeaning.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-nzh-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-extrabold text-slate-900">Meaning of NZH Brand</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {brandMeaning.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-nzh-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-slate-900">Company Timeline</h3>
            <div className="mt-5 space-y-3">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="grid gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 md:grid-cols-[120px_1fr] md:items-start"
                >
                  <p className="font-black text-nzh-blue">{item.year}</p>
                  <p className="text-slate-700">{item.event}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-extrabold text-slate-900">Branch Coverage</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {offices.map((item) => (
                <div key={item.branch} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-lg font-bold text-slate-900">{item.branch}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.address}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-7">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} NZH International Vehicle and Machinery Inc.</p>
          <p>Formal product portfolio presentation.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
