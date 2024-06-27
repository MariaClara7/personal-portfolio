import 'flowbite';
import { HiOutlineBriefcase, HiOutlineHome, HiOutlineUser } from "react-icons/hi";

export default function Sidebar({setDarkMode, darkMode}) {
    
    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden fixed bg-slate-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-xl" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                    <button onClick={() => setDarkMode(!darkMode)}>modo {!darkMode ? "light" : "dark"}</button>
                    <ul className="space-y-2 font-medium text-pink-500">
                        <li>
                            <a href="#home" className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineHome />
                                <span className="ms-3">Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineUser />
                                <span className="ms-3">Sobre</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experiences" className="flex items-center p-2 rounded-lg hover:bg-gray-100 group">
                                <HiOutlineBriefcase />
                                <span className="ms-3">Experiências</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}