import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

function PreLoader1() {
  return (
    <div className="loader">
      <ReactLoading type={"bars"} color={"#ff7c00"} height={100} width={100} />
    </div>
  );
}
export default PreLoader1;