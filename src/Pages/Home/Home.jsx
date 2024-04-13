import Banner from "../../Components/Banner";
import Discounts from "../../Components/Discounts";
import Discounts2 from "../../Components/Discounts2";
import Estates from "../../Components/Estates";
import Explore from "../../Components/Explore";
import OurPartners from "../../Components/OurPartners";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discounts></Discounts>
            <Estates></Estates>
            <Discounts2></Discounts2>
            <Explore></Explore>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;