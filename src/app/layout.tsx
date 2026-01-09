import { ImageProvider } from "@/context/Context";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ImageProvider>{children}</ImageProvider>
      </body>
    </html>
  );
}
