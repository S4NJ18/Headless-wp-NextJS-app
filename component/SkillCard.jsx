const skills = [
  { title: "NodeJS", percent: 90 },
  { title: "ReactJS", percent: 60 },
  {
    title: "NextJS + Tailwind CSS + EJS + HTML + CSS + JavaScript",
    percent: 60,
  },
  { title: "WordPress", percent: 90 },
  { title: "SQL, MySQL, MongoDB", percent: 80 },
  { title: "Python", percent: 40 },
];

const SkillsCard = () => {
  return (
    <div className="md:w-full px-4 py-10">
      <div className="flex flex-col gap-6 items-start relative">
        <div className="rounded-md p-8 flex flex-col gap-6 justify-center items-start bg-white w-full shadow-lg">
          <h4 className="text-2xl font-semibold text-[#132238]">My Skills:</h4>

          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-[#132238]">{skill.title}</p>
                <span className="text-sm font-semibold text-[#a53dff]">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#a53dff] h-3 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
