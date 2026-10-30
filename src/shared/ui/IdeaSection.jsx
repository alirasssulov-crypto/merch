import IdeaForm from "./IdeaForm";
import { Bulb } from "./icons";

export default function IdeaSection() {
  return (
    <section className="mt-6 bg-gradient-to-b from-brand-light/70 to-brand-light/20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-12 md:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <div>
          <h2 className="max-w-md text-xl font-bold md:text-3xl">
            У вас своя УНИКАЛЬНАЯ идея по разработке мерча?
          </h2>
          <p className="mt-3 max-w-md text-sm text-brand-dark/70">
            Расскажите нам о вашей задаче, и мы предложим решение, материалы и сроки производства.
          </p>
        </div>
        <div className="hidden lg:block">
          <Bulb />
        </div>
        <IdeaForm />
      </div>
    </section>
  );
}