import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Result - Privacy Quiz for Kids",
  description: "Learn how to protect your personal information online",
};

export default function Page({ children }: { children: React.ReactNode }) {
  return children;
}
