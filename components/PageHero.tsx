import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <div
      className="relative bg-primary text-white py-10 px-4 overflow-hidden"
      style={{ backgroundImage: "url('/images/page.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <nav className="text-sm text-gray-300 flex flex-wrap gap-1 items-center">
          {breadcrumb.map((item, index) => (
            <span key={item.href} className="flex items-center gap-1">
              {index > 0 && <span className="text-gray-400">›</span>}
              {index === breadcrumb.length - 1 ? (
                <span className="text-accent">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}

