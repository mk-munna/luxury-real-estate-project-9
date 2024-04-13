import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div>
            <div className='lg:max-w-full sm:max-w-[350px] mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;