<<<<<<< HEAD
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ title, category, image }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            className="project-card glass interactive"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="card-inner"
            >
                <div
                    className="image-placeholder"
                    style={{ background: `linear-gradient(45deg, var(--accent-color), var(--accent-secondary))` }}
                />
                <div className="card-content">
                    <span className="category">{category}</span>
                    <h3 className="title">{title}</h3>
                </div>
            </div>

            <style>{`
        .project-card {
          width: 100%;
          aspect-ratio: 4/5;
          position: relative;
          cursor: pointer;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }
        .card-inner {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
        }
        .image-placeholder {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .image-placeholder {
          opacity: 0.3;
        }
        .category {
          font-size: 0.75rem;
          color: var(--accent-secondary);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
          display: block;
        }
        .title {
          font-size: 1.5rem;
          color: var(--text-primary);
        }
      `}</style>
        </motion.div>
    );
};

export default ProjectCard;
=======
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ title, category, image }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            className="project-card glass interactive"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="card-inner"
            >
                <div
                    className="image-placeholder"
                    style={{ background: `linear-gradient(45deg, var(--accent-color), var(--accent-secondary))` }}
                />
                <div className="card-content">
                    <span className="category">{category}</span>
                    <h3 className="title">{title}</h3>
                </div>
            </div>

            <style>{`
        .project-card {
          width: 100%;
          aspect-ratio: 4/5;
          position: relative;
          cursor: pointer;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }
        .card-inner {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
        }
        .image-placeholder {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .image-placeholder {
          opacity: 0.3;
        }
        .category {
          font-size: 0.75rem;
          color: var(--accent-secondary);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
          display: block;
        }
        .title {
          font-size: 1.5rem;
          color: var(--text-primary);
        }
      `}</style>
        </motion.div>
    );
};

export default ProjectCard;
>>>>>>> 1dfa24c3c23ef675e975c529c9833de5d7e8655c
