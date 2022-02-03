import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="py-4 shadow-xl">
            <div className="hidden lg:flex items-center justify-between px-4 ">
                <div className="hidden lg:flex items-center">
                    <div className="">
                        <ul className="flex space-x-6 cursor-pointer">
                            <li className="py-2">
                                <Link to="/" className={"text-xl font-bold"}>Simple Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
