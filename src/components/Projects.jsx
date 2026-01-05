import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, ArrowRight } from "lucide-react";

/* ---------------- Components: Skeletons ---------------- */
const FeaturedSkeleton = () => (
  <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/40 p-8 mb-20 animate-pulse grid lg:grid-cols-2 gap-10">
    <div className="h-64 rounded-xl bg-slate-800" />
    <div className="flex flex-col gap-4">
      <div className="h-4 w-32 bg-slate-800 rounded" />
      <div className="h-10 w-3/4 bg-slate-800 rounded" />
      <div className="h-20 w-full bg-slate-800 rounded" />
      <div className="flex gap-2">
        <div className="h-8 w-16 bg-slate-800 rounded" />
        <div className="h-8 w-16 bg-slate-800 rounded" />
      </div>
    </div>
  </div>
);

const CardSkeleton = () => (
  <div className="min-w-[320px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5 animate-pulse flex flex-col gap-4">
    <div className="h-40 rounded-lg bg-slate-800 w-full" />
    <div className="h-6 w-2/3 bg-slate-800 rounded" />
    <div className="h-16 w-full bg-slate-800 rounded" />
    <div className="flex gap-2 mt-auto">
      <div className="h-6 w-12 bg-slate-800 rounded" />
      <div className="h-6 w-12 bg-slate-800 rounded" />
    </div>
  </div>
);

/* ---------------- Component: Featured Project ---------------- */
const FeaturedProject = ({ project }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="grid lg:grid-cols-2 gap-10 rounded-3xl border border-slate-800 
               bg-slate-900/60 backdrop-blur-sm p-8 mb-20 shadow-2xl shadow-black/50"
  >
    {/* Image Container */}
    <div className="relative aspect-video rounded-xl overflow-hidden group border border-slate-800/50">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
    </div>

    {/* Details */}
    <div className="flex flex-col justify-center">
      <span className="text-xs font-bold tracking-widest text-cyan-400 mb-4 uppercase">
        Featured Project
      </span>

      <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
        {project.title}
      </h3>

      <p className="text-slate-400 leading-relaxed mb-6 text-base md:text-lg">
        {project.desc}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium text-cyan-300 bg-cyan-950/30 
                       border border-cyan-500/20 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-auto">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg 
                       bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold  md:font-bold transition-colors"
          >
            Live Demo <ExternalLink size={16} />
          </a>
        )}

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                       border border-slate-700 hover:border-slate-500 text-slate-300 
                       hover:text-white transition-colors bg-slate-900"
          >
            <Github size={18} /> Source
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

/* ---------------- Component: Slider Card ---------------- */
const SliderCard = ({ project }) => (
  <motion.div
    className="min-w-[320px] max-w-[320px] flex-shrink-0 flex flex-col
               rounded-2xl  bg-slate-900/50 backdrop-blur-sm
               hover:border-cyan-500/30 transition-colors duration-300 group"
  >
    {/* Image */}
    <div className=" rounded-t-2xl overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h4>

      <p className="text-sm text-slate-400 mb-4 line-clamp-3 leading-relaxed">
        {project.desc}
      </p>

      {/* Tech Tags (Limited to 3) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech?.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-[10px] uppercase tracking-wider text-slate-300 
                       bg-slate-800/50 px-2 py-1 rounded border border-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
        >
          <Code size={16} /> Code
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-semibold text-cyan-500 hover:text-cyan-300 transition-colors"
        >
          View <ArrowRight size={14} />
        </a>
      </div>
    </div>
  </motion.div>
);

/* ---------------- Main Section ---------------- */
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Drag logic states
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  // Calculate draggable width once data is loaded
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, [projects, loading]);

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="py-24  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Selected <span className="text-cyan-400">Works</span>
            </h2>
            <p className="mt-6 text-slate-400 text-lg">
              A collection of projects showcasing my journey in building
              scalable web applications and intuitive user interfaces.
            </p>
          </motion.div>
        </div>

        {/* Featured Project */}
        {loading ? (
          <FeaturedSkeleton />
        ) : (
          featured && <FeaturedProject project={featured} />
        )}

        {/* Slider Section */}
        {rest.length > 0 && (
          <div className="relative mt-24">
            <div className="flex items-end justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-100">
                More Projects
              </h3>
              <div className="hidden md:flex gap-2 text-cyan-200 justify-center text-sm">
                <span className="text-cyan-200">Drag to explore</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Draggable Area */}
            <motion.div
              ref={carouselRef}
              className="cursor-grab active:cursor-grabbing overflow-hidden"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="flex gap-6 pb-8" // pb-8 to accommodate potential scrollbar or shadow clips
              >
                {loading
                  ? [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                  : rest.map((p, i) => (
                      <SliderCard key={p._id || i} project={p} />
                    ))}
              </motion.div>
            </motion.div>

            {/* Fade Gradients for visual cue */}
            <div className="pointer-events-none absolute top-12 right-0 h-[360px] w-24  z-10" />
            <div className="pointer-events-none absolute top-12 left-0 h-[360px] w-12 z-10" />
          </div>
        )}
      </div>
    </section>
  );
}
