import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            navigate('/');
        }
    };

    return (
        <div>
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-gray-800">Welcome to Home Page</h2>
                    <p className="text-lg text-gray-600 mt-4"></p>
                    <button
                        className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 rounded-full text-lg font-semibold"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;