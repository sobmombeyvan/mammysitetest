import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogGrid() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,26,51,0.06)] transition hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase text-white">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-[11px] text-gray-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-navy">{post.title}</h3>
                <p className="mb-4 text-xs leading-relaxed text-gray-500">{post.excerpt}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-gold transition hover:text-gold-dark"
                >
                  Lire la suite
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
