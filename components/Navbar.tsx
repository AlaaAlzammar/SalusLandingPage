import Link from "next/link";

const links = [
  { href: "#", label: "الرئيسية", active: true },
  { href: "#ForUsers", label: "المستخدمين" },
  { href: "#ForPharmacist", label: "الصيدليات" },
  { href: "#HowItWorks", label: "كيف نعمل" },
  { href: "#", label: "تواصل معنا" },
];

export default function Navbar({
  variant = "solid",
}: {
  variant?: "solid" | "overlay";
}) {
  const isOverlay = variant === "overlay";

  return (
    <header className={isOverlay ? "absolute inset-x-0 top-0 z-20" : "relative z-20"}>
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
         <span
    className={`text-2xl tracking-tight ${
      isOverlay ? "text-cream" : "text-moss-800"
    }`}
  >
    SALUS
  </span>
  <div className="stage lockup-h">
    <img
      src="/logos/salus-logo-light.svg"
      alt="SALUS"
      className={isOverlay ? "salus-icon salus-icon-overlay" : "salus-icon"}
    />
   
  </div>

 
</Link>

        {/* Links */}
        <ul
          className={`hidden items-center gap-8 text-sm md:flex ${
            isOverlay ? "text-cream/85" : "text-moss-700"
          }`}
        >
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={
                  link.active
                    ? `border-b-2 pb-1 font-medium ${
                        isOverlay
                          ? "border-cream text-cream"
                          : "border-moss-700 text-moss-800"
                      }`
                    : `pb-1 transition ${
                        isOverlay ? "hover:text-cream" : "hover:text-moss-800"
                      }`
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          <button
            className={
              isOverlay
                ? "flex items-center gap-2 rounded-full  hover:bg-moss-800 px-5 py-2.5 text-sm font-medium hover:text-cream transition bg-cream/95 text-moss-800"
                : "flex items-center gap-2 rounded-full bg-moss-700 px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-moss-800"
            }
          >
           تحميل التطبيق
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
