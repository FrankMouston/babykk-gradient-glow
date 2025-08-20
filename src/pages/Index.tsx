import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center p-8">
      <main className="text-center space-y-12 max-w-2xl mx-auto">
        {/* Main Title */}
        <header>
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-text bg-[length:400%_400%] bg-clip-text text-transparent animate-gradient-shift tracking-tight">
            BABYKK
          </h1>
        </header>

        {/* Action Buttons */}
        <section className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://t.me/babykk010" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              variant="pink" 
              size="lg"
              className="px-12 py-6 text-lg font-bold tracking-wide uppercase"
            >
              BUY
            </Button>
          </a>
          
          <a 
            href="https://t.me/babykk010" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              variant="purple" 
              size="lg"
              className="px-12 py-6 text-lg font-bold tracking-wide uppercase"
            >
              FREE PREVIEWS
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Index;