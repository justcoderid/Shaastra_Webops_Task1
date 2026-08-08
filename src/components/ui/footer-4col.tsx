import {
  Mail,
  MapPin,
  Phone,
  X,
} from 'lucide-react';
import {Link }from 'react-router-dom';

const data = {
  facebookLink: 'https://facebook.com/vergestore',
  instaLink: 'https://instagram.com/vergestore',
  twitterLink: 'https://twitter.com/vergestore',
  githubLink: 'https://github.com/vergestore',
  dribbbleLink: 'https://dribbble.com/vergestore',
  services: {
    webdev: '/store-builder',
    webdesign: '/themes',
    marketing: '/marketing-tools',
    googleads: '/pos-system',
  },
  about: {
    history: '/about-us',
    team: '/leadership',
    handbook: '/press',
    careers: '/careers',
  },
  help: {
    faqs: '/help-center',
    support: '/community-forums',
    livechat: '/contact-support',
  },
  contact: {
    email: 'support@vergestore.com',
    phone: '1-800-VERGE-11',
    address: 'San Francisco, CA, USA',
  },
  company: {
    name: 'VergeStore',
    description:
      'The global commerce platform that lets you start, grow, and manage a business. Experience the best in online retail.',
    logo: 'https://img.icons8.com/?size=100&id=BYtpfgQsgr4C&format=png&color=000000',
  },
};

const socialLinks = [
  // { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  // { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: X, label: 'X', href: data.twitterLink },
  // { icon: Github, label: 'GitHub', href: data.githubLink },
  // { icon: Dribbble, label: 'Dribbble', href: data.dribbbleLink },
];

const aboutLinks = [
  { text: 'About Us', href: data.about.history },
  { text: 'Leadership', href: data.about.team },
  { text: 'Press', href: data.about.handbook },
  { text: 'Careers', href: data.about.careers },
];

const serviceLinks = [
  { text: 'Store Builder', href: data.services.webdev },
  { text: 'Themes', href: data.services.webdesign },
  { text: 'Marketing Tools', href: data.services.marketing },
  { text: 'POS System', href: data.services.googleads },
];

const helpfulLinks = [
  { text: 'Help Center', href: data.help.faqs },
  { text: 'Community Forums', href: data.help.support },
  { text: 'Contact Support', href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="mt-20 w-full border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -bottom-1/2 left-1/2 h-full w-full -translate-x-1/2 rounded-t-[100%] bg-emerald-500/10 blur-[120px]"></div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-3 sm:justify-start items-center text-zinc-900 dark:text-white">
              <img
                src={data.company.logo || '/placeholder.svg'}
                alt="logo"
                className="h-9 w-9 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 shadow-sm"
              />
              <span className="text-2xl font-bold tracking-tight">
                {data.company.name}
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-zinc-500 dark:text-zinc-400 sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="h-6 w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-zinc-900 dark:text-white">About Us</p>
              <ul className="mt-6 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-zinc-900 dark:text-white">Our Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-zinc-900 dark:text-white">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="group flex items-center justify-center gap-1.5 sm:justify-start text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      <span>{text}</span>
                      {hasIndicator && (
                        <span className="relative flex h-2 w-2 ml-1">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-zinc-900 dark:text-white">Contact Us</p>
              <ul className="mt-6 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-2 sm:justify-start text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                      href="#"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      {isAddress ? (
                        <address className="not-italic flex-1">
                          {text}
                        </address>
                      ) : (
                        <span className="flex-1">{text}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
//This is all just dummy data don't take it seriously
