import { COLLECTION_ITEMS } from "../../data/collection";

export default function Collection() {
    return (
        <section id="collection" style={{ padding: "var(--section-pad)", background: "#fff" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 12, textTransform: "uppercase" }}>Diseño de Modas</p>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400 }}>La Colección</h2>
                    <div style={{ width: 48, height: 1, background: "var(--color-dark-green)", margin: "20px auto 0" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
                    {COLLECTION_ITEMS.map(item => (
                        <div key={item.id} style={{ cursor: "pointer" }}
                            onMouseEnter={e => {
                                const img = e.currentTarget.querySelector("img");
                                if (img) img.style.transform = "scale(1.04)";
                            }}
                            onMouseLeave={e => {
                                const img = e.currentTarget.querySelector("img");
                                if (img) img.style.transform = "scale(1)";
                            }}
                        >
                            <div style={{ overflow: "hidden", borderRadius: 4, marginBottom: 20, aspectRatio: "3/4" }}>
                                <img src={`https://placehold.co/400/533/4A6741/F5F0E8?text=Pieza+0${item.id}`} alt={item.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }} />
                            </div>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: 2, color: "var(--color-mid-green)", marginBottom: 8 }}>0{item.id}</p>
                            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-text-dark)", fontWeight: 400, marginBottom: 10 }}>{item.title}</h3>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--color-text-mid)", lineHeight: 1.7 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
