"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have a question or interested in internship opportunities? Feel free to reach out using the form below or via my contact details.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 h-full">
                <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-slate-700 p-3 rounded-lg mr-4">
                      <Mail className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-slate-400 mb-1">Email</h4>
                      <a
                        href="mailto:yunmounsothearith@gmail.com"
                        className="text-white hover:text-emerald-400 transition-colors"
                      >
                        yunmounsothearith@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-slate-700 p-3 rounded-lg mr-4">
                      <Phone className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-slate-400 mb-1">Phone</h4>
                      <a href="tel:015213081" className="text-white hover:text-emerald-400 transition-colors">
                        015213081
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-slate-700 p-3 rounded-lg mr-4">
                      <MapPin className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-slate-400 mb-1">Location</h4>
                      <a
                          href="https://maps.app.goo.gl/NZgJ9j7JZiqfW6fG6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-emerald-400 transition-colors"
                        >
                          Phnom Penh
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>

                <form
                  action="https://formsubmit.co/yunmounsothearith@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden config fields */}
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white"
                      placeholder="Internship Opportunity"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-white"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-2 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-all bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
