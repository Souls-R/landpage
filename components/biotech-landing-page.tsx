'use client'

import { useState, useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dna, Microscope, Beaker, Mail, Menu } from 'lucide-react'

export function BiotechLandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Dna className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold text-primary">BioCorp</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-600 hover:text-primary">Home</a>
          <a href="#about" className="text-gray-600 hover:text-primary">About</a>
          <a href="#technology" className="text-gray-600 hover:text-primary">Technology</a>
          <a href="#products" className="text-gray-600 hover:text-primary">Products</a>
          <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>About</a>
          <a href="#technology" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>Technology</a>
          <a href="#products" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>Products</a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </header>
  )

  return (
    <div className="biotech-landing">
      <Header />
      <ReactFullpage
        scrollingSpeed={1000}
        licenseKey='YOUR_KEY_HERE'
        credits= {{ 
          enabled: false,
          label: '',
          position: 'right',
          }}
        navigation={true}
        navigationPosition="right"
        scrollBar={true}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section bg-gradient-to-b from-blue-50 to-white">
              <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Advancing Biotechnology for a Better Future</h1>
                <p className="text-xl text-gray-600 mb-8">Innovative solutions for global health challenges</p>
                <Button className="w-40">Learn More</Button>
              </div>
            </div>
            <div className="section bg-white">
              <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
                <p className="text-lg text-gray-600 mb-6">BioCorp is at the forefront of biotechnology innovation, developing cutting-edge solutions to address global health challenges and improve lives worldwide.</p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <Microscope className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Research Excellence</h3>
                    <p className="text-gray-600">Pushing the boundaries of scientific discovery</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Beaker className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Innovative Products</h3>
                    <p className="text-gray-600">Developing life-changing biotechnology solutions</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Dna className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Genetic Expertise</h3>
                    <p className="text-gray-600">Unlocking the potential of genomics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section bg-gradient-to-b from-white to-blue-50">
              <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-primary mb-6">Our Technology</h2>
                <p className="text-lg text-gray-600 mb-8">Leveraging advanced biotechnology to create innovative solutions for global health challenges.</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Gene Editing</h3>
                    <p className="text-gray-600">Precision tools for modifying genetic material to treat diseases and improve crop yields.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Bioinformatics</h3>
                    <p className="text-gray-600">Advanced computational methods for analyzing complex biological data and discovering new insights.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section bg-white">
              <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-primary mb-6">Our Products</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">BioGene Therapy</h3>
                    <p className="text-gray-600">Targeted gene therapy solutions for rare genetic disorders.</p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">CropBoost</h3>
                    <p className="text-gray-600">Enhancing crop resilience and yield through biotechnology.</p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">BioAnalyzer Pro</h3>
                    <p className="text-gray-600">Advanced bioinformatics software for research institutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section bg-gradient-to-b from-blue-50 to-white">
              <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-primary mb-6">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-600 mb-4">Get in touch with our team to learn more about our innovative biotechnology solutions.</p>
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-primary mr-2" />
                      <span className="text-gray-600">info@biocorp.com</span>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Textarea placeholder="Your Message" />
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </div>
                <footer className="mt-12 text-center text-gray-600">
                  <p>&copy; 2024 BioCorp. All rights reserved.</p>
                </footer>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  )
}