import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-oxford-blue pb-32">
      <div className="container-width">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eggshell mb-6">Contact Us</h2>
          <p className="text-xl text-glaucous max-w-3xl mx-auto leading-relaxed">
            Ready to join the movement? Get in touch with us to learn more about our work or to volunteer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-federal-blue border border-glaucous/20 rounded p-8">
            <h3 className="text-2xl font-bold text-eggshell mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-oxford-blue border-glaucous/30 text-eggshell placeholder:text-glaucous focus:border-blood-red"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-oxford-blue border-glaucous/30 text-eggshell placeholder:text-glaucous focus:border-blood-red"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-oxford-blue border-glaucous/30 text-eggshell placeholder:text-glaucous focus:border-blood-red resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blood-red hover:bg-blood-red/80 text-eggshell font-semibold py-3 rounded glow-effect smooth-transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/informaleconomyindex?igsh=NnBuejExYnZxejVx"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-federal-blue border border-glaucous/20 rounded p-8 hover:bg-glaucous smooth-transition cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blood-red/20 rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-blood-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-eggshell">Follow Us</h3>
                  <p className="text-glaucous">Stay updated with our latest work</p>
                </div>
              </div>
              <div className="text-center border border-glaucous text-glaucous py-2 rounded hover:bg-glaucous hover:text-oxford-blue">
                @informaleconomyindex
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:informaleconomyindex@gmail.com"
              className="block bg-federal-blue border border-glaucous/20 rounded p-8 hover:bg-glaucous smooth-transition cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blood-red/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blood-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-eggshell">Email Us</h3>
                  <p className="text-glaucous">Direct communication</p>
                </div>
              </div>
              <div className="text-center text-eggshell font-mono underline hover:text-blood-red">
                informaleconomyindex@gmail.com
              </div>
            </a>

            {/* Location */}
            <div className="bg-federal-blue border border-glaucous/20 rounded p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blood-red/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blood-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-eggshell">Based in</h3>
                  <p className="text-glaucous">Working across India</p>
                </div>
              </div>
              <p className="text-eggshell">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
