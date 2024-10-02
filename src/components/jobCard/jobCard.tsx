
import './jobCard.scss';

import { useEffect, useState } from "react";

type CardProps = {
    sendDataToParent: (items: string[]) => void; // Update the prop type to a function
}

const Card = ({ sendDataToParent }: CardProps) => {
    const [data, setData] = useState<Job[] | null>(null);
    const [searchItems, setSearchItems] = useState<string[]>([]);
    type Job = {
        company: string,
        logo: string,
        new: boolean,
        position: string,
        featured: boolean,
        postedAt: string,
        contract: string,
        location: string,
        level: string;
        role: string,
        languages: string[],
        tools: string[],
    }
    // Log searchItems every time it updates
    useEffect(() => {
        console.log("searchItems updated:", searchItems);
        sendDataToParent(searchItems);
    }, [searchItems, sendDataToParent]);

    useEffect(() => {
        fetch('data.json').then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [])
    const addSearch = (value: string) => {
        if (!searchItems.includes(value)) {
            setSearchItems(prevItems => {

                const updatedItems = [...prevItems, value]; // Create a new array with the added value
                return updatedItems;
            })
        }

    };
    return (
        <div className="container" >

            {data ? (
                data.map((job, index) => (
                    <div style={{ color: "red" }} className={`card-wrapper ${job.featured ? 'featured' : ''}`}>
                        <div className='right-container'>
                            <div><img src={job.logo} width="60px" /></div>
                            <div className='job-listing'>
                                <div className="job-company">
                                    <div className='company' ><b>{job.company}</b></div>
                                    {job.new && <span className=" new-badge"><b>NEW!</b></span>}
                                    {job.featured && <span className=" featured-badge"><b>FEATURED</b></span>}
                                </div>
                                <div style={{ fontSize: '16px', color: '#000000f3' }}><b>{job.position}</b></div>
                                <div className="job-details"
                                >
                                    <p>{job.postedAt}</p> •
                                    <p> {job.contract}</p> •
                                    <p>{job.location}</p>
                                </div>
                            </div>
                        </div>
                        {/* role level  */}
                        <div className="left-container ">
                            <button onClick={() => addSearch(job.role)}>{job.role}</button>
                            <button onClick={() => addSearch(job.level)}>{job.level}</button>
                            {job.languages.length > 0 && job.languages.map((language, index) => (
                                <button onClick={() => addSearch(language)} key={index}>{language}</button>))}
                            {job.tools.length > 0 && job.tools.map((tool, index) => (
                                <button onClick={() => addSearch(tool)} key={index}>{tool}</button>))}

                        </div>

                    </div>


                ))
            ) : (
                <p>Loading...</p>
            )}







        </div>);
}

export default Card;