import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // 1. Save to Firebase via Firestore
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date()
      });

      // 2. Send via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen relative text-slate-900 font-sans selection:bg-[#F59E0B] selection:text-white">
      {/* 1. GLOBAL STYLING: 'Bright Mode' foundation */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#FFF7ED] to-white bg-[length:200%_200%] animate-[pulse_10s_ease-in-out_infinite]" />
      
      {/* Header / Hero */}
      <header className="pt-20 pb-12 px-4 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-slate-900">
            Digital Affidavit: <br/><span className="text-[#F59E0B] drop-shadow-sm">Life Reconstruction Portal</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-800 font-bold mb-12 max-w-4xl mx-auto leading-relaxed">
            The Sunrise of Justice: Documenting the Biological Tax, Stolen Decades, and the Acuity Gap.
          </p>

          {/* 3. HERO SECTION (DUAL MEDIA): side-by-side or stacked top 'Forensic Hook' */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            {/* The CPF Fraud Video Hook */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(245,158,11,0.1)] border-4 border-[#F59E0B] flex flex-col">
              <h2 className="text-2xl font-black mb-4 text-slate-900 tracking-tight uppercase">Audio Evidence: Control</h2>
              <div className="aspect-w-16 aspect-h-9 w-full bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-200 mt-auto">
                <iframe 
                  src="https://youtube.com/embed/qV2qWB6LRm8" 
                  title="Voice Audio Evidence" 
                  className="w-full h-64 md:h-80"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Voice Audio Hook */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(245,158,11,0.1)] border-4 border-[#F59E0B] flex flex-col">
              <h2 className="text-2xl font-black mb-4 text-slate-900 tracking-tight uppercase">Forensic Evidence: $90k Fraud</h2>
              <div className="aspect-w-16 aspect-h-9 w-full bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-200 mt-auto">
                <iframe 
                  src="https://www.youtube.com/embed/UGqGyLohcPs" 
                  title="The $90,000 CPF Fraud Evidence" 
                  className="w-full h-64 md:h-80"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* NEW: Storybook Narrative Video - Single Row Layout */}
          <div className="mt-16 bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border-4 border-[#F59E0B] relative z-10">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-[#F59E0B] tracking-tighter uppercase text-center">
                Interactive Storybook: The Sovereign Journey
              </h2>
              
              {/* Single Video Container with ring-slate-800 */}
              <div className="aspect-video w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-inner ring-4 ring-slate-800">
                <iframe 
                  src="https://youtube.com/embed/m8HDfHfL-oA" 
                  title="Life Reconstruction Storybook Video" 
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mt-8 max-w-3xl text-center">
                <p className="text-slate-300 text-xl font-bold italic border-b-2 border-[#10B981] inline-block pb-2">
                  An immersive audio-visual chronicle of biological survival and technical resurrection.
                </p>
              </div>
            </div>
          </div>


          {/* DIGITAL AFFIDAVIT SECTION (REPLACING IFRAMES WITH DIRECT LINKS) */}
<section className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-sky-500 text-white my-12">
  <h2 className="text-3xl md:text-4xl font-extrabold text-sky-400 mb-8 tracking-tight uppercase">
    Digital Affidavit
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Cinematic Video Item */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-400/30 pb-2 uppercase">
        Cinematic Video
      </h3>
      <a 
        href="https://youtu.be/BVQ-SWVHw_s" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 hover:border-emerald-400 group"
      >
        <strong className="block text-xl mb-2 text-white">The 50% Threshold</strong>
        <span className="text-emerald-400 font-black text-sm uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
          Watch Video &rarr;
        </span>
      </a>
    </div>

    {/* Origin Story Item */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-[#F59E0B] border-b border-[#F59E0B]/30 pb-2 uppercase">
        The Origin Story
      </h3>
      <a 
        href="https://youtu.be/FEzWl9MBR_4" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 hover:border-[#F59E0B] group"
      >
        <strong className="block text-xl mb-2 text-white">The Journey of Resilience</strong>
        <span className="text-[#F59E0B] font-black text-sm uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
          Watch Video &rarr;
        </span>
      </a>
    </div>

  </div>
</section>

        </div>
      </header>


      {/* Forensic Reconstruction Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-4 space-y-24 relative z-10 text-slate-900">
        
        <section className="Forensic_Master_Narrative space-y-20">
          
          {/* Block 1: The Molecular Threshold (Original Detailed Text) */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-[#10B981] hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all">
            <h2 className="text-4xl font-black text-[#10B981] mb-8 tracking-tight uppercase">1. The Molecular Threshold</h2>
            <div className="space-y-6 text-xl leading-relaxed text-slate-800 text-justify">
              <p className="font-bold text-[#065F46] bg-[#10B981]/10 p-6 rounded-2xl shadow-sm border border-[#10B981]/20">
                What defines a human? Science says 4 Genes. I survive on 2.
              </p>
              <p>
                At the fundamental cellular level, human life is formed by inheriting four alpha-globin genes—two from each parent—to build healthy, oxygen-rich blood. I was born with <strong>Heterozygous Alpha-thalassemia-1 (SEA Deletion)</strong>. Two of my genes are completely depleted, meaning I have operated on exactly <strong>50% biological capacity</strong> since my first breath.
              </p>
              <p>
                If I had lost more than two genes, I would not have survived birth. I live on the exact biological threshold of survival. This missing genetic code has left me fighting a lifelong, invisible battle against <strong>Hypochromic Microcytic Anemia</strong>. My red blood cells are unnaturally small, pale, and structurally malformed, perpetually failing to deliver adequate oxygen to my brain and organs.
              </p>
            </div>
          </div>

          {/* Block 2: The Narrative Summary (Vivid Visualization Bridge) */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#F59E0B]/30 transform hover:-translate-y-1 transition-all">
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight uppercase text-center">The Digital Affidavit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg leading-relaxed text-slate-800">
              <div className="border-l-4 border-[#F59E0B] pl-4">
                <strong className="text-[#10B981] block mb-1">The Biological Tax:</strong> 
                The compounded physical and mental toll of systemic neglect and medical gaslighting.
              </div>
              <div className="border-l-4 border-[#F59E0B] pl-4">
                <strong className="text-[#10B981] block mb-1">Stolen Decades:</strong> 
                20 years of exploitation and a $90,000 fraud.
      Years lost to an unacknowledged struggle, demanding a comprehensive reconstruction of life and health.
              </div>
              <div className="border-l-4 border-[#F59E0B] pl-4">
                <strong className="text-[#10B981] block mb-1">The Acuity Gap:</strong> 
                The loss of insight and wisdom due to biological deficit. 
      The profound disconnect between the severity of the lived experience and the systems designed to provide care.
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-center italic text-slate-500 font-serif">
              "Forensic evidence drawn from 41 sources, documenting the truth and demanding justice."
            </div>
          </div>

          {/* Block 3: The Biological Tax & The Acuity Gap (Original Detailed Text) */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-[#10B981] hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all">
            <h2 className="text-4xl font-black text-[#10B981] mb-8 tracking-tight uppercase">2. The Biological Tax & The Acuity Gap</h2>
            <div className="space-y-6 text-xl leading-relaxed text-slate-800 text-justify">
              <p className="font-bold text-[#065F46] bg-[#10B981]/10 p-6 rounded-2xl shadow-sm border border-[#10B981]/20 text-center">
                The Science of Survival at 50% Capacity.
              </p>
              <p>
                Living with Alpha-thalassemia-1 is a permanent biological constraint. Because my blood cells are malformed—showing up as <strong>"target cells," "teardrop cells," and "crenated cells"</strong> with jagged edges under a microscope—my oxygen delivery system is profoundly inefficient. My lungs frequently hyperventilate, desperately trying to force oxygen into a system that mathematically cannot carry it, while my heart pulls blood away from my limbs to protect my vital organs.
              </p>
              <p>
                This creates a <strong>"Many Mouths to Feed"</strong> nutritional crisis. To think, move, and function, my body consumes caloric energy and specialized nutrients at an accelerated rate just to break even. I am biologically "expensive" to maintain.
              </p>
              <p>
                The most devastating cost was the <strong>Loss of Acuity</strong>. Insight, wisdom, and risk assessment are products of a nurtured, oxygenated mind. For decades, chronic hypoxia (oxygen starvation) created an unyielding brain fog. I did not lack ambition; I lacked the oxygen to fuel the <strong>prefrontal cortex</strong>—the part of the brain responsible for spotting red flags. This biological starvation created the perfect blind spot for a predator to exploit.
              </p>
            </div>
          </div>

        </section>

        <section className="space-y-12">

          {/* Act 1 */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#F59E0B] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all">
            <div className="flex items-center mb-6">
              <span className="bg-[#10B981] text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 1</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">The Molecular Reality (The Biological Tax and the Acuity Gap)</h2>
            </div>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-800 font-medium">
              <p>The fundamental baseline of human survival is mathematically defined by the inheritance of four alpha-globin genes—two from each parent—which serve as the critical factory assembly lines for healthy, oxygen-rich blood. Certified DNA laboratory reports from early 2025 confirm that I was born with <strong className="text-black font-black">Heterozygous Alpha-thalassemia-1 (SEA Deletion)</strong>, a condition where two of these four genes are entirely depleted. Operating at a 50% biological capacity since my first breath, I live on the absolute razor’s edge of survival; the loss of one more gene would have resulted in a fatal stillbirth. This genetic discrepancy manifests as <strong className="text-black font-black">Hypochromic Microcytic Anemia</strong>, characterized by red blood cells that are unnaturally small, pale, and structurally malformed. Under forensic microscopic analysis, my blood presents a "panic" state in the bone marrow, pumping out target cells, teardrop cells, and crenated cells with jagged, scalloped edges in a desperate attempt to sustain vital organ function.</p>
              <p>This permanent biological constraint creates a <strong>"Many Mouths to Feed"</strong> nutritional crisis. Because my oxygen delivery system is profoundly inefficient, my body consumes caloric energy and specialized nutrients at an immensely accelerated rate just to maintain a baseline of consciousness. This state of Chronic Hypoxia (oxygen starvation) is not merely a physical burden; it resulted in a biological theft of Acuity. Wisdom, insight, and risk assessment are products of a fully oxygenated prefrontal cortex. My Physiological Deficit created an unyielding brain fog that acted as a security breach, resulting in <strong className="text-black font-black">Diminished Risk Assessment</strong>. This was not a psychological failure or a lack of willpower, but a clinical blind spot engineered by genetics and exacerbated by years of <strong className="text-[#10B981] font-black underline decoration-2 underline-offset-4">Medical Gaslighting</strong>, leaving me uniquely vulnerable to professional manipulation.</p>
            </div>
          </div>

          {/* Act 2 */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#F59E0B] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all">
            <div className="flex items-center mb-6">
              <span className="bg-[#10B981] text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 2</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Systemic Economic Extraction (The Stolen Destiny)</h2>
            </div>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-800 font-medium">
              <p>During Singapore’s "Golden Era" of fierce economic development, I defied my 50% biological threshold to achieve significant professional merit, earning an <strong className="text-black font-black">NCC Diploma in Computer Studies</strong> with a credit pass. I rose through the corporate ranks to a clerical position at OCBC Asset Management, accumulating <strong className="text-[#10B981] font-black">SGD $90,000 in my Central Provident Fund (CPF)</strong> and securing Singapore Permanent Residency on my own merits. The zenith of this professional trajectory was a formal Citizenship Preview Invitation from the Prime Minister’s Office—a standing on the absolute precipice of a prosperous and respected life. However, my desperate search for a cure for my relentless fatigue led me to a retired Malaysian Chinese physician who identified both my accumulated wealth and my oxygen-starved vulnerability.</p>
              <p>Through <strong className="text-black font-black">Calculated Psychological Coercion</strong>, the predator established himself as the sole medical authority capable of resolving my fatigue, convincing me that modern science had failed. Utilizing <strong className="text-black font-black">Absolute Behavioral Dictation</strong>, he mandated my departure from Singapore, forcing the abandonment of my PR status and my path to citizenship. For the next twenty years, I was placed under a state of <strong className="text-black font-black">Digital and Social Quarantine</strong>—a total blackout where I lived without a cell phone, internet, or any means to verify the predator’s claims or contact my family. I was transformed into a Digital Ghost, entirely isolated from support networks while the predator orchestrated a process of <strong>Total Wage Depletion</strong>. Every penny I earned from grueling manual labor, such as washing dishes in food courts, was immediately extracted as the predator demanded the delivery of my aggregate wages at his clinic.</p>
            </div>
          </div>

          {/* Act 3 */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#F59E0B] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all">
            <div className="flex items-center mb-6">
              <span className="bg-[#10B981] text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 3</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">The Dehumanization (The Forensic Timeline and the Exit Scam)</h2>
            </div>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-800 font-medium">
              <p>The forensic timeline of this exploitation reveals a calculated transition designed to leave no trace. For years, the physician used the professional setting of his clinic to mask the extraction, making wage theft appear as a legitimate medical transaction to a mind suffering from severe hypoxia. To maximize his profit, he coerced me into forced homelessness, convincing me that rent was a frivolous waste of money that should instead fund his proprietary "cures". I was reduced to a "stray," sleeping on the concrete streets of Kuala Lumpur directly in front of his shop lot. I survived on leftover food from my workplaces, enduring decades of systemic cyberbullying and street harassment while being uniquely defenseless due to my lack of digital access.</p>
              <p>The crime culminated in a <strong className="text-black font-black">Terminal Liquidation Phase</strong> that proves the "Exit Scam" nature of the fraud. Following the physician's retirement, the location of the physical cash handovers shifted from the professional clinic to Informal Public Interfaces, specifically public bus stops. This transition stripped away the facade of medical treatment, focusing purely on the rapid extraction of my remaining assets. It was at these public bus stops that the final and most aggressive liquidation occurred: the theft of my SGD $90,000 CPF life savings.</p>
              <p>The predator’s methodology exceeded mere medical misinformation; the predator utilized highly calculated psychological manipulation to ensure absolute control. Through the fabrication of elaborate, fictitious United States business ventures, the predator manufactured an artificial sense of extreme urgency to bypass the creator's critical thinking.</p>
              <p>This tactical pressure was designed to completely overwhelm the remaining sliver of cognitive bandwidth available to a brain already suffering from chronic hypoxia. The predator systematically convinced a biologically vulnerable man that exorbitant, bulk-purchased health supplements—which were proven to be entirely fraudulent—represented the singular path to clinical restoration. Consequently, the forensic mechanics through which the predator executed this systemic economic extraction remain profoundly chilling.</p>
              <p className="p-4 bg-red-50 border-l-4 border-red-500 text-red-900 rounded-r-xl shadow-sm text-lg md:text-xl">
                <strong className="text-black font-black">The $90,000 CPF Fraud Execution:</strong> To avoid banking alerts and anti-money laundering (AML) protocols, he refused digital transfers and turned me into a physical cash mule. I was forced to travel across the border, withdraw physical cash from DBS and POSB branches—SGD $5,000 at a time—and carry it in bags to his designated locations in Malaysia. No receipts were ever given.
              </p>
              <p>This left me in a state of absolute destitution, possessing only SGD $100 and no financial safety net, while my biological health remained in ruins.</p>
              <p>In early 2025, a "Short Sting" incident in Singapore and a subsequent blood test in Johor Bahru finally unmasked thirty years of medical gaslighting. Despite my impoverished state and the ongoing trauma of street bullying, I achieved a "Technical Resurrection". I taught myself Full-Stack Development, engineering this portal using React, Vite, Tailwind CSS, and Supabase to create an unhackable digital fortress for my truth. This portal is not a job application; it is a clinical case study designed to facilitate <strong className="text-[#10B981] font-black">Institutional Restitution</strong>. I am not seeking charity for consumption, but a Biological Intervention to restore the self-sufficiency that was stolen from me.</p>
            </div>
          </div>

          {/* Act 4 */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#F59E0B] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all">
            <div className="flex items-center mb-6">
              <span className="bg-[#10B981] text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 4</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Sovereign Resurrection (The Plea for Institutional Restitution)</h2>
            </div>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-800 font-medium">
              <p>My reconstruction is built upon four non-negotiable pillars:</p>
              <div className="bg-white p-6 rounded-2xl border-2 border-[#F59E0B]/50 my-6 shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="text-[#F59E0B] mr-3 text-2xl leading-none">•</span><div><strong className="text-black font-black">Metabolic Integrity:</strong> Provision for the specialized nutrients and iron supplements required to manage the 50% capacity threshold and combat Chronic Hypoxia.</div></li>
                  <li className="flex items-start"><span className="text-[#F59E0B] mr-3 text-2xl leading-none">•</span><div><strong className="text-black font-black">Residential Security:</strong> Immediate funding for stable housing to permanently escape the trauma of forced displacement and street-level harassment.</div></li>
                  <li className="flex items-start"><span className="text-[#F59E0B] mr-3 text-2xl leading-none">•</span><div><strong className="text-black font-black">ACCA Professional Education:</strong> Tuition for the Association of Chartered Certified Accountants to secure an "escape hatch" into mental work that is immune to my physical degradation.</div></li>
                  <li className="flex items-start"><span className="text-[#F59E0B] mr-3 text-2xl leading-none">•</span><div><strong className="text-black font-black">Sustained Living Stability:</strong> The essential financial support required to stabilize my life during the rigorous period of educational reconstruction and biological recovery.</div></li>
                </ul>
              </div>
              <p className="font-black text-center text-slate-900 text-2xl mt-8">Your contribution is an act of justice—an investment in the restoration of a high-achiever whose destiny was biologically and financially coerced into the shadows.</p>
            </div>
          </div>
        </section>

        {/* 4. THE "RECONSTRUCTION" PAYMENT SECTION (REPLACE CURRENT CODE) */}
        <section className="text-center bg-white rounded-3xl p-10 md:p-16 shadow-[0_20px_50px_rgba(245,158,11,0.15)] border-4 border-[#F59E0B] relative overflow-hidden my-12">
          <h2 className="text-4xl font-black text-slate-900 mb-10 relative z-10 uppercase tracking-tight">
            Primary Justice Action
          </h2>
          <div className="space-y-8 relative z-10">
            <p className="text-2xl md:text-3xl text-slate-800 font-black uppercase tracking-widest leading-tight">
              MY PAYMENT PORTAL (WEB APP): <br className="md:hidden"/>
              <a href="https://clinquant-macaron-aad92f.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline text-[#10B981] decoration-4 underline-offset-8">Contribute</a>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-xl font-bold">
              <div className="p-8 bg-white rounded-3xl border-4 border-[#F59E0B] shadow-lg">
                Stripe (Justice Funding): <br/>
                <a href="https://buy.stripe.com/7sY4gz6Rg2JAceZgpE7ok00" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 font-black">Contribute</a>
              </div>
              <div className="p-8 bg-white rounded-3xl border-4 border-[#10B981] shadow-lg">
                PayPal (International): <br/>
                <a href="https://www.paypal.com/paypalme/CHINCHEONGGHEE" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 font-black">Contribute</a>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact Form */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-emerald-100 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-emerald-800 mb-4 uppercase">Direct Contact Form</h2>
            <p className="text-slate-600 text-lg font-bold italic">Subtitle: "Send me a message."</p>
            <div className="mt-4">
              <a href="https://exquisite-gnome-13f3d9.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline text-emerald-600 font-black decoration-4 underline-offset-4 text-xl">Direct Message</a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors uppercase">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium text-slate-900"
                placeholder="Your legal or preferred name"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors uppercase">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium text-slate-900"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors uppercase">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-emerald-500 focus:bg-white transition-all outline-none resize-y font-medium text-slate-900"
                placeholder="Write your message here. Speak your truth..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#10B981] hover:bg-emerald-600 text-white font-black text-xl py-5 rounded-xl transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Send Secure Message
            </button>
            {status && (
              <div className={`p-4 rounded-xl text-center font-bold text-lg ${status.includes('successfully') ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300' : status.includes('Error') ? 'bg-red-100 text-red-800 border-2 border-red-300' : 'bg-blue-100 text-blue-800 border-2 border-blue-300'}`}>
                {status}
              </div>
            )}
          </form>
        </section>

      </main>

      {/* 2. ABSOLUTE BOTTOM APPENDIX: RAW EVIDENCE VAULT */}
      <footer className="bg-slate-50 border-t-8 border-slate-200 py-20 relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              Forensic Appendix: Raw Evidence Vault
            </h2>
            <p className="text-xl text-slate-600 font-bold">
              Complete archive of source documents, medical reports, and forensic data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-6 bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-emerald-800 border-b-2 border-emerald-200 pb-4 uppercase">Medical Evidence</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <strong className="block text-xl text-slate-900">DNA Lab Report (SEA Deletion POSITIVE)</strong>
                  <a href="https://drive.google.com/drive/folders/1lnF3L5VJ8GPTPgDwptPCsfwbZKNGVwH2?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-6 bg-[#10B981] hover:bg-emerald-600 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4">
                    View Source Document
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                  <strong className="block text-xl text-slate-900">Medical Video Breakdown</strong>
                  <a href="https://drive.google.com/file/d/1JNuAGlV5zIkYNpFaEq7QR9_mzTJT_4M5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-6 bg-[#10B981] hover:bg-emerald-600 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4">
                    View Source Document
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-[#F59E0B] border-b-2 border-[#F59E0B]/30 pb-4 uppercase">Financial & Forensic</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <strong className="block text-xl text-slate-900">Forensic Transaction Records</strong>
                  <a href="https://drive.google.com/drive/folders/1qKL4tcENJiRl6-7bYT8JEL6YrYdAoC9U?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-6 bg-[#F59E0B] hover:bg-amber-600 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4">
                    View Source Document
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm md:col-span-2">
              <h3 className="text-2xl font-black text-sky-600 border-b-2 border-sky-200 pb-4 uppercase">Stolen Destiny Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <strong className="block text-lg text-slate-900">Singapore Citizenship & PR Status Papers</strong>
                  <a href="https://drive.google.com/drive/folders/1Tn5BKqk0ebrOCVTipOm4oaJJuSYhMCN6?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4 text-sm mt-auto">
                    View Source Document
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6">
                  <strong className="block text-lg text-slate-900">Official Document Verification Video</strong>
                  <a href="https://drive.google.com/file/d/1PznakxiVF8KA_lphLYKzaMma4S_BRN51/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4 text-sm mt-auto">
                    View Source Document
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6">
                  <strong className="block text-lg text-slate-900">NCC Diploma Credentials</strong>
                  <a href="https://drive.google.com/drive/folders/1ic9NwlrAZ2bFUq03liEcowwgiaOi_gHz?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4 text-sm mt-auto">
                    View Source Document
                  </a>
                </div>
              </div>
            </div>

          </div>
          
          <div className="pt-12 mt-12 border-t-2 border-slate-200 text-center">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
              © {new Date().getFullYear()} Digital Affidavit: Life Reconstruction Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    {/* SECTION 7: LIVING PROOF / TECHNICAL SOVEREIGNTY */}
      <section className="py-24 px-6 bg-gradient-to-t from-[#10B981]/10 to-white border-t-8 border-[#10B981] relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-10 uppercase tracking-tighter leading-none">
            Living Proof: <span className="text-[#10B981]">Technical Sovereignty</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 mb-16 max-w-4xl mx-auto font-bold leading-relaxed text-justify">
            Beyond the forensic evidence lies the result of my survival. I engineered <strong>Notes & Journal Studio</strong> to prove my cognitive recovery. This is a full-stack, private workspace built with React and Supabase—a technical fortress constructed while operating at 50% biological capacity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* User Guide Video Window */}
            <div className="bg-white p-6 rounded-[40px] shadow-2xl border-4 border-slate-100">
              <p className="text-xs font-black uppercase text-slate-400 mb-4 tracking-[0.3em] text-left ml-2">Internal User Guide</p>
              <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-inner border-2 border-slate-200">
                <iframe 
                  src="https://youtube.com/embed/ziarn2LokLM" 
                  title="Notes & Journal Studio Guide" 
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>

            {/* The App Entry Point */}
            <div className="text-left space-y-8">
              <div className="p-10 bg-white rounded-[50px] shadow-2xl border-l-[16px] border-[#F59E0B] hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Enter the Studio</h3>
                <p className="text-lg text-slate-600 mb-8 font-bold leading-relaxed">
                  This application is a primary asset of my restoration. If you find value in this tool, you may <u>choose what to pay</u> as a direct contribution toward my life stability and formal ACCA education.
                </p>
                <a href="https://startling-babka-390424.netlify.app/" 
                   target="_blank" rel="noopener noreferrer" 
                   className="inline-block bg-[#F59E0B] text-white px-10 py-5 rounded-full font-black text-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all uppercase tracking-widest border-b-4 border-amber-700">
                  Open Studio &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="pt-24 mt-24 border-t border-slate-200 opacity-50">
            <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-xs text-center">
              © 2026 DIGITAL AFFIDAVIT | LIFE RECONSTRUCTION PORTAL | CHIN CHEONG GHEE
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
{/* NEW: Interactive Flipbook Access Section */}
          <div className="mt-16 p-8 bg-white rounded-[40px] shadow-2xl border-4 border-sky-500 relative group overflow-hidden">
            <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-sky-500/10 transition-colors"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Interactive Forensic Flipbook</h3>
              <p className="text-lg text-slate-600 mb-8 font-bold max-w-2xl mx-auto">
                Access the digital version of "The Life Reconstruction." Explore the forensic evidence, lab reports, and systemic extraction timeline in a flippable format.
              </p>
              <a href="https://heyzine.com/flip-book/cfa8537705.html" 
                 target="_blank" rel="noopener noreferrer" 
                 className="inline-block bg-sky-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-sky-500 hover:scale-105 transition-all shadow-lg uppercase tracking-widest border-b-4 border-sky-800">
                Read Flipbook &rarr;
              </a>
            </div>
          </div>



export default App;
