import model9 from "../../assets/model-9.jpeg";
import model10 from "../../assets/model-10.jpeg";

export default function Material() {
    return (
        <section id="material" style={{ padding: "var(--section-pad)", background: "#fff" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 100, alignItems: "center" }}>
                    {/* Image */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 20,
                        position: "relative"
                    }}>
                        <img src={model9.src || model9} alt="Detalle" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: 4 }} />
                        <img src={model10.src || model10} alt="Fibra" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: 4, marginTop: 40 }} />
                    </div>

                    {/* Text */}
                    <div>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 16, textTransform: "uppercase" }}>Material Natural</p>
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400, lineHeight: 1.2, marginBottom: 28 }}>
                            ¿Por qué algodón orgánico?
                        </h2>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.8 }}>
                            <p style={{ marginBottom: 20 }}>
                                El algodón orgánico se cultiva sin pesticidas ni químicos agresivos que puedan afectar la piel o contaminar el suelo.
                                Esto permite obtener una fibra <strong>más limpia, más suave y más segura</strong>, ideal para niños con dermatitis atópica o piel altamente sensible.
                            </p>
                            <p style={{ marginBottom: 20 }}>
                                Al elegir algodón orgánico, reducimos el impacto ambiental y promovemos prácticas agrícolas responsables que protegen el agua, la tierra y las comunidades productoras.
                            </p>
                            <p style={{
                                color: "var(--color-dark-green)",
                                fontFamily: "var(--font-serif)",
                                fontSize: "1.2rem",
                                fontStyle: "italic",
                                marginTop: 32,
                                borderLeft: "2px solid var(--color-mid-green)",
                                paddingLeft: 24
                            }}>
                                "Elegimos este material porque entendemos que la piel es el órgano más grande del cuerpo. Todo lo que la toca, importa."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
