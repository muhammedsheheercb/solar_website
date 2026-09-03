"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/sections";

export default function SolarCalculatorPage() {
  const [bill, setBill] = useState(60000);
  const [roof, setRoof] = useState(5000);
  const result = useMemo(() => {
    const kwByBill = bill / 7000;
    const kwByRoof = roof / 100;
    const size = Math.max(2, Math.min(kwByBill, kwByRoof));
    return { size: size.toFixed(1), savings: Math.round(size * 84000).toLocaleString("en-IN"), area: Math.round(size * 100).toLocaleString("en-IN") };
  }, [bill, roof]);

  return (
    <main>
      <PageHero eyebrow="Solar Calculator" title="Estimate the scale of your solar opportunity." text="A quick planning tool for early conversations. Final sizing requires a site survey and engineering review." image="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1600&q=80" />
      <section className="container grid gap-8 py-24 lg:grid-cols-2">
        <div className="soft-card p-8">
          <label className="font-extrabold text-primary">Monthly electricity bill</label>
          <input className="mt-3 w-full accent-primary" type="range" min="5000" max="500000" step="5000" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
          <p className="mt-2 text-2xl font-black">₹{bill.toLocaleString("en-IN")}</p>
          <label className="mt-8 block font-extrabold text-primary">Available shadow-free roof area</label>
          <input className="mt-3 w-full accent-primary" type="range" min="200" max="50000" step="100" value={roof} onChange={(e) => setRoof(Number(e.target.value))} />
          <p className="mt-2 text-2xl font-black">{roof.toLocaleString("en-IN")} sq ft</p>
        </div>
        <div className="bg-primary p-8 text-white rounded-lg">
          <p className="eyebrow">Estimated Output</p>
          <div className="mt-8 grid gap-6">
            <div><p className="text-white/65">Suggested system size</p><p className="font-display text-6xl font-black text-accent">{result.size} kW</p></div>
            <div><p className="text-white/65">Approx. annual savings</p><p className="text-3xl font-black">₹{result.savings}</p></div>
            <div><p className="text-white/65">Approx. roof area required</p><p className="text-3xl font-black">{result.area} sq ft</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
