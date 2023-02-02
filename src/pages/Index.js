import Snacks from "../Components/Snacks";
import * as tailwind from "../css/styles";

function Index() {
  return (
    <div className="flex flex-col items-center">
      <h2 className={tailwind.show_h2}>Snacks Index</h2>
      <Snacks />
    </div>
  );
}

export default Index;
