import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: `Portfolio | Pulkit Singhal`,
	description: `Pulkit Singhal's Portfolio`,
	icons: {
		icon: {
			url: "/assets/next.svg",
			type: "image/svg",
		},
		shortcut: { url: "/assets/next.svg", type: "image/svg" },
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
				<Toaster />
			</body>
		</html>
	);
}
