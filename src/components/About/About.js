import React from "react";
import { Filtercontactinfo } from "./category";
import './About.css'; //با فرض اینکه یک فایل CSS مربوطه برای استایل سازی دارید


const About = () => {
// می‌توانید دسته‌های خاصی را فیلتر کنید، به عنوان مثال، بخش «تیم» را حذف کنید
    const Filteredinfo = Filtercontactinfo('');

    return (
        <div className="about-container">
            <h1>About Contacts</h1>
            
            {/* Dynamically rendering content from Filteredinfo */}
            {Filteredinfo.map((item, index) => (
                <div key={index}>
                    <h2>{item.category}</h2>
                    
                    {/* Conditional rendering for "Social" category */}
                    {item.category === "Social" ? (
                        <ul>
                            <li>
                                <h6>از طریق شبکه های اجتماعی با ما در ارتباط باشید:</h6>
                                LinkedIn:{" "}
                                <a
                                    href="https://www.linkedin.com/in/amir-hossien-jafary-6522842a5/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    amir-hossien-jafary
                                </a>
                            </li>
                            <li>
                                Twitter:{" "}
                                <a
                                    href="https://www.twitter.com/yourpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Your Page
                                </a>
                            </li>
                            <li>
                                Instagram:{" "}
                                <a
                                    href="https://www.instagram.com/music_with_amir/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    music_with_amir
                                </a>
                            </li>
                        </ul>
                       ) : item.category === "Website Creator" ? (
                    // Conditional rendering for "Website Creator" category
                    <ul>
                        {item.text.split(',').map((member, idx) => (
                            <li key={idx}>{member.trim()}</li>
                        ))}
                    </ul>
                ) : (
                    // Render text for other categories
                    <p>{item.text}</p>
                )}
            </div>
            ))}
        </div>
    );
    };
    

export default About;


