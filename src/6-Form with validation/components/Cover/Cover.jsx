import styles from "../styles/sizes.module.css";
// import cover from"../../../../public/learning-rafiki.svg"

const Cover = () => {
  return (
    <div
      className={`w-2/5 h-96 flex flex-col align-center justify-around py-14 px-8 ${styles.height} ${styles.bgBlue} rounded-2xl`}
    >
        <img src="../../../public/Learning-rafiki.svg" alt="" />
    </div>
  );
};

export default Cover;
