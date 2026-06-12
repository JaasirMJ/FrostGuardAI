"use client";

import { useState } from "react";

export default function ScanPage() {
  const [status, setStatus] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Scan Shipment
      </h1>

      <input
        type="file"
        className="mb-6"
      />

      <select
        className="bg-slate-800 p-3 rounded"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Select Indicator Result</option>
        <option>Safe</option>
        <option>Warning</option>
        <option>Compromised</option>
      </select>

      {status && (
        <div className="mt-8 bg-slate-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            AI Analysis
          </h2>

          <p className="mt-4">
            Status: {status}
          </p>

          <p className="mt-2">
            Health Score: 82/100
          </p>

          <p className="mt-2">
            Recommendation: Verify shipment before use.
          </p>
        </div>
      )}
    </main>
  );
}