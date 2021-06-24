import { useEffect, useState } from "react";
import sanityClient from "../client";

const Contact = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      linkedIn,
      gitHub,
      email
    }`
      )
      .then((data) => setAuthor(data[0]) )
      .catch(console.error);
  },[]);

  

  return (
    
    <main className="relative">
      <img src="./assets/images/background/contact-me-background.jpg" alt="forest background" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        {!author ? <div>Loading</div> : <section className="bg-indigo-300 rounded-lg shadow-2xl lg:flex p-20">
          <div className="text-lg flex flex-col justify-center">
            <h1 className="font-font1 text-4xl lg:text-6xl font-bold text-green-300 mb-4"> Contact Me @:</h1>
            <div className="prose lg:prose-xl text-white break-words">
          <p><strong>Email:</strong> <a href={author.email}> {author.email}</a></p>
          <p><strong>GitHub Profile:</strong> <a href={author.gitHub} className="text-dark">Tommy Willen</a></p>
          <p><strong>LinkedIn:</strong> <a href={author.linkedIn} className="text-dark">Tommy Willen</a></p>              
            </div>
          </div>
        </section>}
      </div>
    </main>
  );
};

export default Contact;

