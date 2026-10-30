import { Wave } from "./icons";

export default function PageHero({ title, text, image, imageAlt = "", children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-light via-brand/60 to-brand">
      <div className="mx-auto grid min-h-[380px] max-w-[1440px] items-center gap-8 px-4 pb-20 pt-10 md:min-h-[520px] md:grid-cols-2 md:px-8 md:pb-36 md:pt-16 lg:min-h-[600px]">
        <div className="motion-safe:animate-fade-up">
          <h1 className="text-3xl font-extrabold uppercase leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {text && <p className="mt-5 max-w-lg text-sm md:text-lg">{text}</p>}
          {children}
        </div>
        {image && (
          <img
            src={image}
            alt={imageAlt}
            className="mx-auto max-h-[300px] w-auto object-contain motion-safe:animate-float md:max-h-[500px] md:justify-self-end"
          />
        )}
      </div>
      <Wave />
    </section>
  );
}