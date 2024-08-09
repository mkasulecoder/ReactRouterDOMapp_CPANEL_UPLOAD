import NavMenu from '../components/NavMenu';
const Home = () => {

    return (
        <>
            <div className="content">
                <NavMenu/>
                <h1>Home</h1>
                <img src="/assets/image1.jpg" alt="Home image" width={600} height={400} />
            </div>
        </>
    );
}

export default Home;