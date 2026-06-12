<Navbar />
import Navbar from "@/components/Navbar";

"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function CreateShipment() {
  const [product, setProduct] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [uid, setUid] = useState("");

  const generateShipment = () => {
    const shipmentId = `FG-${Date.now()}`;
    setUid(shipmentId);

    const shipment = {
      uid: shipmentId,
      product,
      origin,
      destination,
      status: "Safe",
    };

    localStorage.setItem(
      shipmentId,
      JSON.stringify(shipment)
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Create Shipment
      </h1>

      <div className="flex flex-col gap-4 max-w-md">
        <input
          className="p-3 rounded bg-slate-800"
          placeholder="Product Type"
          onChange={(e) => setProduct(e.target.value)}
        />

        <input
          className="p-3 rounded bg-slate-800"
          placeholder="Origin"
          onChange={(e) => setOrigin(e.target.value)}
        />

        <input
          className="p-3 rounded bg-slate-800"
          placeholder="Destination"
          onChange={(e) => setDestination(e.target.value)}
        />

        <button
          onClick={generateShipment}
          className="bg-cyan-500 p-3 rounded"
        >
          Generate Shipment
        </button>
      </div>

      {uid && (
        <div className="mt-10 bg-white p-6 inline-block rounded">
          <QRCode value={uid} />
          <p className="text-black mt-4">{uid}</p>
        </div>
      )}
    </main>
  );
}