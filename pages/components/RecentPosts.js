import styles from './RecentPosts.module.css'
import CommentCount from './CommentCount'
import Date from './Date'


export default function RecentPosts() {
    return (
        <div className={styles.container} >
            <h2 className="mini-heading">Recent Posts</h2>
            <h1>Metal & Coffee Blog</h1>
            <div className={styles.cardDeck}>
                <div className={styles.card}>
                    <img
                        src="https://picsum.photos/600"
                        alt="Random Image"
                    />
                    <div className={styles.cardMainContent}>
                        <span className={`category ` + styles.mainCategory}>Post Category</span>
                        <h3>Nullam sed lectus dapibus, viverra mauris sed, feugiat nibh.</h3>
                        <div className="post__meta">
                            <Date />
                            <CommentCount />
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://picsum.photos/600"
                        alt="Random Image"
                    />
                    <div className={styles.cardContent}>
                        <span className="category">Post Category</span>
                        <h3>Nullam sed lectus dapibus, viverra mauris sed, feugiat nibh.</h3>
                        <div className="post__meta">
                            <Date />
                            <CommentCount />
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="https://picsum.photos/600"
                        alt="Random Image"
                    />
                    <div className={styles.cardContent}>
                        <span className="category">Post Category</span>
                        <h3>Nullam sed lectus dapibus, viverra mauris sed, feugiat nibh.</h3>
                        <div className="post__meta">
                            <Date />
                            <CommentCount />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )  
}