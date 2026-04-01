import { motion } from "framer-motion";

const InvitationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={import.meta.env.BASE_URL + "invite-1.png"}
        alt="Приглашение"
        style={{
          width: "100%",
          maxWidth: 480,
          display: "block",
        }}
      />
    </motion.section>
  );
};

export default InvitationSection;
