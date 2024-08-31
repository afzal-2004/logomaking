export const IconPreview = () => {
  const Background = JSON.parse(localStorage.getItem("BgValue"));
  console.log(Background);
  const styles = {
    backgroundColor: Background.bgColor,
    borderRadius: Background.Rounded,
    padding: Background.Padding,
  };
  console.log(styles);
  return (
    <>
      <main className=" h-screen p-4 bg-blue-300 w-[40%] flex justify-center items-center">
        <div className=" bg-slate-200 w-[350px] h-[350px]">
          <div style={styles} className="w-[200px] h-[200px]"></div>
        </div>
      </main>
    </>
  );
};
