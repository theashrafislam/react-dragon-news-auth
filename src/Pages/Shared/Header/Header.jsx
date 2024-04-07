import moment from "moment";
import logo from "../../../assets/logo.png"
const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-lg text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;