import { motion } from "framer-motion";
import { Reveal } from "../common/Reveal";
import { Sun, Droplets, Wind } from "lucide-react";

export default function Care() {
    const steps = [
        { icon: <Droplets size={24} />, title: "Lavado Suave", desc: "Lavar a mano o en ciclo delicado con agua fría para preservar las fibras de algodón orgánico." },
        { icon: <Sun size={24} />, title: "Secado Natural", desc: "Secar a la sombra para evitar que el sol directo desgaste la suavidad natural de la prenda." },
        { icon: <Wind size={24} />, title: "Sin Químicos", desc: "Evitar el uso de blanqueadores y suavizantes sintéticos. El algodón orgánico ya es suave por naturaleza." },
    ];

    return (
        <section id="care" style={{ padding: "var(--section-pad)", background: "var(--color-cream)" }}>
            <div className="section-container">
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <Reveal width="100%">
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 12, textTransform: "uppercase" }}>Manual de Uso</p>
                    </Reveal>
                    <Reveal delay={0.1} width="100%">
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400 }}>Cuidar es Amar</h2>
                    </Reveal>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, marginBottom: 80 }}>
                    {steps.map((step, idx) => (
                        <Reveal key={idx} delay={idx * 0.15} y={40} width="100%">
                            <motion.div
                                whileHover={{ y: -5 }}
                                style={{
                                    background: "#fff", padding: "40px 32px", borderRadius: 4,
                                    border: "1px solid var(--color-border)", textAlign: "center",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
                                }}
                            >
                                <div style={{ color: "var(--color-mid-green)", marginBottom: 20, display: "flex", justifyContent: "center" }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-text-dark)", marginBottom: 16, fontWeight: 400 }}>{step.title}</h3>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--color-text-mid)", lineHeight: 1.7 }}>{step.desc}</p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>

                <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
                    <Reveal delay={0.4} width="100%">
                        <h2 style={{
                            fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                            color: "var(--color-dark-green)", fontWeight: 400, lineHeight: 1.3, fontStyle: "italic"
                        }}>
                            Cuidar la piel. Cuidar la tierra.<br />Sembrar futuro.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.6} width="100%">
                        <div style={{ marginTop: 56, display: "flex", justifyContent: "center", alignItems: "center", gap: 32, opacity: 0.6 }}>
                            <div style={{ height: 1, width: 60, background: "var(--color-dark-green)", opacity: 0.3 }} />
                            <img src="/assets/brand_logo.png" alt="Raíz" style={{ height: 32, width: "auto" }} />
                            <div style={{ height: 1, width: 60, background: "var(--color-dark-green)", opacity: 0.3 }} />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
