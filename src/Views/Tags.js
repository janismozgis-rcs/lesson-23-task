import { useState } from "react";

function Tags() {
    const [tagNames, setTagNames] = useState('Foo'); 
    const tagsCloud = ['Meeeeouw', 'cough', 'furball', 'into', 'food', 'bowl', 'then', 'scratch', 'owner', 'for', 'a', 'new', 'one', 'experiences', 'short', 'bursts', 'of', 'poo-phoria', 'after', 'going', 'to', 'the', 'loo', 'scratch', 'my', 'tummy', 'actually', 'i', 'hate', 'you', 'now', 'fight', 'me', 'so', 'freak', 'human', 'out', 'make', 'funny', 'noise', 'mow', 'mow', 'mow', 'mow', 'mow', 'mow', 'success', 'now', 'attack', 'human', 'yet', 'drink', 'from', 'the', 'toilet', 'but', 'sitting', 'in', 'a', 'box.', 'Show', 'belly.', 'Spit', 'up', 'on', 'light', 'gray', 'carpet', 'instead', 'of', 'adjacent', 'linoleum', 'good', 'now', 'the', 'other', 'hand,', 'too', 'check', 'cat', 'door', 'for', 'ambush', '10', 'times', 'before', 'coming', 'in'];
    
    const updateTagNames = (event) => {
        setTagNames(event.target.value);
    }
    
    const tagsCloudElements = tagsCloud.map((tag, index) => {
        let classes = 'mx-1 badge bg-primary';
        if (tagNames.split(' ').indexOf(tag) >= 0) {
            classes = 'mx-1 badge bg-warning';
        }

        return <span className={classes} key={index}>{tag}</span>
    })

    return (
        <div className="container">
        <div className="row mt-5">
            <div className="col">
                <h1>Looking for tags: {tagNames.replace(/ /g, ', ')}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input type="text" className="form-control" value={tagNames} onChange={updateTagNames} />
            </div>
        </div>
        <div className="row">
            <div className="col text-center mt-5">
                {tagsCloudElements}
            </div>
        </div>
    </div>
    )
}

export default Tags;