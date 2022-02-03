import { Link } from "react-router-dom";

export default function NotFound () {
    return <div className="my-28 w-1/3 mx-auto text-center space-y-3 shadow-xl py-8">
        <p className="text-3xl font-bold">Not Found</p>
        <p className="">The page you are trying to find is no longer exists.</p>
        <p className="mt-4 underline">
            <Link to="/">
                Go back home
            </Link>
        </p>
    </div>
}
