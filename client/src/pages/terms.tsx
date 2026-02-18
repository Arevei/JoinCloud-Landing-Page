import joincloudLogo from "/joincloud-logo.png";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={joincloudLogo} alt="JoinCloud" className="h-8 w-auto object-contain" />
            <span className="text-xl font-semibold text-foreground">JoinCloud</span>
          </a>
          <a href="/"
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using JoinCloud ("Application", "Service", "we", or "us"), you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you may not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. License Grant</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to download, install, and use JoinCloud for personal, non-commercial purposes. This license is subject to these Terms of Service and does not permit you to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Modify or create derivative works based on JoinCloud</li>
                <li>Decompile, reverse engineer, or disassemble JoinCloud</li>
                <li>Remove any proprietary notices or labels on JoinCloud</li>
                <li>Use JoinCloud for any illegal or unauthorized purpose</li>
                <li>Rent, lease, or lend JoinCloud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p>
                You are responsible for:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Maintaining the confidentiality of your share links and access credentials</li>
                <li>Ensuring that your use of JoinCloud complies with all applicable laws and regulations</li>
                <li>Not using JoinCloud to transmit malware, viruses, or any harmful code</li>
                <li>Not using JoinCloud to harass, threaten, defame, or abuse others</li>
                <li>Not attempting to gain unauthorized access to JoinCloud or related systems</li>
                <li>Protecting your own files and ensuring you have proper backups</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
              <p>
                You agree not to use JoinCloud for any of the following purposes:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Transmitting any unlawful, threatening, abusive, libelous, defamatory, obscene, or otherwise objectionable material</li>
                <li>Transmitting material that infringes intellectual property rights</li>
                <li>Transmitting material that could be considered a criminal offense or that violates laws</li>
                <li>Conducting phishing, spoofing, or other fraudulent activities</li>
                <li>Distributing malware, viruses, worms, or other malicious code</li>
                <li>Attempting to disrupt or interfere with the Service</li>
                <li>Circumventing security measures or access restrictions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Content and Intellectual Property</h2>
              <p>
                Files and content you share through JoinCloud remain your property. You retain all intellectual property rights to your content. By using JoinCloud to share files, you grant us a limited license to store and transmit your files solely for the purpose of enabling file sharing through the Service.
              </p>
              <p className="mt-4">
                JoinCloud itself, including all source code, design, functionality, and trademarks, is owned by JoinCloud and protected by intellectual property laws. You may not use our trademarks or logos without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimer of Warranties</h2>
              <p>
                JOINCLOUD IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Implied warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>Any warranty that the Service will meet your requirements</li>
                <li>Any warranty that the Service will be uninterrupted, timely, secure, or error-free</li>
              </ul>
              <p className="mt-4">
                You use JoinCloud at your own risk. You are responsible for maintaining backups of your files and ensuring data security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, JOINCLOUD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS INTERRUPTION, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-4">
                OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNTS YOU HAVE PAID US, IF ANY.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless JoinCloud and its officers, directors, employees, and agents from and against any and all claims, damages, losses, costs, and expenses arising out of or relating to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Your use of JoinCloud</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your infringement of any intellectual property rights</li>
                <li>Any content you share through JoinCloud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your access to JoinCloud immediately, without prior notice, if you violate these Terms of Service or engage in any illegal or harmful activity. Upon termination, your right to use JoinCloud will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Privacy and Data Protection</h2>
              <p>
                Your use of JoinCloud is also governed by our Privacy Policy, which describes how we collect, use, and protect your information. Please review our Privacy Policy to understand our privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Modifications to Terms</h2>
              <p>
                We may modify these Terms of Service at any time without prior notice. Changes will be effective upon posting to the Service. Your continued use of JoinCloud after changes are posted constitutes your acceptance of the modified terms. We encourage you to review these Terms of Service periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Modifications to Service</h2>
              <p>
                JoinCloud may be modified, updated, or discontinued at any time. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which JoinCloud operates, without regard to its conflicts of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Entire Agreement</h2>
              <p>
                These Terms of Service and our Privacy Policy constitute the entire agreement between you and JoinCloud regarding your use of the Service and supersede all prior and contemporaneous agreements, understandings, and negotiations, whether written or oral.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-md bg-card border border-border">
                <p className="font-medium text-foreground mb-2">JoinCloud</p>
                <p>Email: legal@joincloud.dev</p>
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
              <a href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                Privacy Policy
              </a>
              <a href="/terms"
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
