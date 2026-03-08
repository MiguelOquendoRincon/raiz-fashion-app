import { Reveal } from "../common/Reveal";
import { PROCESS_STEPS } from "../../data/process";

export default function Process() {
    return (
        <section id="process" style={{ padding: "var(--section-pad)", background: "var(--color-dark-green)" }}>
            <div className="section-container">
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <Reveal delay={0.1} width="100%">
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.55)", marginBottom: 12, textTransform: "uppercase" }}>Detrás del diseño</p>
                    </Reveal>
                    <Reveal delay={0.2} width="100%">
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff", fontWeight: 400 }}>El Proceso</h2>
                    </Reveal>
                    <Reveal delay={0.3} width="100%">
                        <div style={{ width: 48, height: 1, background: "rgba(255,255,255,0.4)", margin: "20px auto 0" }} />
                    </Reveal>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
                    {PROCESS_STEPS.map((s, idx) => (
                        <Reveal key={s.num} delay={idx * 0.1} y={30} width="100%">
                            <div>
                                <p style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", color: "rgba(255,255,255,0.15)", fontWeight: 700, marginBottom: 8 }}>{s.num}</p>
                                <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.4)", marginBottom: 16 }} />
                                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#fff", fontWeight: 400, marginBottom: 12 }}>{s.title}</h3>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>{s.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
