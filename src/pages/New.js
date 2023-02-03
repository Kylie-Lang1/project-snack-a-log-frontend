import SnackNewForm from "../Components/SnackNewForm";
import * as tailwind from "../css/styles";

function New() {
    return (
      <div className="w-full flex flex-col items-center">
        {/* <h2 className={tailwind.show_h2}>New Snack</h2> */}
        <SnackNewForm />
      </div>
    );
}

export default New;