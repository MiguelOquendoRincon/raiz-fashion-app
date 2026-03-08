import { motion } from "framer-motion";
import { Reveal } from "../common/Reveal";

export default function About() {
    return (
        <section id="about" style={{ padding: "var(--section-pad)", background: "var(--color-cream)" }}>
            <div className="section-container responsive-grid">
                {/* Text */}
                <div>
                    <Reveal>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 16, textTransform: "uppercase" }}>Nuestra Esencia</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400, lineHeight: 1.2, marginBottom: 28 }}>
                            Raíz nace del cuidado
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--color-text-dark)", lineHeight: 1.7, marginBottom: 20 }}>
                            Raíz es una propuesta de diseño consciente creada para <strong>proteger la piel y respetar la tierra</strong>.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.8, marginBottom: 20 }}>
                            Desarrollamos prendas en 100% algodón orgánico pensadas especialmente para niños con piel sensible, brindando comodidad, seguridad y libertad de movimiento.
                        </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--color-dark-green)", lineHeight: 1.5, marginBottom: 24, fontStyle: "italic" }}>
                            "Creemos que vestir no es solo cubrir el cuerpo. Es una decisión que impacta la salud, el bienestar y el futuro."
                        </p>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.8, marginBottom: 40 }}>
                            Cada detalle de esta prenda fue pensado desde el cuidado: cuidado por la piel, por la infancia y por el planeta.
                        </p>
                    </Reveal>
                </div>
                {/* Image placeholder */}
                <div style={{ position: "relative" }}>
                    <Reveal width="100%" delay={0.2} y={50}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                width: "100%", aspectRatio: "4/5",
                                background: "linear-gradient(135deg, #7A8C6E, #3D5A4C)",
                                borderRadius: 4, overflow: "hidden",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                            }}
                        >
                            <img src="/assets/prenda_completa.png" alt="About" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </motion.div>
                    </Reveal>
                    {/* Decorative leaf */}
                    <svg style={{ position: "absolute", bottom: -40, right: -30, opacity: 0.12, zIndex: -1 }} width="160" height="240" viewBox="0 0 200 300">
                        <path d="M100 0 Q160 80 120 160 Q80 240 100 300 Q40 220 60 140 Q80 60 100 0Z" fill="var(--color-dark-green)" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
