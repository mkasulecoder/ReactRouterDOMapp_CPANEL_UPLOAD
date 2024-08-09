import NavMenu from '../components/NavMenu';
const About = () => {

    return (
        <>
            <div className="content">
                <NavMenu/>
                <h1>About</h1>
                <img src="/assets/image2.jpg" alt="Home image" width={600} height={400} />
            </div>
        </>
    );
}

export default About;