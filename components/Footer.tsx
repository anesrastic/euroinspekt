export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p className="font-semibold text-lg">Euro Inspekt d.o.o. Sarajevo</p>
            <p className="text-gray-300 text-sm mt-1">
              Hamdije Kreševljakovića 16-18, 71000 Sarajevo
            </p>
          </div>
          <div className="text-sm text-gray-300">
            <p>inspekt@bih.net.ba</p>
            <p>+387 33 20 66 99</p>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-6 pt-4 text-center text-sm text-gray-400">
          Copyright © 2021 Euro Inspekt d.o.o. Sarajevo. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
