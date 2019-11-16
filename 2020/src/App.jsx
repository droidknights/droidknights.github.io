import React from "react";
import styles from "./App.module.scss";
import Android from "./android.jpg";

function rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}

class App extends React.Component {
  state = {
    width: 100,
    height: 100
  };

  componentDidMount() {
    this.handleFileChange();
  }

  handleFileChange = () => {
    const ctx = this.canvas.getContext("2d");
    const container = this.container;
    const img = new Image();

    const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
      const byteCharacters = window.atob(b64Data);
      const byteArrays = [];

      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: contentType });
      return blob;
    };

    img.onload = () => {
      const width = img.width;
      const height = img.height;

      this.setState({ width, height });

      ctx.drawImage(img, 0, 0, width, height);

      URL.revokeObjectURL(img.src);

      /* Read pixel data */
      const imageData = ctx.getImageData(0, 2, width, height);
      const data = imageData.data;
      // => [r,g,b,a,...]

      for (let i = 0; i < img.height - 2; i++) {
        const child = container.appendChild(document.createElement("div"));
        let text = "";
        for (let j = 0; j < img.width * 4; j += 4) {
          const n = img.width * 4 * i + j;
          const hex = rgbToHex(data[n], data[n + 1], data[n + 2]);
          if (hex.startsWith("f") || hex.startsWith("e")) {
            child.innerHTML += "<span style='visibility: hidden;'>◼︎</span>";
          } else {
            child.innerHTML += "◼︎";
          }
        }
        child.appendChild(document.createTextNode(text));
      }
    };
    const blob = b64toBlob(Android.split(",")[1], "image/png");
    img.src = URL.createObjectURL(blob);
  };

  render() {
    const { width, height } = this.state;

    return (
      <>
        <div className={styles.starContainer}>
          <div className={styles.stars}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>
        </div>
        <img
          className={styles.titleImg}
          src={require("./dk2020_logo.svg")}
          alt=""
        />
        <div
          className={styles.androidContainer}
          ref={el => (this.container = el)}
          style={{ color: "white", fontSize: "3px" }}
        ></div>
        <canvas
          style={{ display: "none" }}
          width={width}
          height={height}
          ref={el => (this.canvas = el)}
        />

        <div className={styles.soon}>COMMING SOON</div>
        <div className={styles.detail}>
          <div>
            <b>장소</b>: 코엑스 E홀 / 서울특별시 강남구 영동대로 513 (삼성동,
            코엑스)
          </div>
          <div>
            <b>날짜</b>: 2020년 00월 00일
          </div>
        </div>
      </>
    );
  }
}

export default App;
