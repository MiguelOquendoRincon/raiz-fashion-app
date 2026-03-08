export default function Footer() {
    return (
        <footer style={{ background: "var(--color-dark-green)", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "#fff", letterSpacing: 3 }}>✦ RAÍZ</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 1, alignItems: "center", textAlign: "center" }}>© 2026 · Diseño Consciente · Piel & Tierra <br /> Derly Yuliana Barrios Flores · Karol Julieth Márquez Camacho</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 1 }}>Hecho con ♥ </p>
        </footer>
    );
}
