import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "../common/Reveal";
import { COLLECTION_ITEMS } from "../../data/collection";

export default function Collection() {
    return (
        <section id="collection" style={{ padding: "var(--section-pad)", background: "#fff" }}>
            <div className="section-container">
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <Reveal delay={0.1} width="100%">
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 12, textTransform: "uppercase" }}>Diseño de Modas</p>
                    </Reveal>
                    <Reveal delay={0.2} width="100%">
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400 }}>La Colección</h2>
                    </Reveal>
                    <Reveal delay={0.3} width="100%">
                        <div style={{ width: 48, height: 1, background: "var(--color-dark-green)", margin: "20px auto 0" }} />
                    </Reveal>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
                    {COLLECTION_ITEMS.map((item, idx) => (
                        <Reveal key={item.id} delay={idx * 0.15} y={40} width="100%">
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ cursor: "pointer" }}
                            >
                                <div style={{
                                    overflow: "hidden",
                                    borderRadius: 4,
                                    marginBottom: 20,
                                    aspectRatio: "3/4",
                                    boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                                    position: "relative"
                                }}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ width: "100%", height: "100%", position: "relative" }}
                                    >
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            style={{ objectFit: "cover" }}
                                            quality={80}
                                        />
                                    </motion.div>
                                </div>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: 2, color: "var(--color-mid-green)", marginBottom: 8 }}>0{item.id}</p>
                                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-text-dark)", fontWeight: 400, marginBottom: 10 }}>{item.title}</h3>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--color-text-mid)", lineHeight: 1.7 }}>{item.desc}</p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
