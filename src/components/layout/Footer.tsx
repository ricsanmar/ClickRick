import { Mail, MapPin } from "lucide-react";
import {
  FOOTER_SERVICES,
  FOOTER_COMPANY,
  FOOTER_CONTACT,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-dark-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center">
              <span
                className="text-xl font-bold text-white tracking-tight leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Click&nbsp;
              </span>
              <img
                src="/logo.png"
                alt="R"
                width={22}
                height={22}
                className="relative top-[1px]"
              />
              <span
                className="text-xl font-bold text-white tracking-tight leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ick
              </span>
            </a>
            <p className="mt-4 text-sm text-dark-500 max-w-xs leading-relaxed">
              Soluciones de inteligencia artificial que impulsan el crecimiento
              de tu negocio.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-400 mb-5">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-sm text-dark-500 transition-colors hover:text-dark-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-400 mb-5">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-dark-500 transition-colors hover:text-dark-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-400 mb-5">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="flex items-center gap-2.5 text-sm text-dark-500 transition-colors hover:text-dark-300"
                >
                  <Mail size={14} className="text-dark-600 flex-shrink-0" />
                  {FOOTER_CONTACT.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-dark-500">
                  <MapPin size={14} className="text-dark-600 flex-shrink-0" />
                  {FOOTER_CONTACT.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-600">
            &copy; {new Date().getFullYear()} Click Rick. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-dark-600 hover:text-dark-400 transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-xs text-dark-600 hover:text-dark-400 transition-colors">
              T&eacute;rminos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
