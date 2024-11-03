import Image from "next/image";
import { CompetencyTable } from "@/components/ui/competency-table";


export default function Home() {
  return (
    <div className="grid items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">HR Dashboard</h1>
      {/* <p className="text-center sm:text-left">App to manage employee competencies</p> */}
      <CompetencyTable />
    </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
