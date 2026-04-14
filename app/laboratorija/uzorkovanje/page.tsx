import LabPage from "@/components/LabPage";

const images = ["/images/uzorkovanje/uzorkovanje.png"];

const description = (
  <>
    <h2 className="text-2xl font-bold text-primary mb-4">
      Uzorkovanje hrane i vode
    </h2>
    <p className="text-gray-700 mb-4">
      Naši stručnjaci provode profesionalno uzorkovanje hrane i vode na terenu
      u skladu sa međunarodnim standardima uzorkovanja. Pravilno uzorkovanje
      je preduslov za pouzdane laboratorijske rezultate.
    </p>
    <ul className="space-y-3">
      {[
        "Uzorkovanje vode za piće iz distributivnih mreža i bunara",
        "Uzorkovanje sirovina u prehrambenim pogonima",
      ].map((item) => (
        <li key={item} className="flex gap-3 text-gray-700">
          <span className="mt-1 w-2 h-2 flex-shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
      <p className="font-medium text-primary mb-1">Akreditacija</p>
      <p>BAS EN ISO/IEC 17025:2018</p>
      <p>Institut za akreditaciju BiH (BATA), od 2005. godine</p>
    </div>
  </>
);

export default function UzorkovanjenPage() {
  return (
    <LabPage
      title="Uzorkovanje hrane i vode"
      breadcrumbLabel="Uzorkovanje"
      breadcrumbHref="/laboratorija/uzorkovanje"
      images={images}
      description={description}
    />
  );
}
