import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  // Replace with your Discord invite link
  const discordInviteLink = "https://discord.gg/wfeGVqzF";

  return (
    <div
      className="min-h-screen relative text-white font-inter"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lightning-2295075_1920.jpg-eSUEKTHGaUj8yfuPDl7eW0W3TQwYJv.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Overlay for better text readability */}
      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="glass fixed w-full z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link className="flex items-center space-x-2" href="#">
              <Sparkles className="h-8 w-8 text-blue-400" />
              <span className="font-space-grotesk font-bold text-xl">
                Goremu AI
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                className="hover:text-blue-400 transition-colors"
                href="#how-it-works"
              >
                How It Works
              </Link>
              <Link
                className="hover:text-blue-400 transition-colors"
                href="#features"
              >
                Features
              </Link>
            </nav>
            <Link href={discordInviteLink}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Goremu
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-space-grotesk text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Bring Your Images to Life with Goremu AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform static images into mesmerizing animations using the
                power of Goremu. Just upload, prompt, and watch the magic
                unfold.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={discordInviteLink}>
                  <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white">
                    Animate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bot className="h-8 w-8 text-blue-400" />,
                  title: "Upload Your Image",
                  description: "Share your image in our Discord channel",
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-purple-400" />,
                  title: "Add Your Prompt",
                  description: "Describe how you want your image animated",
                },
                {
                  icon: <Zap className="h-8 w-8 text-blue-400" />,
                  title: "Watch It Animate",
                  description: "See your image come to life with AI magic",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 text-center animate-float"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-space-grotesk text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="glass rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
              <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Images?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our Discord community and start creating amazing animations
                with AI.
              </p>
              <Link href={discordInviteLink}>
                <Button className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Join Goremu Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Goremu. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
