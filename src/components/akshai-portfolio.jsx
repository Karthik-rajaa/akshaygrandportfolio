import React, { useState, useEffect } from 'react';
import { ChevronDown, BookOpen, PenTool, Mail, Phone, Linkedin, Twitter, Menu, X, Star, Quote, FileText, Globe, Users, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedSample, setSelectedSample] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadPDF = async () => {
    try {
      // Method 1: If you have the PDF file in your project's public folder
      // Place the PDF file in the public folder as 'ghost-wallet-sample.pdf'
      const response = await fetch('/ghost-wallet-sample.pdf');
      
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Ghost_Wallet_Chapter_1.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else {
        throw new Error('PDF not found');
      }
    } catch (error) {
      // Fallback: If PDF file is not available, use the file reading API
      try {
        const fileData = await window.fs.readFile('ghost wallet sample.pdf');
        const blob = new Blob([fileData], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Ghost_Wallet_Chapter_1.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (fileError) {
        // Final fallback: Show message to contact you
        alert('PDF download is currently unavailable. Please contact akshaisanthoshwriter@gmail.com to request the Ghost Wallet Chapter 1 PDF directly.');
        console.error('PDF download failed:', fileError);
      }
    }
  };

  const writingSamples = [
    {
      id: 1,
      title: "The Quiet Joy of Logging Off: A Digital Detox That Works",
      category: "Blog - Digital Detox",
      content: `I didn't realize I was addicted to noise until I sat in silence and felt uncomfortable.
It wasn't just my phone. It was the constant scrolling, the tabs I kept open in my brain, and the weight of unread messages I had no energy to answer.
So, I did something radical.
I logged out. Not forever. Just for a day.
I told no one. I deleted the apps. I shut down my laptop. For the first hour, I kept checking my pockets out of habit. For the second, I stared out the window and watched the wind move the trees. By evening, I felt like a guest in my own life—quiet, unhurried, real.
We think logging off means missing out. But sometimes, it's how we return to ourselves.
A digital detox doesn't need to be dramatic. Just intentional.
Try this: one hour a day without your phone. No scrolling. No checking.
Just breathe, move, notice.
The world is still here. So are you.`
    },
    {
      id: 2,
      title: "Money Blocks: The Stories Artists Are Afraid to Rewrite",
      category: "Psychology Content",
      content: `"I'm not doing it for the money."
How often have you heard a creative say that? How often have you said it yourself?
There's a quiet shame that many creatives carry when it comes to money. We've been taught to believe that true art is born in struggle—and that asking to be paid makes us less noble, less pure.
But here's the truth:
Money is not the enemy. The stories around it are.
When you were young, did you hear things like:
• "Artists never make real money."
• "You can't survive doing what you love."
• "Choose passion or stability — not both."
These ideas turn into inner blocks. You start underpricing your work. You feel guilty charging fair rates. You sabotage success because it feels like betrayal.
To heal your relationship with money, you must rewrite those stories.
You are allowed to be creative and well-paid.
You are allowed to live with joy and financial ease.
Your art doesn't become less meaningful because you value your worth.
Rewrite the story.
Start with: "I deserve to thrive."`
    },
    {
      id: 3,
      title: "Dead Air - Episode 1: The First Voice",
      category: "Fiction Series",
      content: `At 1:03 a.m., the power went out again.
A soft click — like a throat clearing — came from the old radio, even though it had no batteries.
And then, a voice.
"If you're hearing this, don't open the door. Not yet."
Lyra froze.
She hadn't turned the radio on in weeks.
Hadn't touched it since last November, when her father vanished the same night the city went dark.
Another voice came — not the same one.
Deeper. Male. Static-cracked.
"She's awake. You didn't stop her. Your fault now."
A slam from downstairs.
Lyra grabbed the flashlight and didn't breathe.
[To Be Continued...]

Setting: A crumbling city with nightly power cuts
Hook: Every night at 1:04 a.m., a voice broadcasts on a dead radio frequency — and someone nearby disappears.
Type: Blog/Short Story`
    },
    {
      id: 4,
      title: "When the Espresso Bar Opens at Midnight",
      category: "Blog-brand",
      content: `Brand Type: Indie Coffee Shop with a quirky, mystical vibe
They say the cafe at 42 Street only appears after 11:59 PM. You don't order you confess.For Midnight Brew, coffee isn't a product. It's a ritual. Every blend is named after dreams you almost forgot and conversations you were never supposed to have. This isn't just branding. This is alchemy by the cup.`
    },
    {
      id: 5,
      title: "Ghost Wallet - The Guardian of the Invisible Code",
      category: "Published",
      content: `It starts with a dying man and a flash drive.
Ethan Cole, a quiet cryptographer living a quiet life, is suddenly pulled into a deadly game when he inherits the digital remains of a powerful secret. The drive holds access to a hidden cryptocurrency vault-but it's protected by an uncrackable code, and worse, a self-aware Al called Ouroboros, designed to kill anyone who gets too close.
Behind it all is Victor Reinhardt, a shadowy financier with blood on his hands and a past that refuses to stay buried. As Ethan races to uncover the truth, he's hunted across continents, manipulated by forces he can't see, and haunted by the cost of unlocking a fortune the world was never meant to find.
Ghost Wallet is a fast-paced cyber-thriller about money, power, and the thin line between genius and madness. In a world where code is currency and secrets are deadly, trust is the most dangerous weapon of all.

📖 The Chapter 1 of the book is given below. 

📥 Download Chapter 1 PDF: `,
      downloadAvailable: true,
      amazonLink: 'https://amzn.in/d/1vxhxkn'
    }
  ];

  const services = [
    {
      icon: <FileText style={{width: '2rem', height: '2rem'}} />,
      title: "Blog Writing",
      description: "Engaging, SEO-optimized blog posts that establish thought leadership and drive organic traffic",
      features: ["SEO Optimization", "Industry Research", "Brand Voice Matching"]
    },
    {
      icon: <BookOpen style={{width: '2rem', height: '2rem'}} />,
      title: "Book/E-Book",
      description: "Complete book writing services from concept to publication-ready manuscript",
      features: ["Full Manuscript", "Chapter Outlines", "Editorial Support"]
    },
    {
      icon: <Globe style={{width: '2rem', height: '2rem'}} />,
      title: "Content Strategy",
      description: "Comprehensive content frameworks that align with business goals and audience needs",
      features: ["Content Planning", "Editorial Calendars", "Multi-platform Strategy"]
    },
    {
      icon: <Users style={{width: '2rem', height: '2rem'}} />,
      title: "Book Formatting",
      description: "Formatting your book with style, clarity, and your voice at the center.",
      features: ["Text & Layout Formatting", "Structural Formatting", "Software-Specific Skills "]
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      {/* Custom CSS */}
      <style>{`
        :root {
          --purple-primary: #9333ea;
          --purple-secondary: #a855f7;
          --pink-primary: #ec4899;
          --pink-secondary: #f472b6;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          color: white;
          min-height: 100vh;
        }
        
        .navbar-custom {
          transition: all 0.3s ease;
          background: ${scrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
          backdrop-filter: ${scrollY > 50 ? 'blur(12px)' : 'none'};
        }
        
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, var(--purple-secondary), var(--pink-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-link-custom {
          color: white !important;
          text-transform: capitalize;
          transition: color 0.3s ease;
        }
        
        .nav-link-custom:hover, .nav-link-custom.active {
          color: var(--purple-secondary) !important;
        }
        
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(to right, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2));
          position: relative;
          overflow: hidden;
        }
        
        .hero-title {
          font-size: 5rem;
          font-weight: bold;
          background: linear-gradient(to right, white, #e9d5ff, #fce7f3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }
        
        .hero-title-accent {
          background: linear-gradient(to right, var(--purple-secondary), var(--pink-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-primary-custom {
          background: linear-gradient(to right, var(--purple-primary), var(--pink-primary));
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-primary-custom:hover {
          background: linear-gradient(to right, #7c3aed, #db2777);
          transform: scale(1.05);
        }
        
        .btn-outline-custom {
          border: 2px solid var(--purple-secondary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          background: transparent;
          transition: all 0.3s ease;
        }
        
        .btn-outline-custom:hover {
          background: var(--purple-secondary);
          color: black;
        }

        .btn-amazon {
          background: linear-gradient(to right, #ff9500, #ffb84d);
          border: none;
          color: black;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .btn-amazon:hover {
          background: linear-gradient(to right, #e6850e, #ff9500);
          transform: scale(1.05);
          color: black;
          text-decoration: none;
        }
        
        .section-title {
          font-size: 3.75rem;
          font-weight: bold;
          background: linear-gradient(to right, var(--purple-secondary), var(--pink-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-custom {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2));
          border-radius: 1rem;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(147, 51, 234, 0.2);
          transition: all 0.3s ease;
        }
        
        .card-custom:hover {
          transform: translateY(-8px);
          border-color: rgba(168, 85, 247, 0.4);
        }
        
        .card-custom-alt {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2));
        }
        
        .profile-img {
          width: 12rem;
          height: 12rem;
          background: linear-gradient(to right, var(--purple-secondary), var(--pink-primary));
          padding: 4px;
        }
        
        .profile-img-inner {
          width: 100%;
          height: 100%;
          background: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .profile-initial {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #d8b4fe, #f9a8d4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.25rem;
          font-weight: bold;
          color: #0f172a;
        }
        
        .sample-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          border: 2px solid var(--purple-secondary);
          background: transparent;
          color: #d8b4fe;
          transition: all 0.3s ease;
        }
        
        .sample-btn.active {
          background: linear-gradient(to right, var(--purple-primary), var(--pink-primary));
          color: white;
        }
        
        .sample-btn:hover:not(.active) {
          background: var(--purple-secondary);
          color: black;
        }
        
        .sample-display {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3));
          border-radius: 1rem;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(147, 51, 234, 0.2);
        }
        
        .sample-category {
          background: rgba(147, 51, 234, 0.3);
          color: #d8b4fe;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.875rem;
        }
        
        .contact-card {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3));
          border-radius: 1rem;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(147, 51, 234, 0.2);
        }
        
        .social-link {
          background: rgba(147, 51, 234, 0.2);
          transition: background 0.3s ease;
        }
        
        .social-link:hover {
          background: rgba(168, 85, 247, 0.4);
        }
        
        .bg-dark-custom {
          background: rgba(0, 0, 0, 0.2);
        }
        
        .bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-30px,0);
          }
          70% {
            transform: translate3d(0,-15px,0);
          }
          90% {
            transform: translate3d(0,-4px,0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem !important;
          }
          .section-title {
            font-size: 2.25rem !important;
          }
        }
      `}</style>

      <div>
        {/* Navigation */}
        <nav className={`navbar navbar-expand-lg fixed-top navbar-custom`}>
          <div className="container">
            <a className="navbar-brand" href="#">Akshai Santhosh</a>
            
            <button 
              className="navbar-toggler border-0" 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{color: 'white'}}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">
                {['home', 'about', 'projects', 'services', 'contact'].map((section) => (
                  <li key={section} className="nav-item">
                    <button
                      className={`nav-link nav-link-custom btn btn-link ${activeSection === section ? 'active' : ''}`}
                      onClick={() => scrollToSection(section)}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero-section d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="hero-title mb-4">
                  Words That<br/>
                  <span className="hero-title-accent">Transform</span>
                </h1>
                <p className="fs-4 text-light mb-5 lh-lg">
                  Professional ghostwriter crafting compelling narratives for blogs, books, and brand stories that resonate with your audience
                </p>
                
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="btn btn-primary-custom"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="btn btn-outline-custom"
                  >
                    Let's Collaborate
                  </button>
                </div>

                <div className="bounce">
                  <ChevronDown style={{width: '2rem', height: '2rem', color: 'var(--purple-secondary)'}} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="section-title mb-4">The Art of Invisible Writing</h2>
              <p className="fs-5 text-light">
                Behind every great story is a skilled wordsmith who understands that the best ghostwriting is felt, not seen
              </p>
            </div>

            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="card-custom p-4">
                      <PenTool style={{width: '3rem', height: '3rem', color: 'var(--purple-secondary)'}} className="mb-3" />
                      <h3 className="h4 mb-3">Emerging Voice</h3>
                      <p className="text-light lh-lg">
                        As a passionate writer beginning my ghostwriting journey, I bring fresh perspectives and authentic storytelling to every project, specializing in capturing unique voices across blogs, fiction, and creative content.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="card-custom card-custom-alt p-4">
                      <Star style={{width: '3rem', height: '3rem', color: 'var(--pink-primary)'}} className="mb-3" />
                      <h3 className="h4 mb-3">Diverse Portfolio</h3>
                      <p className="text-light lh-lg">
                        From psychological thrillers to wellness blogs, my writing spans multiple genres and formats. I've crafted compelling fiction series, insightful blog posts, and engaging ebook content that resonates with readers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 text-center">
                <div className="profile-img rounded-circle mx-auto mb-4">
                  <div className="profile-img-inner rounded-circle">
                    
                    <div className="profile-initial rounded-circle">
                     <img src="/akshayprof.JPG" alt="Akshai" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', objectPosition:'top', paddingLeft:'1%'}} />
                    </div>
                  </div>
                </div>
                <h3 className="h4 mb-3" style={{color: '#d8b4fe'}}>About Me</h3>
                <p className="text-light lh-lg">
                  Hey, I'm Akshai a fiction ghostwriter with a passion for sharp storytelling and clean structure. I help bring people's ideas to life through novels, ebooks, blogs, and serialized stories that matches your tone, voice and vision sound like you wrote it, not me-just how it should. I've been writing fiction for years and have published two books under my pen name, Rex Nightfall, so I understand what it takes to build a story from scratch whether I'm writing it for a client or for myself. Whether it's a full-length book, an engaging blog series, or character-driven fiction content, I focus on delivering writing that's clear, compelling, and paced right. I'm here to help make your story real and worth reading.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 bg-dark-custom">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="section-title mb-4">Writing Samples</h2>
              <p className="fs-5 text-light">
                Explore my diverse portfolio of blog posts, fiction, and creative content that showcases my range and storytelling ability
              </p>
            </div>

            <div className="mb-5">
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                {writingSamples.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => setSelectedSample(selectedSample === sample.id ? null : sample.id)}
                    className={`sample-btn btn ${selectedSample === sample.id ? 'active' : ''}`}
                  >
                    {sample.category}
                  </button>
                ))}
              </div>

              {selectedSample && (
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="sample-display p-4">
                      {writingSamples
                        .filter(sample => sample.id === selectedSample)
                        .map(sample => (
                          <div key={sample.id}>
                            <div className="mb-4">
                              <span className="sample-category d-inline-block mb-3">
                                {sample.category}
                              </span>
                              <h3 className="h3" style={{color: '#d8b4fe'}}>
                                {sample.title}
                              </h3>
                            </div>
                            <div className="text-light lh-lg" style={{whiteSpace: 'pre-line'}}>
                              {sample.content}
                            </div>
                            {sample.downloadAvailable && (
                              <div className="mt-4 pt-3 border-top" style={{borderColor: 'rgba(147, 51, 234, 0.3)'}}>
                                <div className="d-flex flex-column flex-sm-row gap-3 mb-3">
                                  <a
                                    href="../public/ghost-wallet-sample.pdf"
                                    download="Ghost_Wallet_Chapter_1.pdf"
                                    className="btn btn-primary-custom d-inline-flex align-items-center gap-2"
                                  >
                                    <FileText style={{width: '1.25rem', height: '1.25rem'}} />
                                    Download Sample Chapter
                                  </a>
                                  {sample.amazonLink && (
                                    <a
                                      href={sample.amazonLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-amazon d-inline-flex align-items-center gap-2"
                                    >
                                      <BookOpen style={{width: '1.25rem', height: '1.25rem'}} />
                                      Buy on Amazon
                                      <ExternalLink style={{width: '1rem', height: '1rem'}} />
                                    </a>
                                  )}
                                </div>
                                <p className="small text-light mt-2 mb-0">
                                  Get the complete Chapter 1 of Ghost Wallet as a sample, or purchase the full book on Amazon
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!selectedSample && (
              <div className="text-center">
                <p className="fs-5 mb-4 text-white" >
                  Click on any category above to read sample content
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <ChevronDown className="bounce" style={{width: '1.5rem', height: '1.5rem', color: 'var(--purple-secondary)'}} />
                  <ChevronDown className="bounce" style={{width: '1.5rem', height: '1.5rem', color: 'var(--purple-secondary)', animationDelay: '0.1s'}} />
                  <ChevronDown className="bounce" style={{width: '1.5rem', height: '1.5rem', color: 'var(--purple-secondary)', animationDelay: '0.2s'}} />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="section-title mb-4">Services</h2>
              <p className="fs-5 text-light">
                Professional writing services tailored to your unique needs and brand voice
              </p>
            </div>

            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="card-custom p-4 text-center h-100">
                    <div style={{color: 'var(--purple-secondary)'}} className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="h5 mb-3">{service.title}</h3>
                    <p className="small text-light mb-4 lh-lg">
                      {service.description}
                    </p>
                    <ul className="list-unstyled">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="small mb-2" style={{color: '#d8b4fe'}}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 bg-dark-custom">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="section-title mb-4">Let's Create Together</h2>
              <p className="fs-5 text-light">
                Ready to bring your story to life? Let's discuss your project and see how I can help you connect with your audience
              </p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="contact-card p-4 text-center">
                  <Mail style={{width: '2rem', height: '2rem', color: 'var(--purple-secondary)'}} className="mb-3" />
                  <h3 className="h5 mb-2">Email</h3>
                  <p className="text-light">akshaisanthoshwriter@gmail.com</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="contact-card p-4 text-center">
                  <Phone style={{width: '2rem', height: '2rem', color: 'var(--purple-secondary)'}} className="mb-3" />
                  <h3 className="h5 mb-2">Phone</h3>
                  <p className="text-light">+91-8124775745</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="contact-card p-4 text-center">
                  <Globe style={{width: '2rem', height: '2rem', color: 'var(--purple-secondary)'}} className="mb-3" />
                  <h3 className="h5 mb-2">Location</h3>
                  <p className="text-light">Salem, TamilNadu, India.</p>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.linkedin.com/in/akshai-santhosh-21aba9297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link p-3 rounded-circle text-white text-decoration-none">
                <Linkedin style={{width: '1.5rem', height: '1.5rem'}} />
              </a>
              <a href="#" className="social-link p-3 rounded-circle text-white text-decoration-none">
                <Twitter style={{width: '1.5rem', height: '1.5rem'}} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 border-top" style={{borderColor: 'hsla(271, 81%, 56%, 0.15) !important'}}>
          <div className="container text-center">
            <p className="text-white mb-0" >
              © 2025 Akshai Santhosh. All rights reserved. Crafting stories that matter.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;