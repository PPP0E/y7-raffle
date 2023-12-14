import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import esLogo from "@/public/es-logo.png";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Year 7 Raffle System",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="hidden lg:block">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
