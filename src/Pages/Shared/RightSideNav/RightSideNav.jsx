import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>

            <div className="p-4 space-y-2">
                <h1 className="text-xl font-semibold">Login With</h1>
                <button className="btn  btn-outline w-full text-base">
                    <FaGoogle className="text-2xl" />
                    Login with Google
                </button>
                <button className="btn  btn-outline w-full text-base">
                    <FaGithub className="text-2xl" />
                    Login with GitHub
                </button>
            </div>

            <div className="p-4">
                <h1 className="text-xl font-semibold">Find Us On</h1>
                <a href="" className="flex gap-2 items-center text-base border-2 p-2 rounded-t-xl">
                    <FaFacebook className="text-2xl" />
                    Facebook
                </a>
                <a href="" className="flex gap-2 items-center text-base p-2 border-x-2">
                    <FaTwitter className="text-2xl" />
                    Twitter
                </a>
                <a href="" className="flex gap-2 items-center text-base border-2 p-2 rounded-b-xl">
                    <FaInstagram className="text-2xl" />
                    Instagram
                </a>
            </div>

            <div className="p-4">
                <div className="space-y-2 bg-[#F3F3F3] p-4 rounded-xl">
                    <h1 className="text-xl font-semibold">Q-Zone</h1>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default RightSideNav;