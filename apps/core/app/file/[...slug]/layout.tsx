import Head from "@components/gitHead/head_details";
export default function CoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <>
      <Head data={params.slug} />
      <main>{children}</main>
    </>
  );
}
