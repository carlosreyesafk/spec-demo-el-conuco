export const metadata = {
  title: "El Conuco | Comida Criolla · Gazcue, Santo Domingo",
  description:
    "El Conuco — restaurante de comida criolla dominicana en Calle Casimiro de Moya No. 152, Gazcue, Santo Domingo. Tradición desde 1991. Reserva: (809) 686-0129.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
