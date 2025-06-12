import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Send } from "lucide-react";

export default function GrowthIndiaWebsite() {
  const [message, setMessage] = useState("");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-green-700">Growth India</h1>
        <p className="text-lg text-gray-600">
          Empowering Rural India with AI, Skills, and Opportunities
        </p>
      </header>

      {/* Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-yellow-50">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">🎯 AI Gram Mission</h2>
            <p>
              Our mission is to create AI-powered rural tech centers across villages
              in India to promote digital education, skill training, and job readiness.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">📚 AI Tutor</h2>
            <p>
              A bilingual (Hindi + English) AI tutor that helps students from
              age 10–18+ with school subjects, competitive exams, and spoken English.
            </p>
            <Button className="mt-2">Try AI Tutor</Button>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">🛠️ Skill Development</h2>
            <p>
              We provide free and affordable training in computer basics, AI, freelancing,
              digital marketing, and job preparation (Army, Police, SSC).
            </p>
          </CardContent>
        </Card>

        <Card className="bg-pink-50">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">🏡 Start a Tech Center</h2>
            <p>
              Get a step-by-step guide on how to launch a rural tech center with
              solar setup, AI tools, secure internet, and trained staff.
            </p>
            <Button className="mt-2">Download Setup PDF</Button>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">🤝 Support or Contact Us</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" className="md:col-span-2" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button className="md:col-span-2 w-full" onClick={() => alert("Message sent!")}> <Send className="mr-2 h-4 w-4" /> Send Message</Button>
        </div>
      </section>
    </div>
  );
}
