function About() {
    return (
        <>
            <div className='text-white min-h-screen px-4 py-16'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-8 unica-one-regular'>About Us</h1>

                    <div className='space-y-8'>
                        <div>
                            <h2 className='text-2xl font-semibold mb-4 unica-one-regular'>Our Story</h2>
                            <p className='text-lg leading-relaxed text-white/80'>
                                Welcome to Dev Hive, a digital space where ideas come to life. We're passionate about sharing
                                knowledge, experiences, and perspectives that matter to our community of developers, writers, and creators.
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mb-4 unica-one-regular'>Our Mission</h2>
                            <p className='text-lg leading-relaxed text-white/80 mb-4'>
                                Founded with the belief that every voice deserves to be heard, our blog serves as a platform
                                for writers, thinkers, and creators to connect with like-minded individuals.
                            </p>
                            <p className='text-lg leading-relaxed text-white/80'>
                                We strive to create a welcoming environment where technology meets creativity, and where
                                learning and sharing go hand in hand.
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mb-4 unica-one-regular'>What We Offer</h2>
                            <ul className='space-y-2 text-lg text-white/80'>
                                <li>• In-depth articles on web development and technology</li>
                                <li>• Tutorials and guides for developers at all levels</li>
                                <li>• Community-driven content and discussions</li>
                                <li>• A platform for sharing your own stories and experiences</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mb-4 unica-one-regular'>Join Our Community</h2>
                            <p className='text-lg leading-relaxed text-white/80'>
                                Have a story to tell or an idea to share? We'd love to hear from you.
                                Whether you're a seasoned developer or just starting your journey, there's a place for you here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;