export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <h1 className="text-6xl font-bold">
          Frost<span className="text-cyan-400">Guard</span>
        </h1>

        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
          Affordable Intelligence for Temperature-Sensitive Logistics
        </p>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Protect vaccines, insulin, blood samples, and dairy products using
          QR-based tracking and AI-powered cold-chain intelligence.
        </p>

        <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400 transition">
          Get Started
        </button>
      </section>

      {/* Problem Section */}
      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">The Problem</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-slate-800 p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Expensive Monitoring
              </h3>
              <p className="mt-4 text-slate-300">
                Current IoT trackers cost ₹5,000–₹12,000 per shipment.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Rural Blind Spots
              </h3>
              <p className="mt-4 text-slate-300">
                Small clinics often have no way to verify temperature exposure.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                Medicine Loss
              </h3>
              <p className="mt-4 text-slate-300">
                Spoiled vaccines and insulin can directly affect patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Features</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="font-semibold text-cyan-400">
                QR Tracking
              </h3>
              <p className="mt-3 text-slate-300">
                Unique shipment identities for every package.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="font-semibold text-cyan-400">
                AI Reports
              </h3>
              <p className="mt-3 text-slate-300">
                Generate health scores and recommendations instantly.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="font-semibold text-cyan-400">
                Shipment History
              </h3>
              <p className="mt-3 text-slate-300">
                Track previous deliveries and scan logs.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="font-semibold text-cyan-400">
                Scalable SaaS
              </h3>
              <p className="mt-3 text-slate-300">
                Designed for governments, hospitals, and NGOs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        FrostGuard • Making Cold-Chain Monitoring Accessible Everywhere
      </footer>
    </main>
  );
}