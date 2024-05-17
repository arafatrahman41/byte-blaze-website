import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg'

const BlogCard = ({blog}) => {
    const {title, description, cover_image,published_at, id } = blog
    return (
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary border-opacity-30 hover:border-secondary hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">
                    {new Date(published_at).toLocaleDateString()}
                    </span>
					<p>{description}</p>
				</div>
			</Link>
    );
};

BlogCard.propTypes = {
   blog: PropTypes.object 
};

export default BlogCard;