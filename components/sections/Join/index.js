import styles from "./Join.module.scss";

import Section from "components/common/Section";
import Polaroid from "components/common/Polaroid";

export default function Join() {
  const onJoinButtonClick = () => {
    const url = "https://t.me/+VqW2TIN42rewekrP";
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Section heading="Присоединяйся" id="join">
      <div className={styles.container}>
        <p>Начни воплощение своей мечты с изучения языка</p>
        <div className={styles.polaroidWrapper}>
          <Polaroid>
            <video className={styles.video} autoPlay loop muted>
              <source src="/join-video.mp4" type="video/mp4" />
            </video>
            <button className={styles.button} onClick={onJoinButtonClick}>
              Записаться
            </button>
          </Polaroid>
        </div>
      </div>
    </Section>
  );
}
