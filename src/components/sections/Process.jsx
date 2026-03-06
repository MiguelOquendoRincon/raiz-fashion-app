import { PROCESS_STEPS } from "../../data/process";

export default function Process() {
    return (
        <section id="process" style={{ padding: "var(--section-pad)", background: "var(--color-dark-green)" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>DETRÁS DEL DISEÑO</p>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff", fontWeight: 400 }}>El Proceso</h2>
                    <div style={{ width: 48, height: 1, background: "rgba(255,255,255,0.4)", margin: "20px auto 0" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
                    {PROCESS_STEPS.map(s => (
                        <div key={s.num}>
                            <p style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", color: "rgba(255,255,255,0.15)", fontWeight: 700, marginBottom: 8 }}>{s.num}</p>
                            <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.4)", marginBottom: 16 }} />
                            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#fff", fontWeight: 400, marginBottom: 12 }}>{s.title}</h3>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
