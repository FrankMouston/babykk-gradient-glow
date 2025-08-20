import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center p-8">
      <main className="text-center space-y-12 max-w-2xl mx-auto">
        {/* Main Title */}
        <header>
          <h1 className="text-8xl md:text-9xl font-bold text-foreground tracking-tight">
            BABYKK
          </h1>
        </header>

        {/* Action Buttons */}
        <section className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="pink" 
            size="lg"
            className="px-12 py-6 text-lg font-bold tracking-wide uppercase"
          >
            BUY
          </Button>
          
          <Button 
            variant="purple" 
            size="lg"
            className="px-12 py-6 text-lg font-bold tracking-wide uppercase"
          >
            FREE PREVIEWS
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;