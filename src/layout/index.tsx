import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props: any) => { 
    return (
        <div>
            <Sidebar />
            <Header />
        </div>
    );
};

export default Layout;