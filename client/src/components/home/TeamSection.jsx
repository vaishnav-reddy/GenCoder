import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Appala Vaishnav Reddy",
      role: "FrontEnd Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHeFGjar94wVw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725271784901?e=1741824000&v=beta&t=BGiPtT_oAhhSY7SywdxfFFQ0NLyPetdD0rbNDNC9xZU",
      graduationYear: "2027",
      college: "Parul University",
      linkedin: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
      github: "https://github.com/vaishnav-reddy",
    },
    {
      name: "Soham Vaghela",
      role: "Langflow Developer",
      image:
        "https://avatars.githubusercontent.com/u/153496896?v=4",
      graduationYear: "2027",
      college: "Parul University",
      linkedin: "https://www.linkedin.com/in/sohamvaghela1712",
      github: "https://github.com/sohum1712",
    },
    {
      name: "Dharma Teja Pola",
      role: "Designer & Developer",
      image:
        "https://avatars.githubusercontent.com/u/147713875?s=400&u=0b32691211404b89d9c5df77a20825542cd88e95&v=4",
      graduationYear: "2027",
      college: "Parul University",
      linkedin: "https://www.linkedin.com/in/dharmatejapola",
      github: "hhttps://www.github.com/teja-pola",
    },

  ];

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Meet the Game-Changers of <b>GenCoder!</b> A powerhouse team blending the art of design, the precision of data science, and the magic of development.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover ring-4 ring-primary-100 group-hover:ring-primary-200 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <GraduationCap size={18} className="text-primary-500" />
                <span className="text-sm">
                  {member.college} ({member.graduationYear})
                </span>
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors duration-300">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
