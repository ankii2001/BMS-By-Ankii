import React,{useContext, useState, useEffect} from 'react'
import axios from "axios";
import { useParams } from "react-router";

// Components
import Poster from '../components/Poster/Poster.component';
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';

// Context
import { MovieContext } from "../context/movie.context";

const Plays = () => {

    const {id} = useParams();
    // eslint-disable-next-line
    const { movie } = useContext(MovieContext);
    // eslint-disable-next-line
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
          const getRecommendedMovies = await axios.get(
            `/movie/${id}/recommendations`
          );
          setRecommended(getRecommendedMovies.data.results);
        };
    
        requestRecommendedMovies();
      }, [id]);

    return (
        <><div className="bg-bmshow-25 py-12">
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-8 ml-3">Plays in National Capital Region (NCR)</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster src=""
                        title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                        subtitle="English/Hindi ₹199"/>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-njbyvypfcm-portrait.jpg"
                        title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                        subtitle="English/Hindi ₹199"/>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-njbyvypfcm-portrait.jpg"
                        title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                        subtitle="English/Hindi ₹199"/>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-njbyvypfcm-portrait.jpg"
                        title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                        subtitle="English/Hindi ₹199"/>
                        </div>
                    </div>
                    </div>
                    <div className="lg:w-3/12">
                    <h2 className="text-2xl font-bold mb-8">Filters</h2>
                    <div>
                    <div className="bg-white px-3 py-1 mb-3 mr-4 rounded">
                        <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
                    </div>
                    <div className="bg-white px-3 py-1 mb-3 mr-4 rounded">
                        <PlaysFilter title="Language" tags={["Hindi","English","Tamil",["Urdu"]]}/>
                    </div>
                    <div className="bg-white px-3 py-1 mb-3 mr-4 rounded">
                        <PlaysFilter title="Categories" tags={["Theatre","Storytelling","Online Streaming Plays"]}/>
                    </div>
                    <div className="bg-white px-3 py-1 mb-3 mr-4 rounded">
                        <PlaysFilter title="Genres" tags={["Drama","Comedy","Historical","Online Streaming Plays","Adaptation"]}/>
                    </div>
                    <div className="bg-white px-3 py-1 mb-3 mr-4 rounded">
                        <PlaysFilter title="More Filters" tags={["Online Streaming","Outdoor Events","Kids Allowed"]}/>
                    </div>
                    <div className="bg-white px-3 py-1 mb-3 mr-4 rounded">
                        <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]}/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Plays;