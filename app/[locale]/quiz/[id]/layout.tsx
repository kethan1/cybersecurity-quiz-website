import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Question ${id} - Privacy Quiz for Kids`,
    description: "Learn how to protect your personal information online",
  };
}

export default function Page({ children }: { children: React.ReactNode }) {
  return children;
}
