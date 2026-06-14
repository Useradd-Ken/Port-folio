export interface Certificate {
  id: number;
  title: string;
  organizer: string;
  details: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "CCNAv7 - Switching, Routing, and Wireless Essentials",
    organizer: "Cisco",
    details:
      "Configured VLANs, inter-VLAN routing, and wireless LAN controllers. Learned OSPF routing protocol and network redundancy protocols like STP and EtherChannel.",
    image: "/cert/Net2.png",
  },
  {
    id: 2,
    title: "Introduction to Cybersecurity",
    organizer: "Cisco",
    details:
      "Understood cyber threats, CIA triad (confidentiality, integrity, availability), and basic security best practices to protect networks and data.",
    image: "/cert/Net12.png",
  },
  {
    id: 3,
    title: "Networking Essentials",
    organizer: "Cisco",
    details:
      "Learned OSI and TCP/IP models, IP addressing, subnetting, and basic router/switch configuration for small office/home office networks.",
    image: "/cert/Net2.png",
  },
  {
    id: 4,
    title: "Creative Web Design",
    organizer: "TESDA",
    details:
      "Mastered HTML5, CSS3, responsive design principles, and accessibility standards. Built visually engaging and user-friendly websites.",
    image: "/cert/Web.jpg",
  },
  {
    id: 5,
    title: "Containerization and Virtualization with Docker and Kubernetes",
    organizer: "DataCamp",
    details:
      "Learned container orchestration, deploying scalable microservices with Kubernetes, managing pods, services, and persistent volumes in clusters.",
    image: "/cert/Containers.png",
  },
  {
    id: 6,
    title: "Introduction to Docker",
    organizer: "DataCamp",
    details:
      "Created Docker images, managed containers, wrote Dockerfiles, and used Docker Compose for multi-container applications.",
    image: "/cert/Dock.png",
  },
];
