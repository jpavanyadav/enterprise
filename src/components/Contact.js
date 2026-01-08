const Contact = () => {
  return (
    <section className="py-20 px-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact Us
      </h2>

      <form className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full mb-4 p-3 border rounded"
        ></textarea>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
