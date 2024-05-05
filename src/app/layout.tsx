import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: `Portfolio | Pulkit Singhal`,
	description: `Pulkit Singhal's Portfolio`,
	icons: {
		icon: {
			url: "/next.svg",
			type: "image/svg",
		},
		shortcut: { url: "/next.svg", type: "image/svg" },
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className}`}>
				<main>
					{children}
				</main>
			</body>
		</html>
	);
}
