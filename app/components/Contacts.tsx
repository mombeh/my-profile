export default function Contact() {
    return (
      <div className="max-w-md mx-auto text-white">
        <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Contact form submission functionality is to be implemented.');
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 resize-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 rounded-md py-3 font-semibold transition"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-400">
          Or email me directly at: <br />
          <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
            your.email@example.com
          </a>
        </p>
      </div>
    );
  }
  