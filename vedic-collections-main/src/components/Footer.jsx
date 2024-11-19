import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-2 space-y-2 text-center w-full">
      <p>© 2024 Vedic Collections. All Rights Reserved.</p>
      <div className="flex justify-center gap-4">
        <FaFacebook size={22} />
        <FaInstagram size={22} />
        <FaYoutube size={22} />
      </div>
    </footer>
  );
}
