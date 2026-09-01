import { MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Info Card */}
      <div className="bg-[#242f46] p-8 md:p-10 rounded shadow-md flex flex-col space-y-8 lg:min-h-[500px] justify-center">
        {/* Mr. Raajeysh */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-amber-400 tracking-wide">
            Mr. RAAJEYSH K C
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              <span className="text-gray-400 inline-block w-16">Phone:</span>{" "}
              9840019341 / 9840789343
            </p>
            <div className="flex items-start">
              <span className="text-gray-400 inline-block w-16">Email:</span>
              <div className="flex flex-col space-y-1">
                <a
                  href="mailto:rajesh3393@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  rajesh3393@gmail.com
                </a>
                <a
                  href="mailto:raajeyshkc@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  raajeyshkc@gmail.com
                </a>
                <a
                  href="mailto:sales@mershiplog.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  sales@mershiplog.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mrs. Shoba */}
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-lg font-bold mb-4 text-amber-400 tracking-wide">
            Mrs. SHOBA RAAJEYSH
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              <span className="text-gray-400 inline-block w-16">Phone:</span>{" "}
              9840789341 / 9840789342
            </p>
            <div className="flex items-start">
              <span className="text-gray-400 inline-block w-16">Email:</span>
              <div className="flex flex-col space-y-1">
                <a
                  href="mailto:accounts@mershiplog.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  accounts@mershiplog.com
                </a>
                <a
                  href="mailto:shoba570@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  shoba570@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Office Address */}
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-lg font-bold mb-4 text-white tracking-wide">
            Office
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              <span className="text-gray-400 inline-block w-16">Tel:</span>{" "}
              044-42059383
            </p>
            <div className="flex items-start">
              <span className="text-gray-400 inline-block w-16 mt-1">
                <MapPin className="w-4 h-4" />
              </span>
              <span className="leading-relaxed">
                No. 269/1 JSJ Complex, B1, 2nd Fl,
                <br />
                Thambu Chetty St, Chennai 600 001
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="relative block w-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl group border border-white/10">
        <iframe
          src="https://maps.google.com/maps?q=13.0986493,80.2898327&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "400px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mercury Shipping Office Location Map — No. 269/1 JSJ Complex, Chennai"
        />
        <a
          href="https://maps.app.goo.gl/WcmXGTsWWGNvfWUi8"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-amber-400 text-[#1c2539] px-4 py-2 rounded font-bold text-sm shadow-lg hover:bg-amber-500 transition-colors z-10"
        >
          Visit Us
        </a>
      </div>
    </div>
  );
}
