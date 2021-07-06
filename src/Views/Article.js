import cat1 from '../Assets/Images/cat1.jpg';
import cat2 from '../Assets/Images/cat2.jpg';
import cat3 from '../Assets/Images/cat3.jpg';
import '../Assets/Css/Article.css';
import { useState } from 'react';

function Article() {
    const [mainImage, setMainImage] = useState(cat1);
    const images = [cat1, cat2, cat3, cat1, cat2, cat3];

    // option 1
    // const smallImageClicked = (event) => {
    //     setMainImage(event.target.src);
    // }

    const imagesList = images.map((image, index) => {
        return (
            <div className="col-4 mt-3 small-cat-image" key={index}>
                {/* <img src={image} onClick={smallImageClicked} /> - for option 1 */}
                <img src={image} onClick={() => setMainImage(image)} />
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <h1>Some super cool title</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 images-wrapper">
                    <div className="row">
                        <div className="col">
                            <img src={mainImage} />
                        </div>
                    </div>
                    <div className="row">
                        {imagesList}
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit tenetur aliquid esse, voluptatibus, laboriosam porro illo sint voluptatem earum fuga ut quaerat ducimus cupiditate impedit vel quibusdam aperiam architecto!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit tenetur aliquid esse, voluptatibus, laboriosam porro illo sint voluptatem earum fuga ut quaerat ducimus cupiditate impedit vel quibusdam aperiam architecto!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit tenetur aliquid esse, voluptatibus, laboriosam porro illo sint voluptatem earum fuga ut quaerat ducimus cupiditate impedit vel quibusdam aperiam architecto!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit tenetur aliquid esse, voluptatibus, laboriosam porro illo sint voluptatem earum fuga ut quaerat ducimus cupiditate impedit vel quibusdam aperiam architecto!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit tenetur aliquid esse, voluptatibus, laboriosam porro illo sint voluptatem earum fuga ut quaerat ducimus cupiditate impedit vel quibusdam aperiam architecto!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Article;