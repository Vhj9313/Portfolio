import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <section className="bg-gray-950 text-white px-4 sm:px-6 pt-8 pb-6 flex items-start justify-center">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">Contact Me</h1>
        <p className="text-gray-300 text-base sm:text-lg mb-8">
          I'd love to hear from you! Feel free to reach out through any of the channels below.
        </p>

        <div className="space-y-5 text-left text-gray-300">
          <div className="flex items-center gap-3 hover:text-white transition">
            <Icon icon="mdi:email-outline" className="text-blue-400 text-2xl" />
            <span>vhjadhav9313@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 hover:text-white transition">
            <Icon icon="mdi:phone" className="text-blue-400 text-2xl" />
            <span>+91-7972985106</span>
          </div>
          <div className="flex items-center gap-3 hover:text-white transition">
            <Icon icon="mdi:linkedin" className="text-blue-400 text-2xl" />
            <a
              href="https://www.linkedin.com/in/vaibhavjadhav007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-300"
            >
              linkedin.com/in/vaibhavjadhav007
            </a>
          </div>
          <div className="flex items-center gap-3 hover:text-white transition">
            <Icon icon="mdi:github" className="text-blue-400 text-2xl" />
            <a
              href="https://github.com/Vhj9313"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-300"
            >
              github.com/Vhj9313
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
