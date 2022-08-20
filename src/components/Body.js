import React from "react";
import '../style/body.css';
import MemeImg from "../images/memeimg.png"
export default class Body  extends React.Component{
    render(){
        return(
            <div className="cardBody">
                <section className="form w-10/12 mx-auto flex flex-col">
                    <form className="flex flex-col w-full">
                        <div className="input_row flex flex-row w-full justify-between">
                            <input 
                                type="text" 
                                className="w-5/12 px-6 py-2 my-4 outline-none" 
                                placeholder="Top Text"/>
                            <input 
                                type="text" 
                                className="w-5/12 px-6 py-2 my-4 outline-none" 
                                placeholder="Bottom Text"/>
                        </div>
                        <button className="submitBtn w-12/12 my-2 text-center" type="submit">Get new meme Image</button>
                    </form>
                    <div className="imgBox w-full my-8">
                        <img src={MemeImg} className="h-72 w-full" alt=""/>
                    </div>
                </section>
            </div>
        )
    }
}