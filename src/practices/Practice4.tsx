export const Practice4 = () => {
  const calcToatalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcToatalFee(1000);
  return (
    <div>
      <p>練習問題：設定ファイル</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
