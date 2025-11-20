import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { SocialShare } from "@/components/SocialShare";
import heroCamera from "@/assets/hero-camera.jpg";
import productCamera from "@/assets/product-camera.jpg";
import logo from "@/assets/commerce-review-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <img src={logo} alt="Commerce Review" className="h-18" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Advertorial Label */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground">
            ADVERTORIAL
          </span>
        </div>

        {/* Social Share */}
        <SocialShare />

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-article-heading mb-6 leading-tight">
              You Could Increase Your Property's Value Up to 5% with This Feature
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By <span className="text-primary font-medium">Katie</span></span>
              <span>•</span>
              <span className="text-primary font-medium">REALESTATE</span>
              <span className="ml-auto">Mon-Jan 1, 2025</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={heroCamera} 
              alt="Smart home security camera mounted on house exterior" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-article-text mb-4 leading-relaxed">
              There is no price for safety. As per Consumer Reports, having a home security 
              system may help increase the value of your home by up to 5%. <sup>[1]</sup>
            </p>

            <p className="text-article-text mb-4 leading-relaxed">
              That's because with safety there comes stability.
            </p>

            <p className="text-article-text mb-8 leading-relaxed">
              Coldwell Banker's survey showed that in 2023 it's as much as <strong>77% of home 
              buyers want their houses to be equipped with smart home technology before moving in.</strong> The 
              reasons vary, but the sense of security is the priority here.
            </p>

            <p className="text-article-text mb-8 leading-relaxed">
              Ultimately making properties equipped with smart home security systems more{" "}
              <strong>attractive in the competitive market</strong>.
            </p>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <ProductCard
                image={productCamera}
                title="Vivint smart home camera system"
                price="$82.43"
              />
              <ProductCard
                image={productCamera}
                title="Vivint smart home camera system"
                price="$82.43"
              />
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-article-heading mb-6 mt-12">
              What Are Vivint Smart Home Alarm Systems?
            </h2>

            <p className="text-article-text mb-4 leading-relaxed">
              <a href="#" className="text-primary hover:underline font-medium">Vivint</a> offers 
              millions of Americans safety, protecting them 24/7 against a variety of modern 
              threats. Find peace of mind with a{" "}
              <a href="#" className="text-primary hover:underline font-medium">Vivint</a> smart 
              security system that's custom-built for your unique home.
            </p>

            <ol className="list-decimal list-inside space-y-4 mb-8 text-article-text">
              <li className="leading-relaxed">
                <strong>Proven Track Record</strong>: With over 20 years of experience,{" "}
                <a href="#" className="text-primary hover:underline font-medium">Vivint</a> has 
                protected millions of homes across the nation, earned the trust of countless families.
              </li>
              <li className="leading-relaxed">
                <strong>Expert Monitoring</strong>:{" "}
                <a href="#" className="text-primary hover:underline font-medium">Vivint's</a> team 
                of highly trained professionals is always on alert, ready to respond swiftly in 
                case of an emergency.
              </li>
              <li className="leading-relaxed">
                <strong>Seamless Integration</strong>:{" "}
                <a href="#" className="text-primary hover:underline font-medium">Vivint's</a> user-friendly 
                mobile app allows you to control and monitor your security system from anywhere, 
                providing convenience and peace of mind.
              </li>
              <li className="leading-relaxed">
                <strong>Customizable Solutions</strong>: Whether you live in an apartment, a 
                suburban home, or a rural estate,{" "}
                <a href="#" className="text-primary hover:underline font-medium">Vivint</a> offers 
                tailored security packages to fit your unique requirements and budget.
              </li>
            </ol>

            <p className="text-article-text mb-8 leading-relaxed">
              <a href="#" className="text-primary hover:underline font-medium">Vivint</a> is also 
              a number of steps further from what we typically understand as security systems. The 
              luxury camera footage, random beeping at night, and costly maintenance are really 
              yesterday's business.{" "}
              <a href="#" className="text-primary hover:underline font-medium">Vivint</a> is all 
              uber-friendly, with high quality. Also, it's financially manageable for the average 
              household, and it's incredibly reliable.
            </p>

            {/* CTA Buttons */}
            <div className="space-y-4 my-12">
              <Button 
                className="w-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] hover:from-[#6d28d9] hover:to-[#9333ea] text-white font-semibold py-6 text-lg"
                size="lg"
              >
                Buy on Amazon
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">or</div>
              
              <Button 
                variant="outline" 
                className="w-full font-semibold py-6 text-lg border-2"
                size="lg"
              >
                Buy on Ebay
              </Button>

              <div className="text-center mt-6">
                <a href="#" className="text-primary hover:underline text-sm">
                  Search on the web
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Footer Disclaimers */}
        <footer className="border-t border-border pt-8 mt-16 text-xs text-muted-foreground space-y-6">
          <div className="space-y-4">
            <p className="leading-relaxed">
              [1]<strong> REAL ADVERTISER/SPONSOR</strong> AND NOT AN ACTUAL RECORD LABEL, PRODUCER OR MANAGEMENT REPRESENTATIVE. Sponsored by Amazon, Inc.
            </p>
            
            <p className="leading-relaxed">
              <strong>PAID ADVERTISEMENT:</strong> This Website Is An Advertisement And Not An Actual News Article, Blog, Or Consumer Protection Update. The Story Depicted On This Site And The Person Depicted In The Story Are Not Actual News. Rather, This Story Is Based On The Results That Some People Who Have Used These Products Have Achieved. The Results Portrayed In The Story And In The Comments Are Illustrative, And May Not Be The Results That You Achieve With These Products. This Page Could Receive Compensation For Clicks On Or Purchase Of Products Featured On This Site.
            </p>
            
            <p className="leading-relaxed">
              <strong>HEALTH DISCLAIMERS:</strong> This website is not intended to provide medical advice or to take the place of medical advice and treatment from your personal physician. Visitors are advised to consult their own doctors or other qualified health professional regarding the treatment of medical conditions. The author shall not be held liable or responsible for any misunderstanding or misuse of the information contained on this site or for any loss, damage, or injury caused, or alleged to be caused, directly or indirectly by any treatment, action, or application of any food or food source discussed in this website. The FDA has not evaluated any of the statements on this website. The products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            
            <p className="leading-relaxed">
              The All-Diet and All-Exercise Site listed on this site may not be of similar quality, may not be FDA-approved, and may not be deemed as effective.
            </p>
          </div>

          <div className="flex gap-6 pt-4 border-t border-border">
            <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span className="ml-auto">© 2024 All rights reserved.</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
