export default function ProcessSteps() {
  const steps = [
    { num: "1", title: "Understand", sub: "Requirements" },
    { num: "2", title: "Documentation", sub: "& Paperwork" },
    { num: "3", title: "Packing", sub: "& Checking" },
    { num: "4", title: "Safe Loading", sub: "& Unloading" },
    { num: "5", title: "Customs", sub: "Clearance" },
    { num: "6", title: "Delivery &", sub: "Updates" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between relative">
      {/* Connecting line for desktop */}
      <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-gray-200 z-0" />

      {steps.map((step, idx) => (
        <div
          key={idx}
          className="relative z-10 flex flex-col items-center text-center w-full md:w-auto mb-8 md:mb-0"
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm ${
              idx === 0
                ? "bg-amber-400 text-white"
                : "bg-[#e5efff] text-[#3f679e]"
            }`}
          >
            {step.num}
          </div>
          <div className="text-xs font-bold text-[#1c2539] uppercase tracking-wide">
            {step.title}
            <br />
            {step.sub}
          </div>
        </div>
      ))}
    </div>
  );
}
