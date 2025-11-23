import { motion } from 'framer-motion';

const TechCard = ({ name, description, icon: Icon, color = "text-white", gradient = "from-white/10" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between h-full group cursor-default"
    >
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className={`p-3 rounded-full bg-white/10 w-fit mb-3 ${color}`}>
          <Icon size={24} />
        </div>
        <h3 className="text-white font-bold text-lg font-sync max-sm:text-sm">{name}</h3>
        <p className="text-white/50 text-xs mt-1">{description}</p>
      </div>

      <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-white/10 transform translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 ease-out">
        <Icon size={120} />
      </div>
    </motion.div>
  );
};

export default TechCard;