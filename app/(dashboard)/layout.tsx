import SideBar from "./_components/sideBar";
import NavBar from "./_components/navBar";

const DashBoardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {

    return (
        <div className="h-full">
            <div className=" h-[80px] md:pl-56 fixed w-full z-50 inset-y-0">
            <NavBar/>
            
            </div>
            <div className="hidden md:flex h-full w-56 flex-col z-50 fixed inset-y-0 ">
                <SideBar />
            </div>
            <main className="md:pl-56 h-full pt-[80px]">
            {children}
            </main>  
        </div>

    )
}

export default DashBoardLayout;