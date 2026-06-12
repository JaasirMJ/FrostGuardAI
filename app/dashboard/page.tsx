export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl">
          <h2>Total Shipments</h2>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>

        <div className="bg-green-900 p-6 rounded-xl">
          <h2>Safe</h2>
          <p className="text-3xl font-bold mt-2">18</p>
        </div>

        <div className="bg-yellow-900 p-6 rounded-xl">
          <h2>Warning</h2>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>

        <div className="bg-red-900 p-6 rounded-xl">
          <h2>Compromised</h2>
          <p className="text-3xl font-bold mt-2">2</p>
        </div>
      </div>
    </main>
  );
}