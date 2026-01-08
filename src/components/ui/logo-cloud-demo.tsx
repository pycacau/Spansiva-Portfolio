"use client";

import { LogoCloud } from "@/components/ui/logo-cloud-4";

const logos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", alt: "NVIDIA" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg", alt: "AMD" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg", alt: "Intel" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg", alt: "ASUS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/1/13/Msi_logo.svg", alt: "MSI" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Corsair-logo.svg", alt: "Corsair" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/55/HyperX_Logo.svg", alt: "HyperX" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Razer_snake_logo.svg", alt: "Razer" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Logitech_logo.svg", alt: "Logitech" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg", alt: "HP" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Canon_wordmark.svg", alt: "Canon" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Epson_logo.svg", alt: "Epson" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", alt: "Samsung" },
];

export default function LogoCloudDemo() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col justify-center px-4">
      <h2 className="mb-6 text-center">
        <span className="block text-neutral-400 text-sm">
          Trusted by industry leaders
        </span>
        <span className="text-3xl font-black text-white">
          Technology & Hardware Partners
        </span>
      </h2>

      <LogoCloud logos={logos} />
    </div>
  );
}
