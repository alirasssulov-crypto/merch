import IdeaForm from "../shared/ui/IdeaForm";

export default function SimplePage({ title }) {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-light to-brand/70">
        <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-20">
          <h1 className="text-3xl font-extrabold uppercase md:text-5xl">{title}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-10 md:px-8">
        <h2 className="mb-6 text-xl font-bold md:text-3xl">У вас своя уникальная идея по разработке мерча?</h2>
        <IdeaForm />
      </section>
    </>
  );
}