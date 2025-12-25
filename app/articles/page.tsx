import Link from "next/link";
import Image from "next/image";

export default function ArticlesPage() {
  // Add more articles here as you create them
  const articles = [
    {
      slug: "c-language-enduring-legacy",
      title: "The Enduring Legacy of C: Why Half a Century Later, We Still Can't Live Without It",
      description: "From Bell Labs to your smartphone: discover how C became the invisible foundation of modern computing and why it remains indispensable after 50+ years.",
      date: "December 2025",
      image: "/articles/c.png",
      tags: ["C", "Systems Programming", "History", "Architecture"]
    },
    {
      slug: "tap-to-pay-security",
      title: "Why Your Tap-to-Pay Card Is Way Smarter Than You Think",
      description: "A deep dive into the security and technology behind contactless payment cards.",
      date: "December 2025",
      image: "/articles/NFC_article.png",
      tags: ["NFC", "Payments", "Security"]
    },
    {
      slug: "the-hidden-radio-inside-your-pocket",
      title: "The Hidden Radio Inside Your Pocket: Why Your Phone Can't Access Its Own Hardware",
      description: "A deep technical exploration of RF hardware lockdown, regulatory compliance, and the architecture preventing custom wireless transmission on modern smartphones.",
      date: "December 2024",
      image: "/articles/radio_article.png",
      tags: ["RF Security", "Android", "Hardware", "Regulation"]
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">Articles</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map(article => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg hover:shadow-2xl transition-shadow">
            <div className="relative w-full aspect-[16/9] bg-gray-100 dark:bg-gray-900">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority={article.slug === "the-hidden-radio-inside-your-pocket"}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                {article.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-2">
                {article.tags && article.tags.map(tag => (
                  <span key={tag} className="inline-block bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{article.date}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
