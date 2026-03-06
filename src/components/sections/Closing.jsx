export default function Closing() {
    return (
        <section id="closing" style={{ padding: "120px 0", background: "var(--color-cream)" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)", textAlign: "center" }}>
                <h2 style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    color: "var(--color-dark-green)",
                    fontWeight: 400,
                    letterSpacing: 2,
                    lineHeight: 1.2
                }}>
                    Cuidar la piel. Cuidar la tierra. <br />Sembrar futuro.
                </h2>
                <div style={{ width: 64, height: 1, background: "var(--color-mid-green)", margin: "40px auto 0" }} />
            </div>
        </section>
    );
}
