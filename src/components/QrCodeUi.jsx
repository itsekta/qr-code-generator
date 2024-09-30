import style from "./QrCodeUi.module.css";
import QRCode from "react-qr-code";
function QrCodeUi() {
  return (
    <div className={style.QrCodeContainerWrap}>
      <div className={style.QrCodeContainer}></div>
      <div className={style.QrCode}>
        <QRCode
          value="https://www.frontendmentor.io/"
          fgColor="000000"
          size={150}
          style={{ borderRadius: "4px" }}
        />
      </div>
      <div className={style.QrCodeContent}>
        <div className={style.QrCodeContentHeading}>
          Improve your frontend skills by building projects
        </div>
        <div className={style.QrCodeContentDesc}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to next level.
        </div>
      </div>
    </div>
  );
}

export default QrCodeUi;
