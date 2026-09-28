const stats = [
  { value: "+50K", label: "دواء متوفر" },
  { value: "+1.2K", label: "صيدلية" },
  { value: "+10K", label: "مستخدم " },
];

export default function StatsBanner() {
  return (
    <section className="grid bg-[#FAF9F3] md:grid-cols-[minmax(0,1fr)]">

     

      <div className="flex flex-col justify-between px-6 py-6 md:flex-row md:items-center md:px-14">
        <div className="justify-items-center items-center">
          <p className="text-sm text-moss-500">
            أرقام تتحدث عن نفسها
          </p>
          <h3 className="mt-2 text-2xl font-bold text-moss-800 md:text-3xl">
            مجتمع ينمو بثقة
          </h3>
        </div>
        <div className="flex flex-wrap gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-moss-700 md:text-3xl">
                {s.value}
              </p>
              <p className="text-sm text-moss-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
