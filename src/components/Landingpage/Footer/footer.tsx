import { useNavigate } from "@tanstack/react-router";

export default function Footer() {
  const navigate = useNavigate({ from: "/" });
  return (
    <div className="flex flex-row py-14 justify-between items-center">
      <div>
        <p>© 2025 EcoTravels. All Rights Reserved</p>
      </div>
      <div className="flex flex-row items-center gap-x-12">
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
