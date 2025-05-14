export const metadata = {
  title: "Calculadora: ¿Cuántos vasos de agua debes tomar al día? | Método Frank Suarez - aquaMind",
  description: "Calcula exactamente cuántos vasos de agua necesitas según tu peso con nuestra calculadora interactiva. Basado en el método de Frank Suarez (peso ÷ 7). Recomendaciones personalizadas y científicas para tu hidratación diaria.",
  keywords: [
    "calculadora de agua", 
    "vasos de agua al día", 
    "método Frank Suarez hidratación", 
    "cuánta agua debo tomar", 
    "calculadora hidratación",
    "agua en kilos o libras",
    "agua según peso corporal",
    "vasos de 250ml diarios",
    "hidratación personalizada",
    "calcular consumo de agua"
  ],
  openGraph: {
    title: "Calculadora: ¿Cuántos vasos de agua debes tomar al día? | Método Frank Suarez",
    description: "Calcula la cantidad exacta de agua que necesitas según tu peso con nuestra calculadora interactiva. Método científico de Frank Suarez: peso (kg) ÷ 7 = vasos diarios.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559839914-17aae19cec71",
        width: 800,
        height: 600,
        alt: "Calculadora de vasos de agua diarios",
      }
    ],
    type: "website",
    locale: "es_ES",
    siteName: "aquaMind - Hidratación Consciente",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de hidratación personalizada | Método Frank Suarez",
    description: "Calcula cuánta agua necesitas exactamente según tu peso corporal. Descubre tu hidratación ideal con nuestra calculadora.",
    images: ["https://images.unsplash.com/photo-1559839914-17aae19cec71"],
  },
  alternates: {
    canonical: "https://aquamind.com/cuantos-vasos-de-agua-al-dia",
  }
};

export default function VasosAguaLayout({ children }) {
  return children;
} 