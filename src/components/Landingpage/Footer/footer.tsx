import { useNavigate } from "@tanstack/react-router";

export default function Footer() {
  const navigate = useNavigate({ from: "/" });
  return (
    <div className="flex flex-col items-center gap-y-4 md:flex-row md:py-14 md:justify-between md:items-center">
      <div>
        <p>© 2025 EcoTravels. All Rights Reserved</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row md:items-center gap-x-12 select-none">
        <div className="cursor-pointer">
          <p>Terms of Service</p>
        </div>
        <div className="cursor-pointer">
          <p>Privacy Policy</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate({ to: "/faq" });
          }}
        >
          <p>FAQs</p>
        </div>
      </div>
    </div>
  );
}
