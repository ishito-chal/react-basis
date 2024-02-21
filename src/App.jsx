import { ColorfulMessage } from "./components/colorfulMessage";
import { useEffect, useState } from "react";

export const App = () => {
  console.log("--App--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickCountUp = () => {
    // setNum(num + 1)を複数実行してもnum+1は1回だけ実行される
    // setNum((prev) => prev + 1)を使うとその場でnum+1される
    // Reactの仕様上、何度も更新すると遅くなるのでまとめて更新しているためこのようになっている。
    setNum((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("--useEffect--");
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green" message="元気です！"></ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>あいうえお</p>}
    </>
  );
};
