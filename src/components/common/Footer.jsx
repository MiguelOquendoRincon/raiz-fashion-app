export default function Footer() {
    return (
        <footer style={{ background: "var(--color-dark-green)", padding: "48px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src="/assets/brand_logo.png" alt="Raíz" style={{ height: 40, width: "auto", filter: "brightness(0) invert(1)" }} />
                <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "#fff", letterSpacing: 2, fontWeight: 500 }}>RAÍZ</span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 1, alignItems: "center", textAlign: "center" }}>© 2026 · Diseño Consciente · Piel & Tierra <br /> Derly Yuliana Barrios Florez · Karol Julieth Márquez Camacho</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 1 }}>Hecho con ♥ </p>
        </footer>
    );
}
