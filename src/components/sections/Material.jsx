import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "../common/Reveal";

export default function Material() {
    return (
        <section id="material" style={{ padding: "var(--section-pad)", background: "#fff", overflow: "hidden" }}>
            <div className="section-container responsive-grid">

                {/* Decorative elements side */}
                <div style={{ position: "relative", order: 2 }}>
                    <Reveal width="100%" y={50} delay={0.2}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                width: "100%", maxWidth: "400px", aspectRatio: "1/1",
                                background: "var(--color-cream)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                overflow: "hidden",
                                boxShadow: "0 30px 60px rgba(0,0,0,0.08)"
                            }}
                        >
                            <Image
                                src="/assets/cotton-material.png"
                                alt="Algodón Orgánico Natural"
                                fill
                                sizes="(max-width: 768px) 80vw, 400px"
                                style={{ objectFit: "cover", borderRadius: "50%" }}
                            />
                            {/* Floating text or icons */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: "absolute", bottom: "10%", right: "18%",
                                    background: "var(--color-dark-green)", color: "#fff",
                                    padding: "12px 20px", borderRadius: 40,
                                    fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: 2,
                                    zIndex: 2
                                }}
                            >100% ORGÁNICO</motion.div>
                        </motion.div>
                    </Reveal>

                    <svg style={{ position: "absolute", top: -20, left: -20, opacity: 0.1, zIndex: -1 }} width="200" height="200" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="100" fill="var(--color-mid-green)" />
                    </svg>
                </div>

                {/* Text content */}
                <div style={{ order: 1 }}>
                    <Reveal>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 16, textTransform: "uppercase" }}>🌱 El origen</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400, lineHeight: 1.2, marginBottom: 28 }}>
                            ¿Por qué algodón orgánico?
                        </h2>
                    </Reveal>
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        <Reveal delay={0.2}>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--color-text-dark)", lineHeight: 1.7 }}>
                                El algodón orgánico se cultiva <strong>sin pesticidas ni químicos agresivos</strong> que puedan afectar la piel o contaminar el suelo.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.8 }}>
                                Esto permite obtener una fibra más limpia, más suave y más segura, ideal para niños con <strong>dermatitis atópica</strong> o piel altamente sensible.
                            </p>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.8 }}>
                                Al elegirlo, reducimos el impacto ambiental y promovemos prácticas agrícolas responsables que protegen el agua, la tierra y las comunidades productoras.
                            </p>
                        </Reveal>
                        <Reveal delay={0.5}>
                            <p style={{
                                marginTop: 16, padding: "24px", borderLeft: "2px solid var(--color-mid-green)",
                                fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--color-text-dark)", background: "var(--color-cream)"
                            }}>
                                Elegimos este material porque entendemos que la piel es el órgano más grande del cuerpo. <strong>Todo lo que la toca, importa.</strong>
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
