import React from "react";
import Hero from "../../components/Hero";
import App from '../../layouts/App';

export default function Index() {
    const posts = [
        {
            title: 'Lorem ipsum dolor sit amet.',
            created_at: '22 Maret 2022',
            author: 'M. Ilyas Tri Khaqiqi',
            picture: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGFwZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
        },
        {
            title: 'Rerum ut dolorum sequi reprehenderit.',
            created_at: '22 Maret 2022',
            author: 'M. Ilyas Tri Khaqiqi',
            picture: 'https://images.unsplash.com/photo-1511283878565-0833bf39de9d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbGFwZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
        },
        {
            title: 'Alias sed corporis sapiente magni!',
            created_at: '22 Maret 2022',
            author: 'M. Ilyas Tri Khaqiqi',
            picture: 'https://images.unsplash.com/photo-1511300276866-a284652b55c3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbGFwZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
        },
        {
            title: 'Enim non excepturi sequi iure!',
            created_at: '22 Maret 2022',
            author: 'M. Ilyas Tri Khaqiqi',
            picture: 'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxhcGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
        },
        {
            title: 'Totam odit soluta doloremque ut?',
            created_at: '22 Maret 2022',
            author: 'M. Ilyas Tri Khaqiqi',
            picture: 'https://images.unsplash.com/photo-1501884428012-aa321a256730?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxhcGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
        },
        {
            title: 'Architecto tempore aperiam nulla quod.',
            created_at: '22 Maret 2022',
            author: 'M. Ilyas Tri Khaqiqi',
            picture: 'https://images.unsplash.com/photo-1571557800463-cdacb484614c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGxhcGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
        },
    ];
    return (
        <>
            <Hero>
                <Hero.Body>
                    <Hero.Title>Our Articles</Hero.Title>
                    <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit, recusandae quis dolorum veritatis nulla, nemo consequuntur temporibus quisquam expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?</p>
                </Hero.Body>
            </Hero>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-16 sm:gap-y-16">
                    {posts.map((post, index) => (
                        <div key={index}>
                            <a href="/articles/single">
                                <img className="rounded-xl hover:shadow-lg transition-shadow duration-300 mb-4 aspect-video w-full object-cover object-center" src={post.picture} alt={post.title} />
                            </a>
                            <a href="/articles/single">
                                <h1 className="mb-2 sm:mb-4 font-semibold text-black">{post.title}</h1>
                            </a>
                            <div className="flex items-center font-mono justify-between text-sm text-gray-500">
                                <span>{post.author}</span>
                                <span>{post.created_at}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

Index.getLayout = page => <App title="Our Articles" children={page} />;
