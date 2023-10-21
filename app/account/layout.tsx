import React from "react";
export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="">{children}</div>
    </section>
  );
}
