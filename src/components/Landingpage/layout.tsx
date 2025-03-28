import { Outlet } from "@tanstack/react-router";
import Header from "./Header";
import FooterIndex from "./Footer";

export default function LandingPageLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="mt-24">
        <FooterIndex />
      </footer>
    </>
  );
}
