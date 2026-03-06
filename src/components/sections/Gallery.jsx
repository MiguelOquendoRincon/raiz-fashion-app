import { GALLERY_ITEMS } from "../../data/gallery";

export default function Gallery() {
    return (
        <section id="gallery" style={{ padding: "var(--section-pad)", background: "var(--color-cream)" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 12 }}>LOOKBOOK</p>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400 }}>Galería</h2>
                    <div style={{ width: 48, height: 1, background: "var(--color-dark-green)", margin: "20px auto 0" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                    {GALLERY_ITEMS.map((img, i) => (
                        <div key={i} style={{ gridColumn: img.span, overflow: "hidden", borderRadius: 4, cursor: "pointer" }}
                            onMouseEnter={e => {
                                const imgEl = e.currentTarget.querySelector("img");
                                if (imgEl) {
                                    imgEl.style.transform = "scale(1.05)";
                                    imgEl.style.filter = "brightness(0.85)";
                                }
                            }}
                            onMouseLeave={e => {
                                const imgEl = e.currentTarget.querySelector("img");
                                if (imgEl) {
                                    imgEl.style.transform = "scale(1)";
                                    imgEl.style.filter = "brightness(1)";
                                }
                            }}
                        >
                            <img src={img.img} alt={`Gallery ${i + 1}`}
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease, filter 0.5s ease" }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
