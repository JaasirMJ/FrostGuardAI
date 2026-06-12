"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [shipments, setShipments] = useState<any[]>([]);

  useEffect(() => {
    const data = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key?.startsWith("FG-")) {
        const shipment = JSON.parse(localStorage.getItem(key)!);
        data.push(shipment);
      }
    }

    setShipments(data);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Shipment History
      </h1>

      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div
            key={shipment.uid}
            className="bg-slate-800 p-6 rounded-xl"
          >
            <p><strong>ID:</strong> {shipment.uid}</p>
            <p><strong>Product:</strong> {shipment.product}</p>
            <p><strong>Origin:</strong> {shipment.origin}</p>
            <p><strong>Destination:</strong> {shipment.destination}</p>
            <p><strong>Status:</strong> {shipment.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}