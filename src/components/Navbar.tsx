import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="py-4 shadow-xl">
            <div className="flex items-center justify-between px-4 ">
                <ul className="flex space-x-6 cursor-pointer">
                    <li className="py-2">
                        <Link to="/" className={"text-xl font-bold"}>Simple Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
