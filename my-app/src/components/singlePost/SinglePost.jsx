import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                <img 
                    src="https://source.unsplash.com/random"
                    alt="random"
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet</h1>
            </div>
        </div>
    )
}