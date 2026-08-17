import { motion } from "framer-motion";
import { BrainCircuit, Code2, Cpu, ShieldCheck } from "lucide-react";
import { quickValues } from "../data/profile.js";

const ICONS = [BrainCircuit, Code2, Cpu, ShieldCheck];

export default function QuickValue() {
  return (
    <section className="border-y border-white/[0.05] bg-base-850/40 py-14">
      <div className="section-shell grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickValues.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-surface p-5"
            >
              <Icon size={20} className="text-signal-cyan" strokeWidth={1.75} />
              <h3 className="mt-3 font-display text-sm font-semibold text-ink-100">{item.title}</h3>
              <p className="mt-1.5 font-body text-[13px] leading-relaxed text-ink-500">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
