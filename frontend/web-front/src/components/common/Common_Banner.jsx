import Image from "next/image";
import { bannerContent } from "@/constants/banner";

const Common_Banner = () => {
  return (
        <>
            <div className="default__banner">
                {bannerContent.content.map((content, idx) => (
                    <div className="deafult__banner__inner" key={idx}>
                        <a href={content.url}>{content.title}</a>
                        <div className="default__banner__image">
                            <a href={content.url} target="_blank"><Image src={content.img} alt={content.title}/></a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Common_Banner;