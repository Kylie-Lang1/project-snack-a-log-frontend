import Snacks from "../Components/Snacks";
import * as tailwind from "../css/styles";

function Index() {
  return (
    <div className="">
      <h2 className={tailwind.show_h2}>Snacks Index</h2>
      <Snacks />
    </div>
  );
}

export default Index;
