import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Difference between SQL and NoSQL",
      desc: "The five critical differences between SQL vs NoSQL are : SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.",
      date: "Friday, November 11th 2022",
      href: "javascript:void(0)",
    },
    {
      title: "What is JWT, and how does it work?",
      desc: "What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.How it works? Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.",
      date: "Friday, November 11th 2022",
      href: "javascript:void(0)",
    },
    {
      title: "What is the difference between javascript and NodeJS?",
      desc: "1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.",
      date: "Friday, November 11th 2022",
      href: "javascript:void(0)",
    },
    {
      title: "How does NodeJS handle multiple requests at the same time?",
      desc: "NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.",
      date: "Friday, November 11th 2022",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8 pt-28 pb-10">
      <div className="max-w-lg">
        <h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
        <p className="mt-3 text-gray-500">
          Blogs that are loved by the community. Updated every hour. The
          powerful gravity waves resulting from the impact of the planets, were
          finally resolved in 2021
        </p>
      </div>
      <div className="mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
        {posts.map((item, idx) => (
          <article className="mt-5 pt-8 md:pt-0" key={idx}>
            <a href={item.href}>
              <span className="block text-gray-400 text-sm">{item.date}</span>
              <div className="mt-2">
                <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
