import VeilboundNavigation from '@/components/VeilboundNavigation';
import VeilboundFooter from '@/components/VeilboundFooter';
import { CartProvider } from '@/contexts/CartContext';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <VeilboundNavigation />
        <main className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-neural/20 border border-primary/30 mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-dyson bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="glass-card p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Veilbound. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our 
                  website and tell you about your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Identity Data (username, in-game name)</li>
                  <li>Contact Data (email address)</li>
                  <li>Technical Data (IP address, browser type, device information)</li>
                  <li>Usage Data (how you use our website and game)</li>
                  <li>Marketing Data (your preferences for receiving communications)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>To provide and maintain our game services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis to improve our game</li>
                  <li>To send you newsletters and marketing communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We have implemented appropriate security measures to prevent your personal data from being 
                  accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal 
                  data to those who have a genuine business need to access it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under data protection laws, you have rights including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>The right to access your personal data</li>
                  <li>The right to request correction of your personal data</li>
                  <li>The right to request erasure of your personal data</li>
                  <li>The right to object to processing of your personal data</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:{' '}
                  <a href="/contact" className="text-primary hover:underline">
                    our contact page
                  </a>
                  {' '}or email us directly at{' '}
                  <a href="mailto:veilbound91@gmail.com" className="text-primary hover:underline">
                    veilbound91@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </main>
        <VeilboundFooter />
      </div>
    </CartProvider>
  );
};

export default Privacy;
