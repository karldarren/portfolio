export const profile = {
  name: "Karl Darren De Sosa",
  identity: "System Builder",
  title: "Full-Stack Developer • Systems Builder • IT & Network Specialist",
  message:
    "I build practical digital systems, automate manual processes, and solve real-world technical problems.",
  valueProp:
    "I design and ship web systems, turn manual workflows into automated ones, and keep networks and infrastructure running — from business platforms and enrollment systems to fiber/FTTH installs and campus-wide connectivity.",
  focusAreas: [
    "Web Development",
    "System Development",
    "Automation",
    "IT Support",
    "Network Administration",
    "FTTH / Fiber",
    "Deployment",
    "Technical Operations",
  ],
  location: "Cavite, Philippines",
  email: "karldarrendesosa@gmail.com",
  resume: "/karldarrendesosa-resume.pdf",
  // Drop a real, optimized profile photo at this path (square, ~256×256+).
  // Until the asset exists, the Avatar component falls back to the <KD/>
  // monogram — no placeholder/AI face is ever rendered.
  photo: "/profile.jpg",
  initials: "KD",
  education: {
    degree: "BS Information Technology",
    school: "Cavite State University",
  },
  available: true,
  socials: {
    github: "https://github.com/karldarren",
    linkedin: "https://linkedin.com/in/karldarren",
  },
} as const;
