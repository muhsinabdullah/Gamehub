import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 via-secondary/90 to-primary/90 p-10 md:p-16 text-white shadow-xl">
          
          {/* Decorative blur */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Text */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Join the Gamehub Newsletter
              </h2>
              <p className="text-white/80 text-lg">
                Get updates on new indie games, developer stories, and exclusive releases.
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button
                type="submit"
                className="btn btn-neutral h-12 px-8 rounded-xl flex items-center gap-2"
              >
                Subscribe
                <Send size={18} />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
