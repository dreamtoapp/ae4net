export default function BrochureLoading() {
  return (
    <div className="pdf-container">
      {/* Loading Page 1 - Cover */}
      <div className="pdf-page relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy animate-pulse">
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center">
          <div className="w-52 h-52 bg-white/10 rounded-full mb-10" />
          <div className="w-48 h-8 bg-white/10 rounded-full mb-8" />
          <div className="w-96 h-16 bg-white/10 rounded-2xl mb-6" />
          <div className="w-full max-w-4xl space-y-4 mb-10">
            <div className="w-full h-4 bg-white/10 rounded-full" />
            <div className="w-3/4 h-4 bg-white/10 rounded-full mx-auto" />
          </div>
        </div>
      </div>

      {/* Loading Page 2 - Stats */}
      <div className="pdf-page p-12 flex flex-col bg-gradient-to-br from-brand-light-gray to-background animate-pulse">
        <div className="text-center mb-12">
          <div className="w-32 h-6 bg-muted rounded-full mx-auto mb-4" />
          <div className="w-96 h-12 bg-muted rounded-2xl mx-auto mb-6" />
          <div className="w-3/4 h-4 bg-muted rounded-full mx-auto mb-3" />
          <div className="w-2/3 h-4 bg-muted rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 gap-6 flex-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative overflow-hidden">
              <div className="bg-muted p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="w-32 h-12 bg-muted-foreground/20 rounded-xl mb-3" />
                <div className="h-1 w-16 bg-muted-foreground/20 rounded-full mb-3" />
                <div className="w-24 h-3 bg-muted-foreground/20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Page 3 - Benefits */}
      <div className="pdf-page p-12 flex flex-col bg-background animate-pulse">
        <div className="text-center mb-10">
          <div className="w-32 h-6 bg-muted rounded-full mx-auto mb-4" />
          <div className="w-64 h-10 bg-muted rounded-2xl mx-auto mb-3" />
          <div className="w-96 h-4 bg-muted rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 gap-6 flex-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-muted p-7 rounded-2xl border-2 border-border">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mr-4" />
                <div className="w-32 h-6 bg-muted-foreground/20 rounded-full mt-3" />
              </div>
              <div className="space-y-2">
                <div className="w-full h-3 bg-muted-foreground/20 rounded-full" />
                <div className="w-3/4 h-3 bg-muted-foreground/20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Page 4 - Services */}
      <div className="pdf-page p-12 flex flex-col bg-gradient-to-br from-brand-light-gray to-muted animate-pulse">
        <div className="text-center mb-10">
          <div className="w-32 h-6 bg-muted rounded-full mx-auto mb-4" />
          <div className="w-64 h-10 bg-muted rounded-2xl mx-auto mb-2" />
          <div className="w-96 h-4 bg-muted rounded-full mx-auto" />
        </div>

        <div className="space-y-6 flex-1">
          {[1, 2].map((i) => (
            <div key={i} className="bg-background p-8 rounded-2xl border-l-4 border-primary">
              <div className="mb-4">
                <div className="w-24 h-6 bg-primary/20 rounded-full mb-3" />
                <div className="w-48 h-8 bg-muted rounded-xl mb-3" />
                <div className="w-32 h-10 bg-muted rounded-xl mb-2" />
                <div className="w-40 h-8 bg-brand-gold/20 rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t-2 border-dashed">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-4 bg-muted rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Page 5 - More Services */}
      <div className="pdf-page p-12 flex flex-col bg-gradient-to-br from-brand-light-gray to-muted animate-pulse">
        <div className="text-center mb-10">
          <div className="w-32 h-6 bg-muted rounded-full mx-auto mb-4" />
          <div className="w-80 h-10 bg-muted rounded-2xl mx-auto" />
        </div>

        <div className="space-y-6 flex-1">
          {[1, 2].map((i) => (
            <div key={i} className="bg-background p-8 rounded-2xl border-l-4 border-brand-navy">
              <div className="mb-4">
                <div className="w-24 h-6 bg-brand-navy/20 rounded-full mb-3" />
                <div className="w-48 h-8 bg-muted rounded-xl mb-3" />
                <div className="w-32 h-10 bg-muted rounded-xl mb-2" />
                <div className="w-40 h-8 bg-brand-gold/20 rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t-2 border-dashed">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-4 bg-muted rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Page 6 - Membership Cards */}
      <div className="pdf-page p-12 flex flex-col bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy animate-pulse">
        <div className="text-center mb-10">
          <div className="w-32 h-6 bg-white/10 rounded-full mx-auto mb-4" />
          <div className="w-64 h-10 bg-white/10 rounded-2xl mx-auto mb-2" />
          <div className="w-96 h-4 bg-white/10 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-3 gap-5 flex-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/10 p-6 rounded-2xl flex flex-col h-full">
              <div className="mb-4">
                <div className="w-20 h-5 bg-white/20 rounded-full mb-3" />
                <div className="w-32 h-6 bg-white/20 rounded-xl mb-1" />
                <div className="w-24 h-10 bg-white/20 rounded-xl" />
              </div>
              <div className="h-px bg-white/20 mb-4" />
              <div className="space-y-2.5 flex-1">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-3 bg-white/20 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Page 7 - Deals */}
      <div className="pdf-page p-12 flex flex-col bg-background animate-pulse">
        <div className="text-center mb-8">
          <div className="w-32 h-6 bg-muted rounded-full mx-auto mb-4" />
          <div className="w-64 h-10 bg-muted rounded-2xl mx-auto mb-2" />
          <div className="w-96 h-4 bg-muted rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 gap-5 flex-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-background rounded-2xl border-2 border-border overflow-hidden p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 space-y-2">
                  <div className="w-48 h-5 bg-muted rounded-full" />
                  <div className="w-32 h-3 bg-muted rounded-full" />
                </div>
                <div className="w-16 h-16 bg-brand-gold/20 rounded-xl ml-2" />
              </div>
              <div className="space-y-2 mb-3">
                <div className="w-full h-3 bg-muted rounded-full" />
                <div className="w-3/4 h-3 bg-muted rounded-full" />
              </div>
              <div className="bg-primary/10 p-3 rounded-xl mb-3">
                <div className="flex justify-between">
                  <div className="w-16 h-8 bg-muted rounded-xl" />
                  <div className="w-20 h-10 bg-muted rounded-xl" />
                </div>
              </div>
              <div className="border-t-2 border-dashed pt-3 space-y-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-3 bg-muted rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Page 8 - More Deals */}
      <div className="pdf-page p-12 flex flex-col bg-background animate-pulse">
        <div className="text-center mb-8">
          <div className="w-32 h-6 bg-muted rounded-full mx-auto mb-4" />
          <div className="w-80 h-10 bg-muted rounded-2xl mx-auto" />
        </div>

        <div className="grid grid-cols-2 gap-5">
          {[1, 2].map((i) => (
            <div key={i} className="bg-background rounded-2xl border-2 border-border overflow-hidden p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 space-y-2">
                  <div className="w-48 h-5 bg-muted rounded-full" />
                  <div className="w-32 h-3 bg-muted rounded-full" />
                </div>
                <div className="w-16 h-16 bg-brand-gold/20 rounded-xl ml-2" />
              </div>
              <div className="space-y-2 mb-3">
                <div className="w-full h-3 bg-muted rounded-full" />
                <div className="w-3/4 h-3 bg-muted rounded-full" />
              </div>
              <div className="bg-primary/10 p-3 rounded-xl mb-3">
                <div className="flex justify-between">
                  <div className="w-16 h-8 bg-muted rounded-xl" />
                  <div className="w-20 h-10 bg-muted rounded-xl" />
                </div>
              </div>
              <div className="border-t-2 border-dashed pt-3 space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-3 bg-muted rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Page 9 - Contact */}
      <div className="pdf-page p-12 flex flex-col justify-between bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy animate-pulse">
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <div className="w-40 h-40 bg-white/10 rounded-full" />
            </div>
            <div className="w-48 h-6 bg-white/10 rounded-full mx-auto mb-6" />
            <div className="w-96 h-10 bg-white/10 rounded-2xl mx-auto mb-4" />
            <div className="w-3/4 h-4 bg-white/10 rounded-full mx-auto mb-10" />

            <div className="bg-white/10 p-8 rounded-3xl mb-8">
              <div className="w-48 h-8 bg-white/20 rounded-xl mx-auto mb-6" />
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-2xl">
                    <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3" />
                    <div className="w-24 h-4 bg-white/20 rounded-full mx-auto mb-2" />
                    <div className="w-32 h-3 bg-white/20 rounded-full mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/20 pt-6 text-center">
          <div className="w-48 h-4 bg-white/20 rounded-full mx-auto mb-3" />
          <div className="w-64 h-3 bg-white/20 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
}

