import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "../common/Reveal";
import { GALLERY_ITEMS } from "../../data/gallery";

export default function Gallery() {
    return (
        <section id="gallery" style={{ padding: "var(--section-pad)", background: "var(--color-cream)" }}>
            <div className="section-container">
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <Reveal delay={0.1} width="100%">
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 12, textTransform: "uppercase" }}>Visuales</p>
                    </Reveal>
                    <Reveal delay={0.2} width="100%">
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400 }}>Galería de Proceso</h2>
                    </Reveal>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="gallery-grid">
                    {GALLERY_ITEMS.map((item, idx) => (
                        <Reveal key={item.img} delay={idx * 0.1} y={30} width="100%">
                            <motion.div
                                whileHover={{ scale: 0.98 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    gridColumn: `span ${item.span || 1}`,
                                    aspectRatio: item.span === 2 ? "2/1" : "1/1",
                                    borderRadius: 4, overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    position: "relative"
                                }}
                                className="gallery-item"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ width: "100%", height: "100%", position: "relative" }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={`Gallery item ${idx + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        style={{ objectFit: "cover" }}
                                        quality={75}
                                    />
                                </motion.div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
