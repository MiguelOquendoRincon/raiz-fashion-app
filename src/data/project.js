import model1 from "../assets/model-11.jpeg";
import model5 from "../assets/superior_interactivo.png";

export const PROJECT_DETAILS = {
    title: "Modularidad Lúdica",
    subtitle: "Diseño para el Crecimiento y el Juego",
    description: "Una prenda diseñada para adaptarse a la energía y el crecimiento de los niños. Este conjunto rompe con la rigidez de la moda tradicional, permitiendo que el usuario interactúe con su propia ropa.",
    features: [
        {
            id: "modular-pants",
            title: "Pantalón Transformable",
            desc: "Diseñado con un sistema de unión que permite separar las botas del cuerpo principal. Pasa de un pantalón largo a un short fresco en segundos, adaptándose al clima y al tipo de actividad.",
            img: model1.src || model1
        },
        {
            id: "interactive-top",
            title: "Superior Interactivo",
            desc: "La parte superior funciona como un lienzo de juego. Incluye figuras geométricas adheribles y desprendibles que permiten al niño personalizar su prenda, fomentando la creatividad y la motricidad fina.",
            img: model5.src || model5
        }
    ],
    concept: "La 'moda desarmable' no solo extiende la vida útil de la prenda, sino que convierte el acto de vestirse en una experiencia de aprendizaje y diversión."
};
