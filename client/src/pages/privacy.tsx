import joincloudLogo from "/joincloud-logo.png";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={joincloudLogo} alt="JoinCloud" className="h-8 w-auto object-contain" />
            <span className="text-xl font-semibold text-foreground">JoinCloud</span>
          </a>
          <a
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>
                JoinCloud ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">2.1 Information You Provide</h3>
                  <p>
                    We collect information you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name and email address (when submitting feedback or joining our waitlist)</li>
                    <li>Profession and phone number (when joining the Windows beta waitlist)</li>
                    <li>Any content you choose to share through our application</li>
                    <li>Communication content when you contact us for support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">2.2 Information Collected Automatically</h3>
                  <p>
                    When you use JoinCloud, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Device information (operating system, application version)</li>
                    <li>Usage data and analytics about how you use our application</li>
                    <li>Error and performance data to help us improve the service</li>
                    <li>IP address and connection information for local network sharing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Providing, operating, and maintaining our application and services</li>
                <li>Improving and optimizing our application's performance and features</li>
                <li>Sending you updates, security alerts, and support messages</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Conducting research and analytics to understand user behavior</li>
                <li>Preventing fraud and enhancing security</li>
                <li>Complying with legal obligations and protecting our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p>
                JoinCloud is designed with privacy and security as core principles. Your files remain on your local system and are only shared when you explicitly authorize sharing. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Local File Sharing</h2>
              <p>
                JoinCloud operates primarily on local networks. When you share files:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Files remain stored on your local device</li>
                <li>Files are only accessible through links you explicitly generate</li>
                <li>You maintain full control over what files are shared and when</li>
                <li>Shared links can be revoked at any time by stopping the JoinCloud application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Services</h2>
              <p>
                Our application may contain links to third-party websites and services that are not operated by JoinCloud. This Privacy Policy does not apply to third-party services, and we are not responsible for their privacy practices. We encourage you to review their privacy policies before providing your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You can request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
              <p>
                JoinCloud is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to data portability</li>
                <li>The right to opt-out of certain processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the "Last updated" date at the top of this page and, where appropriate, by providing additional notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-md bg-card border border-border">
                <p className="font-medium text-foreground mb-2">JoinCloud</p>
                <p>Email: privacy@joincloud.dev</p>
                <p>GitHub: <a href="https://github.com/vinay-kumar-shakyawar/joincloud" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">github.com/vinay-kumar-shakyawar/joincloud</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src={joincloudLogo} alt="JoinCloud" className="h-6 w-auto object-contain" />
              <span className="text-lg font-semibold text-foreground">JoinCloud</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                Support
              </a>
            </nav>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} JoinCloud. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
