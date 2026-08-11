import React from 'react';
import { createRoot } from 'react-dom/client';
import { Atom, BookOpen, Download, FileText, Image, Lightbulb, PlayCircle, UploadCloud, Users, Video } from 'lucide-react';
import './styles.css';

const checklist = [
  'Collect research notes, verified references, diagrams, presentation slides, model photos and a short explanation script.',
  'Record a 3-5 minute video: introduction, how the model works, benefits, safety message, and conclusion.',
  'Upload files to Google Drive, OneDrive, or GitHub Releases first, then paste public download links into this website.',
  'Add credits for Homi J. Bhabha, source links, team members, school name, and teacher guidance.',
];

const stages = [
  { title: 'Stage 1', fuel: 'Natural uranium', output: 'Electricity + plutonium-239', note: 'Pressurised Heavy Water Reactors build the base for later stages.' },
  { title: 'Stage 2', fuel: 'Plutonium + uranium', output: 'More fissile material', note: 'Fast Breeder Reactors multiply fuel and support a larger nuclear cycle.' },
  { title: 'Stage 3', fuel: 'Thorium-232', output: 'Uranium-233 fuel cycle', note: 'Uses India’s thorium resources for long-term energy security.' },
];

const resources = [
  { icon: FileText, title: 'Research notes', status: 'Add PDF link when ready' },
  { icon: BookOpen, title: 'Presentation slides', status: 'Upload PPT/PDF to share' },
  { icon: Image, title: 'Model photos', status: 'Show front, side and close-up views' },
  { icon: Video, title: 'Explanation video', status: 'Embed YouTube/Drive link later' },
];

function App() {
  return (
    <main>
      <section className="hero">
        <nav>
          <div className="brand"><Atom size={28} /> Atomic Structure Project</div>
          <a className="navButton" href="#student-hub">Student Hub Idea</a>
        </nav>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">Science Exhibition Website Concept</p>
            <h1>India's Three Stage Nuclear Programme</h1>
            <p className="lead">A clean public portfolio for your atom structure model, research, presentation, model images and explanation video inspired by Homi J. Bhabha's long-term nuclear energy vision.</p>
            <div className="actions">
              <a href="#upload-plan" className="primary"><UploadCloud size={18}/> What to upload</a>
              <a href="#video" className="secondary"><PlayCircle size={18}/> Video script plan</a>
            </div>
          </div>
          <div className="modelCard">
            <div className="atomVisual">
              <span className="nucleus">Th</span>
              <span className="orbit orbitOne"></span>
              <span className="orbit orbitTwo"></span>
              <span className="electron e1"></span>
              <span className="electron e2"></span>
              <span className="electron e3"></span>
            </div>
            <h2>Your model preview</h2>
            <p>Replace this visual with your real model photo or a video thumbnail when your files are ready.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Project explanation</p>
        <h2>Show the programme in three simple stages</h2>
        <div className="stageGrid">
          {stages.map((stage) => (
            <article className="stageCard" key={stage.title}>
              <span>{stage.title}</span>
              <h3>{stage.fuel}</h3>
              <strong>{stage.output}</strong>
              <p>{stage.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="upload-plan">
        <div>
          <p className="eyebrow">Before publishing</p>
          <h2>Things you should prepare</h2>
          <ul className="checklist">
            {checklist.map((item) => <li key={item}><Lightbulb size={18}/>{item}</li>)}
          </ul>
        </div>
        <div className="resourcePanel">
          {resources.map(({ icon: Icon, title, status }) => (
            <div className="resource" key={title}>
              <Icon />
              <div><h3>{title}</h3><p>{status}</p></div>
              <Download className="download" />
            </div>
          ))}
        </div>
      </section>

      <section className="section video" id="video">
        <div>
          <p className="eyebrow">Explanation video plan</p>
          <h2>Record your model explanation confidently</h2>
          <p>Use this order: greet viewers, introduce the topic, explain atomic structure, connect it to nuclear fission, describe all three stages, show your model parts, explain benefits such as energy security and research learning, then end with credits and safety awareness.</p>
        </div>
        <div className="videoBox"><PlayCircle size={72}/><span>Future embedded video</span></div>
      </section>

      <section className="section hub" id="student-hub">
        <Users size={42}/>
        <h2>Future idea: a student project upload platform</h2>
        <p>If you want all students to upload their projects, create login accounts, project categories, upload forms, teacher approval, public pages, download buttons, comments/likes, and safety moderation. AI tools can help design pages, write descriptions, summarize research, create posters, and generate scripts, but teachers should verify scientific accuracy before publishing.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
